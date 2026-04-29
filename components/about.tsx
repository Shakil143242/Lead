'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Zap, Globe } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What is Lead Ocean?</h2>
          <p className="text-lg text-slate-400">Your complete lead generation solution powered by advanced social media extraction</p>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Real-Time Lead Extraction</h3>
            <p className="text-slate-400 mb-8">Lead Ocean is a real-time social data extraction tool that pulls verified leads from:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Instagram</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">LinkedIn</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Facebook</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Google Maps & More</span>
              </li>
            </ul>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            <Card className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500/50 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">No Registration Needed</h4>
                  <p className="text-slate-400 text-sm">Login once and start generating leads instantly</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500/50 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">No Subscriptions</h4>
                  <p className="text-slate-400 text-sm">Pay once and use forever without recurring charges</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500/50 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Export-Ready Data</h4>
                  <p className="text-slate-400 text-sm">Download in TXT or Excel format with zero hassle</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Important Note */}
        <Card className="bg-slate-900 border-cyan-500/30 border-2 p-8 text-center">
          <p className="text-slate-300">
            This is not a <span className="font-semibold">"lead database"</span>. This is a{' '}
            <span className="text-cyan-400 font-semibold">lead engine</span> that generates fresh leads on demand.
          </p>
        </Card>
      </div>
    </section>
  )
}
