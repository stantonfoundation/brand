// Prints the CHANGELOG.md section for a version, for the GitHub Release
// body. Fails if the version is not package.json's, or has no section.
//
// Usage: node scripts/release-notes.mjs v1.0.0
import { readFileSync } from "node:fs";

const repo = new URL("../", import.meta.url);
const tag = process.argv[2] ?? "";
const { version } = JSON.parse(
  readFileSync(new URL("package.json", repo), "utf8"),
);

if (tag !== `v${version}`) {
  console.error(
    `Tag "${tag}" does not match package.json version ${version}. Tag v${version}, or bump the version first.`,
  );
  process.exit(1);
}

const changelog = readFileSync(new URL("CHANGELOG.md", repo), "utf8");
const sections = changelog.split(/^## /m).slice(1);
const section = sections.find(
  (s) => s.startsWith(`${version} `) || s.startsWith(`${version}\n`),
);
if (!section) {
  console.error(`CHANGELOG.md has no "## ${version}" section.`);
  process.exit(1);
}

// Drop the heading line; the release title carries the version.
console.log(section.slice(section.indexOf("\n") + 1).trim());
