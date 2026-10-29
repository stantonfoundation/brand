# Logo

The Foundation's mark is a three-lobed interlaced knot. One band is Devil blue, one shades to silver, one to ivory. It is a rendered, dimensional image, with highlights and shading, not flat line art. The full lockup sets "STANTON COLLEGE PREPARATORY" on an arc above the knot and "FOUNDATION" below it.

## Files

All files are in `assets/logo/`.

| File                             | What it is                                                 | Use it on                                                 |
| -------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- |
| `scpf-lockup.svg`                | Full lockup, navy type                                     | White, paper, parchment                                   |
| `scpf-lockup-dark.svg`           | Full lockup, white type, on its own midnight square        | Midnight and navy, or print where a dark square is wanted |
| `scpf-lockup-dark-muted.svg`     | Full lockup, softened knot, on midnight                    | Dark grounds where the full-contrast knot is too loud     |
| `scpf-mark.svg`                  | Knot only, on white                                        | Light grounds                                             |
| `scpf-mark-muted.svg`            | Knot only, softened tones                                  | Light grounds, watermarks, large background use           |
| `scpf-mark-dark.svg`             | Knot only, on its own midnight square                      | Social avatars, app icons                                 |
| `scpf-mark-dark-transparent.png` | Knot only, transparent background, 1202×1083               | Dark grounds at large size; source for small exports      |
| `scpf-mark-144.png`              | Knot only, transparent, 143×129, 20 KB                     | Website header and footer                                 |
| `source/scpf-logo.png`           | Lockup from the original design handoff, 2000×2000, 1.8 MB | Source only. Do not use it on the web                     |

Icons for browsers live in `assets/icons/`: `favicon.ico` (32×32), `icon-192.png`, `apple-touch-icon.png` (180×180). The default social share image is `assets/social/og-default.jpg` (1200×630).

## Two ways to show the logo

**On the web, in site chrome:** use the transparent mark (`scpf-mark-144.png`) beside the HTML wordmark. The wordmark is live text: "Stanton College Preparatory" in Newsreader, with "FOUNDATION" under it in Instrument Sans 600, gold, uppercase, tracked 0.2em. The `.logo-lockup` and `.logo-lockup-lg` classes in `css/scpf.css` build it. This is sharper than the image lockup at header sizes, and the arc type in the image lockup does not survive below about 120px.

**Everywhere else** (print, slides, social, documents): use the full lockup file that matches the ground.

## Rules

- Do not recolor the knot, flatten it to one color, outline it, or add effects.
- Do not put the mark in a box or on a white chip on a dark ground. Use a dark variant or the transparent PNG instead.
- Do not rotate, skew or crop the knot, or rearrange the arc type.
- Do not set the knot on photographs unless the area behind it is a calm, dark field.
- Keep clear space on every side of at least a quarter of the knot's width.
- Do not set the knot alone smaller than 32px tall on screen, or the full lockup smaller than 120px wide on screen or 1 inch in print.

## About the files

The SVG files are 0.8 to 1.6 MB each, too heavy for web pages. The website uses the 20 KB PNG in its header and footer for that reason.
