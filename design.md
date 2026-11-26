# Design: Flaxvin Technologies

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Conversational FAQ, with an Index hero (the site as a drawing register)
- Inner pages: Banner hero (`.page-hero`), then the page's own content as registers, rows, stages and title blocks
- Theme: Blueprint, cyanotype sheet (deal 1/3)
- Axes: mid/geometric-sans/neutral · posture: drenched

## Tokens
`assets/css/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(35% 0.105 256);  --color-paper-2: oklch(31% 0.10 257);  --color-paper-3: oklch(26.5% 0.095 258);
  --color-ink: oklch(97% 0.012 240);  --color-ink-2: oklch(90% 0.025 242);  --color-muted: oklch(80% 0.045 244);
  --color-rule: oklch(93% 0.02 240 / 0.85);  --color-rule-2: oklch(93% 0.02 240 / 0.32);
  --color-accent: oklch(97% 0.012 240);  --color-accent-ink: oklch(33% 0.105 256);  --color-focus: oklch(97% 0.012 240);
  --font-display: "Chakra Petch";  --font-body: "IBM Plex Sans";  --font-outlier: "IBM Plex Mono" (measurements, sheet and stage numbers, code only);
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --rule-heavy: 2px;  --shadow-card: none;
}
```
Spacing, type scale, easings and durations are the scaffold's and live in `tokens.css`. `base.css` holds the Floor defaults. `site.css` holds every shared component; a page adds only `assets/css/pages/<page>.css`, tokens only.

## Type
- h1 and h2: Chakra Petch 600, uppercase, line-height 1.02. h3: Chakra Petch 600, sentence case. h4: Plex Sans 500.
- Labels, table heads, captions, nav: Plex Sans 500, `--text-sm`, sentence case, never tracked.

## Components (site.css)
- Chrome: `.hdr` (edge-aligned, wordmark left, eight links and an outlined `Start a project`), `.ftr` (mast: wordmark large over the link columns).
- Heroes: `.page-hero` with `ol.crumb`, `h1`, one `.lead`.
- Content: `.register` (keylined schedule table; `.register--stack` restacks under 40rem), `.rows > .row` (`.row__no`, `.row__title`, `.row__body`), `.spec` (dl), `.list`, `.tags`, `.stages` (a run along one string, `--n` columns), `.dimension` (a real measurement only), `.fig` (double keyline), `.head` / `.head--split`, `.cols` with `.span-*`.
- Forms: `.tb` title block of `.tb__cell` cells, `.field` inputs, `.tb__foot` for the submit.
- Bands: `.band` (paper-2), `.band--deep` (paper-3), two a page at most. Closing section: `.close` with `.close__text` and `.close__side`.

## Controls
- Primary: ink fill, sheet-blue text, square, 48px, Plex Sans 500 (`.btn.btn--primary`), one per screen.
- Secondary: 1px ink keyline, same size (`.btn`). Links: ink with a 1px underline that clears on hover.

## Motion
- Still. One dimension string may draw once a page; nothing else moves. Under reduced motion everything ends at once.

## Rules
- No rounded corners (the logo mark excepted), no shadows, no gradients, no second colour.
- No eyebrows, no tracked capitals on labels, no middle-dot strings, no dashes in copy.
- Never an invented figure: a number on the site is one the owner published, or a dashed `.fill` slot.

## Exports
`assets/css/tokens.css` in this project.
