import Link from 'next/link'

const footerLinks = {
  Product: [
    { href: '/product', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/security', label: 'Security' },
    { href: '/industries', label: 'Industries' },
    { href: '/insights#faq', label: 'FAQ' },
  ],
  Resources: [
    { href: '/insights', label: 'Insights' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-lg font-medium mb-4 block">
              Laryaa
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Zero-Trust Autonomous Operating System for enterprise automation. 
              AI that works where APIs don&apos;t.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2025 Laryaa Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Designed in India · Patent Pending
          </p>
        </div>
      </div>
    </footer>
  )
}
