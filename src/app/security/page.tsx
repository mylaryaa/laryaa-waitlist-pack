import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, Server, FileCheck, AlertCircle, Wifi, Database } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description: 'Laryaa aOS security - Zero-Trust design, local execution, and enterprise-grade data protection.',
}

const complianceFrameworks = [
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Designed for compliance',
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    status: 'Designed for compliance',
  },
  {
    name: 'PCI-DSS',
    description: 'Payment Card Industry Data Security Standard',
    status: 'Designed for compliance',
  },
  {
    name: 'SOC 2',
    description: 'Service Organization Control 2',
    status: 'On our roadmap',
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    status: 'On our roadmap',
  },
  {
    name: 'DPDP Act',
    description: 'India Digital Personal Data Protection Act',
    status: 'Designed for compliance',
  },
]

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Security</p>
          <h1 className="section-title text-5xl md:text-6xl">
            Your Data Never Leaves
          </h1>
          <p className="section-subtitle max-w-3xl">
            Other AI agents send screenshots to the cloud. Laryaa doesn&apos;t. 
            Your sensitive data stays on your device — architecturally guaranteed.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">The Problem with Vision Agents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <Eye size={24} className="mb-4 text-red-400" />
              <h3 className="text-lg font-medium mb-2">Screenshots to Cloud</h3>
              <p className="text-[var(--text-muted)]">
                Vision agents capture your entire screen — including passwords, patient data, financial records — and send it externally.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <Database size={24} className="mb-4 text-red-400" />
              <h3 className="text-lg font-medium mb-2">Data Exposure</h3>
              <p className="text-[var(--text-muted)]">
                Once your data leaves your network, you lose control. It may be stored, logged, or used for training.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertCircle size={24} className="mb-4 text-red-400" />
              <h3 className="text-lg font-medium mb-2">Compliance Risk</h3>
              <p className="text-[var(--text-muted)]">
                HIPAA, GDPR, PCI-DSS violations. A single screenshot could contain data you&apos;re legally required to protect.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">How Laryaa Protects Your Data</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <Eye size={24} className="mb-4 text-[var(--text-muted)]" />
              <h3 className="text-lg font-medium mb-2">No Screenshots Ever</h3>
              <p className="text-[var(--text-muted)]">
                We don&apos;t use vision. No screen captures, no image processing, no visual data transmitted anywhere.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <Lock size={24} className="mb-4 text-[var(--text-muted)]" />
              <h3 className="text-lg font-medium mb-2">PII Sanitization</h3>
              <p className="text-[var(--text-muted)]">
                Any data that touches the cloud is automatically sanitized. Names become tokens. Numbers become placeholders.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <Server size={24} className="mb-4 text-[var(--text-muted)]" />
              <h3 className="text-lg font-medium mb-2">Local Execution</h3>
              <p className="text-[var(--text-muted)]">
                All automation runs on your machine. Cloud provides planning intelligence, never remote control.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <Wifi size={24} className="mb-4 text-[var(--text-muted)]" />
              <h3 className="text-lg font-medium mb-2">Offline Capable</h3>
              <p className="text-[var(--text-muted)]">
                Works in air-gapped environments. No internet required for execution. Full data sovereignty.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-4">Compliance & Certifications</h2>
          <div className="p-6 bg-[var(--bg-alt)] rounded-xl mb-8 flex items-start gap-4">
            <AlertCircle size={24} className="text-[var(--text-muted)] flex-shrink-0 mt-1" />
            <div>
              <p className="text-[var(--text)] font-medium mb-1">We&apos;re an early-stage company</p>
              <p className="text-[var(--text-muted)]">
                While we&apos;ve designed Laryaa aOS with compliance requirements in mind from day one, 
                we&apos;re currently working toward formal certifications. Our architecture is built to meet 
                these standards, and we&apos;re happy to discuss our security approach in detail.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceFrameworks.map((framework) => (
              <div key={framework.name} className="p-4 border border-[var(--border)] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{framework.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    framework.status === 'On our roadmap' 
                      ? 'bg-[var(--bg-alt)] text-[var(--text-muted)]' 
                      : 'bg-[var(--bg-alt)] text-[var(--text)]'
                  }`}>
                    {framework.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{framework.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Handling */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">What We Never See</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[var(--bg-alt)] rounded-xl">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Lock size={18} />
                Data That Stays Local
              </h3>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li>• Raw screenshots and screen recordings</li>
                <li>• Patient names, medical records, diagnoses</li>
                <li>• Bank account numbers and financial data</li>
                <li>• Passwords and authentication credentials</li>
                <li>• Personal identifiable information (PII)</li>
                <li>• Government IDs and social security numbers</li>
              </ul>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <FileCheck size={18} />
                What Cloud Receives (Sanitized)
              </h3>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li>• Abstract UI structure descriptions</li>
                <li>• Element types and positions</li>
                <li>• Workflow step sequences</li>
                <li>• Error states (without sensitive context)</li>
                <li>• Performance metrics</li>
                <li>• Anonymized usage analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Patent Note */}
        <section className="mb-24 p-8 border border-[var(--border)] rounded-xl">
          <h2 className="text-xl font-medium mb-3">Proprietary Architecture</h2>
          <p className="text-[var(--text-muted)]">
            Our Hybrid Split-State Architecture is patent pending. This novel approach to 
            AI agent execution enables enterprise automation without compromising data security — 
            a technical challenge that existing solutions have not adequately addressed.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Have security questions?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            We&apos;re happy to discuss our security architecture in detail with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to Our Team
              <ArrowRight size={16} />
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
