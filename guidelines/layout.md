# Layout

Squared corners, hairline rules, plenty of space and no shadows.

## Principles

- **Squared corners.** `border-radius` is 0 everywhere. The only round shapes are the milestone dots in the goal meter.
- **Hairlines, not shadows.** Separate things with 1px rules in platinum (on light) or `rgba(255,255,255,0.12)` (on dark). Never use a drop shadow.
- **Alternating grounds.** Pages stack full-width sections that alternate between paper, white (with platinum rules top and bottom), navy and midnight. Two dark sections can sit next to each other only when one is navy and the other midnight.
- **One idea per section.** Each section has one heading and at most one primary action.

## Spacing

| Token                  | Value  | Use                                                                     |
| ---------------------- | ------ | ----------------------------------------------------------------------- |
| `--gutter`             | 6vw    | Left and right padding on every section, the header and the banner      |
| `--max-width`          | 1440px | Widest content measure                                                  |
| `--space-section`      | 84px   | Top and bottom padding of a section (hero: 88px; dense stat rows: 56px) |
| `--space-section-head` | 44px   | Below a section head                                                    |
| `--space-grid-2`       | 56px   | Two-column gap                                                          |
| `--space-grid-3`       | 28px   | Card grid gap                                                           |
| `--space-grid-4`       | 44px   | Stat row gap                                                            |
| `--space-tap-target`   | 48px   | Minimum height of buttons and inputs; 44px in the header                |

Card padding is 32px top and 34px sides and bottom. Rows in ruled lists have 22px vertical padding.

## Grids

- `.grid-2`: two equal columns, collapsing to one below 960px.
- `.grid-3`: as many 280px-minimum columns as fit. Cards.
- `.grid-4`: as many 200px-minimum columns as fit. Stats.
- `.hero`: 1.3fr text beside 1fr goal meter, stacked below 960px.

## Breakpoints

- **1400px:** the large header lockup steps down and the nav may wrap to its own row.
- **960px:** grids stack, display and heading sizes drop, the nav collapses into the hamburger.

## Section head

`.section-head` puts the heading on the left and a text link on the right ("All funded projects →"), with a platinum rule underneath. Use it to open any section that lists things.
