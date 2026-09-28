# KAIRON — Design Brief & Fidelity Ledger

## Positioning (locked)

KAIRON is a **growth & performance studio** — not a "Meta ads agency", not a "creative agency", not "full-service". Every service listed on the site is framed as a **system that feeds growth**:

```
GROWTH
  ↓
STRATEGY + ACQUISITION + CREATIVE + CONVERSION + OPTIMIZATION
  ↓
BUSINESS GROWTH
```

Hierarchy is communicated literally: capabilities are numbered 01–05 under one heading ("Five disciplines. One job."), and the Approach section is an operating loop, not a service list.

## Creative direction

- **Visual metaphor for growth:** *the system itself, drawn in type* — Strategy / Acquisition / Creative / Conversion / Optimization exist as a quiet typographic field behind the hero. No arrows-up, no charts, no coins, no dashboards.
- **Feel:** digital + editorial + strategic. Dark near-black canvas, hairline rules instead of cards-in-cards, oversized Archivo display type, mono labels for "precision" texture, one acid accent (#e8ff47) used only for the single most important element per screen.
- **Anti-cliché list respected:** no stock business photography, no fake dashboards, no glassmorphism, no rounded-card mush, no buzzword copy ("data-driven", "cutting-edge", etc. are absent).

## Conversion architecture (Attention → Conversation)

Multi-page structure (v2):

1. **Home** — what/who/outcome in 5 seconds; teasers route deeper.
2. **/approach** — the Kairon Loop + principles (understanding, trust).
3. **/capabilities** — depth of the five disciplines (proof of range).
4. **/wins** — client wins, data-driven from `lib/site.ts` (proof).
5. **/studio** — founders photo + story + how we work (desire, trust).
6. **/contact** — dedicated conversion page with the risk-free contract (conversation).

CTAs exist in nav, hero, and final section of each page — no CTA spam mid-page.

### Founders imagery

The founders photo (`public/images/founders-cutout.webp`, optimized from the
original supplied PNG 1759KB → 61KB) sits on an acid-grid backdrop with a
"Built by operators" tag — the studio's own art direction: black-and-white
cutout, white stroke, grid. Used on the home page and /studio.

## Copy tone

Short declaratives. Every line either diagnoses, differentiates, or directs. Taglines per capability ("Traffic is rented. Conversion is owned.") carry the argument, not adjectives.

## Motion system

One recurring theme only: content **rises and settles** on scroll (Reveal, once, 12% viewport margin). Plus three job-having micro-motions: marquee capabilities ticker (uses otherwise-static band), scroll-dot cue (affordance), accordion expand (disclosure). All respect `prefers-reduced-motion`. No parallax, no bounces, no scroll-hijack.

## Fidelity ledger (QA results)

| # | Area | Status | Notes |
|---|------|--------|-------|
| 1 | Copy | ✅ | All copy in `lib/site.ts`; no invented claims, results, clients, or testimonials |
| 2 | Layout | ✅ | 7 sections, single-page, hard-edge alignment, no overflow at 390/768/1440 |
| 3 | Typography | ✅ | Archivo 120px/700/−0.035em hero verified computed; mono labels on 0.2em+ tracking |
| 4 | Color | ✅ | All values from tokens (`--color-*`); no one-off hex in components |
| 5 | Spacing | ✅ | 4px grid (Tailwind defaults) throughout |
| 6 | Image treatment | ✅ | Zero stock imagery — typographic monograms for founders; grain texture for depth |
| 7 | Components | ✅ | Accordion, bento grid, ticker all interactive-verified in browser |
| 8 | Responsive | ✅ | 390 (1-col, 53px H1), 768 (2-col, nav visible), 1440 (3-col bento) all verified |
| 9 | Animation | ✅ | Marquee + scroll-dot confirmed animating; reveals fire on view |
| 10 | CTA flow | ✅ | Nav/hero → #contact anchors; mailto CTAs; footer index complete |
| — | SEO | ✅ | Title/description/OG/Twitter/canonical + JSON-LD (`ProfessionalService`, founders, `WebSite`) all on thekairon.online; `inthekairon.com` appears nowhere |
| — | Performance | ✅ | Static output, 166 kB first load JS, self-hosted `next/font` woff2, no client-side data |
| — | Accessibility | ✅ | Skip link, focus-visible ring, 44px targets on all actions, `aria-expanded` accordion, reduced-motion honored |

### Case-study section (v5)

- **/wins rebuilt** from the empty-state list into five editorial case
  studies (AMUA, NexDrive, Saybeam, NIVA, Mireva) driven by `CASE_STUDIES`
  in `lib/site.ts`. Two-column editorial layout: brand panel (per-brand
  palette pulled from each brand's own site) + 2×2 metric grid on the left,
  story + numbered growth-system breakdown + highlighted insight on the
  right, hairline vertical divider between, large dividers between cases.
- **Metrics are labeled scale indicators** — observed on-site signals, not
  guaranteed results; disclaimer appears in the hero and under every metric
  grid. No invented revenue/ROAS anywhere.
- **Motion:** count-up metrics (server HTML carries final values for SEO,
  animation re-runs on viewport entry), scroll-progress rail (sticky, xl+,
  active number updates per case), staggered reveals, panel hover zoom.
  All honor `prefers-reduced-motion`.

### Navbar / logo pass (v4)

- **Persistent navbar** — the hide-on-scroll behavior was removed after the
  client's screenshot of `/approach` showed no logo at the top of a scrolled
  page. The bar is now permanently fixed: the K glyph + KAIRON wordmark stay
  visible at every scroll position on every page.
- **Logo lockup (client-supplied reference)** — `Wordmark` rebuilt to match the
  client's logo: a 2px acid-bordered 28px box containing a weight-900 acid `K`,
  followed immediately by `AIRON.` in weight-800 ink with an acid dot — the K
  lives inside the box, so the lockup reads KAIRON. with no duplicated K.
  `app/icon.svg` favicon echoes the same boxed-K mark. Accessible name stays
  "KAIRON." via the `KAIRON — home` aria-label.

### Mobile QA pass (v3)

- **Mobile menu overlay rewrite** — the overlay previously rendered inside the
  transformed `<header>`; the header's `transform` made it the containing block
  for the overlay's `position: fixed`, collapsing the overlay to zero height so
  page content bled through (transparent menu bug). The overlay is now a sibling
  of the header with a solid `bg-bg`, `overflow-y-auto`, body scroll-lock, and
  Escape-to-close. The bar also stays visible while the menu is open.
- **Interior page headings** — `PageHero` titles use `\n` line breaks that HTML
  collapses; added `whitespace-pre-line` and a 30px mobile size so the intended
  two-line lockups render as designed on phones (48px would wrap arbitrarily).
- **Hit areas** — footer capability links, email, and back-to-top now ≥40px tall.
- Verified at 390px on all six pages: no horizontal overflow, H1 lockups fit,
  29 capability chips wrap without overflow, all CTAs ≥44px, menu open/close
  and navigation via the overlay work.

### Known environment note (not a site defect)

The Freebuff embedded preview webview suppresses programmatic scroll movement (screenshots never composite; `scrollIntoView`/`scrollTo` no-op intermittently). Real-input paths that could be tested (clean URL+hash loads, keyboard scroll at top of session, click-accordion, hash updates) all passed. Anchor scrolling uses `scrollIntoView` + `history.pushState` and degrades to native fragment behavior in any normal browser. Recommend one manual scroll-through in a standard browser before deploy.
