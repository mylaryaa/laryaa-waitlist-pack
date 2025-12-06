import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-16">
      <div className="max-w-4xl">
        {/* Label */}
        <p className="section-label">Introducing Laryaa aOS</p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-8 leading-[1.1]">
          Fast like RPA.
          <br />
          Smart like AI.
          <br />
          <span className="text-[var(--text-muted)]">Private by design.</span>
        </h1>

        {/* Subtitle */}
        <p className="section-subtitle max-w-2xl mb-10">
          The world&apos;s first RPA-smart automation platform. 10x faster than
          vision agents, zero maintenance cost, 100% HIPAA compliant.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="btn-primary">
            Get early access
            <ArrowRight size={16} />
          </Link>
          <Link href="/product" className="btn-secondary">
            Learn more
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[var(--border)]">
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">227ms</p>
            <p className="text-sm text-[var(--text-muted)]">Average action time</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">0%</p>
            <p className="text-sm text-[var(--text-muted)]">Maintenance cost</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">100%</p>
            <p className="text-sm text-[var(--text-muted)]">HIPAA compliant</p>
          </div>
        </div>
      </div>
    </section>
  )
}
