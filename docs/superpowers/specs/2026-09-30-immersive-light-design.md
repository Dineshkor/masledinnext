# MAS: light without limits

## Direction
The user requests a substantially more creative implementation with prominent Three.js, scroll animation and hover interactions. Build a cinematic display brand experience: near-black ink, ice-white condensed typography, electric blue light and a small signal-orange accent. The defining object is a luminous sculpture of three curved LED ribbons. Maintain the catalogue product facts and all enquiry routes.

## Composition and motion
The first viewport places giant staggered words around the sculpture rather than boxing an animation beside ordinary text. The curved surfaces use animated shader imagery, visible pixel structure, a luminous edge and orbital lines. Pointer movement changes the sculpture's orientation. Scrolling separates and turns its parts before the next section.

A sticky three-chapter sequence shows architecture, events and transparency. Scroll progress controls image scale, clipping, chapter type, numbered navigation and a progress rail. Clicking a chapter moves to its scroll position. Mobile keeps a shorter sequence and real readable content. Reduced motion renders three ordinary chapters.

The collection uses asymmetric image tiles, data-driven category filters, pointer-position lighting, image zoom, depth and a moving explore affordance. Use proper links and buttons. The process section uses a large typographic sequence with a drawing progress line. A large contact invitation and flowing wordmark finish the page.

## Technical boundaries
`LedWallScene.jsx` owns the WebGL lifecycle and disposes geometries, shaders, textures, observers and listeners. `Hero.tsx` owns heading, CTA and accessible HTML. `ExperienceJourney.tsx` owns sticky chapter scroll motion. Product facts stay in `productData.ts`. `immersive.css` owns the new storefront design and is imported by globals. Load local open fonts to avoid runtime external font requests.

## Verification
Run catalogue tests, lint and production build. Render desktop and 390px mobile views using headless Chrome with CDP. Confirm actual canvas creation, shader errors, scene motion, chapter progression, working filters, keyboard focus and no horizontal overflow. Check reduced-motion rendering and WebGL fallback. Keep development local.
