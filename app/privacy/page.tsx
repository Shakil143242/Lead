import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | Lead Ocean',
  description: 'Privacy Policy for Lead Ocean'
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                Last Updated: March 2024
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-400 mb-6">
                Lead Ocean ("Company", "we", "us", or "our") operates the Lead Ocean website and services. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-slate-400 mb-4">We collect information in various ways:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mb-6">
                <li>Information you provide directly (name, email, company)</li>
                <li>Information automatically collected (IP address, browser type, usage data)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Data from public sources for lead generation</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-400 mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mb-6">
                <li>Provide and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative and promotional emails</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
              <p className="text-slate-400 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Third-Party Sharing</h2>
              <p className="text-slate-400 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cookies and Tracking</h2>
              <p className="text-slate-400 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse cookies, but this may limit functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. User Rights</h2>
              <p className="text-slate-400 mb-6">
                Depending on your location, you may have rights including access to, correction of, and deletion of your personal information. Contact us to exercise these rights.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-slate-400 mb-6">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
              <p className="text-slate-400 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-slate-400">
                Email: privacy@leadocean.com<br/>
                Address: 123 Tech Street, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
