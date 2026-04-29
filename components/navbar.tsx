'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Droplet } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Lead Ocean</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-slate-300 hover:text-white transition">Features</Link>
            <Link href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition">About</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-900"
              onClick={() => {
                // Handle login
              }}
            >
              Login
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <Link href="#features" className="block py-2 text-slate-300 hover:text-white">Features</Link>
            <Link href="#pricing" className="block py-2 text-slate-300 hover:text-white">Pricing</Link>
            <Link href="#about" className="block py-2 text-slate-300 hover:text-white">About</Link>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" className="flex-1 border-slate-700">Login</Button>
              <Button className="flex-1 bg-cyan-500">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
