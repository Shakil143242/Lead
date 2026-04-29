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
  { id: "text", label: "Text", icon: FileText },
  { id: "excel", label: "Excel", icon: FileSpreadsheet },
]

// Generate fake leads data
const generateLeads = (count: number, keyword: string, location: string, source: string, emailMandatory: boolean) => {
  const firstNames = ["John", "Sarah", "Mike", "Emily", "David", "Lisa", "James", "Anna", "Robert", "Maria", "Raj", "Priya", "Ahmed", "Chen", "Yuki"]
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Patel", "Kumar", "Khan", "Wang", "Tanaka"]
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "business.com", "company.co"]
  
  const leads = []
  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const domain = domains[Math.floor(Math.random() * domains.length)]
    const hasEmail = emailMandatory ? true : Math.random() > 0.3
    
    leads.push({
      "S.No": i + 1,
      "Name": `${firstName} ${lastName}`,
      "Email": hasEmail ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}` : "",
      "Phone": `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      "Business": `${keyword} ${["Store", "Shop", "Hub", "Center", "Place"][Math.floor(Math.random() * 5)]}`,
      "Location": location || ["New York", "Los Angeles", "Chicago", "Houston", "Miami"][Math.floor(Math.random() * 5)],
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

  const downloadText = (data: ReturnType<typeof generateLeads>) => {
    const header = Object.keys(data[0]).join("\t")
    const rows = data.map(row => Object.values(row).join("\t")).join("\n")
    const content = `${header}\n${rows}`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads_${keyword.replace(/\s+/g, "_")}_${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleScrape = async () => {
    if (!validateForm()) return
    
    setIsLoading(true)
    setProgress(0)
    setIsComplete(false)
    setLeadsData([])
    
    // Fast progress simulation
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 20 + 10
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        
        // Generate leads and auto download
        const data = generateLeads(leadsCount[0], keyword, location, source, emailMandatory)
        setLeadsData(data)
        setIsComplete(true)
        setIsLoading(false)
        
        // Auto download
        if (exportFormat === "excel") {
          downloadExcel(data)
        } else {
          downloadText(data)
        }
      }
      setProgress(currentProgress)
    }, 100)
  }

  const handleDownload = () => {
    if (leadsData.length === 0) return
    if (exportFormat === "excel") {
      downloadExcel(leadsData)
    } else {
      downloadText(leadsData)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          DataScraper
        </CardTitle>
        <CardDescription className="text-base mt-2 text-muted-foreground">
          Enter the search details and click on Scrape button
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {/* Keyword Input */}
        <div className="space-y-2">
          <Label htmlFor="keyword" className="text-sm font-medium">
            Searching Keyword <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="keyword"
              placeholder="e.g., Coffee Shop"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pl-10 h-11 bg-input border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>
          {errors.keyword && (
            <p className="text-sm text-destructive">{errors.keyword}</p>
          )}
          <p className="text-xs text-muted-foreground">Please enter no more than two words.</p>
        </div>

        {/* Location Input */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium">
            Location <span className="text-muted-foreground">(Optional)</span>
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              placeholder="e.g., New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-11 bg-input border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>
          {errors.location && (
            <p className="text-sm text-destructive">{errors.location}</p>
          )}
          <p className="text-xs text-muted-foreground">Please enter no more than two words.</p>
        </div>

        {/* Leads Count Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Leads Count</Label>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
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
          <p className="text-xs text-muted-foreground">Please enter a number between 1 and 100.</p>
        </div>

        {/* Email Mandatory Checkbox */}
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 border border-border">
          <Checkbox
            id="email-mandatory"
            checked={emailMandatory}
            onCheckedChange={(checked) => setEmailMandatory(checked as boolean)}
            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <Label
            htmlFor="email-mandatory"
            className="text-sm font-medium cursor-pointer select-none"
          >
            Email Is Mandatory
          </Label>
        </div>

        {/* Source Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Source <span className="text-destructive">*</span>
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
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
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
            <p className="text-sm text-destructive">{errors.source}</p>
          )}
        </div>

        {/* Export Format Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Export File Format <span className="text-destructive">*</span>
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
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
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
            <p className="text-sm text-destructive">{errors.exportFormat}</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Scrape Button */}
        <div className="flex gap-3">
          <Button
            onClick={handleScrape}
            disabled={isLoading}
            className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
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
              className="h-12 px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
