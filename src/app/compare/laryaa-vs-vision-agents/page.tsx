import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Check, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laryaa vs Vision Agents (Claude Computer Use) - Privacy-First Alternative',
  description: 'Compare Laryaa with vision-based AI agents like Claude Computer Use. Laryaa is faster, HIPAA compliant, and never sends screenshots to the cloud.',
  keywords: [
    'Laryaa vs Claude Computer Use',
    'vision agent alternative',
    'Claude computer use alternative',
    'AI agent without screenshots',
    'HIPAA compliant AI agent',
    'private AI automation',
    'screen automation privacy',
    'OpenAI computer use alternative',
  ],
}

const privacyConcerns = [
  {
    scenario: 'Healthcare',
    risk: 'Patient records, diagnoses, SSNs visible on screen',
    visionAgent: 'Screenshots sent to cloud servers',
    laryaa: 'Never captured, never transmitted',
  },
  {
    scenario: 'Finance',
    risk: 'Account numbers, balances, transactions',
    visionAgent: 'Screenshots may be logged/stored',
    laryaa: 'Zero cloud exposure',
  },
  {
    scenario: 'Legal',
    risk: 'Privileged client communications',
    visionAgent: 'Potential privilege waiver',
    laryaa: 'Local-only processing',
  },
  {
    scenario: 'HR',
    risk: 'Employee PII, salaries, reviews',
    visionAgent: 'Data leaves corporate network',
    laryaa: 'Never leaves device',
  },
]

const comparisonFeatures = [
  { feature: 'Execution Model', laryaa: 'Direct element access', vision: 'Screenshot → OCR → Action' },
  { feature: 'Speed', laryaa: 'Milliseconds per action', vision: 'Seconds per action' },
  { feature: 'Screenshots', laryaa: 'Never', vision: 'Every action' },
  { feature: 'Cloud Dependency', laryaa: 'Optional (offline-capable)', vision: 'Required for every action' },
  { feature: 'HIPAA Compliance', laryaa: 'By architecture', vision: 'Significant concerns' },
  { feature: 'GDPR Compliance', laryaa: 'By architecture', vision: 'Data export concerns' },
  { feature: 'PII Exposure', laryaa: 'None', vision: 'Full screen capture' },
  { feature: 'Offline Operation', laryaa: 'Yes', vision: 'No' },
  { feature: 'Air-Gap Compatible', laryaa: 'Yes', vision: 'No' },
  { feature: 'Cost per Action', laryaa: 'Fixed', vision: 'API tokens per screenshot' },
]

export default function LaryaaVsVisionAgentsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-16">
          <Link href="/compare" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] mb-4 inline-block">
            ← All Comparisons
          </Link>
          <h1 className="section-title text-5xl md:text-6xl">
            Laryaa vs Vision Agents
          </h1>
          <p className="section-subtitle max-w-3xl">
            Vision-based AI agents (Claude Computer Use, GPT-4 with vision) promise intelligent automation.
            But they require sending your entire screen to external servers. For regulated industries, this is a dealbreaker.
          </p>
        </section>

        {/* Warning Box */}
        <section className="mb-16 p-8 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-medium mb-2">The Screenshot Problem</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Every time a vision agent performs an action, it captures your entire screen and sends it to a cloud API.
                This includes <strong className="text-[var(--text)]">everything visible</strong>: patient names, financial data,
                passwords in password managers, emails, chat messages, and any other sensitive information.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mt-4">
                For HIPAA-covered entities, this likely constitutes an unauthorized disclosure of PHI.
                For GDPR-regulated companies, it&apos;s likely an unauthorized transfer of personal data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy by Industry */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Privacy Risks by Industry</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 pr-4 font-medium">Scenario</th>
                  <th className="py-4 pr-4 text-[var(--text-muted)]">Data at Risk</th>
                  <th className="py-4 pr-4 text-red-400">Vision Agents</th>
                  <th className="py-4 text-green-400">Laryaa</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-muted)]">
                {privacyConcerns.map((concern) => (
                  <tr key={concern.scenario} className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 text-[var(--text)]">{concern.scenario}</td>
                    <td className="py-4 pr-4">{concern.risk}</td>
                    <td className="py-4 pr-4 text-red-400">{concern.visionAgent}</td>
                    <td className="py-4 text-green-400">{concern.laryaa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 pr-4 text-[var(--text-muted)] font-medium">Feature</th>
                  <th className="py-4 pr-4 font-medium">Laryaa</th>
                  <th className="py-4 text-[var(--text-muted)] font-medium">Vision Agents</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 text-[var(--text-muted)]">{row.feature}</td>
                    <td className="py-4 pr-4">{row.laryaa}</td>
                    <td className="py-4 text-[var(--text-muted)]">{row.vision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How Laryaa Works Without Screenshots */}
        <section className="mb-16 p-8 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-xl font-medium mb-4">How Laryaa Works Without Screenshots</h2>
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Instead of capturing screenshots, Laryaa reads the underlying UI structure directly.
            It accesses element properties, text content, and positions through system APIs — the same way
            assistive technologies like screen readers work.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            When Laryaa needs cloud intelligence (for complex planning), it sends only a
            <strong className="text-[var(--text)]"> sanitized structural description</strong>. Names become tokens.
            Numbers become placeholders. The actual content never leaves your device.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            This is why Laryaa works in HIPAA environments, GDPR-regulated companies, and air-gapped networks
            where vision agents are fundamentally incompatible.
          </p>
        </section>

        {/* When to Choose */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">When to Choose Each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="text-lg font-medium mb-4">Choose Laryaa if:</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You handle sensitive data (healthcare, finance, legal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>HIPAA, GDPR, or PCI-DSS compliance is required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You need offline or air-gapped operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Speed matters (milliseconds vs seconds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You don&apos;t want ongoing API costs</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="text-lg font-medium mb-4">Vision Agents may work if:</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>No sensitive data appears on screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Compliance isn&apos;t a concern</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Speed isn&apos;t critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Always-online operation is acceptable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Need AI automation without the privacy risk?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            See how Laryaa delivers intelligent automation without ever sending screenshots to the cloud.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Early Access
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
