import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Laryaa vs RPA Tools & AI Agents',
  description: 'Compare Laryaa aOS with UiPath, Automation Anywhere, and vision-based AI agents. See why enterprises choose Laryaa for HIPAA-compliant, self-healing automation.',
  keywords: [
    'Laryaa vs UiPath',
    'Laryaa vs Automation Anywhere',
    'UiPath alternative',
    'Automation Anywhere alternative',
    'RPA comparison',
    'AI agent comparison',
    'vision agent vs RPA',
    'HIPAA compliant RPA',
  ],
}

const comparisons = [
  {
    slug: 'laryaa-vs-uipath',
    competitor: 'UiPath',
    tagline: 'Self-healing automation without the maintenance burden',
    summary: 'UiPath requires constant maintenance when UIs change. Laryaa self-heals automatically.',
    keyDifferences: [
      { feature: 'UI Changes', laryaa: 'Self-healing', competitor: 'Manual fixes required' },
      { feature: 'Maintenance Cost', laryaa: 'Zero', competitor: 'High (bot farms)' },
      { feature: 'Setup Time', laryaa: 'Hours', competitor: 'Weeks' },
    ],
  },
  {
    slug: 'laryaa-vs-automation-anywhere',
    competitor: 'Automation Anywhere',
    tagline: 'Enterprise automation without the enterprise complexity',
    summary: 'Automation Anywhere is powerful but complex. Laryaa delivers similar results with zero maintenance.',
    keyDifferences: [
      { feature: 'Learning Curve', laryaa: 'Minimal', competitor: 'Steep' },
      { feature: 'Server Requirements', laryaa: 'None (local-first)', competitor: 'Control Room required' },
      { feature: 'Bot Licensing', laryaa: 'Simple', competitor: 'Complex per-bot' },
    ],
  },
  {
    slug: 'laryaa-vs-vision-agents',
    competitor: 'Vision-Based AI Agents',
    tagline: 'AI intelligence without sending screenshots to the cloud',
    summary: 'Claude Computer Use and similar agents send your screen to the cloud. Laryaa never does.',
    keyDifferences: [
      { feature: 'Screenshots', laryaa: 'Never sent to cloud', competitor: 'Sent for every action' },
      { feature: 'Execution Speed', laryaa: 'Milliseconds', competitor: 'Seconds per action' },
      { feature: 'HIPAA/GDPR', laryaa: 'Compliant by design', competitor: 'Compliance concerns' },
    ],
  },
]

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Compare</p>
          <h1 className="section-title text-5xl md:text-6xl">
            How Laryaa Compares
          </h1>
          <p className="section-subtitle max-w-3xl">
            See how Laryaa stacks up against traditional RPA tools and vision-based AI agents.
            Spoiler: we&apos;re faster, more private, and require zero maintenance.
          </p>
        </section>

        {/* Comparison Cards */}
        <section className="mb-24">
          <div className="grid gap-8">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group block p-8 border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium mb-2 group-hover:text-[var(--text)] transition-colors">
                      Laryaa vs {comp.competitor}
                    </h2>
                    <p className="text-[var(--text-muted)] mb-6">{comp.tagline}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                      {comp.keyDifferences.map((diff) => (
                        <div key={diff.feature} className="text-sm">
                          <p className="text-[var(--text-muted)] mb-1">{diff.feature}</p>
                          <p className="font-medium">{diff.laryaa}</p>
                          <p className="text-[var(--text-muted)] text-xs">vs {diff.competitor}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-[var(--text-muted)] group-hover:text-[var(--text)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 pr-4 font-medium">Feature</th>
                  <th className="py-4 pr-4 font-medium">Laryaa</th>
                  <th className="py-4 pr-4 text-[var(--text-muted)]">UiPath</th>
                  <th className="py-4 pr-4 text-[var(--text-muted)]">Automation Anywhere</th>
                  <th className="py-4 text-[var(--text-muted)]">Vision Agents</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-muted)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Execution Speed</td>
                  <td className="py-4 pr-4 text-[var(--text)]">Milliseconds</td>
                  <td className="py-4 pr-4">Milliseconds</td>
                  <td className="py-4 pr-4">Milliseconds</td>
                  <td className="py-4">Seconds</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">UI Change Handling</td>
                  <td className="py-4 pr-4 text-[var(--text)]">Self-healing</td>
                  <td className="py-4 pr-4">Manual updates</td>
                  <td className="py-4 pr-4">Manual updates</td>
                  <td className="py-4">Automatic</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Screenshots to Cloud</td>
                  <td className="py-4 pr-4 text-[var(--text)]">Never</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4">Yes (every action)</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">HIPAA Compliant</td>
                  <td className="py-4 pr-4 text-[var(--text)]">By design</td>
                  <td className="py-4 pr-4">With config</td>
                  <td className="py-4 pr-4">With config</td>
                  <td className="py-4">Concerns</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Maintenance Required</td>
                  <td className="py-4 pr-4 text-[var(--text)]">Zero</td>
                  <td className="py-4 pr-4">High</td>
                  <td className="py-4 pr-4">High</td>
                  <td className="py-4">Low</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Offline Capable</td>
                  <td className="py-4 pr-4 text-[var(--text)]">Yes</td>
                  <td className="py-4 pr-4">Partial</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4">No</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 pr-4">Server Required</td>
                  <td className="py-4 pr-4 text-[var(--text)]">No</td>
                  <td className="py-4 pr-4">Orchestrator</td>
                  <td className="py-4 pr-4">Control Room</td>
                  <td className="py-4">Cloud API</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Ready to see the difference?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            Join our early access program and experience self-healing, zero-trust automation.
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
