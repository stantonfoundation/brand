# AGENTS.md

Rules for coding agents working in this repo. Read `README.md` first. This file lists only what is easy to get wrong.

## Sources of truth

- Tokens: `tokens/tokens.json`. `tokens/tokens.css` mirrors it. Change both, then run `node scripts/check-tokens.mjs`.
- Components: `css/scpf.css`.
- Rules: `guidelines/*.md`. If you change behaviour or a value, update the guideline that describes it in the same change.
- Reference implementation: the website repo, a sibling folder at `../website` (`src/styles/styles.css`, `src/layouts/Base.astro`, `src/pages/index.astro`). Read it; do not edit it from here.

## Do not

- Do not edit anything in `handoff/`. It is the original design handoff, kept verbatim as a record.
- Do not add `border-radius` or `box-shadow` to components.
- Do not use gold for anything that is not a giving action. See `guidelines/color.md`.
- Do not set gold text on a light ground below 24px. It measures about 3:1.
- Do not reference `assets/logo/source/scpf-logo.png` from a web page. It is 1.8 MB.
- Do not invent figures, dates or names in examples. Take them from the website's content files (`../website/src/content/`) or mark them as placeholders.

## Before you finish

- Run `node scripts/check-tokens.mjs`. It must pass.
- Serve the repo (`python3 -m http.server`) and look at `style-guide/index.html` at desktop width and below 960px.
- If you changed a color, re-measure contrast for every pair that uses it and update the table in `guidelines/color.md`.
- Add a line to `CHANGELOG.md`.

## Writing

- Guidelines: short declarative rules, then the reason. No hedging, no filler.
- Commit messages: a short subject line, then a body that says what changed and why.
