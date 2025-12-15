import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laryaa vs Automation Anywhere - Simpler Enterprise Automation',
  description: 'Compare Laryaa aOS with Automation Anywhere. Get enterprise automation without the complexity, licensing overhead, and maintenance costs.',
  keywords: [
    'Laryaa vs Automation Anywhere',
    'Automation Anywhere alternative',
    'Automation Anywhere competitor',
    'simpler RPA',
    'enterprise automation simple',
    'RPA without control room',
    'Automation Anywhere replacement',
  ],
}

const comparisonFeatures = [
  {
    category: 'Setup & Complexity',
    features: [
      { name: 'Initial Setup', laryaa: 'Hours', aa: 'Weeks (Control Room setup)' },
      { name: 'Learning Curve', laryaa: 'Minimal', aa: 'Steep (certification programs)' },
      { name: 'Server Infrastructure', laryaa: 'None required', aa: 'Control Room mandatory' },
      { name: 'Bot Licensing', laryaa: 'Simple', aa: 'Complex (attended/unattended/IQ)' },
    ],
  },
  {
    category: 'Adaptability',
    features: [
      { name: 'UI Change Handling', laryaa: 'Self-healing', aa: 'Manual reconfiguration' },
      { name: 'Maintenance Required', laryaa: 'Zero', aa: 'Ongoing' },
      { name: 'Bot Farm Management', laryaa: 'Not needed', aa: 'Common requirement' },
      { name: 'Version Upgrades', laryaa: 'Seamless', aa: 'Migration projects' },
    ],
  },
  {
    category: 'Security & Deployment',
    features: [
      { name: 'Air-Gap Deployment', laryaa: 'Native support', aa: 'Enterprise config required' },
      { name: 'Offline Operation', laryaa: 'Full capability', aa: 'Limited' },
      { name: 'HIPAA Compliance', laryaa: 'By architecture', aa: 'Configurable' },
      { name: 'Data Residency', laryaa: '100% local', aa: 'Control Room dependent' },
    ],
  },
]

export default function LaryaaVsAutomationAnywherePage() {
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
            Laryaa vs Automation Anywhere
          </h1>
          <p className="section-subtitle max-w-3xl">
            Automation Anywhere is powerful enterprise software. But &quot;enterprise&quot; often means complexity:
            Control Rooms, bot licensing, certification programs, and ongoing maintenance.
            Laryaa delivers similar results with dramatically less overhead.
          </p>
        </section>

        {/* Key Insight */}
        <section className="mb-16 p-8 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-xl font-medium mb-4">The Complexity Problem</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Automation Anywhere built for scale. That&apos;s valuable if you&apos;re running hundreds of bots across
            a global enterprise. But most teams don&apos;t need that scale — they need automation that works
            without a dedicated RPA team to manage it.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mt-4">
            Laryaa takes a different approach: <strong className="text-[var(--text)]">no servers, no bot farms,
            no certifications required</strong>. Deploy automation in hours, not months. Let it run without maintenance.
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
                    <th className="py-4 text-[var(--text-muted)] font-medium">Automation Anywhere</th>
                  </tr>
                </thead>
                <tbody>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-[var(--border)]">
                      <td className="py-4 pr-4 text-[var(--text-muted)]">{feature.name}</td>
                      <td className="py-4 pr-4">{feature.laryaa}</td>
                      <td className="py-4 text-[var(--text-muted)]">{feature.aa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* TCO Comparison */}
        <section className="mb-16 p-8 border border-[var(--border)] rounded-2xl">
          <h2 className="text-xl font-medium mb-6">Total Cost of Ownership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Automation Anywhere Costs</h3>
              <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                <li>• Control Room licensing (server + users)</li>
                <li>• Bot licenses (attended, unattended, IQ Bot)</li>
                <li>• Professional services for implementation</li>
                <li>• Ongoing maintenance team</li>
                <li>• Certification and training</li>
                <li>• Infrastructure and hosting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Laryaa Costs</h3>
              <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                <li>• Single platform license</li>
                <li>• No server infrastructure</li>
                <li>• No professional services required</li>
                <li>• Zero maintenance</li>
                <li>• Self-explanatory (no certification needed)</li>
              </ul>
            </div>
          </div>
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
                  <span>You want automation without infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You don&apos;t have a dedicated RPA team</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Speed to deployment matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Maintenance cost is a concern</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Air-gap or offline capability is needed</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl">
              <h3 className="text-lg font-medium mb-4">Choose Automation Anywhere if:</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>You need 100+ bots with central orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>You have an existing RPA Center of Excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>IQ Bot (document processing) is critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <span>Budget allows for full enterprise deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Want enterprise results without enterprise complexity?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            See how Laryaa delivers automation without the infrastructure overhead.
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
