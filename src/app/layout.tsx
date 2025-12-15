import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
    default: 'Laryaa aOS – Zero-Trust Autonomous Operating System',
    template: '%s | Laryaa aOS',
  },
  description:
    'Laryaa aOS – The world\'s first Zero-Trust Autonomous Operating System. Fast like RPA, smart like AI, private by design. HIPAA, GDPR, PCI-DSS compliant.',
  keywords: [
    'RPA automation',
    'AI automation',
    'enterprise automation',
    'HIPAA compliant automation',
    'GDPR compliant',
    'PCI-DSS automation',
    'healthcare automation',
    'finance automation',
    'legal automation',
    'zero-trust automation',
    'self-healing RPA',
    'offline automation',
    'autonomous operating system',
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
    title: 'Laryaa aOS – Zero-Trust Autonomous Operating System',
    description:
      'Fast Like RPA. Smart Like AI. Private by Design. The world\'s first Zero-Trust Autonomous Operating System for enterprise automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laryaa aOS – Zero-Trust Autonomous Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laryaa aOS – RPA-Smart Automation Platform',
    description:
      'Fast Like RPA. Smart Like AI. Private by Design. 10x faster than vision agents, 100% HIPAA compliant, 0% maintenance cost.',
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
