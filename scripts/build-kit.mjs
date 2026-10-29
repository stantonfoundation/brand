// Builds the brand kit: a zip of the logo files, icons, share card, color
// tokens and guidelines, for people who need the files without cloning the
// repo. release.yml attaches it to every GitHub Release.
//
// Usage: node scripts/build-kit.mjs   (pnpm build:kit)
// Writes _kit/scpf-brand-kit-<version>.zip, where <version> comes from
// package.json. Needs the `zip` command (macOS and GitHub's Ubuntu
// runners have it).
import { execFileSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";

const repo = new URL("../", import.meta.url);
const { version } = JSON.parse(
  readFileSync(new URL("package.json", repo), "utf8"),
);
const name = `scpf-brand-kit-${version}`;
const out = new URL("_kit/", repo);
const kit = new URL(`${name}/`, out);

rmSync(out, { recursive: true, force: true });
mkdirSync(kit, { recursive: true });

const copy = (from, to) =>
  cpSync(new URL(from, repo), new URL(to, kit), { recursive: true });
copy("assets/logo/", "logo/");
copy("assets/icons/", "icons/");
copy("assets/social/", "social/");
copy("tokens/tokens.css", "colors/tokens.css");
copy("tokens/tokens.json", "colors/tokens.json");
copy("guidelines/", "guidelines/");

writeFileSync(
  new URL("README.txt", kit),
  `Stanton College Preparatory Foundation — brand kit ${version}

See the style guide first: https://stantonfoundation.github.io/brand/

logo/          Lockups and marks. Pick the file that matches the ground:
               scpf-lockup.svg            full logo, light grounds
               scpf-lockup-dark.svg       full logo, on its own midnight square
               scpf-mark.svg              the knot alone, light grounds
               scpf-mark-dark.svg         the knot alone, on midnight (avatars)
               scpf-mark-dark-transparent.png   the knot alone, transparent
               source/scpf-logo.png       2000 x 2000 original, for print
icons/         Browser icons
social/        Link-preview image, 1200 x 630
colors/        Color values as CSS and as JSON
guidelines/    The rules: logo, color, type, layout, voice and more

Colors
  Navy        #16213C   headings, core brand
  Midnight    #0F172B   dark backgrounds
  Devil blue  #274270   links
  Gold        #B4883C   giving only: Donate buttons, the match banner
  Slate       #4A5567   body text
  Paper       #F8F8F6   page background

Fonts (free, Google Fonts)
  Newsreader        headings
  Instrument Sans   body text

Do not recolor, outline, stretch or box the logo. guidelines/logo.md has
the full rules.

Questions: open an issue at https://github.com/stantonfoundation/brand
`,
);

execFileSync("zip", ["-qrX", `${name}.zip`, name], { cwd: out });
console.log(`_kit/${name}.zip ready`);
