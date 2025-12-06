'use client'

import { Navbar, Footer } from '@/components'
import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

const industryOptions = [
  'Healthcare',
  'Finance',
  'Legal',
  'Government',
  'Enterprise IT',
  'Other',
]

const actionOptions = ['0-10k', '10k-100k', '100k-1m', '1m+']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      company: formData.get('company'),
      industry: formData.get('industry'),
      primaryUseCase: formData.get('primaryUseCase'),
      estimatedMonthlyActions: formData.get('estimatedMonthlyActions'),
    }

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
          <section className="min-h-[60vh] flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--text)] flex items-center justify-center mb-8">
              <Check size={32} className="text-[var(--bg)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
              Thank you
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-md">
              We&apos;ve received your request. Our team will reach out within 24 hours
              if there&apos;s a fit for the current design partner batch.
            </p>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <p className="section-label">Contact</p>
            <h1 className="section-title text-5xl md:text-6xl">
              Get early access
            </h1>
            <p className="section-subtitle mb-12">
              Join our design partner program. Limited spots available for
              healthcare, finance, and legal teams.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-2">What you get</h3>
                <ul className="space-y-2 text-[var(--text-muted)]">
                  <li>• Co-design production-grade automations with our team</li>
                  <li>• Deploy on-premise or in air-gapped environments</li>
                  <li>• Shape the roadmap of Laryaa aOS</li>
                  <li>• Priority support and onboarding</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Our commitment</h3>
                <p className="text-[var(--text-muted)]">
                  We&apos;ll never send screenshots or PII to the cloud.
                  Project KONDOM is private by design.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-[var(--text-muted)]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-[var(--text-muted)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industry <span className="text-[var(--text-muted)]">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Select industry
                    </option>
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium mb-2">
                  Primary Use Case <span className="text-[var(--text-muted)]">*</span>
                </label>
                <textarea
                  id="useCase"
                  name="primaryUseCase"
                  required
                  rows={4}
                  placeholder="Describe the workflows you want to automate..."
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label htmlFor="actions" className="block text-sm font-medium mb-2">
                  Estimated Monthly Actions
                </label>
                <select
                  id="actions"
                  name="estimatedMonthlyActions"
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent focus:border-[var(--text)] focus:outline-none transition-colors"
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {actionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request early access
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
