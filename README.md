# Laryaa aOS – Marketing Website

A modern, SEO-optimized, AI-scrapable Next.js 14 website for **Laryaa aOS** – the world's first RPA-smart automation platform powered by Project KONDOM architecture.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript
- **Database:** Supabase (PostgreSQL)
- **AI Scraping:** JSON-LD Structured Data

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the schema from `supabase/schema.sql`
3. Copy your project URL and anon key from Settings → API
4. Create `.env.local` from the example:

```bash
cp .env.local.example .env.local
```

5. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
laryaa-aos/
├── public/
│   ├── manifest.json
│   └── robots.txt          # AI crawler permissions
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx      # Root layout with SEO + JSON-LD
│   │   ├── page.tsx        # Home page
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   ├── product/        # Product page
│   │   ├── architecture/   # Architecture page
│   │   ├── industries/     # Industries page
│   │   ├── contact/        # Contact/Early Access page
│   │   └── api/
│   │       └── early-access/  # Form submission API
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── supabase.ts        # Supabase client
│       ├── database.types.ts  # TypeScript types
│       └── structured-data.ts # JSON-LD schemas
├── supabase/
│   └── schema.sql          # Database schema
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## AI Scraping Features

### JSON-LD Structured Data
- **Organization** schema with founder info
- **SoftwareApplication** schema with features
- **WebSite** schema with search action
- **FAQPage** schema with common questions

### robots.txt
Explicitly allows major AI crawlers:
- GPTBot (OpenAI)
- ChatGPT-User
- Google-Extended
- CCBot (Common Crawl)
- anthropic-ai / Claude-Web
- PerplexityBot
- Bytespider

### Sitemap
Auto-generated sitemap at `/sitemap.xml` with all pages.

## Supabase Integration

### Database Schema
- `early_access_submissions` table with:
  - Contact info (name, email, company)
  - Industry and use case
  - Status tracking (pending, contacted, converted, rejected)
  - Timestamps and notes

### API Endpoints
- `POST /api/early-access` - Submit early access request
- `GET /api/early-access?email=...` - Check if email exists

### Row Level Security
- Anonymous users can submit forms
- Authenticated users can read/update submissions

## SEO Features

- Full Open Graph and Twitter Card meta tags
- Structured metadata with Next.js Metadata API
- Semantic HTML structure
- Dynamic sitemap generation
- Mobile-responsive design

## Customization

### Update domain

1. Change `metadataBase` in `src/app/layout.tsx`
2. Update URLs in `src/lib/structured-data.ts`
3. Update sitemap base URL in `src/app/sitemap.ts`

### Add favicon/icons

Place the following in `public/`:
- `favicon.ico`
- `icon.svg`
- `apple-touch-icon.png`
- `og-image.png` (1200×630)
- `icon-192.png`
- `icon-512.png`
- `logo.png` (for structured data)

## License

© 2025 Laryaa. All rights reserved. Patent Pending.
