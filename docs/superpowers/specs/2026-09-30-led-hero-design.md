# Interactive LED hero

Approved direction: an interactive LED canvas, with creative freedom, following the rollback of the previous site overhaul.

The hero retains the site's navy and cyan identity. An asymmetric composition pairs a short headline, business description, and two existing destination links with a large, framed LED display. Thousands of discrete pixels show luminous organic patterns, with cyan, coral, and violet accents. The display is explicitly an interactive preview, without implying performance measurements.

The screen offers Aurora, Spectrum, and Orbit patterns. Pointer movement illuminates nearby pixels; tapping works on touch screens without capturing page scrolling. Real buttons select patterns and pause motion. Keyboard users can select every control. A compact product category strip replaces the generic feature cards.

Use a native 2D canvas, with no new dependencies or external media. Cap backing-store pixel density and frame rate. Stop scheduling frames when paused, offscreen, or in a hidden tab. Honor reduced motion with a static initial frame and manual playback. Provide a styled static fallback when canvas or JavaScript is unavailable. All hero text and calls to action remain HTML.

Scope: the homepage hero and its supporting component, rendering math, and styles. Verify bounded color values, distinct patterns, local pointer response, production build, lint, desktop/mobile layout, control behavior, and animation lifecycle.
