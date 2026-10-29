# Components

Every component is a class in `css/scpf.css`, and `style-guide/index.html` shows each one rendered. The Foundation's website, <https://stantonfoundation.org>, uses all of them and is the reference for how they fit together.

## Buttons

| Class                     | Look                            | Use                                                                  |
| ------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| `.btn .btn-gold`          | Gold fill, midnight text        | Giving only. One per view                                            |
| `.btn .btn-navy`          | Navy fill, white text           | Primary non-giving action on light grounds ("Start a grant request") |
| `.btn .btn-outline`       | Devil-blue hairline             | Secondary action on light grounds                                    |
| `.btn .btn-outline-light` | White hairline                  | Secondary action on dark grounds                                     |
| `.text-link`              | Devil-blue text, gold underline | Inline "more" links; end with →                                      |

Buttons are 48px minimum height, 15.5px Instrument Sans 600, padded 16px by 32px. Labels are short verbs: "Give to Stanton", "Subscribe", "Start a grant request". Do not use "Click here" or "Learn more".

## Forms

- Bare `input` and `select` are styled: white, silver hairline, 48px tall, 16px text (16px stops iOS from zooming on focus).
- `.field` stacks a `.label` above its control with 8px between.
- `.amount-btn` is the gift amount picker. Mark the chosen one with `aria-pressed="true"` (or the `.selected` class). The selected state is a 2px gold rule on parchment.
- On a dark band, inputs inside `.on-dark` turn translucent with a white hairline.
- Every input has a visible label, or an `aria-label` when the design shows none (the newsletter field).

## Cards

| Class                 | Use                                                              |
| --------------------- | ---------------------------------------------------------------- |
| `.card`               | White card with platinum hairline. Events, forms, documents      |
| `.card .card-flagged` | Adds a 3px navy top rule. Numbered programs: "01 Faculty Lounge" |
| `.card-navy`          | Navy-card fill on dark grounds. Stats in a dark band             |
| `.card-gold`          | Parchment fill. A match or giving prompt. One per page           |

## Lists

- `.ruled-list`: a 150px label column beside a description, a platinum rule under every row. "Ways to give".
- `.steps`: a serial number column beside a `.h3` and a paragraph. Processes such as the grant cycle.

## Site chrome

- **Skip link** (`.skip-link`): the first focusable element on every page. It jumps to `<main id="main" tabindex="-1">`.
- **Match banner** (`.match-banner`): a single line, midnight on gold, above the header. Show it only while a match is live; it is the one place a full-width gold band is allowed.
- **Header** (`.site-header`): midnight, sticky, with `.logo-lockup.logo-lockup-lg` on the left and `.site-nav` on the right. Nav links are uppercase silver; the last item is `.nav-donate`. Social icons (`.social-links`) follow the Donate button. Below 960px, `.nav-toggle` replaces the nav; a script toggles `.menu-open` on the header and `aria-expanded` on the button.
- **Hero** (`.hero.on-dark`): navy. An eyebrow, the `.display` headline, a lead, a gold primary button and an outline-light secondary button, with the goal meter beside them.
- **Footer** (`.site-footer`, `.footer-grid`, `.footer-col`): midnight. Lockup, address, legal name and EIN in the first column; three link columns; copyright line below a hairline.

## Goal meter

`.goal-meter` is a navy card that shows the campaign total. The bar is segmented: one `.bar-seg` per milestone, each sized to its share of the goal with a 2px gap between, and each with its own `.bar-fill`. `data-state` on each segment and milestone is `met`, `current` or `upcoming`. Set `data-ink="dark"` once a segment's fill passes 70% so its dollar label stays readable on gold. Give the bar `role="progressbar"` with `aria-valuenow`, `aria-valuemax` and a spoken `aria-valuetext`.

A bar with one segment is the plain meter from the original handoff.

## Photo reel

`.photo-reel` is a full-bleed filmstrip of school photos drifting right to left. Photos render in black and white through a CSS filter and return to color on hover. Put the images in `.reel-track` twice so the loop is seamless. Provide a `.reel-toggle` pause button and respect `prefers-reduced-motion` (the CSS stops the animation). See `photography.md`.

## Dark sections

Add `.on-dark` to any section with a navy or midnight background. Headings turn white, paragraphs silver, focus rings silver. A white `.card` inside a dark section keeps its light-ground colors.
