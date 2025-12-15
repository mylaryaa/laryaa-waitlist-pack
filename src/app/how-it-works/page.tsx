import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Zap, RefreshCw, Brain, Gauge } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how Laryaa aOS works - self-healing automation with RPA speed and AI intelligence.',
}

const capabilities = [
  {
    icon: Zap,
    title: 'RPA-Level Speed',
    description: 'Direct element access without vision processing. Sub-second execution for most operations.',
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing',
    description: 'Automatically adapts when UIs change. Multi-signal matching finds elements even after updates.',
  },
  {
    icon: Brain,
    title: 'AI Intelligence',
    description: 'Cloud reasoning for complex decisions. Local execution for speed and privacy.',
  },
  {
    icon: Gauge,
    title: 'Zero Maintenance',
    description: 'No brittle selectors to update. Recovery paths automatically become optimized paths.',
  },
]

const selfHealingSteps = [
  {
    number: '01',
    title: 'Monitor UI State',
    description: 'Continuously tracks application state, layout changes, and element positions without screenshots.',
  },
  {
    number: '02',
    title: 'Fast Path Execution',
    description: 'Uses cached element paths for instant access. 90%+ of operations complete in milliseconds.',
  },
  {
    number: '03',
    title: 'Detect & Adapt',
    description: 'When elements move or change, multi-signal matching (text, position, hierarchy) finds them automatically.',
  },
  {
    number: '04',
    title: 'Learn & Optimize',
    description: 'Recovery paths are cached for future runs. The system gets faster with every execution.',
  },
]

const comparison = [
  { feature: 'Execution Speed', laryaa: 'Milliseconds', rpa: 'Milliseconds', vision: 'Seconds' },
  { feature: 'UI Change Handling', laryaa: 'Automatic', rpa: 'Manual updates', vision: 'Automatic' },
  { feature: 'Maintenance', laryaa: 'Zero', rpa: 'High', vision: 'Low' },
  { feature: 'Data Privacy', laryaa: 'Local only', rpa: 'Local only', vision: 'Cloud screenshots' },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">How It Works</p>
          <h1 className="section-title text-5xl md:text-6xl">
            Self-Healing Automation
          </h1>
          <p className="section-subtitle max-w-3xl">
            RPA broke because UIs change. Vision agents are slow and leak data. 
            Laryaa combines the speed of RPA with the adaptability of AI — without the tradeoffs.
          </p>
        </section>

        {/* Core Capabilities */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-6 border border-[var(--border)] rounded-xl">
                <cap.icon size={24} className="mb-4 text-[var(--text-muted)]" />
                <h3 className="text-lg font-medium mb-2">{cap.title}</h3>
                <p className="text-[var(--text-muted)]">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Self-Healing Works */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-4">How Self-Healing Works</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">
            Traditional RPA breaks when a button moves. Laryaa adapts automatically.
          </p>
          <div className="space-y-0">
            {selfHealingSteps.map((step, index) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-[100px_1fr] gap-6 py-8 ${
                  index !== selfHealingSteps.length - 1 ? 'border-b border-[var(--border)]' : ''
                }`}
              >
                <div>
                  <span className="text-4xl font-light text-[var(--text-muted)]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 pr-8 text-[var(--text-muted)] font-medium">Feature</th>
                  <th className="py-4 pr-8 font-medium">Laryaa</th>
                  <th className="py-4 pr-8 text-[var(--text-muted)] font-medium">Traditional RPA</th>
                  <th className="py-4 text-[var(--text-muted)] font-medium">Vision Agents</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border)]">
                    <td className="py-4 pr-8 text-[var(--text-muted)]">{row.feature}</td>
                    <td className="py-4 pr-8">{row.laryaa}</td>
                    <td className="py-4 pr-8 text-[var(--text-muted)]">{row.rpa}</td>
                    <td className="py-4 text-[var(--text-muted)]">{row.vision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24 p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">Ready to see it in action?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl">
            Join our early access program to experience self-healing automation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get early access
              <ArrowRight size={16} />
            </Link>
            <Link href="/security" className="btn-secondary">
              Learn about security
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
