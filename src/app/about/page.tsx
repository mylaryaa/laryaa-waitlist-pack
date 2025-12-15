import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Linkedin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Laryaa is building the world\'s first Zero-Trust Autonomous Operating System (aOS) for enterprise automation. Designed in India, for the world.',
}

const values = [
  {
    title: 'Privacy First',
    description: 'Data never leaves the device unprotected.',
  },
  {
    title: 'Determinism',
    description: 'Every action must be explainable, traceable, auditable.',
  },
  {
    title: 'Accessibility',
    description: 'AI must work even on low-end hardware.',
  },
  {
    title: 'Empathy for Frontline Workers',
    description: 'Build for nurses, bankers, and agents — not only developers.',
  },
  {
    title: 'Sovereignty',
    description: 'India-first, globally relevant.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">About</p>
          <h1 className="section-title text-5xl md:text-6xl">
            About Laryaa
          </h1>
          <p className="section-subtitle max-w-3xl">
            Building the world&apos;s first Zero-Trust Autonomous Operating System for enterprise automation.
            Designed in India, for the world.
          </p>
        </section>

        {/* Company Description */}
        <section className="mb-24">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-[var(--text-muted)] mb-6">
              Laryaa aOS enables AI agents to safely operate on <strong className="text-[var(--text)]">legacy desktop apps, 
              hospital systems, banking portals, and VDI environments</strong> — without APIs, without integrations, 
              and without exposing any sensitive data.
            </p>
            <p className="text-xl leading-relaxed text-[var(--text-muted)] mb-6">
              Our core innovation is a <strong className="text-[var(--text)]">Hybrid Split-State Architecture</strong> (Patent Pending):
            </p>
            <ul className="text-lg text-[var(--text-muted)] space-y-3 mb-6 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-[var(--text)] font-medium">•</span>
                <span><strong className="text-[var(--text)]">Local Vision Engine</strong> reads the screen securely.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text)] font-medium">•</span>
                <span><strong className="text-[var(--text)]">Sanitization Layer</strong> removes PII and sensitive text.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text)] font-medium">•</span>
                <span><strong className="text-[var(--text)]">Cloud Planner</strong> receives an abstracted structure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text)] font-medium">•</span>
                <span><strong className="text-[var(--text)]">Local Execution Engine</strong> performs actions with deterministic accuracy.</span>
              </li>
            </ul>
            <p className="text-xl leading-relaxed text-[var(--text-muted)]">
              This allows enterprises in <strong className="text-[var(--text)]">healthcare, banking, government, insurance, 
              BPO, and telecom</strong> to deploy AI automation safely — even on old Windows systems and air-gapped desktops.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-4">Mission</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                To make enterprise automation universally accessible by enabling AI agents to operate 
                safely on any system — old, new, offline, or air-gapped — through Zero-Trust AI execution.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">Vision</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                A world where every worker has a personal AI that can understand screens, follow rules, 
                and perform tasks across any digital environment, privately and autonomously.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-[var(--border)] pl-6">
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-[var(--text-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Origin Story */}
        <section className="mb-24 p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">Our Origin</h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
            Laryaa began as a <strong className="text-[var(--text)]">Sales AI Co-Pilot</strong>, helping teams 
            generate pitches, personas, and outbound flows.
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
            But in building it, we discovered a bigger truth: <strong className="text-[var(--text)]">AI fails 
            inside Indian enterprises not because the models are weak, but because the infrastructure is incompatible.</strong>
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            This insight led us to build <strong className="text-[var(--text)]">Laryaa aOS</strong>, and the 
            Sales Co-Pilot now runs as a native application on our OS.
          </p>
        </section>

        {/* Founder */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Leadership</h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden relative">
              <Image
                src="/raju-biswal.png"
                alt="Raju Biswal - Founder & CEO of Laryaa"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">Raju Biswal</h3>
              <p className="text-[var(--text-muted)]">Founder & CEO</p>
              <a 
                href="https://www.linkedin.com/in/rajub1516/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-medium mb-4">Join us in building the future</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            We&apos;re hiring engineers who want to solve hard problems in enterprise AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="btn-primary">
              View open positions
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get early access
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
