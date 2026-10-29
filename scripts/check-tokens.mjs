// Fails when tokens/tokens.css and tokens/tokens.json disagree.
// Usage: node scripts/check-tokens.mjs
import { readFileSync } from "node:fs";

const root = new URL("../tokens/", import.meta.url);
const json = JSON.parse(readFileSync(new URL("tokens.json", root), "utf8"));
const css = readFileSync(new URL("tokens.css", root), "utf8");

// JSON path -> CSS custom property name.
const UNPREFIXED_SPACE = new Set(["gutter", "max-width"]);
const cssName = (path) => {
  const [group, a, b] = path;
  if (group === "color") return `--${a}`;
  if (group === "font" && a === "family") return `--${b}`;
  if (group === "font" && a === "size") return `--size-${b}`;
  if (group === "space")
    return UNPREFIXED_SPACE.has(a) ? `--${a}` : `--space-${a}`;
  if (group === "border") return `--${a}`;
  throw new Error(`No CSS name rule for ${path.join(".")}`);
};

const normalize = (v) =>
  (Array.isArray(v) ? v.join(", ") : String(v))
    .replace(/['"]/g, "")
    .toLowerCase()
    .trim();

const expected = new Map();
(function walk(node, path) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    if (value && typeof value === "object" && "$value" in value) {
      expected.set(cssName([...path, key]), normalize(value.$value));
    } else if (value && typeof value === "object") {
      walk(value, [...path, key]);
    }
  }
})(json, []);

const actual = new Map();
for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
  actual.set(name, normalize(value));
}

const errors = [];
for (const [name, value] of expected) {
  if (!actual.has(name)) errors.push(`missing in tokens.css: ${name}`);
  else if (actual.get(name) !== value)
    errors.push(`${name}: json "${value}" vs css "${actual.get(name)}"`);
}
for (const name of actual.keys()) {
  if (!expected.has(name)) errors.push(`missing in tokens.json: ${name}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`tokens ok: ${expected.size} tokens match`);
