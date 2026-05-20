# Pavel Piatrovich — Portfolio

Personal portfolio and CV site for Pavel Piatrovich, Frontend Engineer with 6+ years of experience in React, React Native, and TypeScript. Built as a static Next.js app — fully server-rendered, print-ready, and deployable to Vercel in one click.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Fonts | Syne (display) · Space Mono (code) via `next/font` |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Architecture

Structured with **Feature-Sliced Design** (FSD) — layers import only downward:

```
src/
├── app/                  Next.js App Router (layout, page, globals.css)
│
├── shared/               No project deps — safe to import anywhere
│   ├── config/cv.ts      Single source of truth for all CV data
│   ├── lib/cn.ts         clsx + tailwind-merge utility
│   ├── types/            All TypeScript interfaces and types
│   └── ui/               Badge · Button · Card · SectionHeader
│
├── entities/             Business entity cards, import from shared/ only
│   ├── job/              JobCard · ProjectCard
│   ├── skill/            SkillCategoryCard
│   ├── education/        EducationCard · CertificationCard
│   └── contact/          ContactCard
│
└── widgets/              Assembled page sections, import from entities/ + shared/
    ├── header/           Sticky nav with active-section highlight + mobile menu
    ├── hero/             Full-screen intro with marquee
    ├── about/            Summary + tags
    ├── experience/       Timeline with project cards
    ├── skills/           Categorised badge grid
    ├── education/        Degree · Certifications · Language bars
    ├── contact/          Contact cards + CTA
    └── footer/
```

Each slice exposes a single `index.ts` public API — consumers never import from internal `ui/` paths directly.

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```

Node >= 20 required (see `engines` in `package.json`).

---

## CV PDF

Drop the PDF at `public/Pavel_Piatrovich_CV_2026_1905.pdf` — the "Download CV" and "View CV" buttons in the Hero point to it automatically via `PERSONAL.cvPath` in `shared/config/cv.ts`.

---

## Updating Content

All CV data lives in one file: **`src/shared/config/cv.ts`**.

Change anything there — name, jobs, skills, contact links — and the entire site updates. No other files need to be touched for content changes.

---

## Print / PDF Export

Open in Chrome → Print (Cmd+P) → Save as PDF. The site includes a full `@media print` stylesheet:

- White background, dark text
- Header, footer, animations, and decorative elements hidden
- A4 page size with sensible margins
- Page break before the Skills section

---

## Deployment

One-click deploy to Vercel:

1. Push to GitHub
2. Import repo in the Vercel dashboard
3. `VERCEL_PROJECT_PRODUCTION_URL` is set automatically by Vercel for production
4. Deploy

Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are configured in `next.config.ts`.

---

## Design Notes

- Dark theme (`#0a0a0a` background), electric cyan accent (`#06b6d4`)
- Dot-matrix background with radial mask + SVG concentric arcs
- CSS-only gradient text animation and marquee strip
- Responsive from 320 px — hamburger menu on mobile, full nav on desktop
- `@media print` — full print stylesheet for clean A4 CV export
- Accessible: `aria-hidden` on decorative elements, `aria-label` / `aria-expanded` on interactive controls
