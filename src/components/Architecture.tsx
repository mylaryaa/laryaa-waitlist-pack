export default function Architecture() {
  return (
    <section id="architecture" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Architecture</span>
          <h2 className="section-title">Hybrid Split-State Architecture</h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          Zero-trust automation where sensitive data never leaves your device.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
        {/* How It Works */}
        <article className="card-elevated text-xs">
          <h3 className="font-semibold mb-1.5 text-gray-50 text-[13px]">
            How It Works
          </h3>
          <ol className="list-decimal pl-4 text-gray-400 leading-relaxed space-y-1.5">
            <li>
              <strong className="text-gray-200">
                Capture & Protect
              </strong>
              <br />
              UI state is captured locally. Your sensitive data stays on your device.
            </li>
            <li>
              <strong className="text-gray-200">
                Plan Intelligently
              </strong>
              <br />
              AI plans your workflow while your data remains private. Works offline too.
            </li>
            <li>
              <strong className="text-gray-200">
                Execute Locally
              </strong>
              <br />
              All actions run on your machine through native automation.
            </li>
            <li>
              <strong className="text-gray-200">Adapt Automatically</strong>
              <br />
              When apps change, we adapt automatically. No manual maintenance.
            </li>
          </ol>
          <p className="mt-2 text-[11px] text-gray-500">
            RPA-level speed. AI-level robustness. Enterprise-grade privacy.
          </p>
        </article>

        {/* Zero-Trust Guarantee */}
        <article className="card-elevated text-xs">
          <h3 className="font-semibold mb-1.5 text-gray-50 text-[13px]">
            Zero-Trust Guarantee
          </h3>
          <ul className="text-gray-400 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-gray-200">•</span>
              <span><strong className="text-gray-200">No screenshots to cloud</strong> — raw screen data never leaves your device</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-200">•</span>
              <span><strong className="text-gray-200">PII sanitization</strong> — sensitive data is removed before any cloud communication</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-200">•</span>
              <span><strong className="text-gray-200">Local execution</strong> — all actions happen on your infrastructure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-200">•</span>
              <span><strong className="text-gray-200">Offline capable</strong> — works without internet in air-gapped environments</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
