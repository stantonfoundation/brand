# AGENTS.md

Rules for coding agents working in this repo. Read `README.md` first. This file lists only what is easy to get wrong.

## Sources of truth

- Tokens: `tokens/tokens.json`. `tokens/tokens.css` mirrors it. Change both, then run `pnpm test`.
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

- Use pnpm. Do not use npm or yarn.
- Run `pnpm lint` and `pnpm test`. Both must pass.
- If you changed a workflow, run `actionlint .github/workflows/*.yml`.
- Serve the repo (`python3 -m http.server`) and look at `style-guide/index.html` at desktop width and below 960px.
- If you changed a color or added a color pair, list the pair in `tokens/contrast.json` and run `pnpm contrast`. Do not edit the contrast table in `guidelines/color.md` by hand.
- Add a line to `CHANGELOG.md`.

## Conventions

- Branch from `main` and open pull requests into `main`. Do not push to `main`.
- Keep the CI job name `build`. Branch protection on `main` is meant to require a check with that name.
- Do not push tags. A tag is a release; a person makes it (README, "Releasing").
- Node comes from `.nvmrc`. Do not write a Node version into a workflow; use `node-version-file: .nvmrc`.
- Pin third-party GitHub Actions to a full 40-character commit SHA, with the version tag in a comment.

## Writing

- Guidelines: short declarative rules, then the reason. No hedging, no filler.
- Commit messages: a short subject line, then a body that says what changed and why.
