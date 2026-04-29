"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Instagram, Facebook, Linkedin, Twitter, MapPin, FileText, FileSpreadsheet, Search, Loader2, Download } from "lucide-react"
import * as XLSX from "xlsx"

const sources = [
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "facebook", label: "Facebook", icon: Facebook },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "twitter", label: "Twitter", icon: Twitter },
  { id: "google-maps", label: "Google Maps", icon: MapPin },
]

const exportFormats = [
  { id: "csv", label: "CSV", icon: FileText },
  { id: "excel", label: "Excel", icon: FileSpreadsheet },
]

// Generate fake leads data with Gmail emails and LinkedIn profiles
const generateLeads = (count: number, keyword: string, location: string, source: string, emailMandatory: boolean) => {
  const firstNames = ["John", "Sarah", "Mike", "Emily", "David", "Lisa", "James", "Anna", "Robert", "Maria", "Raj", "Priya", "Ahmed", "Chen", "Yuki", "Alex", "Emma", "Liam", "Sophia", "Noah"]
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Patel", "Kumar", "Khan", "Wang", "Tanaka", "Garcia", "Rodriguez", "Martinez", "Lee", "Anderson"]
  const titles = ["Manager", "Director", "Specialist", "Executive", "Officer", "Consultant", "Lead", "Analyst", "Coordinator", "Owner"]
  const industries = ["Technology", "Marketing", "Sales", "Business Development", "Digital", "E-commerce", "Service", "Retail", "Finance", "Consulting"]
  
  const leads = []
  const usedEmails = new Set<string>()
  
  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    
    // Generate unique Gmail address
    let emailBase = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`
    let emailAddress = `${emailBase}@gmail.com`
    
    // Ensure unique emails
    if (usedEmails.has(emailAddress)) {
      emailAddress = `${emailBase}${Math.floor(Math.random() * 10000)}@gmail.com`
    }
    usedEmails.add(emailAddress)
    
    // Generate LinkedIn profile
    const linkedinUsername = `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${Math.floor(Math.random() * 1000)}`
    const linkedinProfile = `linkedin.com/in/${linkedinUsername}`
    const title = titles[Math.floor(Math.random() * titles.length)]
    const industry = industries[Math.floor(Math.random() * industries.length)]
    
    leads.push({
      "S.No": i + 1,
      "Name": `${firstName} ${lastName}`,
      "Email": emailAddress,
      "Phone": `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      "Business": `${keyword} ${["Store", "Shop", "Hub", "Center", "Place"][Math.floor(Math.random() * 5)]}`,
      "Location": location || ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Dallas", "Seattle", "Boston"][Math.floor(Math.random() * 8)],
      "LinkedIn Profile": linkedinProfile,
      "Job Title": title,
      "Industry": industry,
      "Source": source,
      "Website": `www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`,
    })
  }
  return leads
}

export function ScrapeForm() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState("")
  const [leadsCount, setLeadsCount] = useState([25])
  const [emailMandatory, setEmailMandatory] = useState(false)
  const [source, setSource] = useState("")
  const [exportFormat, setExportFormat] = useState("")
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [leadsData, setLeadsData] = useState<ReturnType<typeof generateLeads>>([])
  const [isComplete, setIsComplete] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!keyword.trim()) {
      newErrors.keyword = "Please enter a searching keyword"
    } else if (keyword.trim().split(/\s+/).length > 2) {
      newErrors.keyword = "Please enter no more than two words"
    }
    
    if (location && location.trim().split(/\s+/).length > 2) {
      newErrors.location = "Please enter no more than two words"
    }
    
    if (!source) {
      newErrors.source = "Please select a source"
    }
    
    if (!exportFormat) {
      newErrors.exportFormat = "Please select a file format"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const downloadExcel = (data: ReturnType<typeof generateLeads>) => {
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Leads")
    XLSX.writeFile(wb, `leads_${keyword.replace(/\s+/g, "_")}_${Date.now()}.xlsx`)
  }

  const downloadCSV = (data: ReturnType<typeof generateLeads>) => {
    if (data.length === 0) return
    const headers = Object.keys(data[0])
    const rows = data.map(row => 
      headers.map(header => {
        const value = row[header as keyof typeof row]
        const stringValue = String(value)
        return stringValue.includes(',') ? `"${stringValue}"` : stringValue
      }).join(',')
    )
    const csvContent = [headers.join(','), ...rows].join('\n')
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads_${keyword.replace(/\s+/g, "_")}_${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleScrape = async () => {
    if (!validateForm()) return
    
    setIsLoading(true)
    setProgress(0)
    setIsComplete(false)
    setLeadsData([])
    
    try {
      // Step 1: Generate leads
      setProgress(10)
      const initialLeads = generateLeads(leadsCount[0], keyword, location, source, emailMandatory)
      
      // Step 2: Extract emails for verification
      const emails = initialLeads.map((lead: any) => lead.Email)
      setProgress(30)
      
      // Step 3: Verify emails in batch
      const verifyResponse = await fetch('/api/verify-email', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails }),
      })
      
      setProgress(70)
      
      const verifyData = await verifyResponse.json()
      
      // Step 4: Mark verified emails in leads
      const verifiedEmails = new Set(
        verifyData.results
          .filter((r: any) => r.verified)
          .map((r: any) => r.email)
      )
      
      const verifiedLeads = initialLeads.map((lead: any) => ({
        ...lead,
        "Email Verified": verifiedEmails.has(lead.Email) ? "✓ Verified" : "✗ Not Verified",
      }))
      
      setLeadsData(verifiedLeads)
      setProgress(100)
      setIsComplete(true)
      setIsLoading(false)
      
      // Step 5: Auto download
      if (exportFormat === "excel") {
        downloadExcel(verifiedLeads)
      } else if (exportFormat === "csv") {
        downloadCSV(verifiedLeads)
      }
    } catch (error) {
      console.error('Scraping error:', error)
      setIsLoading(false)
      setProgress(0)
      setIsComplete(false)
    }
  }

  const handleDownload = () => {
    if (leadsData.length === 0) return
    if (exportFormat === "excel") {
      downloadExcel(leadsData)
    } else if (exportFormat === "csv") {
      downloadCSV(leadsData)
    }
  }

  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-blue-600">
          DataScraper
        </CardTitle>
        <CardDescription className="text-base mt-2 text-gray-600">
          Enter the search details and click on Scrape button
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {/* Keyword Input */}
        <div className="space-y-2">
          <Label htmlFor="keyword" className="text-sm font-medium text-gray-700">
            Searching Keyword <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="keyword"
              placeholder="e.g., Coffee Shop"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pl-10 h-11 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
          {errors.keyword && (
            <p className="text-sm text-red-600">{errors.keyword}</p>
          )}
          <p className="text-xs text-gray-500">Please enter no more than two words.</p>
        </div>

        {/* Location Input */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium text-gray-700">
            Location <span className="text-gray-500">(Optional)</span>
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="location"
              placeholder="e.g., New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-11 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
          {errors.location && (
            <p className="text-sm text-red-600">{errors.location}</p>
          )}
          <p className="text-xs text-gray-500">Please enter no more than two words.</p>
        </div>

        {/* Leads Count Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Leads Count</Label>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {leadsCount[0]}
            </span>
          </div>
          <Slider
            value={leadsCount}
            onValueChange={setLeadsCount}
            min={1}
            max={100}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-gray-500">Please enter a number between 1 and 100.</p>
        </div>

        {/* Email Mandatory Checkbox */}
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
          <Checkbox
            id="email-mandatory"
            checked={emailMandatory}
            onCheckedChange={(checked) => setEmailMandatory(checked as boolean)}
            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <Label
            htmlFor="email-mandatory"
            className="text-sm font-medium cursor-pointer select-none text-gray-700"
          >
            Email Is Mandatory
          </Label>
        </div>

        {/* Source Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Source <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={source}
            onValueChange={setSource}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {sources.map((s) => {
              const Icon = s.icon
              return (
                <Label
                  key={s.id}
                  htmlFor={s.id}
                  className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    source === s.id
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <RadioGroupItem value={s.id} id={s.id} className="sr-only" />
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{s.label}</span>
                </Label>
              )
            })}
          </RadioGroup>
          {errors.source && (
            <p className="text-sm text-red-600">{errors.source}</p>
          )}
        </div>

        {/* Export Format Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Export File Format <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={exportFormat}
            onValueChange={setExportFormat}
            className="grid grid-cols-2 gap-3"
          >
            {exportFormats.map((f) => {
              const Icon = f.icon
              return (
                <Label
                  key={f.id}
                  htmlFor={`format-${f.id}`}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    exportFormat === f.id
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <RadioGroupItem value={f.id} id={`format-${f.id}`} className="sr-only" />
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{f.label}</span>
                </Label>
              )
            })}
          </RadioGroup>
          {errors.exportFormat && (
            <p className="text-sm text-red-600">{errors.exportFormat}</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-blue-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Scrape Button */}
        <div className="flex gap-3">
          <Button
            onClick={handleScrape}
            disabled={isLoading}
            className="flex-1 h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Scraping...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Scrape
              </>
            )}
          </Button>
          {isComplete && leadsData.length > 0 && (
            <Button
              onClick={handleDownload}
              variant="outline"
              className="h-12 px-6 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
          )}
        </div>

        {/* Success Message */}
        {isComplete && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
            <p className="font-medium">Scraping Complete!</p>
            <p className="text-sm mt-1">{leadsData.length} leads generated. File downloaded automatically.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
