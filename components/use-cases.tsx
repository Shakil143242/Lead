'use client'

import { Card } from '@/components/ui/card'
import { 
  Megaphone, Target, Building2, GraduationCap, Users, Briefcase,
  BarChart3, Code2, ShoppingCart, MapPin, Users2, TrendingUp
} from 'lucide-react'

const useCases = [
  { icon: Megaphone, title: 'Digital Marketers', description: 'Generate qualified leads for your campaigns' },
  { icon: Target, title: 'Affiliate Marketers', description: 'Find potential customers and partners' },
  { icon: Building2, title: 'Agency Owners', description: 'Scale client acquisition for your services' },
  { icon: GraduationCap, title: 'Coaches & Consultants', description: 'Build your ideal client database' },
  { icon: Users, title: 'Course Creators', description: 'Find interested learners in your niche' },
  { icon: Briefcase, title: 'Freelancers', description: 'Connect with potential clients directly' },
  { icon: BarChart3, title: 'SMMA Owners', description: 'Generate high-quality leads for services' },
  { icon: Code2, title: 'SaaS Founders', description: 'Identify product market fit customers' },
  { icon: ShoppingCart, title: 'E-commerce Sellers', description: 'Find your ideal customer profile' },
  { icon: MapPin, title: 'Local Businesses', description: 'Reach customers in your area' },
  { icon: Users2, title: 'Recruiters', description: 'Find qualified candidates & hiring managers' },
  { icon: TrendingUp, title: 'Real Estate Agents', description: 'Connect with qualified property investors' },
]

export function UseCases() {
  return (
    <section className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Who Is This For?</h2>
          <p className="text-lg text-slate-400">Lead Ocean is built for people who need leads daily, not excuses.</p>
        </div>

        {/* Grid of Use Cases */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <Card 
                key={idx}
                className="bg-slate-800 border-slate-700 hover:border-cyan-500/50 transition p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-cyan-500/30 p-8 text-center border-2">
          <p className="text-xl text-white">
            If <span className="text-cyan-400 font-bold">leads = money</span> in your business, this is for you.
          </p>
        </Card>
      </div>
    </section>
  )
}
