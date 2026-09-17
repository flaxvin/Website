# Flaxvin Technologies — website

The public website for Flaxvin Technologies, served at
**https://flaxvin.tech/**

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

The site is served by GitHub Pages at the custom domain **flaxvin.tech**, which the `CNAME`
file pins. Pages build type is "GitHub Actions".

Pushing to `main` runs `.github/workflows/deploy.yml`, which uploads the repository root and
deploys it. There is nothing to compile — edit the HTML, commit to `main`, and the change is live
in a minute or two. GitHub's CDN caches for ten minutes, so allow for that before assuming a
change has not landed.

## Privacy

The site sets no cookies, uses no analytics and stores nothing in the browser. The enquiry form
has no backend — it composes a message in the visitor's own email client. See `privacy.html`.

## Editing notes

- Accessibility: one `<h1>` per page, semantic landmarks, keyboard-operable navigation, visible
  focus rings, and `prefers-reduced-motion` support. Keep these intact when editing.
- The `og:url`, `og:image` and `canonical` tags carry absolute URLs. Update them if the site
  moves to a different domain.
