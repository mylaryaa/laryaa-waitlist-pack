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
          Cloud intelligence.
          <br />
          Local execution.
          <br />
          <span className="text-[var(--text-muted)]">Zero-trust by design.</span>
        </h1>

        {/* Subtitle */}
        <p className="section-subtitle max-w-2xl mb-10">
          The first split-state AI agent. Your data never leaves your device during planning.
          Self-healing automation that works offline.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="btn-primary">
            Join Pioneer Program
            <ArrowRight size={16} />
          </Link>
          <Link href="/product" className="btn-secondary">
            Learn more
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[var(--border)]">
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">Local</p>
            <p className="text-sm text-[var(--text-muted)]">All execution on-device</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">Zero</p>
            <p className="text-sm text-[var(--text-muted)]">PII sent to cloud</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-normal mb-1">100%</p>
            <p className="text-sm text-[var(--text-muted)]">Offline capable</p>
          </div>
        </div>
      </div>
    </section>
  )
}
