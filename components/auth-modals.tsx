'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { X, Eye, EyeOff } from 'lucide-react'

interface AuthModalsProps {
  isSignupOpen: boolean
  isLoginOpen: boolean
  onSignupClose: () => void
  onLoginClose: () => void
  onToggleMode: () => void
}

export function AuthModals({
  isSignupOpen,
  isLoginOpen,
  onSignupClose,
  onLoginClose,
  onToggleMode
}: AuthModalsProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Signup:', signupData)
    onSignupClose()
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', loginData)
    onLoginClose()
  }

  // Signup Modal
  if (isSignupOpen) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900 border-slate-700 relative">
          <button
            onClick={onSignupClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-slate-400 text-sm mb-6">Join thousands of marketers generating leads</p>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={signupData.name}
                  onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={signupData.agreeTerms}
                  onCheckedChange={(checked) => setSignupData({ ...signupData, agreeTerms: checked as boolean })}
                />
                <label htmlFor="terms" className="text-sm text-slate-400">
                  I agree to{' '}
                  <a href="/terms" className="text-cyan-400 hover:underline">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white h-11"
                disabled={!signupData.agreeTerms}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{' '}
                <button onClick={onToggleMode} className="text-cyan-400 hover:underline font-medium">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Login Modal
  if (isLoginOpen) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900 border-slate-700 relative">
          <button
            onClick={onLoginClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm mb-6">Sign in to your Lead Ocean account</p>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={loginData.rememberMe}
                    onCheckedChange={(checked) => setLoginData({ ...loginData, rememberMe: checked as boolean })}
                  />
                  <label htmlFor="remember" className="text-sm text-slate-400">Remember me</label>
                </div>
                <a href="#" className="text-sm text-cyan-400 hover:underline">Forgot password?</a>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white h-11"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                Don't have an account?{' '}
                <button onClick={onToggleMode} className="text-cyan-400 hover:underline font-medium">
                  Create one
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return null
}
