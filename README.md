# Personal Portfolio — Next.js Template

A clean, animated personal portfolio built with **Next.js 14**, **Tailwind CSS v4**, and **Framer Motion**. Designed for product people, designers, and engineers who want a beautiful site to showcase their work.

**Live example:** [gustavocomitre.com](https://gustavocomitre.com)

---

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll animations, card tilts, text reveals
- [Lucide React](https://lucide.dev/) — icons
- Deployed on [Vercel](https://vercel.com/)

---

## Getting Started

```bash
git clone https://github.com/gustavocomitre/personal-website-gustavocomitre.git
cd personal-website-gustavocomitre
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## What to Replace

### 1. Your photo

Replace the hero portrait image:

```
public/images/hero-portrait.png
```

Recommended size: **800×800px**, PNG with transparent or clean background.

---

### 2. Your name, title & bio

Edit `src/components/sections/Hero.tsx` — update your name, headline, and the animated tagline.

Edit `src/components/sections/Expertises.tsx` — update the two scroll-reveal lines and the "That's where I come in" phrase.

---

### 3. Your projects

All project data lives in one file:

```
src/data/projects.ts
```

Each project has this shape:

```ts
{
  slug: "your-project-slug",         // used in the URL: /works/your-project-slug
  title: "Project Name",
  tags: ["Tag 1", "Tag 2"],
  coverImage: "/images/your-card.png",   // card shown on the homepage grid
  heroImage: "/images/your-hero.png",    // full-width banner on the detail page
  overview: "What this project is about.",
  role: "Your Role",
  period: "2022 – 2024",
  achievements: [
    "Achievement one",
    "Achievement two",
  ],
  website: "https://yourproject.com",    // optional — shows as a link on the detail page
  detailImages: [],                      // optional extra images inside the detail page
  comingSoon: true,                      // optional — shows a "Coming Soon" card
}
```

#### Project images

Add your images to `public/images/`. Recommended sizes:

| Image | Size | Usage |
|-------|------|-------|
| `*-card.png` | 800×600px | Homepage project card |
| `*-hero.png` | 1600×900px | Detail page banner |

---

### 4. Social links & footer

Edit `src/components/layout/Footer.tsx` — update your LinkedIn, GitHub, or other links.

Edit `src/components/layout/Header.tsx` — update the nav links if needed.

---

### 5. SEO & social sharing

Edit `src/app/layout.tsx`:

```ts
const BASE_URL = "https://yourdomain.com";   // ← your domain

export const metadata = {
  title: { default: "Your Name — Your Title" },
  description: "Your 140-char meta description.",
  // OG image, Twitter card, etc. are already wired up
};
```

Replace the OG image used when sharing on LinkedIn, Twitter, etc.:

```
public/images/og-image.png
```

Recommended size: **1200×630px**.

---

### 6. Fonts

The site uses **Instrument Sans** from Google Fonts (loaded in `src/app/layout.tsx`). Swap it for any Google Font by changing the import and the CSS variable `--font-heading`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + global SEO metadata
│   ├── page.tsx            # Homepage
│   └── works/[slug]/       # Dynamic project detail pages
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Expertises, FeaturedWorks, etc.
│   ├── ui/                 # Reusable UI: ProjectCard, TextReveal, AnimatedText…
│   └── works/              # WorkHero, WorkContentCard
├── data/
│   └── projects.ts         # ← All your project content lives here
├── types/
│   └── index.ts            # TypeScript types
└── lib/
    └── utils.ts            # cn() helper
public/
└── images/                 # All images (portraits, cards, heroes, OG)
```

---

## Deploy

The site is configured for **static export** (`output: "export"` in `next.config.ts`), so it works on any static host.

**Vercel (recommended):**

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — no config needed, Vercel detects Next.js automatically

---

## License

MIT — fork it, use it, make it yours.
