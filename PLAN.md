# PlumberDan Soap Box Derby 2026 — Build Plan

## Research Highlights
- **Immersive storytelling & motion:** 2025 design trends emphasize scrollytelling, unexpected floating objects, and candy pop palettes to keep visitors engaged through movement and layered visuals (VistaPrint/99designs, *“7 Stunning Web Design Trends for 2024 and 2025”* retrieved via r.jina.ai).
- **Performance expectations:** Google’s Lighthouse scoring guidance reiterates that a 90–100 score depends on fast LCP, CLS stability, and keeping payloads tiny; opportunities/diagnostics indirectly drive these metrics (Chrome for Developers, *“Lighthouse performance scoring”*).
- **Sheets data capture:** Google Forms can be embedded directly or backed by Apps Script web apps that accept HTTP POST via `doPost` to append into Sheets (Google Support, *“Publish & share your form with responders”*; Google Developers, *“Apps Script Web Apps”*).
- **Category context:** Gravity-powered Soap Box Derby racing has divisions for Stock/Super Stock/Masters and celebrates build craftsmanship and community spectacle (Wikipedia, *“Soap Box Derby”*).

## Project Goals & Constraints
- Deliver a static, Firebase-host-ready frontend (no bespoke backend) that feels kinetic, bold, and recruitment-first.
- Prioritize the 2026 event messaging (Monday 20 January 2026, Drews Ave Hill) with a frictionless signup CTA that routes to payment ($10 pre-event, $50 on-day).
- Provide clear spectator info (free to attend, food/coffee/entertainment) and sponsor visibility (5× Gold, 5× Silver).
- Include supporting content: rules, health & safety, past events (gallery 2017–2024), build guide, contact (mailto: `michael@necta.nz` with preset subject).
- Hit 100 Lighthouse scores where feasible: optimized media, responsive layout, preloading critical assets, semantic HTML, accessible interactions, tight bundles.

## Information Architecture
- **Landing (`/`)** — Hero countdown + event CTA, kinetic video reels, rolling highlight cards, scrolling track map, prize showcase, Sponsor carousel, CTA repetition, social proof, FAQ, final signup bar.
- **Rules (`/rules`)** — Collapsible rulebook, racer eligibility, race-day timetable, downloadables.
- **Health & Safety (`/health-safety`)** — Requirements, scrutineering checklist, medical/insurance info, emergency contacts.
- **Past Events (`/past-events`)** — Year filter chips (2024→2017), masonry galleries (local `images`), video lightboxes (from `images/videoLinks`).
- **Build Guide (`/build-a-soapbox`)** — Step-by-step sections (design, steering, braking for Whanganui corners, testing), downloadable plans, resource links.
- **Spectators (`/spectators`)** — Viewing map, schedule beats, amenities (coffee/food/entertainment), accessibility info.
- **Contact (`/contact`)** — Embedded FAQ snippet, contact card with `mailto:`, social link, organizer CTA.
- **Global components** — Navigation mega-CTA, footer with sponsor tiers, social + Stripe/Google Sheets integration info.

## Experience & Visual Direction
- Palette anchored in neon canary (`rgb(254,254,0)`) with fiery red accent (`rgb(255,15,0)`), balanced by charcoal (`rgb(64,64,64)`) and mid grey (`rgb(191,191,191)`). Use gradients and halftone overlays for retro-race vibes.
- Leverage bold typography (wide sans headline, condensed display for stats) with dynamic text treatments (staggered reveals, ticker).
- Motion tactics: parallax hero, horizontal marquee of past winners, hover-tilt cards, scroll-based track illustration progress, slider for sponsor logos.
- Media-forward layout: hero autoplay muted loop (local mp4), image story strips, interactive lightboxes.
- Ensure motion respects prefers-reduced-motion; provide alternative static states.

## Implementation Roadmap
1. **Scaffold** Astro project with TypeScript + Tailwind (or vanilla CSS modules) for rapid, performant static output; configure assets dir, icon pipeline, and fonts (self-host).
2. **Content modeling** via structured data objects (`data/`) to drive categories, prizes, schedules, gallery metadata (enables reuse and static generation of past event pages/cards).
3. **Landing build** with hero, signup, countdown, dynamic sections (split into Astro components for hero, CTA rail, prize grid, sponsors, testimonials, FAQ, footer).
4. **Supporting pages** built as Astro pages sharing layout; include interactive elements (accordions, filterable galleries) using partial hydration (Astro Islands) to keep JS minimal.
5. **Signup integration** using Stripe Payment Link (placeholder env) and Google Sheets capture. Provide form that posts to Apps Script endpoint (config via `.env.example`), degrade to embedded Google Form fallback.
6. **Performance & SEO** — Preload hero font/media, responsive `<picture>` sets, apply `astro:assets` optimizations, add structured data (JSON-LD event), meta tags, sitemap, robots.
7. **Testing & handoff** — local Lighthouse run instructions, deployment notes for Firebase, content editing guidance.

## Data & Integration Notes
- **Stripe:** Use Payment Link URL surfaced in config; front-end `fetch` call (if using Apps Script) should confirm payment link before redirect. Provide fallback messaging about day-of pricing ($50).
- **Google Sheets:** Document expected Apps Script endpoint shape (`POST` JSON) and include sample script snippet in docs. Provide alt embed block for standard Google Form if endpoint unavailable.
- **Media:** Compress hero video (`file.mp4`) to create poster image + multiple resolutions; generate WebP for images; include lazy loading & intrinsic sizing.
- **Social & Tracking:** Add Facebook profile link, open graph tags, optional GA placeholder (commented) with instructions.

## Risks & Mitigations
- **Large media dragging performance:** Mitigate via optimized encodings, deferring non-critical galleries, `loading=lazy`.
- **No backend for secure payments:** Stripe Payment Links handle checkout session server-side; ensure messaging clarifies charges and collects racer details via Sheet before redirect.
- **Accessibility concerns from heavy motion:** Respect `prefers-reduced-motion`, ensure focus management on modals, high contrast palette compliance (test combos with grey balancing).
- **Content scalability:** Use data-driven components so sponsor or gallery updates require only data file edits.

## Next Actions
1. Initialize Astro project and base layout system.
2. Draft landing page components with placeholder copy/images.
3. Build remaining pages leveraging shared data modules.
4. Finalize form integrations, optimize assets, and run quality checks.

