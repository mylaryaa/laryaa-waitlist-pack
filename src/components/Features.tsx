import { Zap, Shield, Wrench, Globe, DollarSign, Target } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Average 227ms per action – 10x faster than vision-based agents like OpenAI Atlas and Perplexity Browser. Maintains RPA-level speed while staying intelligent.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    description:
      'No screenshots to cloud. No PII exposure. HIPAA, GDPR, and PCI-DSS compliant by design. Perfect for healthcare, finance, and legal industries.',
  },
  {
    icon: Wrench,
    title: 'Self-Healing',
    description:
      'Automatically adapts to UI changes – window resize, theme change, app updates. Zero manual maintenance unlike traditional RPA that breaks silently.',
  },
  {
    icon: Globe,
    title: 'Offline-First',
    description:
      'Works without internet. Full data sovereignty. No vendor lock-in. Deploy on-premise or in air-gapped environments.',
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description:
      'Zero marginal cost for 90% of executions (cached path). No expensive vision API calls. $0 vs $10–50 per 1,000 actions.',
  },
  {
    icon: Target,
    title: 'Production Ready',
    description:
      'Not a demo. Not a prototype. Battle-tested architecture combining RPA speed with AI robustness.',
  },
]

export default function Features() {
  return (
    <section id="features" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Platform</span>
          <h2 className="section-title">6 Core Features of Laryaa aOS</h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          RPA speed, AI robustness, and strict privacy — in a single automation
          OS.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature) => (
          <article key={feature.title} className="card text-xs">
            <div className="font-semibold mb-1 text-gray-50 flex items-center gap-1.5">
              <feature.icon className="w-4 h-4 text-sky-400" />
              {feature.title}
            </div>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
