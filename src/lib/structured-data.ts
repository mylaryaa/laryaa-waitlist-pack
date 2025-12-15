// JSON-LD Structured Data for AI scraping and SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Laryaa',
  url: 'https://laryaa.com',
  logo: 'https://laryaa.com/logo.png',
  description: 'The world\'s first RPA-smart automation platform. Fast like RPA, smart like AI, private by design.',
  founder: {
    '@type': 'Person',
    name: 'Raju',
  },
  foundingDate: '2024',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://laryaa.com/contact',
  },
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Laryaa aOS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows, macOS, Linux',
  description: 'RPA-smart automation platform with zero-trust security and self-healing capabilities. Fast like RPA, smart like AI.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Early access program',
  },
  featureList: [
    'RPA-level speed - faster than vision-based agents',
    'Zero-trust security - no screenshots to cloud',
    'HIPAA, GDPR, PCI-DSS compliant by design',
    'Self-healing - automatically adapts to UI changes',
    'Offline-first - works without internet',
    'Zero maintenance cost',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Laryaa aOS',
  url: 'https://laryaa.com',
  description: 'The world\'s first Zero-Trust Autonomous Operating System for enterprise automation.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://laryaa.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Laryaa aOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laryaa aOS is the world\'s first RPA-smart automation platform that combines the speed of traditional RPA with AI-level intelligence and zero-trust security. It\'s designed for enterprises in healthcare, finance, and legal industries where privacy and compliance are non-negotiable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is Laryaa aOS compared to other automation tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laryaa aOS delivers RPA-level speed, making it significantly faster than vision-based agents. It maintains fast execution while providing AI-level adaptability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Laryaa aOS HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Laryaa aOS is 100% HIPAA compliant by design. It uses a zero-trust architecture that ensures no screenshots or PII are ever sent to the cloud. All sensitive processing happens locally on your machine.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Hybrid Split-State Architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laryaa\'s Hybrid Split-State Architecture is a zero-trust design where sensitive data never leaves the device. The cloud receives only sanitized abstractions for planning, while all execution and sensitive data processing happens locally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Laryaa aOS work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Laryaa aOS is offline-first. It works without internet connection, provides full data sovereignty, and can be deployed in air-gapped environments.',
      },
    },
  ],
}

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Laryaa aOS',
  description: 'RPA-smart automation platform with zero-trust security',
  brand: {
    '@type': 'Brand',
    name: 'Laryaa',
  },
  category: 'Enterprise Software > Automation > RPA',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    price: '0',
    priceCurrency: 'USD',
    priceValidUntil: '2025-12-31',
    url: 'https://laryaa.com/contact',
  },
}

// Helper to generate all schemas for a page
export function generateStructuredData(schemas: object[]) {
  return schemas.map((schema) => JSON.stringify(schema))
}
