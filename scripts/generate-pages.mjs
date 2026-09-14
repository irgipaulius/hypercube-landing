#!/usr/bin/env node
/**
 * Generate Astro pages from source-data/api/*.json
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const API = join(ROOT, "source-data", "api");

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

function rewriteAssetUrls(html) {
  return html
    .replace(/https:\/\/hypercube\.lt\/wp-content\/uploads\//g, "/wp-content/uploads/")
    .replace(/https:\/\/hypercube\.lt\//g, "/");
}

function astroPage({ title, description, slug, content, isIndex = false }) {
  const layoutImport = `import BaseLayout from '../layouts/BaseLayout.astro';`;
  const layoutPath = isIndex ? "../layouts/BaseLayout.astro" : "../../layouts/BaseLayout.astro";
  const importPath = isIndex
    ? `import BaseLayout from '${layoutPath}';`
    : `import BaseLayout from '${layoutPath}';`;

  return `---
${importPath}
---

<BaseLayout title="${title.replace(/"/g, '\\"')}" description="${(description || title).replace(/"/g, '\\"')}">
  <article class="wp-content">
    ${rewriteAssetUrls(stripHtml(content))}
  </article>
</BaseLayout>
`;
}

async function main() {
  const pages = JSON.parse(await readFile(join(API, "pages.json"), "utf8"));
  const posts = JSON.parse(await readFile(join(API, "posts.json"), "utf8"));

  for (const page of pages) {
    const title = page.title?.rendered ?? "Hypercube";
    const content = page.content?.rendered ?? "";
    const slug = page.slug;

    if (slug === "homepage" || page.link === "https://hypercube.lt/") {
      await writeFile(
        join(ROOT, "src", "pages", "index.astro"),
        astroPage({ title, description: title, slug, content, isIndex: true })
      );
      console.log("  index.astro");
    } else {
      const dir = join(ROOT, "src", "pages", slug);
      await mkdir(dir, { recursive: true });
      await writeFile(
        join(dir, "index.astro"),
        astroPage({ title, description: title, slug, content, isIndex: false })
      );
      console.log(`  ${slug}/index.astro`);
    }
  }

  for (const post of posts) {
    const title = post.title?.rendered ?? "Post";
    const content = post.content?.rendered ?? "";
    const slug = post.slug;
    const dir = join(ROOT, "src", "pages", slug);
    await mkdir(dir, { recursive: true });
    await writeFile(
      join(dir, "index.astro"),
      astroPage({ title, description: title, slug, content, isIndex: false })
    );
    console.log(`  ${slug}/index.astro (post)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
