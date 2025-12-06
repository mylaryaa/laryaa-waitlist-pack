const comparisonData = [
  {
    feature: 'Execution Speed',
    legacy: 'Fast ⚡',
    vision: 'Slow 🐌',
    laryaa: 'Fast ⚡',
  },
  {
    feature: 'Self-Healing',
    legacy: '✗ Manual fixes',
    vision: '✓ Auto-adapts',
    laryaa: '✓✓ Multi-anchor',
  },
  {
    feature: 'Data Privacy',
    legacy: '✓ Local',
    vision: '✗ Cloud screenshots',
    laryaa: '✓✓ Zero-Trust',
  },
  {
    feature: 'Compliance Ready',
    legacy: '~ Possible',
    vision: '✗ Fails',
    laryaa: '✓✓ Designed for it',
  },
  {
    feature: 'Maintenance',
    legacy: '✗ High',
    vision: '✓ Low',
    laryaa: '✓✓ Self-healing',
  },
  {
    feature: 'Offline Capable',
    legacy: '✓ Yes',
    vision: '✗ Requires cloud',
    laryaa: '✓✓ Offline-first',
  },
  {
    feature: 'API Dependencies',
    legacy: '✗ Per-app setup',
    vision: '✓ None',
    laryaa: '✓✓ None',
  },
  {
    feature: 'UI Change Handling',
    legacy: '✗ Breaks',
    vision: '✓ Adapts',
    laryaa: '✓✓ Adapts',
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="mb-9">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <span className="section-eyebrow">Benchmark</span>
          <h2 className="section-title">
            Legacy RPA vs Vision Agents vs Laryaa aOS
          </h2>
        </div>
        <p className="text-xs text-gray-400 max-w-md">
          Why existing tools either break on UI changes or leak your data to the
          cloud.
        </p>
      </div>

      <div className="card-elevated p-4">
        <div className="comparison-table-wrapper w-full overflow-x-auto rounded-xl border border-gray-800/90">
          <table className="w-full border-collapse text-xs min-w-[640px]">
            <thead className="bg-slate-900/95">
              <tr>
                <th className="px-2.5 py-2 text-left font-semibold text-gray-200 text-[11px] border-b border-gray-800/80">
                  Feature
                </th>
                <th className="px-2.5 py-2 text-left font-semibold text-gray-200 text-[11px] border-b border-gray-800/80">
                  Legacy RPA (UiPath, AA)
                </th>
                <th className="px-2.5 py-2 text-left font-semibold text-gray-200 text-[11px] border-b border-gray-800/80">
                  Vision Agents (OpenAI Atlas, Perplexity)
                </th>
                <th
                  className="px-2.5 py-2 text-left font-semibold text-gray-200 text-[11px] border-b border-gray-800/80 bg-gradient-to-r from-sky-400/16 to-indigo-400/18"
                >
                  Laryaa aOS (Project KONDOM)
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature}>
                  <td className="px-2.5 py-2 text-gray-400 border-b border-gray-800/80">
                    <strong className="text-gray-200">{row.feature}</strong>
                  </td>
                  <td className="px-2.5 py-2 text-gray-400 border-b border-gray-800/80">
                    {row.legacy}
                  </td>
                  <td className="px-2.5 py-2 text-gray-400 border-b border-gray-800/80">
                    {row.vision}
                  </td>
                  <td
                    className="px-2.5 py-2 border-b border-gray-800/80 bg-gradient-to-r from-sky-400/16 to-indigo-400/18"
                  >
                    <strong className="text-gray-200">{row.laryaa}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-2.5 text-xs text-gray-400">
          <strong className="text-gray-200">The Verdict:</strong> Legacy RPA is
          fast but breaks on UI changes. Vision agents are smart but too slow
          and violate privacy.{' '}
          <strong className="text-gray-200">
            Laryaa aOS is the only platform that solves both problems.
          </strong>
        </p>
      </div>
    </section>
  )
}
