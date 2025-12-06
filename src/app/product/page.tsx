import { Navbar, Footer } from '@/components'
import { Zap, Shield, Wrench, Globe, DollarSign, Target, Check } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Explore the features of Laryaa aOS - Lightning fast, zero-trust security, self-healing, offline-first automation platform.',
}

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Average 227ms per action – 10x faster than vision-based agents like OpenAI Atlas and Perplexity Browser. Maintains RPA-level speed while staying intelligent.',
    highlights: ['227ms average action time', '10x faster than vision agents', 'RPA-level speed'],
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    description: 'No screenshots to cloud. No PII exposure. HIPAA, GDPR, and PCI-DSS compliant by design. Perfect for healthcare, finance, and legal industries.',
    highlights: ['No cloud screenshots', 'HIPAA compliant', 'GDPR & PCI-DSS ready'],
  },
  {
    icon: Wrench,
    title: 'Self-Healing',
    description: 'Automatically adapts to UI changes – window resize, theme change, app updates. Zero manual maintenance unlike traditional RPA that breaks silently.',
    highlights: ['Auto-adapts to UI changes', 'Zero maintenance', 'Never breaks silently'],
  },
  {
    icon: Globe,
    title: 'Offline-First',
    description: 'Works without internet. Full data sovereignty. No vendor lock-in. Deploy on-premise or in air-gapped environments.',
    highlights: ['No internet required', 'Full data sovereignty', 'Air-gapped deployment'],
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Zero marginal cost for 90% of executions (cached path). No expensive vision API calls. $0 vs $10-50 per 1,000 actions.',
    highlights: ['$0 per 1,000 actions', '90% cached executions', 'No API costs'],
  },
  {
    icon: Target,
    title: 'Production Ready',
    description: 'Not a demo. Not a prototype. Battle-tested architecture combining RPA speed with AI robustness.',
    highlights: ['Battle-tested', 'Enterprise-grade', 'Production deployed'],
  },
]

const comparisonData = [
  { feature: 'Speed (ms/action)', legacy: '~50ms', vision: '1500-2500ms', laryaa: '~227ms' },
  { feature: 'Self-Healing', legacy: 'Manual fixes', vision: 'Auto-adapts', laryaa: 'Auto-adapts (fast)' },
  { feature: 'Privacy', legacy: 'Local', vision: 'Cloud screenshots', laryaa: 'Zero-Trust' },
  { feature: 'HIPAA/GDPR', legacy: 'Possible', vision: 'Fails', laryaa: 'Built-in' },
  { feature: 'Maintenance Cost', legacy: '30-40% annual', vision: '0%', laryaa: '0%' },
  { feature: 'Offline Capable', legacy: 'Yes', vision: 'No', laryaa: 'Yes' },
  { feature: 'Cost per 1000 Actions', legacy: '~$0', vision: '$10-50', laryaa: '~$0' },
]

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Product</p>
          <h1 className="section-title text-5xl md:text-6xl">
            The complete automation platform
          </h1>
          <p className="section-subtitle max-w-3xl">
            Six core capabilities that make Laryaa aOS the only automation platform
            that combines RPA speed with AI intelligence—without compromising privacy.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="group">
                <feature.icon size={28} className="mb-4 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors" />
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm">
                      <Check size={14} className="text-[var(--text-muted)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24">
          <p className="section-label">Comparison</p>
          <h2 className="section-title">How we compare</h2>
          <p className="section-subtitle max-w-2xl mb-12">
            Legacy RPA is fast but breaks. Vision agents are smart but slow and leak data.
            Laryaa is the only platform that solves both.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-4 pr-4 font-medium">Feature</th>
                  <th className="text-left py-4 px-4 font-medium text-[var(--text-muted)]">Legacy RPA</th>
                  <th className="text-left py-4 px-4 font-medium text-[var(--text-muted)]">Vision Agents</th>
                  <th className="text-left py-4 pl-4 font-medium">Laryaa aOS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-[var(--text-muted)]">{row.legacy}</td>
                    <td className="py-4 px-4 text-[var(--text-muted)]">{row.vision}</td>
                    <td className="py-4 pl-4 font-medium">{row.laryaa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
