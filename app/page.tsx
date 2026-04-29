import { ScrapeForm } from "@/components/scrape-form"
import { Database, Zap, Filter } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
              <Database className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">DataScraper</span>
          </div>
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Scrape Leads from <span className="text-blue-600">Multiple Platforms</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Extract valuable contact information from Instagram, Facebook, LinkedIn, Twitter, and Google Maps with just a few clicks.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrapeForm />
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Sources</h3>
            <p className="text-gray-600 text-sm">Scrape from 5 different platforms including social media and maps.</p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Export</h3>
            <p className="text-gray-600 text-sm">Export your leads in Text or Excel format for easy integration.</p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Filter className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Filtering</h3>
            <p className="text-gray-600 text-sm">Option to only get leads with verified email addresses.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} DataScraper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
