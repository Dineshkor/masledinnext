# MAS LED Catalogue Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build catalogue-aligned product content and a modern homepage with Three.js, hover, and scroll motion.

**Architecture:** Keep structured product facts in `src/data/productData.ts`; use existing page templates for categories and products. Isolate WebGL in a lazy client component, with an HTML and CSS fallback and regular page content for SEO.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js.

---

### Task 1: Catalogue data

**Files:** `src/data/productData.ts`, `tests/catalogue-products.test.mjs`

- [ ] Write a Node test that loads the TypeScript data and checks the ten matching series, RX Outdoor, Signage Kiosk, pitch and brightness examples, and absence of published COB.
- [ ] Run `node --test tests/catalogue-products.test.mjs` and confirm it fails on current site facts.
- [ ] Replace conflicting product specifications and unsupported claims; add the missing products and Digital Signage category.
- [ ] Run the data test and confirm it passes.

### Task 2: Navigation and routes

**Files:** `src/app/products/rental/rx-outdoor/page.tsx`, `src/app/products/digital-signage/page.tsx`, `src/app/products/digital-signage/signage-kiosk/page.tsx`, `src/components/Navbar.tsx`, `src/app/sitemap.ts`

- [ ] Add page wrappers for the two products and one category.
- [ ] Make navigation and sitemap derive categories and products from `productData.ts`.
- [ ] Verify the two product routes render and no listing or sitemap links to COB.

### Task 3: Visual assets and 3D hero

**Files:** `package.json`, `package-lock.json`, `src/components/LedWallScene.tsx`, `src/components/Hero.tsx`, `src/app/globals.css`

- [x] Install cached `three`; isolate the scene in a JavaScript component.
- [ ] Implement a lightweight cabinet/pixel scene with restrained pointer and scroll response, bounded device pixel ratio, cleanup, and static reduced-motion fallback.
- [ ] Rebuild the hero around the MAS brand and HTML copy/CTA.
- [ ] Inspect desktop and mobile renderings and correct any overflow or unreadable text.

### Task 4: Product-led homepage

**Files:** `src/components/ProductShowcase.tsx`, `src/app/page.tsx`, `src/app/globals.css`, plus focused new sections if needed

- [ ] Replace the duplicated hard-coded showcase list with data-derived image cards, including the new offerings.
- [ ] Add hover/focus spec reveals and scroll entrance transitions.
- [ ] Keep the existing contact and quote routes discoverable.
- [ ] Check keyboard use and reduced-motion behavior.

### Task 5: Final verification

- [ ] Run `node --test tests/catalogue-products.test.mjs`.
- [ ] Run `npm run lint` and `npm run build`.
- [ ] Inspect representative product pages and the homepage at desktop/mobile sizes.
- [ ] Review `git diff` for unsupported claims and unintended changes.
