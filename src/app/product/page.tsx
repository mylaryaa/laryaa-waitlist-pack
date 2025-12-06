import { Navbar, Footer } from '@/components'
import { Zap, Shield, Wrench, Globe, Layers, Target, Check, Smartphone, Monitor, Apple } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Explore the features of Laryaa aOS - Zero-trust security, self-healing, offline-first automation platform.',
}

const features = [
  {
    icon: Zap,
    title: 'Designed for Speed',
    description: 'Optimized execution path for common operations. Caches UI state locally for fast repeated actions.',
    highlights: ['Fast execution path', 'Local caching', 'No cloud round-trips'],
  },
  {
    icon: Shield,
    title: 'Zero-Trust Privacy',
    description: 'Sensitive data is tokenized before planning. Cloud never sees PII, screenshots, or credentials.',
    highlights: ['No cloud screenshots', 'PII tokenization', 'Designed for compliance'],
  },
  {
    icon: Wrench,
    title: 'Self-Healing',
    description: 'Adapts to UI changes automatically using multi-anchor detection. No manual maintenance required.',
    highlights: ['Auto-adapts to UI changes', 'Multi-anchor detection', 'Zero maintenance'],
  },
  {
    icon: Globe,
    title: 'Offline-First',
    description: 'Works without internet using on-device planning. Full data sovereignty with no vendor lock-in.',
    highlights: ['No internet required', 'On-device planning', 'Air-gapped deployment'],
  },
  {
    icon: Layers,
    title: 'No API Dependencies',
    description: 'Automates any application through the UI layer. Works with legacy systems that have no APIs.',
    highlights: ['Works on any app', 'No integration needed', 'Legacy system support'],
  },
  {
    icon: Target,
    title: 'Pioneer Program',
    description: 'Join early adopters shaping the future of privacy-first automation.',
    highlights: ['Early access', 'Shape the roadmap', 'Priority support'],
  },
]

const comparisonData = [
  { feature: 'Execution Speed', legacy: 'Fast', vision: 'Slow', laryaa: 'Fast' },
  { feature: 'Self-Healing', legacy: 'Manual fixes', vision: 'Auto-adapts', laryaa: 'Multi-anchor' },
  { feature: 'Data Privacy', legacy: 'Local', vision: 'Cloud screenshots', laryaa: 'Zero-Trust' },
  { feature: 'Compliance Ready', legacy: 'Possible', vision: 'Difficult', laryaa: 'Designed for it' },
  { feature: 'Maintenance', legacy: 'High', vision: 'Low', laryaa: 'Self-healing' },
  { feature: 'Offline Capable', legacy: 'Yes', vision: 'No', laryaa: 'Offline-first' },
]

const roadmap = [
  {
    icon: Monitor,
    title: 'Desktop',
    status: 'Available Now',
    statusColor: 'text-green-400',
    description: 'Windows, macOS, and Linux support',
  },
  {
    icon: Smartphone,
    title: 'Android',
    status: 'Coming Soon',
    statusColor: 'text-yellow-400',
    description: 'Mobile automation via AccessibilityService',
  },
  {
    icon: Apple,
    title: 'iOS',
    status: 'Planned',
    statusColor: 'text-gray-400',
    description: 'Apple ecosystem support',
  },
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
            Privacy-first automation
          </h1>
          <p className="section-subtitle max-w-3xl">
            Six core capabilities that make Laryaa aOS unique: cloud intelligence with 
            local-only execution, self-healing automation, and zero PII exposure.
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

        {/* Roadmap */}
        <section className="mb-24">
          <p className="section-label">Roadmap</p>
          <h2 className="section-title">Platform availability</h2>
          <p className="section-subtitle max-w-2xl mb-12">
            Starting with Android, expanding to desktop and iOS.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <item.icon size={24} className="mb-4 text-[var(--text-muted)]" />
                <span className={`text-xs font-medium ${item.statusColor}`}>{item.status}</span>
                <h3 className="text-lg font-medium mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
