import { Navbar, Footer } from '@/components'
import { ArrowRight, Mail, Cpu, Eye, Layers } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Laryaa and help build the world\'s first Zero-Trust Autonomous OS for enterprise automation. We\'re hiring engineers in Windows automation, ML, and full-stack.',
}

const openings = [
  {
    icon: Cpu,
    title: 'Senior Windows Automation Engineer',
    type: 'Full-time',
    location: 'Remote (India)',
    description: 'Make our Agents FAST, ROBUST, and RELIABLE. You\'ll be building the hands of our AI.',
    responsibilities: [
      'Build and optimize Windows automation pipelines',
      'Work with Win32 API, UIAutomationCore, and Accessibility APIs',
      'Implement computer vision anchoring and OCR pipelines',
      'Optimize latency and improve execution reliability',
    ],
    requirements: [
      'Python or C# for Windows API automation',
      'Experience with Win32 API, UIAutomationCore, Accessibility API',
      'Background in RPA (UiPath, BluePrism), game bots, or test automation',
      'Understanding of OCR and computer vision anchoring',
    ],
  },
  {
    icon: Eye,
    title: 'ML Engineer – Edge Vision & Optimization',
    type: 'Full-time',
    location: 'Remote (India)',
    description: 'Build the eyes of our AI. Fast local inference with tiny, specialized models.',
    responsibilities: [
      'Optimize models for fast local inference (Gemma 2B, Moondream, OCR)',
      'Implement quantization (INT4, INT8, OpenVINO, ONNX)',
      'Train specialized detectors: buttons, regions, icons',
      'Reduce inference latency while maintaining accuracy',
    ],
    requirements: [
      'Experience with edge ML deployment and optimization',
      'Proficiency in PyTorch/TensorFlow and ONNX',
      'Understanding of quantization techniques',
      'Experience training small, task-specific vision models',
    ],
  },
  {
    icon: Layers,
    title: 'Founding Full Stack Engineer',
    type: 'Full-time',
    location: 'Remote (India)',
    description: 'Build the brain-shell. Everything above the OS: dashboard, APIs, deployment.',
    responsibilities: [
      'Build agent server and API layer',
      'Create dashboard for monitoring and management',
      'Implement logging, replay, and user access management',
      'Build installer, packaging, and auto-update mechanism',
    ],
    requirements: [
      'Strong full-stack experience (React/Next.js + Node/Python)',
      'Experience building developer tools or enterprise software',
      'Understanding of desktop application packaging',
      'Ability to work across the entire stack',
    ],
  },
]

const perks = [
  'Equity in a patent-pending deep-tech startup',
  'Work on hard, meaningful problems',
  'Remote-first culture',
  'Direct impact on product direction',
  'Learn from building 0→1 in enterprise AI',
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Careers</p>
          <h1 className="section-title text-5xl md:text-6xl">
            Build the future of enterprise AI
          </h1>
          <p className="section-subtitle max-w-3xl">
            We&apos;re looking for engineers who want to solve hard problems. 
            Help us bring safe, sovereign AI automation to a billion users.
          </p>
        </section>

        {/* What we're building */}
        <section className="mb-24 p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">What we&apos;re building</h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            Laryaa aOS is the world&apos;s first Zero-Trust Autonomous Operating System for enterprise automation. 
            We&apos;re building AI that works where APIs don&apos;t — on legacy hospital systems, banking portals, 
            and government desktops.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-medium mb-2">The Hands</div>
              <p className="text-sm text-[var(--text-muted)]">Windows Automation</p>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2">The Eyes</div>
              <p className="text-sm text-[var(--text-muted)]">Vision Models</p>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2">The Brain</div>
              <p className="text-sm text-[var(--text-muted)]">Platform & Shell</p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Open Positions</h2>
          <div className="space-y-8">
            {openings.map((job) => (
              <div key={job.title} className="border border-[var(--border)] rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--bg-alt)] rounded-lg">
                      <job.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-[var(--bg-alt)] rounded">{job.type}</span>
                        <span className="text-xs px-2 py-1 bg-[var(--bg-alt)] rounded">{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[var(--text-muted)] mb-6">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium mb-3">What you&apos;ll do</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                          <span className="text-sky-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">What we&apos;re looking for</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                          <span className="text-sky-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href={`mailto:careers@laryaa.com?subject=Application: ${job.title}`}
                  className="btn-primary inline-flex"
                >
                  Apply now
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Join */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8">Why join Laryaa</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3 p-4 bg-[var(--bg-alt)] rounded-lg">
                <span className="text-sky-400">✓</span>
                <span className="text-sm">{perk}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 md:p-12 bg-[var(--bg-alt)] rounded-2xl">
          <h2 className="text-2xl font-medium mb-4">Don&apos;t see a perfect fit?</h2>
          <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
            We&apos;re always looking for exceptional people. Send us your resume and tell us what you&apos;d like to build.
          </p>
          <a 
            href="mailto:careers@laryaa.com?subject=General Application"
            className="btn-primary inline-flex"
          >
            <Mail size={16} />
            careers@laryaa.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
