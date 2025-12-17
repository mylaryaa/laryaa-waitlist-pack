import { Navbar, Hero, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Wrench, Globe, Heart, CreditCard, Scale } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'RPA-level speed with AI-level intelligence. Faster than vision-based agents.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    description: 'No screenshots to cloud. Designed for HIPAA, GDPR, PCI-DSS compliance.',
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

const industries = [
  { icon: Heart, name: 'Healthcare', compliance: 'HIPAA Ready' },
  { icon: CreditCard, name: 'Finance', compliance: 'PCI-DSS Ready' },
  { icon: Scale, name: 'Legal', compliance: 'Privilege Protected' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* Trust Section */}
        <section className="py-16 border-t border-[var(--border)]">
          <p className="text-center text-sm text-[var(--text-muted)] mb-8">
            Designed for regulated industries
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {industries.map((industry) => (
              <div key={industry.name} className="flex items-center gap-3 text-[var(--text-muted)]">
                <industry.icon size={20} />
                <div>
                  <span className="text-[var(--text)] font-medium">{industry.name}</span>
                  <span className="text-xs ml-2 opacity-70">{industry.compliance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

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

        {/* Demo Video Section */}
        <section className="py-24 border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Demo</p>
            <h2 className="section-title mb-2">Laryaa aOS Demo v0.3.2</h2>
            <p className="section-subtitle mb-6">
              This is the demo of our Laryaa aOS. Version: v 0.3.2.<br />
              This demo is recorded and the prototype works on edge device - i3 processor, 8GB RAM, 128GB SSD.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/_kjtoN2PChY?si=7V8voyM-jorzIIFB"
                title="Laryaa aOS Demo v0.3.2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
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
              <Link href="/how-it-works" className="btn-secondary">
                See how it works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
