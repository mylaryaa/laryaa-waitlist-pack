const comparisonData = [
  {
    feature: 'Speed (ms/action)',
    legacy: '~50ms ⚡',
    vision: '1500-2500ms 🐌',
    laryaa: '~227ms ⚡⚡',
  },
  {
    feature: 'Self-Healing',
    legacy: '✗ Manual fixes',
    vision: '✓ Auto-adapts',
    laryaa: '✓✓ Auto-adapts',
  },
  {
    feature: 'Privacy (Zero Cloud)',
    legacy: '✓ Local',
    vision: '✗ Cloud screenshots',
    laryaa: '✓✓ Zero-Trust',
  },
  {
    feature: 'HIPAA/GDPR Compliant',
    legacy: '~ Possible',
    vision: '✗ Fails',
    laryaa: '✓✓ Built-in',
  },
  {
    feature: 'Maintenance Cost',
    legacy: '✗ 30-40% annual',
    vision: '✓ 0%',
    laryaa: '✓✓ 0%',
  },
  {
    feature: 'Offline Capable',
    legacy: '✓ Yes',
    vision: '✗ Requires cloud',
    laryaa: '✓✓ Offline-first',
  },
  {
    feature: 'Cost per 1000 Actions',
    legacy: '~$0',
    vision: '$10-50',
    laryaa: '~$0',
  },
  {
    feature: 'UI Change Adaptation',
    legacy: '✗ Breaks',
    vision: '✓ Adapts (slow)',
    laryaa: '✓✓ Adapts (fast)',
  },
  {
    feature: 'Production Ready',
    legacy: '✗ High maintenance',
    vision: '✗ Too slow',
    laryaa: '✓✓ Battle-tested',
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
        <div
          className="w-full overflow-x-auto rounded-xl"
          style={{
            border: '1px solid rgba(31, 41, 55, 0.9)',
            background:
              'radial-gradient(circle at top left, rgba(56, 189, 248, 0.1), rgba(15, 23, 42, 0.96))',
          }}
        >
          <table className="w-full border-collapse text-xs min-w-[640px]">
            <thead style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
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
                  className="px-2.5 py-2 text-left font-semibold text-gray-200 text-[11px] border-b border-gray-800/80"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(56, 189, 248, 0.16), rgba(129, 140, 248, 0.18))',
                  }}
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
                    className="px-2.5 py-2 border-b border-gray-800/80"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(56, 189, 248, 0.16), rgba(129, 140, 248, 0.18))',
                    }}
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
