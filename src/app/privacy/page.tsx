import { Navbar, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Laryaa Privacy Policy - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <section className="mb-12">
          <p className="section-label">Legal</p>
          <h1 className="section-title text-5xl md:text-6xl">Privacy Policy</h1>
          <p className="text-[var(--text-muted)]">Last updated: December 15, 2025</p>
        </section>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4">1. Introduction</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Laryaa Technologies Private Limited (&quot;Laryaa,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our Zero-Trust Autonomous Operating System (aOS) and related services.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Our core architecture is built on <strong className="text-[var(--text)]">privacy-first principles</strong>. We believe that enterprise AI automation should never require compromising data security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">2.1 Information You Provide</h3>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Contact information (name, email address, company name)</li>
              <li>Business information (industry, use case, estimated usage)</li>
              <li>Communications you send to us</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Device and browser information</li>
              <li>IP address and general location</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.3 Information NOT Collected by Laryaa aOS</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Our Zero-Trust architecture ensures that when using Laryaa aOS:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">No screenshots or screen recordings</strong> are sent to our cloud servers</li>
              <li><strong className="text-[var(--text)]">No personally identifiable information (PII)</strong> leaves your device unprotected</li>
              <li><strong className="text-[var(--text)]">No sensitive data</strong> (patient records, financial data, credentials) is transmitted</li>
              <li>The Sanitization Layer removes all sensitive content before any cloud communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">3. How We Use Your Information</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your early access requests and inquiries</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">4. Data Security</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Security is at the core of Laryaa&apos;s architecture. We implement:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">Hybrid Split-State Architecture:</strong> Sensitive data processing happens locally on your device</li>
              <li><strong className="text-[var(--text)]">Zero-Trust Model:</strong> No implicit trust for any data transmission</li>
              <li><strong className="text-[var(--text)]">End-to-end encryption:</strong> All data in transit is encrypted</li>
              <li><strong className="text-[var(--text)]">Local-first processing:</strong> The Local Vision Engine and Execution Engine run entirely on your infrastructure</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We do not sell your personal information. We may share information only in the following circumstances:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">Service Providers:</strong> With trusted third parties who assist in operating our services (e.g., hosting, analytics)</li>
              <li><strong className="text-[var(--text)]">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-[var(--text)]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong className="text-[var(--text)]">With Your Consent:</strong> When you explicitly authorize us to share</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">6. Data Retention</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. For Laryaa aOS usage data, local processing means your operational data remains on your devices under your control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">7. Your Rights</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">Access:</strong> Request access to your personal data</li>
              <li><strong className="text-[var(--text)]">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-[var(--text)]">Deletion:</strong> Request deletion of your data</li>
              <li><strong className="text-[var(--text)]">Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong className="text-[var(--text)]">Objection:</strong> Object to certain processing activities</li>
              <li><strong className="text-[var(--text)]">Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@laryaa.com" className="text-[var(--text)] underline">privacy@laryaa.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">8. Compliance</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Laryaa aOS is designed to help organizations maintain compliance with:
            </p>
            <ul className="text-[var(--text-muted)] space-y-2 list-disc pl-6">
              <li><strong className="text-[var(--text)]">HIPAA:</strong> Health Insurance Portability and Accountability Act</li>
              <li><strong className="text-[var(--text)]">GDPR:</strong> General Data Protection Regulation</li>
              <li><strong className="text-[var(--text)]">PCI-DSS:</strong> Payment Card Industry Data Security Standard</li>
              <li><strong className="text-[var(--text)]">SOC 2:</strong> Service Organization Control 2</li>
              <li><strong className="text-[var(--text)]">India&apos;s DPDP Act:</strong> Digital Personal Data Protection Act</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">9. Cookies</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We use essential cookies to ensure basic functionality of our website. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">11. International Data Transfers</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              If you access our services from outside India, your information may be transferred to and processed in India. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">12. Changes to This Policy</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">13. Contact Us</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-[var(--bg-alt)] rounded-xl">
              <p className="text-[var(--text)] font-medium">Laryaa</p>
              <p className="text-[var(--text-muted)]">Email: <a href="mailto:privacy@laryaa.com" className="text-[var(--text)] underline">privacy@laryaa.com</a></p>
              <p className="text-[var(--text-muted)]">India</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
