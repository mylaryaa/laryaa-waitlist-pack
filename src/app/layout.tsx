import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components'
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  faqSchema,
} from '@/lib/structured-data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf9f7',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://laryaa.com'),
  title: {
    default: 'Laryaa aOS – Zero-Trust AI Agent for Enterprise Automation',
    template: '%s | Laryaa aOS',
  },
  description:
    'Laryaa aOS – Zero-Trust AI Agent that\'s fast like RPA, smart like AI, private by design. Self-healing automation for healthcare, finance & legal. HIPAA, GDPR, PCI-DSS compliant. UiPath alternative with no screenshots to cloud.',
  keywords: [
    'AI agent',
    'AI automation agent',
    'RPA automation',
    'RPA alternative',
    'UiPath alternative',
    'Automation Anywhere alternative',
    'self-healing RPA',
    'enterprise automation',
    'HIPAA compliant automation',
    'HIPAA compliant RPA',
    'healthcare automation software',
    'medical records automation',
    'GDPR compliant automation',
    'PCI-DSS automation',
    'finance automation',
    'banking automation',
    'legal automation',
    'zero-trust automation',
    'zero-trust AI agent',
    'offline automation',
    'air-gapped automation',
    'desktop automation',
    'Windows automation',
    'autonomous operating system',
    'computer use agent',
    'screen automation without screenshots',
    'vision agent alternative',
    'Claude computer use alternative',
    'Laryaa',
    'Laryaa aOS',
  ],
  authors: [{ name: 'Raju', url: 'https://laryaa.com' }],
  creator: 'Laryaa',
  publisher: 'Laryaa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laryaa.com',
    siteName: 'Laryaa aOS',
    title: 'Laryaa aOS – Zero-Trust AI Agent | UiPath Alternative',
    description:
      'AI agent that\'s fast like RPA, smart like AI, private by design. Self-healing automation for HIPAA, GDPR, PCI-DSS environments. No screenshots to cloud.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laryaa aOS – Zero-Trust AI Agent for Enterprise Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laryaa aOS – AI Agent Without Cloud Screenshots',
    description:
      'Self-healing RPA alternative. 10x faster than vision agents, HIPAA compliant, zero maintenance. No screenshots to cloud ever.',
    images: ['/og-image.png'],
    creator: '@laryaa_aos',
  },
  alternates: {
    canonical: 'https://laryaa.com',
    languages: {
      'en': 'https://laryaa.com',
      'en-US': 'https://laryaa.com',
      'en-GB': 'https://laryaa.com',
      'en-IN': 'https://laryaa.com',
      'x-default': 'https://laryaa.com',
    },
  },
    category: 'technology',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }): JSX.Element {
    return (
      <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for AI Scraping */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
