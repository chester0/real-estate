# ReloKey Cyprus

**Your Key to Cyprus Living** — Real estate, relocation, and investment website for Cyprus with Limassol as the center of operations.

Live: [real-estate-dusky-six.vercel.app](https://real-estate-dusky-six.vercel.app)

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with custom brand design system
- **Fonts**: Montserrat (headings) + Open Sans (body) via `next/font/google`
- **Icons**: Lucide React
- **Forms**: Zod validation (client + server)
- **PDFs**: @react-pdf/renderer for branded downloadable guides
- **Deployment**: Vercel (static site generation)

## Brand

| Token | Value |
|-------|-------|
| Royal Blue | `#0A3D91` |
| Gold | `#C9A86A` |
| Light Gray | `#F4F4F4` |
| Heading Font | Montserrat 600/700/800 |
| Body Font | Open Sans 400/500/600 |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, why Cyprus stats, testimonials, CTA |
| `/about-cyprus` | Limassol neighborhoods, other cities, cost of living, PDF downloads |
| `/services` | Luxury Living, Investment Properties, Corporate Relocation with pricing tiers |
| `/properties` | Property grid with filters (city, type, price) |
| `/properties/[id]` | Individual property detail pages with features, amenities, contact sidebar |
| `/contact` | Contact form (Zod-validated), WhatsApp, phone, email, Calendly placeholder |
| `/blog` | SEO blog index with cover images |
| `/blog/[slug]` | Individual blog posts from markdown files |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API route
│   ├── about-cyprus/       # About Cyprus page
│   ├── blog/               # Blog index + [slug] detail
│   ├── contact/            # Contact page
│   ├── properties/         # Properties grid + [id] detail
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout (fonts, header, footer, JSON-LD)
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   ├── forms/              # ContactForm (client component)
│   ├── layout/             # Header, Footer, WhatsAppButton
│   ├── sections/           # Hero, CTABanner (reusable sections)
│   └── ui/                 # Button, Card, Container (design system)
├── content/blog/           # Markdown blog articles with frontmatter
├── lib/                    # Constants, images, properties data, blog reader
└── types/                  # TypeScript interfaces
public/downloads/           # Branded PDF guides and brochures
scripts/                    # PDF generation script
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Generate PDFs (optional — pre-built PDFs included)
npx tsx scripts/generate-pdfs.tsx
```

## Features

- **Responsive** — Mobile-first design, works on all devices
- **SEO Optimized** — Metadata, Open Graph, Twitter cards, JSON-LD structured data, sitemap, robots.txt
- **Accessible** — ARIA attributes, required fields, aria-live regions, semantic HTML
- **Performance** — Server components by default, optimized images via next/image, static generation
- **Branded PDFs** — Living in Limassol Guide, Investment Report, Property Buying Guide
- **Floating WhatsApp** — Quick contact CTA on every page
- **Blog System** — Markdown-based with frontmatter, cover images, static generation

## Sample Data

The site ships with 6 sample properties and 3 blog articles for demonstration. Property data is in `src/lib/properties.ts` and `src/lib/constants.ts`. Blog content is in `src/content/blog/`.

## Future Roadmap

- **i18n**: Multi-language support (Russian, Hebrew, Greek, Arabic) via next-intl
- **CMS Integration**: Connect to headless CMS for property management
- **Email Service**: Integrate Resend or Firebase for contact form notifications
- **Firebase Hosting**: Migration from Vercel to Firebase/GCP
- **Analytics**: Google Analytics or Plausible integration

## License

Private project. All rights reserved.
