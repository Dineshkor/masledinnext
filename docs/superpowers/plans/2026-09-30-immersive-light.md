# Immersive Light Storefront Implementation Plan

**Goal:** Make Three.js and coordinated scroll interaction the visual centre of the MAS LED website.

**Architecture:** Separate semantic content from the WebGL sculpture. Use Framer Motion's existing scroll primitives and native sticky positioning. Keep product routes and catalogue data intact, and apply a coherent style through a focused stylesheet and shared components.

**Tech Stack:** Next.js, React, Framer Motion, Three.js, local fonts.

1. Add local Antonio and DM Sans fonts; create the immersive storefront stylesheet and shared animation primitives.
2. Replace `LedWallScene.jsx` with curved LED ribbons using custom shader materials, luminous edge rails, particles and pointer/scroll response. Include failure and reduced-motion handling.
3. Recompose `Hero.tsx` with oversized staggered typography, a full-size scene, a scene-mode control and magnetic enquiry links.
4. Add `ExperienceJourney.tsx`: three sticky scroll chapters and clickable progress navigation; static reduced-motion layout.
5. Redesign `ProductShowcase.tsx` as a data-derived asymmetric collection with filters, pointer lighting and interactive images.
6. Redesign Navbar, MarketTicker, FeatureSection, ApproachTimeline and Footer for one visual system, preserving routes and contact details.
7. Run catalogue tests, lint and build. Inspect desktop/mobile screenshots and verify interactive behavior in the browser; fix concrete issues and remove temporary browser profiles.

## Completed verification

- Catalogue tests: 3 passed; published product data stayed intact.
- `npm run lint`: exit 0. `npm run build`: exit 0, all 33 pages generated.
- Production browser review at `http://localhost:3002`: WebGL canvas renders, modes change, 6 navigation families, Rental filter shows 3 products, hover tilt changes and the view affordance reaches opacity 1.
- Final diagonal chapter wipe is a real scroll-controlled clip path. Reduced motion switches to 3 static chapters, removes all inert attributes, and clears every clip path.
- Mobile: 390px viewport, 390px scroll width, active Three.js canvas. No uncaught browser errors.
- Simulated unavailable WebGL: fallback remains visible and the Pulse control changes its pattern.
- Desktop and mobile screenshots saved in the task-specific temporary review directory. Preview server remains available on port 3002.
