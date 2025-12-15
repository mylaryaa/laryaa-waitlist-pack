import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'
import { insights, faqs } from './data'
import { FAQSection } from './faq-section'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Technical deep-dives into enterprise automation constraints, privacy architecture, and the challenges of deploying AI in regulated environments.',
}

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero */}
        <section className="mb-24">
          <p className="section-label">Insights</p>
          <h1 className="section-title text-5xl md:text-6xl">
            How We Think About Automation
          </h1>
          <p className="section-subtitle max-w-3xl">
            Technical deep-dives into the real constraints of enterprise AI deployment — 
            from legacy system challenges to privacy architecture decisions.
          </p>
        </section>

        {/* Insights Grid */}
        <section className="mb-24">
          <div className="grid gap-6">
            {insights.map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block p-6 md:p-8 border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-[var(--text-muted)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--bg-alt)] text-[var(--text-muted)]">
                        {insight.category}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        {new Date(insight.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        · {insight.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-[var(--text)] transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                      {insight.thesis}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {insight.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded bg-[var(--bg-alt)] text-[var(--text-muted)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-[var(--text-muted)] group-hover:text-[var(--text)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-24 scroll-mt-24">
          <div className="border-t border-[var(--border)] pt-16">
            <h2 className="text-3xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-[var(--text-muted)] mb-12 max-w-2xl">
              Common questions about our architecture, capabilities, and approach.
            </p>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-medium mb-4">Have more questions?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            We&apos;re happy to discuss technical details with teams evaluating automation solutions.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
