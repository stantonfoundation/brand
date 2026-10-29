// Fails when a dependency in package.json is not pinned to an exact
// version. Every version changes only in a pull request.
// Usage: node scripts/check-pins.mjs
import { readFileSync } from "node:fs";

const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);
const EXACT = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/;

const loose = [];
for (const field of [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
]) {
  for (const [name, spec] of Object.entries(pkg[field] ?? {})) {
    if (!EXACT.test(spec)) loose.push(`${field}: ${name} ${spec}`);
  }
}

if (loose.length) {
  console.error(
    `Pin these to an exact version (pnpm add <name>@<version>):\n${loose.join("\n")}`,
  );
  process.exit(1);
}
console.log("pins ok: every dependency is an exact version");
