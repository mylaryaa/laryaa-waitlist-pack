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
            A zero-trust architecture where sensitive data never leaves your device during planning. 
            The cloud reasons on sanitized structure while all execution happens locally.
          </p>
        </article>
      </div>
    </section>
  )
}
