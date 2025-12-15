import { Navbar, Footer } from '@/components'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { insights } from '../data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  
  if (!insight) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: insight.title,
    description: insight.thesis,
    openGraph: {
      title: insight.title,
      description: insight.thesis,
      type: 'article',
      publishedTime: insight.publishDate,
      authors: ['Laryaa'],
      tags: insight.topics,
    },
  }
}

function generateArticleSchema(insight: typeof insights[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.thesis,
    datePublished: insight.publishDate,
    dateModified: insight.publishDate,
    author: {
      '@type': 'Organization',
      name: 'Laryaa',
      url: 'https://laryaa.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Laryaa',
      url: 'https://laryaa.com',
    },
    keywords: insight.topics.join(', '),
    articleSection: insight.category,
  }
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const insightIndex = insights.findIndex((i) => i.slug === slug)
  
  if (insightIndex === -1) {
    notFound()
  }

  const insight = insights[insightIndex]
  const prevInsight = insightIndex > 0 ? insights[insightIndex - 1] : null
  const nextInsight = insightIndex < insights.length - 1 ? insights[insightIndex + 1] : null
  const articleSchema = generateArticleSchema(insight)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          All Insights
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-[var(--text-muted)]">
              {String(insightIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--bg-alt)] text-[var(--text-muted)]">
              {insight.category}
            </span>
            <span className="text-sm text-[var(--text-muted)]">
              {new Date(insight.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="text-sm text-[var(--text-muted)]">· {insight.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
            {insight.title}
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            {insight.thesis}
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-12">
            {insight.content.intro}
          </p>

          {/* Sections */}
          {insight.content.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-medium mb-6">{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-[var(--text-muted)] leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          <section className="mt-16 p-8 bg-[var(--bg-alt)] rounded-xl">
            <h2 className="text-xl font-medium mb-4">Key Takeaway</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {insight.content.conclusion}
            </p>
          </section>
        </article>

        {/* Topics */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-muted)] mb-3">Topics covered</p>
          <div className="flex flex-wrap gap-2">
            {insight.topics.map((topic) => (
              <span
                key={topic}
                className="text-sm px-3 py-1 rounded-full bg-[var(--bg-alt)] text-[var(--text-muted)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-[var(--border)]">
          <div className="grid md:grid-cols-2 gap-6">
            {prevInsight ? (
              <Link
                href={`/insights/${prevInsight.slug}`}
                className="group p-6 border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-colors"
              >
                <span className="text-sm text-[var(--text-muted)] flex items-center gap-2 mb-2">
                  <ArrowLeft size={14} />
                  Previous
                </span>
                <span className="font-medium group-hover:text-[var(--text)] transition-colors line-clamp-2">
                  {prevInsight.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextInsight ? (
              <Link
                href={`/insights/${nextInsight.slug}`}
                className="group p-6 border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-colors text-right"
              >
                <span className="text-sm text-[var(--text-muted)] flex items-center justify-end gap-2 mb-2">
                  Next
                  <ArrowRight size={14} />
                </span>
                <span className="font-medium group-hover:text-[var(--text)] transition-colors line-clamp-2">
                  {nextInsight.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>

        {/* CTA */}
        <section className="mt-16 text-center py-12 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium mb-3">Questions about this analysis?</h2>
          <p className="text-[var(--text-muted)] mb-6">
            We discuss technical architecture with teams evaluating solutions.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Request Technical Discussion
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
