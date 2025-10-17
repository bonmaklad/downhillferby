# PlumberDan Soap Box Derby 2026

A fully static, highly visual event site for the PlumberDan Soap Box Derby returning on **Monday 20 January 2026**. The build focuses on lightning-fast performance, bold storytelling, and frictionless registration.

## Stack

- [Astro 5](https://astro.build/) (static output, hybrid islands)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Local fonts (`@fontsourceVariable/urbanist`, `@fontsource/bebas-neue`)
- TypeScript-flavoured data modules powering page content
- Optimised media handled through `astro:assets` (automatic WebP generation)

## Project Structure

```
src/
├── assets/                # Source imagery for galleries & illustrations
├── components/            # Reusable UI blocks (hero, schedule, forms, etc.)
├── data/                  # Structured content and configuration objects
├── layouts/               # Base layout with navigation + footer
└── pages/                 # Static pages for landing, rules, safety, etc.
public/
└── media/videos/          # Hero MP4 + poster frame
```

## Getting Started

> **Node 20+ recommended.** Install via `brew install node@20` (already linked in development environment).

```bash
npm install
npm run dev
```

- Dev server: `http://localhost:4321`
- Production build: `npm run build` → output in `dist/`
- Preview production build: `npm run preview`

## Environment Variables

Create a `.env` file (see `.env.example`) to wire up live services.

| Variable                         | Purpose                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `PUBLIC_STRIPE_PAYMENT_LINK`     | Stripe Payment Link URL created in the Stripe dashboard. Redirect target after signup. |
| `PUBLIC_GOOGLE_SHEETS_ENDPOINT`  | HTTPS endpoint of your deployed Google Apps Script that appends form submissions.      |
| `PUBLIC_GOOGLE_FORM_EMBED_URL`   | (Optional) Fallback Google Form URL opened if Sheets endpoint fails.                   |

All keys are prefixed with `PUBLIC_` so Astro exposes them to the client bundle.

## Google Sheets Integration

Use Apps Script to capture form submissions:

1. Create a Google Sheet with columns matching the payload (`timestamp`, `name`, `category`, `age`, `phone`, `email`, `notes`, `agree`).
2. Open the Script Editor and paste:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const body = JSON.parse(e.postData.contents);
  sheet.appendRow([
    body.timestamp,
    body.name,
    body.category,
    body.age,
    body.phone,
    body.email,
    body.notes || '',
    body.agree ? 'Yes' : 'No',
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as a web app, selecting **Anyone with the link**.
4. Paste the deployment URL into `PUBLIC_GOOGLE_SHEETS_ENDPOINT`.

## Stripe Payment Link

1. In the Stripe dashboard create a Payment Link for NZD $10.00 (one-off). 
2. Enable customer email collection to match the form data.
3. Copy the link into `PUBLIC_STRIPE_PAYMENT_LINK`.
4. Entry fee signage notes that race-day payment is $50; adjust copy if the price changes.

If the payment link isn’t provided (development, staging), the signup form shows a success message but stays on the page.

## Content Editing

Most copy and list data live in `src/data/`:

- `event.ts` — key event metadata, schedule, prizes.
- `categories.ts` — entry divisions and fees.
- `home.ts` — stats, spectator perks, signup highlights.
- `past-events.ts` — galleries (import images from `src/assets/photos/`).
- `rules.ts`, `health.ts`, `build.ts`, `spectators-page.ts`, `contact.ts` — supporting pages.

Update or add images under `src/assets/photos/` (Astro will generate optimised derivatives on build). Place new hero/background videos in `public/media/videos/`.

## Deployment

`npm run build` outputs a static bundle ready for Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```

Set the Firebase hosting public directory to `dist/`. Since everything is static, no backend config is required.

## Performance & Accessibility

- Hero video preloads metadata only, respecting `prefers-reduced-motion` for animated elements.
- JSON-LD event schema is injected on the landing page for SEO.
- Components use semantic HTML, labelled form controls, and keyboard-friendly interactions (`details` for FAQs, focusable skip link).
- Assets are lazy-loaded and served as WebP where possible.

Run your own Lighthouse check after wiring live assets for final validation.
