# Priyanshu Tiwari — Portfolio

A premium, mobile-first personal portfolio for **Priyanshu Tiwari**, Software Engineer (Java / Spring Boot). Built to be fast, accessible, SEO-optimized, and ready to deploy on Vercel.

Built with **React (Vite)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## Features

- **Mobile-first, fully responsive** layout
- **Premium dark theme** with an optional **light mode** (remembers your choice, respects system preference)
- **Framer Motion** animations: fade/slide, scroll reveal, card & button hover, staggered lists, smooth mobile menu
- **Scroll progress bar**, **back-to-top** button, and **active-section** nav highlighting
- **Smooth scrolling** with sticky navbar and anchor offsets
- **Working contact form** via EmailJS, with an automatic `mailto:` fallback when EmailJS isn't configured
- **SEO built in**: meta tags, Open Graph, Twitter cards, canonical URL, JSON-LD structured data, `robots.txt`, `sitemap.xml`, semantic HTML, alt text, and lazy-loaded images
- **Single data file** (`src/data/portfolio.ts`) drives every section — edit content in one place
- **Accessible**: visible keyboard focus, reduced-motion support, ARIA labels

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview

# 5. Lint
npm run lint
```

The dev server runs at `http://localhost:5173`.

---

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png          # Social share image (1200×630)
│   ├── profile.png           # Hero profile image  (replace me)
│   ├── instagram.png         # Beyond Coding image (replace me)
│   ├── resume.pdf            # Your resume         (replace me)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── projects/             # Project preview images
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable primitives (Button, Section, Reveal…)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── BeyondCoding.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/              # Theme context + provider
│   ├── hooks/                # useTheme, useActiveSection
│   ├── lib/                  # Animation variants, helpers
│   ├── data/
│   │   └── portfolio.ts      # ← ALL your content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                # SEO meta, fonts, JSON-LD
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Customizing your content

Almost everything is driven by **`src/data/portfolio.ts`**. Open it and update:

- `site` — your name, role, email, deployed URL, resume path
- `socials` — GitHub, LinkedIn, LeetCode, Instagram, email links
- `about`, `experiences`, `technicalBackground`, `skills`, `projects`, `achievements`, `beyondCoding`, `education`

Links marked with a `// TODO` comment are placeholders — replace them with your real URLs.

### Replace the placeholder assets

Swap these files in `public/` with your own (keep the same filenames, or update the paths in `portfolio.ts` / `index.html`):

- `profile.png` — your hero photo (square works best)
- `instagram.png` — image for the Beyond Coding section
- `resume.pdf` — your actual resume
- `og-image.png` — social preview image (1200×630)
- `projects/*.svg` — replace with real screenshots (e.g. `.png`) and update the `image` paths in `portfolio.ts`

### Update the domain for SEO

Replace `https://priyanshutiwari.vercel.app` with your real domain in:

- `index.html` (canonical, Open Graph, Twitter, JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`
- `src/data/portfolio.ts` (`site.url`)

---

## Contact form (EmailJS)

The contact form works out of the box using a `mailto:` fallback. To send messages directly from the site, wire up [EmailJS](https://www.emailjs.com/):

1. Create a free EmailJS account, an email **service**, and an email **template**.
2. Your template should accept these variables: `from_name`, `reply_to`, `message`.
3. Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are left empty, the form opens the visitor's mail client instead — so the site always works.

---

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Confirm the defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. If you're using EmailJS, add the three `VITE_EMAILJS_*` variables under **Settings → Environment Variables**.
5. Deploy. 🎉

You can also deploy from the CLI:

```bash
npm i -g vercel
vercel
```

---

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Framework   | React 18 + Vite 5               |
| Language    | TypeScript                      |
| Styling     | Tailwind CSS 3                  |
| Animation   | Framer Motion                   |
| Icons       | Lucide React                    |
| Email       | EmailJS (with mailto fallback)  |
| Deploy      | Vercel                          |

---

## License

MIT © Priyanshu Tiwari
