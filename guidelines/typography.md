# Typography

Two families, both free on Google Fonts.

- **Newsreader** (serif) for display, headings, numbers and quotes. Weights 300, 400, 500, 600 and italic 400.
- **Instrument Sans** (sans-serif) for body text, interface, labels and buttons. Weights 400, 500, 600.

Fallbacks: Georgia for the serif, the system UI font for the sans.

## Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

For Word, Google Docs, Canva and slides: both families are available in Google Docs and Canva by name. For desktop apps, download them from Google Fonts. If Newsreader is not available, use Georgia; if Instrument Sans is not available, use Arial. Do not substitute a different display serif.

## Scale

| Class          | Family          | Weight | Size / line height | Notes                                                  |
| -------------- | --------------- | ------ | ------------------ | ------------------------------------------------------ |
| `.display`     | Newsreader      | 400    | 62 / 1.03          | Hero headline only. Tracking −0.02em. 44px below 960px |
| `h2`, `.h1`    | Newsreader      | 500    | 40 / 1.1           | Section headings. Tracking −0.015em. 32px below 960px  |
| `h3`, `.h2`    | Newsreader      | 500    | 26 / 1.2           | Card and sub-section headings                          |
| `.h3`          | Instrument Sans | 600    | 21 / 1.3           | Step titles, event names, compact headings             |
| `.stat-number` | Newsreader      | 400    | 52 / 1             | Impact figures                                         |
| `blockquote`   | Newsreader      | 300    | 34 / 1.32          | Pull quotes. 27px below 960px                          |
| `.lead`        | Instrument Sans | 400    | 20 / 1.6           | First paragraph under a headline. Slate                |
| `p`            | Instrument Sans | 400    | 15.5 / 1.65        | Body copy. Slate                                       |
| `.label`       | Instrument Sans | 600    | 12.5               | Uppercase, +0.06em. Form labels, list labels           |
| `.eyebrow`     | Instrument Sans | 600    | 11.5               | Uppercase, +0.18em, with a 30px rule before it         |
| `.serial`      | Newsreader      | 400    | 15                 | Numbers "01", "02" on cards and steps. Steel           |

Note the naming offset carried over from the handoff: the HTML element `h2` uses the `.h1` style, and `h3` uses `.h2`. The page's single `h1` is the `.display` headline. Use the element that is right for the document outline and the class that gives the look you want.

## Practice

- Headings are serif; everything you click is sans.
- Set headlines in sentence case. Uppercase belongs to labels, eyebrows and nav only, always tracked.
- Keep body measure to about 50 to 70 characters (`max-width: 50ch` on leads).
- Figures in meters and tables use tabular numerals (`font-variant-numeric: tabular-nums`).
- In display type, use the × sign for multiples (3×), not the letter x.
- Do not use Newsreader below 15px or Instrument Sans above 21px for headings.
