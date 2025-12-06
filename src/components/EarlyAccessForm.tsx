'use client'

import { useState } from 'react'

const industryOptions = [
  'Healthcare',
  'Finance',
  'Legal',
  'Government',
  'Enterprise IT',
  'Other',
]

const actionOptions = ['0-10k', '10k-100k', '100k-1m', '1m+']

export default function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="early-access" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Access</span>
          <h2 className="section-title">Get Early Access</h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          Join the waitlist for Laryaa aOS. Limited spots for design partners.
        </p>
      </div>

      <div className="card-elevated grid lg:grid-cols-[1.1fr_1fr] gap-5 p-4">
        {/* Intro */}
        <div>
          <h3 className="text-[15px] font-semibold mb-1.5 text-gray-50">
            Design Partner Program
          </h3>
          <p className="text-xs text-gray-400 mb-2.5 leading-relaxed">
            We&apos;re onboarding a small number of healthcare, finance, legal
            and mission-critical teams as early design partners for Laryaa aOS.
          </p>
          <ul className="text-xs text-gray-400 pl-4 list-disc mb-2 space-y-0.5">
            <li>Co-design production-grade automations with the founding team.</li>
            <li>Deploy on-premise or in air‑gapped environments.</li>
            <li>Shape the roadmap of the world&apos;s first RPA-smart automation OS.</li>
          </ul>
          <p className="text-[11px] text-gray-500">
            Fill out the form and we&apos;ll reach out with next steps if
            there&apos;s a strong fit.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-2.5 text-xs">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-gray-200">
              Full Name<span className="text-orange-500 ml-0.5">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-200">
              Email<span className="text-orange-500 ml-0.5">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="company" className="text-gray-200">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="industry" className="text-gray-200">
              Industry<span className="text-orange-500 ml-0.5">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              required
              defaultValue=""
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition"
            >
              <option value="" disabled>
                Select your industry
              </option>
              {industryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <label htmlFor="useCase" className="text-gray-200">
              Primary Use Case<span className="text-orange-500 ml-0.5">*</span>
            </label>
            <textarea
              id="useCase"
              name="primaryUseCase"
              required
              rows={3}
              placeholder="Describe the workflows you want to automate…"
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition resize-y"
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <label htmlFor="actions" className="text-gray-200">
              Estimated Monthly Actions
            </label>
            <select
              id="actions"
              name="estimatedMonthlyActions"
              defaultValue=""
              className="rounded-lg border border-gray-600/70 bg-slate-900/90 px-2.5 py-1.5 text-gray-200 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition"
            >
              <option value="" disabled>
                Select a range
              </option>
              {actionOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
            <button type="submit" className="btn-primary">
              Request Early Access
            </button>
            <span className="text-[11px] text-gray-500">
              We&apos;ll never send screenshots or PHI/PII to the cloud.
            </span>
          </div>

          {submitted && (
            <p className="sm:col-span-2 text-green-400 text-[11px] mt-1">
              Thank you — your request has been recorded. We&apos;ll reach out
              if there&apos;s a fit for the current design partner batch.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
