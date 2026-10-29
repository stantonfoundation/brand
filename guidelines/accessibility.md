# Accessibility

Target: WCAG 2.2 AA. The website was audited against it in October 2026 (landmarks, headings, contrast, focus, reel pause); the rules below come from that work.

## Built into the system

- **Contrast.** Every color pair the system uses is listed in `tokens/contrast.json` and checked by `pnpm test`; see the table in `color.md`. `--steel` was darkened from `#6C7A93` (4.33:1) to `#5E6A80` (5.45:1 on white) to pass.
- **Focus.** Every focusable element shows a 2px ring offset 2px: Devil blue on light grounds, silver on dark ones. Do not remove outlines.
- **Skip link.** The first Tab on every page offers "Skip to content". Pages need `<main id="main" tabindex="-1">`.
- **Tap targets.** Buttons and inputs are at least 48px tall; header controls at least 44px.
- **Motion.** Smooth scrolling and the photo reel stop under `prefers-reduced-motion: reduce`. The reel also has a visible pause button.
- **No sideways panning.** `overflow-x: clip` on `html` and `body`.

## Rules for new pages

- One `h1` per page (the `.display` headline). Do not skip heading levels.
- Use landmarks: `header`, `nav`, `main`, `footer`, and `aside` for the match banner.
- Gold text on light grounds only at 24px and up. Use `.eyebrow-ink` for eyebrows on light grounds.
- Give the goal meter `role="progressbar"` with `aria-valuetext` that reads as a sentence ("$38,250 raised of $65,000").
- Do not convey state by color alone. Met milestones get a ✓ as well as gold.
- Icon-only links (social icons, the hamburger) need an `aria-label`.
- Links that open a new tab say so, or carry `rel="noopener"` and an icon.

## Open items

- `.btn-gold:hover` sets white on `--gold-dark`: 4.27:1, just under AA for 15.5px text. Options: keep midnight text on hover and lighten the fill to `--gold-light` (6.92:1), or darken the hover fill. The website has the same rule; change both together.
- Input and gift-amount borders are `--silver` on white: 1.62:1. WCAG 1.4.11 asks 3:1 for the edge of a control, so a low-vision visitor may not see where a field is. A darker border such as `--steel` (5.45:1) fixes it but makes forms heavier; the website has the same borders. Decide with the website.
- The arc type in the image lockups is unreadable to screen readers. Always give the logo image alt text with the full name.
