'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-400">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <Card className="bg-slate-800 border-slate-700 p-8">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-slate-400">support@leadocean.com</p>
            <p className="text-slate-500 text-sm mt-2">Response time: 2-4 hours</p>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-8">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-slate-400">+1 (555) 123-4567</p>
            <p className="text-slate-500 text-sm mt-2">Mon-Fri, 9 AM - 6 PM EST</p>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-8">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-slate-400">123 Tech Street</p>
            <p className="text-slate-500 text-sm mt-2">San Francisco, CA 94105</p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-slate-800 border-slate-700 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <Input
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 px-4 py-3 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white h-12 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
