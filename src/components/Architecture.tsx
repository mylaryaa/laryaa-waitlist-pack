export default function Architecture() {
  return (
    <section id="architecture" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Architecture</span>
          <h2 className="section-title">Inside Project KONDOM</h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          Knows Only Necessary Data On Machine – a zero-trust automation
          architecture.
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
                UI Change Detection (~100ms)
              </strong>
              <br />
              Perceptual hash comparison detects window resize, theme change, or
              app update.
            </li>
            <li>
              <strong className="text-gray-200">
                Fast Path (90% of runs) (~150ms)
              </strong>
              <br />
              If UI unchanged: Use cached coordinates from Token Binding Table.
            </li>
            <li>
              <strong className="text-gray-200">
                Healing Path (10% of runs) (~1700ms first, ~150ms cached after)
              </strong>
              <br />
              If UI changed: Invoke 5-Anchor Fusion (OCR, Role, Spatial,
              Context, Semantic).
            </li>
            <li>
              <strong className="text-gray-200">Living Cache Update</strong>
              <br />
              Update TBT with healed coordinates, reset to fast path for future
              runs.
            </li>
          </ol>
          <p className="mt-2 text-[11px] text-gray-500">
            The result: RPA-level speed for steady-state operations and
            AI-level robustness for UI changes.
          </p>
        </article>

        {/* Why KONDOM */}
        <article className="card-elevated text-xs">
          <h3 className="font-semibold mb-1.5 text-gray-50 text-[13px]">
            Why &ldquo;KONDOM&rdquo;?
          </h3>
          <p className="text-gray-200 mb-2">
            <strong>K</strong>nows <strong>O</strong>nly{' '}
            <strong>N</strong>ecessary <strong>D</strong>ata{' '}
            <strong>O</strong>n <strong>M</strong>achine
          </p>
          <p className="text-gray-400 leading-relaxed">
            A zero-trust architecture that ensures sensitive data never leaves
            the device. PII is tokenized before planning, execution happens
            locally with rehydration, and healing operates on local UI state
            without cloud screenshots.
          </p>
        </article>
      </div>
    </section>
  )
}
