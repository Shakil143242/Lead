'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">Powered by Advanced Technology</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Generate Unlimited{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Verified Leads
          </span>
          {' '}in Real-Time
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
          Lead Ocean is a premium lead generation platform that extracts fresh, accurate, and actionable leads from Instagram, LinkedIn, and Facebook <span className="text-cyan-400">without monthly fees, limits, or restrictions</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white text-base h-12 px-8">
            Start Scraping Now
          </Button>
          <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-900 text-base h-12 px-8 flex items-center gap-2">
            <Play className="w-4 h-4" />
            Watch Demo
          </Button>
        </div>

        {/* Trusted By */}
        <div className="text-slate-500 text-sm mb-8">
          Trusted by 5000+ agencies and marketers worldwide
        </div>
      </div>
    </section>
  )
}
