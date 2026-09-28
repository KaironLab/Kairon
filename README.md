# KAIRON — thekairon.online

Official website for **KAIRON**, a growth and performance marketing studio founded by **Samiul & Munthakim**.

Built with **Next.js 15 (App Router) + Tailwind CSS 4 + Framer Motion**. Fully static output, no server required.

## Run

```bash
cd kairon
npm install
npm run dev      # development
npm run build    # production build (static)
npm start        # serve production build
```

> Note: the repo root contains `node22/` — a project-local Node.js toolchain (this machine has no global Node). If your system already has Node, you can delete that folder.

## Deploying to https://thekairon.online

The build is fully static (`Output: static`), so any static host works — Vercel, Netlify, Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `.next` (Vercel/Netlify detect Next automatically), or use `next export`-style static hosting via the framework preset
- Set the production domain to `thekairon.online` — metadata, canonical URL, Open Graph, and JSON-LD already point at it

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, statement, loop teaser, capabilities teaser, founders photo, CTA |
| `/approach` | The Kairon Loop (full), principles, engagement path |
| `/capabilities` | All five disciplines in detail |
| `/wins` | **Client wins** — five editorial case studies from `CASE_STUDIES` in `lib/site.ts` |
| `/studio` | Founders photo + story, principles, engagement path |
| `/contact` | Dedicated conversion page with the working-session contract |

## Structure

```
kairon/
  app/            layout (fonts, SEO, JSON-LD), global styles, icon,
                  sitemap.ts, robots.ts
  app/page.tsx    home
  app/approach/   /approach
  app/capabilities/  /capabilities
  app/wins/       /wins   ← client wins (data-driven)
  app/studio/     /studio
  app/contact/    /contact
  components/
    navbar/       persistent fixed nav — K-glyph logo, links, CTA, mobile overlay menu
    page-hero.tsx shared interior-page hero
    hero/         oversized headline + typographic field + ticker
    statement/    the "system problem" declaration + diagnostic grid
    growth-framework/  The Kairon Loop (Signal → System → Scale → Study)
    capabilities/ bento grid — 5 disciplines
    principles/   accordion of operating principles + engagement path
    founders/     founders cutout photo + editorial layout
    cta/          final conversion section
    footer/
    motion/       Reveal (scroll continuity theme), AnchorScroll
    ui/           buttons, section headings, icons
  lib/            site.ts — single source of truth for all copy, pages & wins
  public/images/  founders-cutout.webp (optimized from the original PNG)
```

## Adding a client win

Edit `CLIENT_WINS` in `lib/site.ts`. One object per client — name, industry,
website URL, headline result, a two-sentence story, services used, year.
Set `live: true` to publish. Entries with `live: false` are hidden and the
page shows an elegant empty state instead.

## Design system (short)

- Dark editorial theme: near-black warm background `#0d0d0b`, off-white ink `#f2f1ec`, single accent `#e8ff47` used sparingly
- Type: **Archivo** (display + UI), **JetBrains Mono** (labels, indices, chips)
- 4px spacing grid; hairline dividers instead of nested cards; 0px corner radius throughout
- One recurring motion theme: sections rise + settle on scroll (`Reveal`), all animation respects `prefers-reduced-motion`
- All copy lives in `lib/site.ts` — edit there, not in components
