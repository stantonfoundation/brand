# Stanton College Preparatory Foundation — Website

Clean, dependency-free HTML/CSS for the Foundation homepage. No build step, no framework, no JavaScript required — open `index.html` in a browser or drop the folder on any static host.

## Files

```
index.html          Homepage (all sections)
css/styles.css      Design tokens + all component styles
assets/scpf-logo.png
```

## How it's organized

All brand values live as CSS custom properties at the top of `styles.css` (`:root`). Change a token once and it applies everywhere.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `--midnight` | #0F172B | Hero fields, footer, text on light |
| `--navy` | #16213C | Core brand: nav, headings |
| `--devil-blue` | #274270 | Links, secondary actions |
| `--gold` | #B4883C | **Giving actions only — keep scarce** |
| `--slate` | #4A5567 | Body copy |
| `--steel` | #6C7A93 | Labels, meta |
| `--silver` | #C6CBD3 | Text on navy, input borders |
| `--platinum` | #E2E4E8 | Borders, rules |
| `--paper` | #F8F8F6 | Page background |
| `--parchment` | #F3EADA | Gold-tinted fills |

Color proportion rule: ~60% paper/white, 26% navy, 9% silver/steel, 5% gold. Gold appears once or twice per screen at most. Gold never carries small text — on gold fills, set type in midnight or keep it 19px+ semibold.

### Typography

- **Newsreader** (serif) — display and headings. Weights 300–600, loaded from Google Fonts.
- **Instrument Sans** — body, UI, labels. Weights 400–600.

Scale: `.display` 62px · `h2` 40px · `h3` 26px (serif) · `.h3` 21px (sans) · `.lead` 20px · body 15.5px/1.65 · `.eyebrow` and `.label` for uppercase labels.

### Components

- Buttons: `.btn` + `.btn-gold` (giving only) / `.btn-navy` / `.btn-outline` / `.btn-outline-light`; inline `.text-link`
- Cards: `.card`, `.card-flagged` (navy top rule), `.card-navy`, `.card-gold`
- Forms: bare `input`/`select` are styled; `.field` for label+input stacks; `.amount-btn` (+ `.selected`) for gift pickers
- Layout: `.grid-2/3/4`, `.section-head`; sections get 84px vertical padding by default
- Chrome: `.match-banner`, `.site-header`/`.site-nav`, `.hero`, `.goal-meter`, `.site-footer`/`.footer-grid`
- Dark sections: add `.on-dark` to flip text colors

Squared corners and hairline rules throughout — no border-radius, no shadows.

## Extending

To add a page: copy `index.html`, keep the banner/header/footer, and compose sections from the classes above. To make the amount picker or forms functional, add your own JS — nothing here depends on scripts.

## Placeholder content to replace

Dollar figures, donor counts, dates, the EIN (59-0000000), street address, and event listings are all realistic placeholders — replace with real data before publishing.
