import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Heart, CreditCard, Scale } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Laryaa aOS for Healthcare, Finance, and Legal industries. HIPAA, PCI-DSS, SOC2 compliant automation.',
}

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    compliance: 'HIPAA Compliant',
    tagline: 'Privacy-first automation for patient data',
    description: 'Automate EMR data extraction, lab report processing, and billing workflows without exposing PHI to the cloud.',
    useCases: [
      'EMR data extraction and migration',
      'Lab report processing and routing',
      'Insurance claim automation',
      'Patient scheduling optimization',
      'Compliance documentation',
    ],
    benefits: [
      'Zero PHI exposure to external servers',
      'Full HIPAA compliance built-in',
      'On-premise deployment available',
      'Audit trail for all actions',
    ],
  },
  {
    icon: CreditCard,
    name: 'Finance',
    compliance: 'PCI-DSS & SOC2',
    tagline: 'Enterprise-grade security for financial workflows',
    description: 'Streamline KYC automation, transaction reconciliation, and regulatory reporting with enterprise-grade security.',
    useCases: [
      'KYC/AML automation',
      'Transaction reconciliation',
      'Regulatory reporting (SEC, FINRA)',
      'Account opening workflows',
      'Fraud detection support',
    ],
    benefits: [
      'PCI-DSS compliant by design',
      'SOC2 Type II ready',
      'No sensitive data leaves premises',
      'Complete audit logging',
    ],
  },
  {
    icon: Scale,
    name: 'Legal',
    compliance: 'Attorney-Client Privilege',
    tagline: 'Confidential document processing',
    description: 'Protect attorney-client privilege while automating contract analysis, document management, and e-discovery.',
    useCases: [
      'Contract review and analysis',
      'Document management automation',
      'E-discovery processing',
      'Time tracking and billing',
      'Court filing automation',
    ],
    benefits: [
      'Preserves attorney-client privilege',
      'Local processing only',
      'No third-party data access',
      'Secure document handling',
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Industries</p>
          <h1 className="section-title text-5xl md:text-6xl">
            Built for regulated industries
          </h1>
          <p className="section-subtitle max-w-3xl">
            Where privacy, compliance, and latency are non-negotiable.
            Laryaa aOS is designed from the ground up for enterprises that can&apos;t compromise.
          </p>
        </section>

        {/* Industries */}
        <section className="space-y-24">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`grid lg:grid-cols-2 gap-12 ${
                index !== industries.length - 1 ? 'pb-24 border-b border-[var(--border)]' : ''
              }`}
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <industry.icon size={32} />
                  <div>
                    <h2 className="text-2xl font-medium">{industry.name}</h2>
                    <p className="text-sm text-[var(--text-muted)]">{industry.compliance}</p>
                  </div>
                </div>

                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  {industry.description}
                </p>

                <p className="text-sm text-[var(--text-muted)] mb-8">
                  {industry.tagline}
                </p>

                <Link href="/contact" className="btn-primary">
                  Get started
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium mb-4 text-[var(--text-muted)]">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="text-sm">
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4 text-[var(--text-muted)]">
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-24 p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">Not seeing your industry?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl">
            Laryaa aOS works for any enterprise that needs fast, reliable automation
            without compromising on security. Let&apos;s discuss your specific requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact us
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
