'use client'

import Link from 'next/link'
import { Droplet } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Lead Ocean</span>
            </div>
            <p className="text-slate-400 text-sm">Generate unlimited verified leads from social platforms.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-cyan-400 transition text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Integrations</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">API Docs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-slate-400 hover:text-cyan-400 transition text-sm">About</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition text-sm">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; 2024 Lead Ocean. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
