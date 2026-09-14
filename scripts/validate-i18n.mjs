#!/usr/bin/env node
/**
 * Ensures all locale files export the same translation keys.
 * Run: npm run validate:i18n
 */
import { readdir, readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const localesDir = join(__dirname, "../src/i18n/locales");

function flattenKeys(obj, prefix = "") {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...flattenKeys(v, path));
    } else if (Array.isArray(v)) {
      keys.push(`${path}[${v.length}]`);
      v.forEach((item, i) => {
        if (item && typeof item === "object") keys.push(...flattenKeys(item, `${path}[${i}]`));
      });
    } else {
      keys.push(path);
    }
  }
  return keys.sort();
}

async function loadLocale(file) {
  const mod = await import(join(localesDir, file));
  return mod.default;
}

const files = (await readdir(localesDir)).filter((f) => f.endsWith(".ts"));
const data = Object.fromEntries(await Promise.all(files.map(async (f) => [f.replace(".ts", ""), await loadLocale(f)])));

const reference = flattenKeys(data[files[0].replace(".ts", "")]);
let ok = true;

for (const [locale, content] of Object.entries(data)) {
  const keys = flattenKeys(content);
  const missing = reference.filter((k) => !keys.includes(k));
  const extra = keys.filter((k) => !reference.includes(k));
  if (missing.length || extra.length) {
    ok = false;
    console.error(`\n❌ ${locale}:`);
    if (missing.length) console.error("  Missing:", missing.join(", "));
    if (extra.length) console.error("  Extra:", extra.join(", "));
  } else {
    console.log(`✓ ${locale}`);
  }
}

if (!ok) {
  console.error("\nFix locale files so all languages have matching keys.");
  process.exit(1);
}

console.log(`\nAll ${files.length} locales validated.`);
