import { Navbar, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Laryaa Terms of Service - Terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <section className="mb-12">
          <p className="section-label">Legal</p>
          <h1 className="section-title text-5xl md:text-6xl">Terms of Service</h1>
          <p className="text-[var(--text-muted)]">Last updated: December 15, 2025</p>
        </section>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4">1. Acceptance of Terms</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              By accessing or using Laryaa Technologies Private Limited&apos;s (&quot;Laryaa,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) website, services, and the Zero-Trust Autonomous Operating System (aOS) (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Services.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">2. Description of Services</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Laryaa provides a Zero-Trust Autonomous Operating System designed for enterprise automation. Our Services include:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">Laryaa aOS:</strong> A hybrid AI agent platform that enables automation on legacy desktop applications, hospital systems, banking portals, and VDI environments</li>
              <li><strong className="text-[var(--text)]">Local Vision Engine:</strong> Screen reading capabilities that operate entirely on your device</li>
              <li><strong className="text-[var(--text)]">Sanitization Layer:</strong> PII and sensitive data removal before cloud processing</li>
              <li><strong className="text-[var(--text)]">Cloud Planner:</strong> Task planning and orchestration services</li>
              <li><strong className="text-[var(--text)]">Local Execution Engine:</strong> Deterministic action execution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">3. Eligibility</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              The Services are intended for business use by organizations. You must be at least 18 years old and have the legal capacity to enter into these Terms. By using our Services, you represent that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">4. Account Registration</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              To access certain features of the Services, you may need to create an account. You agree to:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as needed</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">5. Acceptable Use</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You shall not:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Reverse engineer, decompile, or disassemble the Services</li>
              <li>Use the Services to transmit malware or malicious code</li>
              <li>Use the Services to automate actions that violate third-party terms of service</li>
              <li>Resell, sublicense, or redistribute the Services without authorization</li>
              <li>Use the Services in a manner that could harm Laryaa or its users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">6.1 Laryaa&apos;s Rights</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              The Services, including the Hybrid Split-State Architecture (Patent Pending), all software, documentation, trademarks, and content are owned by Laryaa and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Services as permitted by these Terms.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 Your Rights</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              You retain all rights to your data and content. By using the Services, you grant us a limited license to process your data as necessary to provide the Services. Due to our Zero-Trust architecture, your sensitive data remains on your devices and is never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">7. Data and Privacy</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Your use of the Services is also governed by our <a href="/privacy" className="text-[var(--text)] underline">Privacy Policy</a>. Key points:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Laryaa aOS processes sensitive data locally on your devices</li>
              <li>No screenshots or raw screen data are sent to our cloud</li>
              <li>The Sanitization Layer removes PII before any cloud communication</li>
              <li>You maintain full control and ownership of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">8. Service Availability</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We strive to maintain high availability of our Services, but we do not guarantee uninterrupted access. The Services may be temporarily unavailable due to:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Scheduled maintenance (with advance notice when possible)</li>
              <li>Emergency repairs or security updates</li>
              <li>Factors beyond our reasonable control</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mt-4">
              Note: Laryaa aOS&apos;s offline-first design ensures that local components continue to function even when cloud services are unavailable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">9. Fees and Payment</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Certain features of the Services may require payment. If you subscribe to paid Services:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Fees are as specified in your service agreement or order form</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We may modify pricing with reasonable advance notice</li>
              <li>You are responsible for all applicable taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">10. Confidentiality</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the use of Services. This obligation survives termination of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">11. Disclaimer of Warranties</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. LARYAA DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">12. Limitation of Liability</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LARYAA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">13. Indemnification</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              You agree to indemnify, defend, and hold harmless Laryaa, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) your data or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">14. Termination</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Either party may terminate these Terms:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>With 30 days written notice for convenience</li>
              <li>Immediately upon material breach by the other party</li>
              <li>Immediately if required by law</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mt-4">
              Upon termination, your right to use the Services ceases. Provisions that by their nature should survive (including intellectual property, confidentiality, limitation of liability, and indemnification) shall survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">15. Modifications</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We may modify these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">16. Governing Law</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">17. Dispute Resolution</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Before initiating any legal proceedings, the parties agree to attempt to resolve disputes through good-faith negotiations. If negotiations fail, disputes may be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">18. General Provisions</h2>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">Entire Agreement:</strong> These Terms constitute the entire agreement between you and Laryaa regarding the Services.</li>
              <li><strong className="text-[var(--text)]">Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
              <li><strong className="text-[var(--text)]">Waiver:</strong> Failure to enforce any right does not waive that right.</li>
              <li><strong className="text-[var(--text)]">Assignment:</strong> You may not assign these Terms without our consent. We may assign our rights and obligations freely.</li>
              <li><strong className="text-[var(--text)]">Force Majeure:</strong> Neither party is liable for delays due to circumstances beyond reasonable control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">19. Contact Information</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-[var(--bg-alt)] rounded-xl">
              <p className="text-[var(--text)] font-medium">Laryaa</p>
              <p className="text-[var(--text-muted)]">Email: <a href="mailto:legal@laryaa.com" className="text-[var(--text)] underline">legal@laryaa.com</a></p>
              <p className="text-[var(--text-muted)]">India</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
