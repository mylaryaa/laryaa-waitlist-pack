import { Zap, Shield, Wrench, Globe, DollarSign, Target } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Designed for Speed',
    description:
      'Optimized execution path for common operations. Caches UI state locally for fast repeated actions without cloud round-trips.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Privacy',
    description:
      'Sensitive data is tokenized before planning. Cloud never sees PII, screenshots, or credentials. Designed for HIPAA and GDPR compliance.',
  },
  {
    icon: Wrench,
    title: 'Self-Healing Automation',
    description:
      'Adapts to UI changes automatically using multi-anchor detection. No manual maintenance when apps update.',
  },
  {
    icon: Globe,
    title: 'Offline-First',
    description:
      'Works without internet using on-device planning. Full data sovereignty with no vendor lock-in.',
  },
  {
    icon: DollarSign,
    title: 'No API Dependencies',
    description:
      'Automates any application through the UI layer. No integration required, no API costs, works with legacy systems.',
  },
  {
    icon: Target,
    title: 'Pioneer Program',
    description:
      'Join early adopters shaping the future of privacy-first automation. Get early access to new capabilities.',
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
