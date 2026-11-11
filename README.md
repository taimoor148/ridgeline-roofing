# Ridgeline Roofing & Exteriors

A fictional Franklin, Tennessee contractor website built with Astro, TypeScript, and GSAP. Use Node.js 22 for the same runtime as Vercel.

## Run locally

```sh
npm ci
npm run dev
npm run check
npm run build
```

Open the local URL printed by Astro. The demo estimate form works on the development server and uses sample information only.

## Rebrand

- Edit `src/lib/content.ts` for the business name, contact links, town names, services, projects, and opt-in credentials. Add verified rating, review, license, insurance, and warranty details only when the contractor supplies them. Replace the sample projects and adjust their illustrative labels when you have permission to use real project photography.
- Edit the CSS variables in `src/styles/site.css` and replace `public/roofline.svg` to update the visual identity. Images in `public/media` are original generated illustrations of fictional homes. Preserve the width-suffixed WebP filenames or update the image component when adding variants. Anton and Manrope are locally bundled under the SIL Open Font License.
- Copy `.env.example` to `.env` for local configuration. Set `SITE_URL` to the final origin for canonical URLs, social images, and sitemap entries.

## Estimate delivery

By default the same-origin `POST /api/estimate/` validates the request and returns a simulated success. It does not persist the submission. To accept real enquiries, set `brand.demo` to `false`, set the server variable `ESTIMATE_MODE=live`, and configure `ESTIMATE_WEBHOOK_URL` with an HTTPS receiver. Set `ESTIMATE_WEBHOOK_TOKEN` if it expects a bearer token. Never prefix credentials with `PUBLIC_`.

The receiver gets JSON fields `name`, `contact`, `zip`, `service` (slug), and `description`. Return a 2xx response after accepting the lead. Use the forwarded `Idempotency-Key` to deduplicate retries and configure traffic limits for the public route before launch. Test successful delivery and error recovery with sample data.

## Deploy to Vercel

Import the source repository and use the Astro preset. The Vercel adapter builds the pages and the server-side estimate route with `npm run build`. Set environment variables in the project settings and redeploy. The sitemap is generated at `/sitemap-index.xml`. Demo builds use a noindex meta tag. Crawlers can read the tag, while the estimate API is excluded from crawling. Set `PUBLIC_INDEXABLE=true` only on a real client production deployment when it is ready to be indexed.
