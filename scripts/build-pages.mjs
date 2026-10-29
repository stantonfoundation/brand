// Assembles the published style guide in _site/, for GitHub Pages.
// Usage: node scripts/build-pages.mjs   (pnpm build:pages)
//
// The site is the repo's public files as they are, so the style guide's
// relative links to ../css, ../tokens and ../assets keep working. Two
// changes on the way out:
//   - links into guidelines/ and handoff/ point at GitHub. GitHub renders
//     the Markdown, which Pages would serve raw. The handoff is left off
//     the site: its homepage has placeholder figures and a placeholder
//     EIN, and should not be served as a live page.
//   - a root index.html redirects to style-guide/.
import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";

const repo = new URL("../", import.meta.url);
const out = new URL("_site/", repo);
const GITHUB = "https://github.com/stantonfoundation/brand/blob/main";

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const dir of ["assets", "css", "style-guide", "tokens"]) {
  cpSync(new URL(dir, repo), new URL(dir, out), { recursive: true });
}

const page = new URL("style-guide/index.html", out);
const html = readFileSync(page, "utf8");
const linked = html.replaceAll(
  /href="\.\.\/((?:guidelines|handoff)\/[^"]+)"/g,
  `href="${GITHUB}/$1"`,
);
if (linked === html || /href="\.\.\/(?:guidelines|handoff)\//.test(linked)) {
  throw new Error(
    "Could not rewrite the guideline and handoff links in style-guide/index.html",
  );
}
writeFileSync(page, linked);

writeFileSync(
  new URL("index.html", out),
  `<!doctype html>
<meta charset="utf-8" />
<title>Stanton College Preparatory Foundation — Brand</title>
<meta http-equiv="refresh" content="0; url=style-guide/" />
<link rel="canonical" href="style-guide/" />
<a href="style-guide/">Style guide</a>
`,
);
// Serve files as they are; no Jekyll processing.
writeFileSync(new URL(".nojekyll", out), "");

console.log("_site/ ready");
