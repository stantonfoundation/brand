// Assembles the published style guide in _site/, for GitHub Pages.
// Usage: node scripts/build-pages.mjs   (pnpm build:pages)
//
// The site is one page, index.html, served at the root with the files it
// uses: css/, tokens/ and assets/. One change on the way out: links into
// guidelines/ point at GitHub, which renders the Markdown that Pages
// would serve raw. The handoff stays off the site: its homepage has
// placeholder figures and a placeholder EIN.
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
for (const dir of ["assets", "css", "tokens"]) {
  cpSync(new URL(dir, repo), new URL(dir, out), { recursive: true });
}

const html = readFileSync(new URL("index.html", repo), "utf8");
const linked = html.replaceAll(
  /href="(guidelines\/[^"]+)"/g,
  `href="${GITHUB}/$1"`,
);
if (linked === html || /href="guidelines\//.test(linked)) {
  throw new Error("Could not rewrite the guideline links in index.html");
}
writeFileSync(new URL("index.html", out), linked);

// Serve files as they are; no Jekyll processing.
writeFileSync(new URL(".nojekyll", out), "");

console.log("_site/ ready");
