# WiseK9 — Premium Dog Training Website

A production-ready Next.js 14 website for a professional dog training and behavioural therapy business.

---

## Tech Stack

| Tool           | Version  | Purpose                        |
|----------------|----------|--------------------------------|
| Next.js        | 14.2     | App Router, SSR, file-system routing |
| Tailwind CSS   | 3.4      | Utility-first styling          |
| Lucide React   | 0.383    | Icon library                   |
| Framer Motion  | 11       | (available, add where desired) |
| TypeScript     | 5        | Type safety                    |
| Google Fonts   | —        | Inter + Montserrat via next/font |

---

## Project Structure

```
wisek9-website/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar + Footer)
│   ├── globals.css         ← Base styles, utility classes
│   ├── page.tsx            ← Home page
│   ├── services/
│   │   └── page.tsx        ← Services page
│   ├── about/
│   │   └── page.tsx        ← About page
│   └── contact/
│       └── page.tsx        ← Contact page
├── components/
│   ├── Navbar.tsx          ← Sticky nav with mobile menu
│   └── Footer.tsx          ← Full footer with CTA strip
├── tailwind.config.js      ← Custom colour palette & tokens
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Colour Palette

| Token             | Hex       | Usage                              |
|-------------------|-----------|------------------------------------|
| `forest.DEFAULT`  | `#1B4332` | Primary brand colour, headings     |
| `forest.400`      | `#2D6A4F` | Hover states                       |
| `sage.DEFAULT`    | `#52796F` | Secondary / accent                 |
| `cream.DEFAULT`   | `#F8F5F0` | Background, light sections         |
| `paw`             | `#D4A853` | Gold accent — CTAs, highlights     |

---

## Customisation Checklist

- [ ] Replace `[Your Name]` on the About page with your real name
- [ ] Add your photo to the About page (replace the placeholder div)
- [ ] Update contact details (phone, email, location) in `Footer.tsx` and `contact/page.tsx`
- [ ] Replace the Google Maps placeholder on the Contact page with a real embed
- [ ] Update service prices to reflect your actual pricing
- [ ] Connect the contact form to your backend (Formspree, Resend, Nodemailer, etc.)
- [ ] Add real testimonials from your clients
- [ ] Update `metadata` in `app/layout.tsx` with your real SEO details
- [ ] Add your social media URLs in `Footer.tsx`
- [ ] Add real certifications / accreditation logos

---

## Connecting the Contact Form

The form currently simulates submission with a 1.5s delay. To wire it up:

### Option A — Formspree (no backend needed)
```tsx
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Option B — Resend (email API)
Create an API route at `app/api/contact/route.ts` and call it from the form.

---

## Adding Real Images

The codebase is ready for `next/image`. Swap any placeholder divs with:

```tsx
import Image from 'next/image';

<Image
  src="/images/trainer.jpg"   // or an Unsplash URL
  alt="Your trainer name"
  fill
  className="object-cover"
/>
```

---

## Deployment

```bash
# Deploy to Vercel (recommended — zero config for Next.js)
npx vercel

# Or build for any Node.js host
npm run build
npm run start
```

---

## License

MIT — free to use and modify for your business.
