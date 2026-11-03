# Logo

The Foundation's mark is a three-lobed interlaced knot. One band is Devil blue, one shades to silver, one to ivory. It is a rendered, dimensional image, with highlights and shading, not flat line art. The full lockup sets "STANTON COLLEGE PREPARATORY" on an arc above the knot and "FOUNDATION" below it. The wide logo sets the knot on the left and the name to its right, on two lines.

## Files

All files are in `assets/logo/`.

| File                             | What it is                                                 | Use it on                                                 |
| -------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- |
| `scpf-lockup.svg`                | Full lockup, navy type                                     | White, paper, parchment                                   |
| `scpf-lockup-dark.svg`           | Full lockup, white type, on its own midnight square        | Midnight and navy, or print where a dark square is wanted |
| `scpf-lockup-dark-muted.svg`     | Full lockup, softened knot, on midnight                    | Dark grounds where the full-contrast knot is too loud     |
| `scpf-wide.svg`                  | Wide logo, navy type, transparent background               | White, paper, parchment                                   |
| `scpf-wide-dark.svg`             | Wide logo, white type and gold "FOUNDATION", transparent   | Midnight and navy                                         |
| `scpf-wide.png`                  | `scpf-wide.svg` as a PNG, 1600 wide                        | Where SVG is not accepted: email, office documents        |
| `scpf-wide-dark.png`             | `scpf-wide-dark.svg` as a PNG, 1600 wide                   | Where SVG is not accepted, on dark grounds                |
| `scpf-wide-600.png`              | `scpf-wide.svg` as a PNG, 600×89, 26 KB                    | Web pages: the website's printed header                   |
| `scpf-mark.svg`                  | Knot only, on white                                        | Light grounds                                             |
| `scpf-mark-muted.svg`            | Knot only, softened tones                                  | Light grounds, watermarks, large background use           |
| `scpf-mark-dark.svg`             | Knot only, on its own midnight square                      | Social avatars, app icons                                 |
| `scpf-mark-dark-transparent.png` | Knot only, transparent background, 1202×1083               | Dark grounds at large size; source for small exports      |
| `scpf-mark-144.png`              | Knot only, transparent, 143×129, 20 KB                     | Website header and footer                                 |
| `source/scpf-logo.png`           | Lockup from the original design handoff, 2000×2000, 1.8 MB | Source only. Do not use it on the web                     |

Icons for browsers live in `assets/icons/`: `favicon.ico` (32×32), `icon-192.png`, `apple-touch-icon.png` (180×180). The default social share image is `assets/social/og-default.jpg` (1200×630).

## Square or wide

Use the square lockup where the space is square or tall: social avatars, posters, the cover of a printed piece. Use the wide logo where the space is a short strip: letterhead, email signatures, slide footers, document headers, banners, sponsor listings. A square lockup squeezed into a strip comes out too small to read.

The wide logo is the website header's lockup as a file: the knot, then "Stanton College Preparatory" in Newsreader 400, with "FOUNDATION" under it in Instrument Sans 600, uppercase, tracked 0.2em. The spacing is the `.logo-lockup-lg` spacing, and the type is outlined, so the file looks the same without the fonts installed. On light grounds "FOUNDATION" is Devil blue, not gold: at logo sizes it is far below 24px, and gold on a light ground is about 3:1. See `color.md`.

## Two ways to show the logo

**On the web, in site chrome:** use the transparent mark (`scpf-mark-144.png`) beside the HTML wordmark. The wordmark is live text: "Stanton College Preparatory" in Newsreader, with "FOUNDATION" under it in Instrument Sans 600, gold, uppercase, tracked 0.2em. The `.logo-lockup` and `.logo-lockup-lg` classes in `css/scpf.css` build it. This is sharper than the image lockup at header sizes, and the arc type in the image lockup does not survive below about 120px.

**Everywhere else** (print, slides, social, documents): use the logo file, square or wide, that matches the ground.

## Rules

- Do not recolor the knot, flatten it to one color, outline it, or add effects.
- Do not put the mark in a box or on a white chip on a dark ground. Use a dark variant or the transparent PNG instead.
- Do not rotate, skew or crop the knot, or rearrange the arc type.
- Do not reset the wide logo's name in other fonts, rearrange its two lines, or change the space between the knot and the name.
- Do not set the knot on photographs unless the area behind it is a calm, dark field.
- Keep clear space on every side of at least a quarter of the knot's width.
- Do not set the knot alone smaller than 32px tall on screen, the full lockup smaller than 120px wide on screen or 1 inch in print, or the wide logo smaller than 300px wide on screen or 2.5 inches in print. Below that, "FOUNDATION" is too small to read.

## About the files

The square SVG files are 0.8 to 1.6 MB each, too heavy for web pages. The website uses the 20 KB PNG in its header and footer for that reason. The wide SVGs are about 0.5 MB. On a web page, use `scpf-wide-600.png` instead.

The knot in every file is a raster image inside the SVG, so no file scales without limit. The wide SVGs carry the knot at about 640 pixels across in the light file and 970 in the dark one. That is enough for letterhead, slides and documents. For a large-format banner, print a proof of the knot at full size first.

The light wide file takes its knot from `scpf-mark.svg`, with the white field made transparent. On white and paper it looks the same as `scpf-mark.svg`, shadow included. The dark wide file takes its knot from `scpf-mark-dark-transparent.png`.
