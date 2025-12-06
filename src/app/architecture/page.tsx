import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Learn about Project KONDOM - the zero-trust architecture that powers Laryaa aOS. Knows Only Necessary Data On Machine.',
}

const steps = [
  {
    number: '01',
    title: 'Detect Changes',
    time: 'Instant',
    description: 'Instantly recognizes when applications update, resize, or change themes.',
  },
  {
    number: '02',
    title: 'Fast Execution',
    time: 'Optimized',
    description: 'Uses local cached paths for maximum speed. Most operations take the fast path.',
  },
  {
    number: '03',
    title: 'Adaptive Recovery',
    time: 'Automatic',
    description: 'When UI changes, multi-signal matching automatically finds the right elements. No manual updates needed.',
  },
  {
    number: '04',
    title: 'Continuous Improvement',
    time: 'Always',
    description: 'The system learns and gets faster with every run. Recovery paths become fast paths.',
  },
]

const principles = [
  {
    title: 'Zero Cloud Screenshots',
    description: 'All visual processing stays on your device. We never send screenshots to external servers.',
  },
  {
    title: 'PII Protection',
    description: 'Sensitive data is never sent externally. Only you have access to your information.',
  },
  {
    title: 'Local Processing',
    description: 'Everything runs on your machine. No external dependencies for any operation.',
  },
  {
    title: 'Air-Gap Ready',
    description: 'Works completely offline. Deploy in disconnected environments with full functionality.',
  },
]

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Architecture</p>
          <h1 className="section-title text-5xl md:text-6xl">
            Project KONDOM
          </h1>
          <p className="section-subtitle max-w-3xl mb-8">
            <strong>K</strong>nows <strong>O</strong>nly <strong>N</strong>ecessary{' '}
            <strong>D</strong>ata <strong>O</strong>n <strong>M</strong>achine.
            A zero-trust architecture that ensures sensitive data never leaves the device.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-12">How it works</h2>
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-[100px_1fr] gap-6 py-8 ${
                  index !== steps.length - 1 ? 'border-b border-[var(--border)]' : ''
                }`}
              >
                <div>
                  <span className="text-4xl font-light text-[var(--text-muted)]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <span className="text-sm text-[var(--text-muted)] bg-[var(--bg-alt)] px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zero-Trust Principles */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-4">Zero-trust principles</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">
            Every design decision in Project KONDOM prioritizes data sovereignty
            and privacy without sacrificing performance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="border-l-2 border-[var(--border)] pl-6">
                <h3 className="text-lg font-medium mb-2">{principle.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Result */}
        <section className="mb-24 p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">The result</h2>
          <p className="text-xl leading-relaxed max-w-3xl">
            RPA-level speed for steady-state operations. AI-level robustness for UI changes.
            Enterprise-grade privacy for regulated industries.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get early access
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
