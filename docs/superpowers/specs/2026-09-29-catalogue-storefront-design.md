# MAS LED catalogue and storefront design

## Goal
Make the site reflect the client's September 2026 catalogue and give the storefront a distinctive, fast futuristic presentation.

## Product source and scope
The supplied 28-page `MAS LED Catalogue.pdf` is the source for published technical specifications. Keep the existing route slugs where possible so links continue to work. Use the catalogue's intended series branding in visible copy; retain `storm`, `bendex`, `eventsmax`, and `transglow` route slugs. The catalogue itself inconsistently spells Strom/Storm, BendX/Bendex, Eventmax/EventsMax, and Trans-Glow/TransGlow; the visible names will follow its section headings pending final brand confirmation.

Correct the ten site products with catalogue counterparts: BendX (pp. 4-5), HD Pro (6-7), Infinity (8-9), OX (10-11), STROM (12-13), FlexEdge (14-15), RX Indoor (16-17), Eventmax (18-19), Trans-Glow (22-23), and StandPro (24-25). Add RX Outdoor (20-21) to rental and add a Digital Signage category with Signage Kiosk (26-27). Remove the unsubstantiated COB product from navigation and published listings. Taxi-top LED and VMS are shown only on the range overview (p. 2), so present them as enquiry-only capabilities without technical figures or dedicated product detail pages.

Specifications should say which values vary by pitch. Avoid sitewide or serieswide minimums that only apply to one variant. Do not publish unsupported efficiency, IP, wind-load, contrast, thickness, cloud-control, or lifespan claims. Product cards should lead with use case, imagery, pitches, and a clear enquiry route.

## Visual direction
Use the existing MAS LED logo from `public/logo.jpg` and a charcoal, porcelain, electric-blue palette derived from the catalogue. The memorable element is a dimensional LED wall made of lit pixels and cabinet seams in the homepage hero. The scene follows pointer movement lightly and responds to scroll. The headline, CTA, and product navigation remain HTML for accessibility and SEO.

Replace the generic icon grid with image-led product rails. Cards expose a concise spec and CTA on hover or keyboard focus. Scroll transitions reveal application scenes and product families. Motion is purposeful and limited to the hero, section entrances, and card interactions. On reduced-motion or weak/mobile devices, show a static visual instead of a continuous WebGL animation.

## Architecture
`src/data/productData.ts` remains the source for products, categories, and specification strings. Product and category templates continue to consume that data. New product routes are small wrappers around `ProductDetailTemplate`. The home page receives a client-side Three.js scene isolated in its own component; all other content renders without WebGL. Shared styles live in `globals.css`.

## Verification
Validate the catalogue-backed names, pitches, brightness and IP values with a data test. Run lint, TypeScript/build, and inspect the homepage at desktop and mobile widths. Verify direct navigation to the new routes and reduced-motion fallback.
