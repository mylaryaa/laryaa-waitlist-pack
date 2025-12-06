import { Heart, CreditCard, Scale } from 'lucide-react'

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    badge: 'HIPAA Compliant',
    market: 'Market: $2.9B, 18% CAGR',
    description:
      'EMR data extraction, lab report processing, billing automation. No PHI exposure to cloud.',
  },
  {
    icon: CreditCard,
    name: 'Finance',
    badge: 'PCI-DSS & SOC2',
    market: 'Market: $4.1B, 22% CAGR',
    description:
      'KYC automation, transaction reconciliation, regulatory reporting. On-premise deployment.',
  },
  {
    icon: Scale,
    name: 'Legal',
    badge: 'Attorney-Client Privilege',
    market: 'Market: $800M, 15% CAGR',
    description:
      'Contract analysis, document management, e-discovery. Local processing only.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Who It&apos;s For</span>
          <h2 className="section-title">Target Industries</h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          Built for enterprises where privacy, compliance, and latency are
          non‑negotiable.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {industries.map((industry) => (
          <article key={industry.name} className="card text-xs">
            <div className="flex justify-between items-center mb-1.5">
              <div className="font-semibold text-gray-50 flex items-center gap-1.5">
                <industry.icon className="w-4 h-4 text-violet-400" />
                {industry.name}
              </div>
              <span className="text-[11px] text-violet-300">
                {industry.market}
              </span>
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              {industry.badge}
            </div>
            <p className="text-gray-400 leading-relaxed">
              {industry.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
