# Changelog

## 1.0.0 — 2026-10-29

First release of the brand repo. It brings together the original design handoff (`handoff/design_handoff_scpf_website/`) and the refinements the website made to it between August and October 2026.

### Differences from the original handoff

Color

- `--steel` is `#5E6A80`, not `#6C7A93`. The old value measured 4.34:1 on white, under WCAG AA.
- `.serial` numbers are steel, not gold. Small gold text fails contrast on light grounds.
- New tokens: `--parchment-rule` (`#E4D3B0`, previously hard-coded on `.card-gold`) and `--white`, plus size, spacing and border tokens.
- New `.eyebrow-ink` modifier for eyebrows on light grounds.

Logo

- The header uses a transparent mark (`scpf-mark-144.png`, 20 KB) with no white chip, in place of the 1.8 MB square PNG.
- Light, dark and muted lockups and marks added as SVG (`assets/logo/`).
- New `.logo-lockup-lg` header size. The "Foundation" line sits on its own line box and is nudged 1.5px right to align optically with the serif S.

Accessibility

- Visible focus rings on every focusable element, silver on dark grounds.
- Skip link.
- `prefers-reduced-motion` turns off smooth scrolling and the photo reel.
- `overflow-x: clip` stops the page panning sideways on iOS.
- Bare headings inside a white card on a dark section keep navy text.

Components

- Header padding 24px (was 16px). Below 960px the nav collapses into a hamburger (`.nav-toggle`, `.menu-open`).
- Social icons in the header (`.social-links`).
- Goal meter: segmented by milestone, 30px tall, with dollar amounts inside each segment and milestone labels underneath. A one-segment bar is the original meter.
- Photo reel: full-bleed black-and-white filmstrip, color on hover, with a pause button.
- `.ruled-list` and `.steps` turn the handoff's inline-styled "Ways to give" and grant-process rows into classes.
- `.amount-btn` also accepts `aria-pressed="true"` as its selected state.
- Inputs inside `.on-dark` get the translucent dark treatment that was inline in the handoff.

### Not carried over from the website

Site-specific pieces stay in the website repo: the Facebook video card (`.video-card`, `.video-embed`), Keystatic draft-mode placeholders (`.social-empty`), the confetti canvas, and the About grid ratio.
