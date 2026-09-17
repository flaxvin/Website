# Flaxvin Technologies — website

The public website for Flaxvin Technologies, served at
**https://flaxvin.github.io/Website/**

Static HTML. No build step, no framework, no dependencies to install. Each page is a single
self-contained file with its CSS and JavaScript inlined; the only external request is the
Google Fonts stylesheet.

## Running it locally

```bash
python3 -m http.server
```

Then open http://localhost:8000. Opening `index.html` directly in a browser also works.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home |
| `services.html` | Service lines |
| `products.html` | Pathayam, the product we build and operate |
| `industries.html` | Sectors we work in |
| `work.html` | Case studies |
| `engagement.html` | Commercial models and terms |
| `process.html` | Delivery method, cadence and escalation |
| `tech.html` | Technology stack |
| `contact.html` | Enquiry form and contact details |
| `privacy.html` · `terms.html` · `cookies.html` | Legal notices |

Each page is the single source for its subject; content is not duplicated between them.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repository root
to GitHub Pages. There is nothing to build.

## Privacy

The site sets no cookies, uses no analytics and stores nothing in the browser. The enquiry form
has no backend — it composes a message in the visitor's own email client. See `privacy.html`.

## Editing notes

- Accessibility: one `<h1>` per page, semantic landmarks, keyboard-operable navigation, visible
  focus rings, and `prefers-reduced-motion` support. Keep these intact when editing.
- The `og:url`, `og:image` and `canonical` tags carry absolute URLs. Update them if the site
  moves to a different domain.
