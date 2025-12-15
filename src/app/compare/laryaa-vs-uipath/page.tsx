import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laryaa vs UiPath - Self-Healing RPA Alternative',
  description: 'Compare Laryaa aOS with UiPath. See why enterprises choose Laryaa for self-healing automation that requires zero maintenance when UIs change.',
  keywords: [
    'Laryaa vs UiPath',
    'UiPath alternative',
    'UiPath competitor',
    'self-healing RPA',
    'RPA without maintenance',
    'UiPath replacement',
    'better than UiPath',
    'UiPath maintenance cost',
  ],
}

const comparisonFeatures = [
  {
    category: 'Adaptability',
    features: [
      { name: 'UI Change Handling', laryaa: 'Self-healing (automatic)', uipath: 'Manual selector updates', winner: 'laryaa' },
      { name: 'Element Recognition', laryaa: 'Multi-signal matching', uipath: 'Selector-based', winner: 'laryaa' },
      { name: 'Theme/Layout Changes', laryaa: 'Automatic adaptation', uipath: 'Bot breaks', winner: 'laryaa' },
      { name: 'Application Updates', laryaa: 'Zero intervention', uipath: 'Maintenance required', winner: 'laryaa' },
    ],
  },
  {
    category: 'Cost & Maintenance',
    features: [
      { name: 'Ongoing Maintenance', laryaa: 'Zero', uipath: 'Significant (bot farms)', winner: 'laryaa' },
      { name: 'Setup Time', laryaa: 'Hours', uipath: 'Weeks to months', winner: 'laryaa' },
      { name: 'Professional Services', laryaa: 'Not required', uipath: 'Often required', winner: 'laryaa' },
      { name: 'TCO (3 years)', laryaa: 'Lower', uipath: 'Higher (maintenance)', winner: 'laryaa' },
    ],
  },
  {
    category: 'Security & Privacy',
    features: [
      { name: 'Screenshots to Cloud', laryaa: 'Never', uipath: 'No', winner: 'tie' },
      { name: 'Air-Gap Deployment', laryaa: 'Native support', uipath: 'Enterprise only', winner: 'laryaa' },
      { name: 'HIPAA Compliant', laryaa: 'By architecture', uipath: 'With configuration', winner: 'laryaa' },
      { name: 'Data Sovereignty', laryaa: 'Full local control', uipath: 'Orchestrator dependent', winner: 'laryaa' },
    ],
  },
  {
    category: 'Performance',
    features: [
      { name: 'Execution Speed', laryaa: 'Milliseconds', uipath: 'Milliseconds', winner: 'tie' },
      { name: 'Recovery Time (UI change)', laryaa: 'Instant', uipath: 'Hours/Days (manual)', winner: 'laryaa' },
      { name: 'Offline Capability', laryaa: 'Full offline-first', uipath: 'Limited', winner: 'laryaa' },
      { name: 'Resource Usage', laryaa: 'Lightweight', uipath: 'Moderate', winner: 'laryaa' },
    ],
  },
]

export default function LaryaaVsUiPathPage() {
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
            Laryaa vs UiPath
          </h1>
          <p className="section-subtitle max-w-3xl">
            UiPath pioneered enterprise RPA. But every time a UI changes, bots break and teams scramble.
            Laryaa eliminates this with self-healing automation that adapts automatically.
          </p>
        </section>

        {/* Key Insight */}
        <section className="mb-16 p-8 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-xl font-medium mb-4">The Maintenance Problem</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            UiPath relies on element selectors — rigid identifiers that break when applications update.
            Enterprise teams report spending <strong className="text-[var(--text)]">30-50% of RPA budgets</strong> on maintenance alone.
            A single button rename can cascade into hours of fixes across dozens of bots.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mt-4">
            Laryaa uses multi-signal matching: text, position, hierarchy, and context. When elements move or rename,
            Laryaa finds them automatically. <strong className="text-[var(--text)]">Zero maintenance required.</strong>
          </p>
        </section>

        {/* Comparison Tables */}
        {comparisonFeatures.map((category) => (
          <section key={category.category} className="mb-12">
            <h2 className="text-xl font-medium mb-6">{category.category}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="py-4 pr-4 text-[var(--text-muted)] font-medium">Feature</th>
                    <th className="py-4 pr-4 font-medium">Laryaa</th>
                    <th className="py-4 text-[var(--text-muted)] font-medium">UiPath</th>
                  </tr>
                </thead>
                <tbody>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-[var(--border)]">
                      <td className="py-4 pr-4 text-[var(--text-muted)]">{feature.name}</td>
                      <td className="py-4 pr-4">
                        <span className={feature.winner === 'laryaa' ? 'text-[var(--text)] font-medium' : ''}>
                          {feature.laryaa}
                        </span>
                        {feature.winner === 'laryaa' && <Check size={16} className="inline ml-2 text-green-500" />}
                      </td>
                      <td className="py-4 text-[var(--text-muted)]">{feature.uipath}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* When to Choose */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">When to Choose Each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="text-lg font-medium mb-4">Choose Laryaa if:</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You need zero-maintenance automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Your applications update frequently</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>HIPAA/GDPR compliance is critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You want offline/air-gap capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You don&apos;t have dedicated RPA engineers</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="text-lg font-medium mb-4">Choose UiPath if:</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>You already have a UiPath team and infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>You need the extensive marketplace integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Your applications rarely change</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Maintenance budget isn&apos;t a concern</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Ready to eliminate RPA maintenance?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            See how Laryaa&apos;s self-healing automation compares to your current UiPath setup.
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
