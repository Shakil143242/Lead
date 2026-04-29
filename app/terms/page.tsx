import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms & Conditions | Lead Ocean',
  description: 'Terms & Conditions for Lead Ocean'
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                Last Updated: March 2024
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-400 mb-6">
                By accessing and using Lead Ocean's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
              <p className="text-slate-400 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Lead Ocean for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-slate-400 mb-6">
                The materials on Lead Ocean are provided on an 'as is' basis. Lead Ocean makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitations</h2>
              <p className="text-slate-400 mb-6">
                In no event shall Lead Ocean or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lead Ocean, even if an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Accuracy of Materials</h2>
              <p className="text-slate-400 mb-6">
                The materials appearing on Lead Ocean could include technical, typographical, or photographic errors. Lead Ocean does not warrant that any of the materials on the website are accurate, complete, or current. Lead Ocean may make changes to the materials contained on the website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Links</h2>
              <p className="text-slate-400 mb-6">
                Lead Ocean has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lead Ocean of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Modifications</h2>
              <p className="text-slate-400 mb-6">
                Lead Ocean may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Governing Law</h2>
              <p className="text-slate-400 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of California, USA, and you irrevocably submit to the exclusive jurisdiction of the courts located in California.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. User Conduct</h2>
              <p className="text-slate-400 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mb-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Engage in any harassing, abusive, or threatening conduct</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for unlawful purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Contact Us</h2>
              <p className="text-slate-400 mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-slate-400">
                Email: legal@leadocean.com<br/>
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
