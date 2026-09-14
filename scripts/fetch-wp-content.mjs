#!/usr/bin/env node
/**
 * Fetch all published WordPress pages, posts, and media via REST API.
 */
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "source-data", "api");
const BASE = "https://hypercube.lt/wp-json/wp/v2";

async function fetchAll(endpoint, label) {
  const items = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `${BASE}/${endpoint}?per_page=100&page=${page}&_embed`;
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 400 && page > 1) break;
      throw new Error(`${endpoint} page ${page}: ${res.status} ${res.statusText}`);
    }
    totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
    const batch = await res.json();
    items.push(...batch);
    console.log(`  ${label}: page ${page}/${totalPages} (${batch.length} items)`);
    page++;
  }

  return items;
}

async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  await mkdir(dirname(destPath), { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buf);
}

async function downloadMediaFiles(media) {
  const uploadsDir = join(__dirname, "..", "source-data", "uploads");
  let ok = 0;
  let fail = 0;

  for (const item of media) {
    const src = item.source_url;
    if (!src) continue;
    try {
      const url = new URL(src);
      const rel = url.pathname.replace(/^\/wp-content\/uploads\//, "");
      const dest = join(uploadsDir, rel);
      await downloadFile(src, dest);
      ok++;
      if (ok % 25 === 0) console.log(`  media downloaded: ${ok}/${media.length}`);
    } catch (e) {
      fail++;
      console.warn(`  skip ${src}: ${e.message}`);
    }
  }

  console.log(`  media done: ${ok} ok, ${fail} failed`);
}

async function main() {
  await mkdir(OUT, { recursive: true });

  console.log("Fetching pages...");
  const pages = await fetchAll("pages", "pages");
  await writeFile(join(OUT, "pages.json"), JSON.stringify(pages, null, 2));

  console.log("Fetching posts...");
  const posts = await fetchAll("posts", "posts");
  await writeFile(join(OUT, "posts.json"), JSON.stringify(posts, null, 2));

  console.log("Fetching media...");
  const media = await fetchAll("media", "media");
  await writeFile(join(OUT, "media.json"), JSON.stringify(media, null, 2));

  console.log("Downloading media files...");
  await downloadMediaFiles(media);

  const index = {
    fetchedAt: new Date().toISOString(),
    counts: { pages: pages.length, posts: posts.length, media: media.length },
    urls: [
      ...pages.map((p) => ({ type: "page", slug: p.slug, link: p.link, title: p.title?.rendered })),
      ...posts.map((p) => ({ type: "post", slug: p.slug, link: p.link, title: p.title?.rendered })),
    ],
  };
  await writeFile(join(OUT, "index.json"), JSON.stringify(index, null, 2));

  console.log("\nSummary:", index.counts);
  console.log("URLs:", index.urls.map((u) => u.link).join("\n  "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
