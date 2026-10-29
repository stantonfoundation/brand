# Stanton College Preparatory Foundation — Brand

The design system and style guide for the Stanton College Preparatory Foundation: logo files, color and type tokens, the component stylesheet, and the written rules for using them.

The public website at `stantonfoundation.org` (repo `stantonfoundation/website`) is the first and main user of this system. Where the site and the original design handoff disagree, this repo follows the site, because the site's changes fixed real problems. Each difference is recorded in `CHANGELOG.md`.

## Start here

- **See it:** open `style-guide/index.html` through a local server (below). It renders every token and component from the real stylesheet.
- **Read the rules:** `guidelines/`.
- **Build with it:** link `css/scpf.css` and load the two fonts.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/style-guide/
```

Opening the HTML file straight from disk mostly works too, but some browsers block the stylesheet's `@import` of the tokens over `file://`.

## What's here

```text
assets/
  logo/            Lockups and marks, light and dark (SVG, PNG)
  logo/source/     The original 2000×2000 logo PNG from the handoff
  icons/           favicon.ico, icon-192.png, apple-touch-icon.png
  social/          og-default.jpg, the 1200×630 share card
tokens/
  tokens.json      Design tokens, W3C Design Tokens format (source of truth)
  tokens.css       The same tokens as CSS custom properties
css/
  scpf.css         The system stylesheet: imports tokens.css, then every component
guidelines/
  logo.md          Files, which to use where, misuse, open items
  color.md         Palette, proportion, the gold rule, measured contrast
  typography.md    Newsreader + Instrument Sans, scale, practice
  layout.md        Squared corners, hairlines, spacing, grids, breakpoints
  components.md    Buttons, forms, cards, lists, chrome, goal meter, photo reel
  photography.md   Subject, treatment, files, consent
  voice.md         Names, tagline, how the Foundation writes
  accessibility.md WCAG 2.2 AA rules and open items
style-guide/
  index.html       The living style guide
handoff/
  design_handoff_scpf_website/   The original design handoff, unchanged
scripts/
  check-tokens.mjs Fails if tokens.json and tokens.css disagree
```

## The system in brief

- **Color.** Navy and silver, with gold kept for giving. About 60% paper and white, 26% navy, 9% silver and steel, 5% gold. See `guidelines/color.md`.
- **Type.** Newsreader for headings, numbers and quotes; Instrument Sans for everything else. See `guidelines/typography.md`.
- **Shape.** Squared corners, 1px hairline rules, no shadows. See `guidelines/layout.md`.
- **Voice.** Warm, specific and plain. Name the project and the amount. See `guidelines/voice.md`.

## Using it in a page

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="css/scpf.css" />
```

Then compose sections from the classes in `guidelines/components.md`. To use only the tokens (in another framework, or in email), take `tokens/tokens.css` or `tokens/tokens.json`.

## Changing the system

1. Change the token in `tokens/tokens.json` and `tokens/tokens.css`, or the component in `css/scpf.css`.
2. Run `node scripts/check-tokens.mjs`. It must pass.
3. Open the style guide and check the change on both light and dark grounds.
4. If the change affects contrast, re-measure it and update the table in `guidelines/color.md`.
5. Update the guideline that describes the change, and add a line to `CHANGELOG.md`.
6. The website keeps its own copy of the stylesheet (`src/styles/styles.css`). Make the matching change there in a pull request to the website repo.

## Relationship to the website

The website does not import from this repo yet. Its stylesheet is a superset of `css/scpf.css`: the same tokens and components, plus pieces that only make sense on the site (the Facebook video card, Keystatic draft-mode placeholders, the confetti canvas). Keep the two in step by hand until the site consumes this repo directly.

## Open items

- A vector master of the logo, and a one-color version. The current SVGs wrap raster images. See `guidelines/logo.md`.
- Print color values (CMYK, Pantone).
- The `.btn-gold` hover contrast. See `guidelines/accessibility.md`.
- Templates for letterhead, slides and social posts.
