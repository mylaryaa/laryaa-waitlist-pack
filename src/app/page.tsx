import { Navbar, Hero, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Wrench, Globe } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: '227ms average action time. 10x faster than vision-based agents.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    description: 'No screenshots to cloud. HIPAA, GDPR, PCI-DSS compliant by design.',
  },
  {
    icon: Wrench,
    title: 'Self-Healing',
    description: 'Automatically adapts to UI changes. Zero manual maintenance.',
  },
  {
    icon: Globe,
    title: 'Offline-First',
    description: 'Works without internet. Full data sovereignty.',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* Highlights Section */}
        <section className="py-24 border-t border-[var(--border)]">
          <p className="section-label">Why Laryaa</p>
          <h2 className="section-title">Built for enterprises that can&apos;t compromise</h2>
          <p className="section-subtitle max-w-2xl mb-12">
            Legacy RPA breaks on UI changes. Vision agents are slow and leak data.
            Laryaa solves both.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="card group cursor-pointer transition-all">
                <item.icon size={24} className="mb-4 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors" />
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/product" className="link inline-flex items-center gap-2">
              See all features <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-[var(--border)]">
          <div className="max-w-2xl">
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Ready to automate without compromise?</h2>
            <p className="section-subtitle mb-8">
              Join our early access program and shape the future of enterprise automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request early access
                <ArrowRight size={16} />
              </Link>
              <Link href="/architecture" className="btn-secondary">
                Explore architecture
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
