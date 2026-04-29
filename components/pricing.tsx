'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'For individuals getting started',
    features: [
      'Up to 100 leads per month',
      'Excel & TXT export',
      'Basic filtering options',
      'Email support',
      'API access'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing agencies and marketers',
    features: [
      'Up to 1,000 leads per month',
      'Advanced filtering options',
      'Priority support',
      'Multiple data exports',
      'API access',
      'Custom integrations',
      'Team collaboration'
    ],
    cta: 'Get Started',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale operations',
    features: [
      'Unlimited lead generation',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Priority support 24/7',
      'Advanced API access'
    ],
    cta: 'Contact Sales'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">No hidden fees. Pay once and start generating leads.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/50 relative'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                  POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
              </div>

              <Button
                className={`w-full mb-8 h-11 ${
                  plan.highlighted
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-white mb-2">What payment methods do you accept?</h4>
              <p className="text-slate-400 text-sm">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-white mb-2">Can I change my plan anytime?</h4>
              <p className="text-slate-400 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-white mb-2">Is there a free trial?</h4>
              <p className="text-slate-400 text-sm">Yes! Start with our free plan and upgrade whenever you're ready to generate more leads.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-white mb-2">Do you offer refunds?</h4>
              <p className="text-slate-400 text-sm">We offer a 7-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
