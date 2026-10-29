# Stanton College Preparatory Foundation — Brand

The design system and style guide for the Stanton College Preparatory Foundation: logo files, color and type tokens, the component stylesheet, and the written rules for using them.

The Foundation's website, <https://stantonfoundation.org>, is the main user of this system. Where the site and the original design handoff disagree, this repo follows the site, because the site's changes fixed real problems. `CHANGELOG.md` records each difference.

## Start here

- **See it:** <https://brand.stantonfoundation.org>. The style guide is a one-page reference: logo files, colors, type and the basic components, drawn with the real stylesheet. To see a change before it merges, open `style-guide/index.html` through a local server (below).
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
  contrast.json    Every color pair in use, and the ratio it needs
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
  index.html       The published one-page reference
handoff/
  design_handoff_scpf_website/   The original design handoff, unchanged
scripts/
  check-tokens.mjs   Fails if tokens.json and tokens.css disagree
  check-contrast.mjs Fails if a color pair falls short; writes the color.md table
  build-pages.mjs    Assembles the published style guide in _site/
  build-kit.mjs      Builds the brand kit zip in _kit/
  release-notes.mjs  Prints a version's CHANGELOG.md section
.github/workflows/
  build.yml        The `build` check: lint, tests, links, actionlint
  pages.yml        Publishes the style guide after `build` passes on main
  release.yml      Publishes a GitHub Release with the brand kit on a v* tag
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

## Installing the package

The repo is a package, `@stantonfoundation/brand`. It is not on the npm registry; install it from GitHub by tag:

```bash
pnpm add github:stantonfoundation/brand#v1.0.0
```

| Import                                 | File                                   |
| -------------------------------------- | -------------------------------------- |
| `@stantonfoundation/brand/scpf.css`    | The system stylesheet, tokens included |
| `@stantonfoundation/brand/tokens.css`  | Tokens only, as CSS custom properties  |
| `@stantonfoundation/brand/tokens.json` | Tokens only, as W3C design tokens      |
| `@stantonfoundation/brand/assets/*`    | Logo files, icons and the share card   |

The package leaves out the guidelines, the handoff and the 1.8 MB source logo. It has no dependencies and no install scripts.

## Getting the files without code

Every release has a brand kit zip attached: the logo files (with the 2000×2000 source), icons, share card, color values and guidelines. Download it from the latest release on GitHub: <https://github.com/stantonfoundation/brand/releases/latest>.

## Checks

Requires Node 22.12 or later and pnpm 11 or later. The pnpm version is pinned in `package.json`.

```bash
pnpm install
pnpm lint          # Prettier and markdownlint, check only
pnpm test          # token and contrast checks
pnpm contrast      # rewrite the contrast table in guidelines/color.md
pnpm check:links   # link check; needs lychee installed locally
pnpm format        # Prettier, rewriting files
pnpm build:pages   # the published style guide, in _site/
pnpm build:kit     # the brand kit zip, in _kit/
```

The `build` workflow runs all of these, plus actionlint, on every push and pull request. Merge only when it passes. `handoff/` is excluded from every check, so it stays byte-identical to the original zip.

## Dependency updates

Dependabot (`.github/dependabot.yml`) proposes updates weekly for the dev tools in `package.json` and for the actions in the workflows. Minor and patch updates come grouped, one pull request per ecosystem; a major update gets its own. A new release waits seven days before Dependabot proposes it. Review and merge these like any pull request: the `build` check must pass.

## Publishing

Every push to `main` that passes `build` publishes the style guide to GitHub Pages (`pages.yml`). It is served at <https://brand.stantonfoundation.org>; the address is a CNAME in the foundation's Cloudflare DNS (DNS only, not proxied) and the custom domain is set under **Settings → Pages**. The published copy leaves out `handoff/`, whose homepage has placeholder figures, and links the guidelines to GitHub, which renders the Markdown. To publish again without a change, run the Pages workflow on `main` from the Actions tab.

## Changing the system

1. Branch from `main`. Open a pull request into `main`.
2. Change the token in `tokens/tokens.json` and `tokens/tokens.css`, or the component in `css/scpf.css`. Run `pnpm lint` and `pnpm test`.
3. Open the style guide and check the change on both light and dark grounds.
4. If the change adds or alters a color pair, list it in `tokens/contrast.json` and run `pnpm contrast`.
5. Update the guideline that describes the change, and add a line to `CHANGELOG.md`.
6. The website keeps its own copy of the stylesheet (`src/styles/styles.css`). Make the matching change there in a pull request to the website repo.

## Releasing

A release is a version tag. The website pins a tag, so nothing reaches the website until someone tags a release and the website takes the update.

1. In a pull request, set the new version in `package.json` and rename the top `CHANGELOG.md` section to that version and date (`## 1.1.0 — 2026-11-12`). Use a minor version for additions and a major version for anything that changes how the site looks or renames a class or token.
2. Merge it into `main`.
3. Tag the merge commit and push the tag: `git tag v1.1.0 && git push origin v1.1.0`.
4. `release.yml` publishes the GitHub Release with the brand kit attached. It refuses a tag that is not on `main`, does not match `package.json`, or has no changelog section.

## Relationship to the website

The website does not import from this repo yet. Its stylesheet is a superset of `css/scpf.css`: the same tokens and components, plus pieces that only make sense on the site (the Facebook video card, Keystatic draft-mode placeholders, the confetti canvas). Until the website installs this package, keep the two in step by hand.

## Open items

- A vector master of the logo, and a one-color version. The current SVGs wrap raster images. See `guidelines/logo.md`.
- Print color values (CMYK, Pantone).
- The `.btn-gold` hover contrast and the input border contrast. See `guidelines/accessibility.md`.
- Templates for letterhead, slides and social posts.
