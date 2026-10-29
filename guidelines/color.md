# Color

The palette is navy and silver, with gold reserved for giving. The values live in `tokens/tokens.json` and `tokens/tokens.css`.

## Palette

| Token              | Hex       | Role                                                                   |
| ------------------ | --------- | ---------------------------------------------------------------------- |
| `--midnight`       | `#0F172B` | Header, hero fields, footer. Text on gold                              |
| `--navy`           | `#16213C` | Core brand. Headings and default text, navy buttons, card flags        |
| `--navy-card`      | `#1D2A48` | Card fill on navy and midnight                                         |
| `--devil-blue`     | `#274270` | Links, secondary actions, active states, focus ring                    |
| `--gold`           | `#B4883C` | **Giving actions only.** Donate buttons, match banner, goal-meter fill |
| `--gold-dark`      | `#9C7330` | Gold hover on light grounds                                            |
| `--gold-light`     | `#C79A4C` | Gold hover on dark grounds                                             |
| `--parchment`      | `#F3EADA` | Gold-tinted fills: match cards, selected gift amount                   |
| `--parchment-rule` | `#E4D3B0` | Border on parchment cards                                              |
| `--slate`          | `#4A5567` | Body copy                                                              |
| `--steel`          | `#5E6A80` | Labels, meta, serial numbers                                           |
| `--steel-dark`     | `#8E9AB0` | Muted text on dark grounds                                             |
| `--silver`         | `#C6CBD3` | Body text on navy and midnight. Input borders                          |
| `--platinum`       | `#E2E4E8` | Hairline rules, card borders                                           |
| `--paper`          | `#F8F8F6` | Page ground                                                            |
| `--white`          | `#FFFFFF` | Cards, inputs, headings on dark                                        |

"Devil blue" is named for the Stanton Blue Devils.

## Proportion

Across a page, aim for roughly:

- 60% paper and white
- 26% navy and midnight
- 9% silver and steel
- 5% gold

Gold appears once or twice per screen at most. When gold is everywhere it stops meaning "give".

## Gold is for giving

Use gold for:

- the Donate button and every other "give" action (`.btn-gold`, `.nav-donate`)
- the match banner, while a match is live
- the goal-meter fill and met milestones
- the selected gift amount
- small accents that point at giving: the eyebrow rule, the underline on text links, the "Foundation" line in the wordmark

Do not use gold for decoration, for headings, or for a second button that does something other than give.

## Contrast

Measured WCAG 2 ratios for the pairs the system uses. AA needs 4.5:1 for body text and 3:1 for text 24px and up (or 18.66px bold).

| Text on ground                     | Ratio              | Verdict                      |
| ---------------------------------- | ------------------ | ---------------------------- |
| navy on white                      | 15.95              | AA, AAA                      |
| slate on white / paper             | 7.54 / 7.09        | AA, AAA                      |
| steel on white / paper / parchment | 5.46 / 5.13 / 4.57 | AA                           |
| devil-blue on white                | 10.00              | AA, AAA                      |
| midnight on gold                   | 5.54               | AA                           |
| midnight on parchment              | 14.94              | AA, AAA                      |
| silver on navy / midnight          | 9.78 / 10.94       | AA, AAA                      |
| steel-dark on midnight / navy-card | 6.28 / 5.01        | AA                           |
| gold on navy / midnight            | 4.96 / 5.54        | AA                           |
| **gold on white / paper**          | **3.22 / 3.03**    | **Large text only**          |
| **white on gold**                  | **3.22**           | **Large text only**          |
| **white on gold-dark**             | **4.28**           | **Fails for body-size text** |

What follows from the table:

- Do not set gold text on light grounds below 24px. Gold eyebrows go on dark grounds; on light grounds use `.eyebrow-ink`, which keeps the gold rule and sets the words in Devil blue.
- On gold fills, set type in midnight. If white type on gold is unavoidable, make it 19px bold or 24px regular and up (WCAG large text). The original handoff allowed 19px semibold; 600 weight does not count as bold for WCAG.
- The `.btn-gold:hover` state (white on gold-dark, 4.28:1) falls just short. It is listed as an open item in `accessibility.md`.

`--steel` was `#6C7A93` in the original design handoff. That measured 4.34:1 on white, under AA, so the website darkened it to `#5E6A80`. This repo uses the darker value.

## Print

No print (CMYK or Pantone) values have been specified. Until they are, convert from the hex values above and proof gold and navy on the actual stock: gold in particular shifts on uncoated paper.
