# Design: flaxvin.tech

The locked system for every page. Change it on purpose; this file is the rule.

## System
- Genre: editorial. Theme: brand, Flaxvin as Pathayam's maker. Similar to pathayam.app, not the same.
- Home shape: Index hero (the claim beside the seven pages as counted cards). Pathayam is not featured on the home page, by the owner's instruction (26-11-2026); it lives on Products only, without screenshots. Inner pages: Banner hero (crumb, h1, one line) on paper-2.
- Axes: light/grotesk-heavy/warm. Posture: restrained, with one drenched band per page (the close, in laterite).
- Chrome: paper header bar (laterite mark, outlined pill action); footer is an ink slab with the wordmark at display size over the link columns.

## What is shared with Pathayam, and what is not
- Shared: warm linen paper, Bricolage Grotesque 700 for display, IBM Plex Mono for figures.
- Flaxvin's own: laterite accent (not Pathayam's blue), warm charcoal dark theme (not blue-black), IBM Plex Sans body (not Figtree), pill buttons, the slab at the foot (Pathayam's is at the head).

## Tokens
`assets/css/tokens.css` is the source of truth. Light is `:root`; dark follows `prefers-color-scheme` only. There is no theme toggle: remembering a choice needs browser storage, and the cookie and privacy notices promise none.
- paper oklch(96.4% 0.011 78), ink oklch(22% 0.014 55), accent (laterite) oklch(51.5% 0.148 38).
- `--color-deep*` drives the close band, `--color-slab*` the footer. Both re-point the base tokens inside their block, so components work unchanged there.
- Radius: cards 16px, fields 10px, buttons and tags pills. Weights: 400, 600, 700 only.

## Shared parts (assets/css/site.css)
.hdr/.nav/.burger, .btn/.btn--primary, .page-hero/.crumb, .register (+ --stack), .rows/.row, .spec, .list (laterite dots), .tags (pills), .fig (card), .frame/.shot (screenshot frame, unused now), .dimension/.dim, .stages (numbered cards), .tb/.field (form card), .band, .band--deep, .close, .ftr.

## Rules
- One page stylesheet per page in assets/css/pages/, read after site.css; page CSS never restyles the chrome.
- One filled primary button per screen; the nav action is outlined.
- Display-size figures are ink; laterite marks small signals (links, counts, dots, the dim bar).
- Grid tracks minmax(0, 1fr); everything stacks under 60rem; nothing scrolls sideways at 320 to 1920.
- Words, figures and prices are the owner's; never add unsourced metrics. Legal text changes only to stay true.
- Do not feature Pathayam prominently: no screenshots, no home-page mention; the footer link reads Products.
