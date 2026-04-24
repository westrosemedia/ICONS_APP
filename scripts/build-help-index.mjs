/**
 * Emits public/help-index.json for Fuse.js search (runs on prebuild).
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function parseFlatYaml(raw) {
  const out = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const val = m[2].trim();
    out[key] = key === "order" && /^\d+$/.test(val) ? parseInt(val, 10) : val;
  }
  return out;
}

function isLikelyArticleOpen(lines, i) {
  if (lines[i] !== "---") return false;
  const next = lines[i + 1];
  if (!next) return false;
  return /^(slug|title|collection|subCollection|order|summary):/.test(next.trim());
}

function readYamlAndBody(lines, startAt) {
  let i = startAt;
  if (lines[i] !== "---") return null;
  i++;
  const yamlLines = [];
  while (i < lines.length && lines[i] !== "---") {
    yamlLines.push(lines[i]);
    i++;
  }
  if (i >= lines.length || lines[i] !== "---") return null;
  i++;
  const bodyLines = [];
  while (i < lines.length) {
    if (lines[i] === "---" && isLikelyArticleOpen(lines, i)) break;
    bodyLines.push(lines[i]);
    i++;
  }
  return { yaml: yamlLines.join("\n"), body: bodyLines.join("\n").trimEnd(), nextLine: i };
}

function parseMarkdownArticlesFile(filePath, fileCollectionSlug) {
  const raw = readFileSync(filePath, "utf8");
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  const articles = [];

  if (!(lines[0] === "---" && isLikelyArticleOpen(lines, 0))) {
    while (i < lines.length && !isLikelyArticleOpen(lines, i)) i++;
  }

  while (i < lines.length) {
    const block = readYamlAndBody(lines, i);
    if (!block) {
      i++;
      continue;
    }
    i = block.nextLine;
    const fm = parseFlatYaml(block.yaml);
    if (typeof fm.slug !== "string" || typeof fm.title !== "string") continue;
    articles.push({
      slug: fm.slug,
      title: fm.title,
      summary: typeof fm.summary === "string" ? fm.summary : "",
      order: typeof fm.order === "number" ? fm.order : 0,
      collection:
        typeof fm.collection === "string" && fm.collection.length > 0
          ? fm.collection
          : fileCollectionSlug,
      subCollection:
        typeof fm.subCollection === "string" && fm.subCollection.length > 0
          ? fm.subCollection
          : undefined,
      body: block.body,
    });
  }
  return articles;
}

function toPlain(md) {
  let s = md;
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/^#{1,6}\s+/gm, "");
  s = s.replace(/^\s*[-*+]\s+/gm, "");
  s = s.replace(/^\s*\d+\.\s+/gm, "");
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  s = s.replace(/[*_`]+/g, "");
  s = s.replace(/\[SCREENSHOT:[^\]]+\]/gi, "");
  s = s.replace(/\[VIDEO:[^\]]+\]/gi, "");
  s = s.replace(/\{\{[^}]+\}\}/g, "");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

const files = [
  ["getting-started.md", "getting-started"],
  ["schedule-publishing.md", "schedule-and-publishing"],
  ["link-in-bio.md", "link-in-bio"],
];

const bySlug = new Map();
for (const [name, col] of files) {
  const path = join(ROOT, "help-center", name);
  const list = parseMarkdownArticlesFile(path, col);
  for (const a of list) bySlug.set(a.slug, a);
}

const manifest = JSON.parse(readFileSync(join(ROOT, "help-center", "content.json"), "utf8"));
const index = [];

function emitArticle(collectionSlug, subCollection, meta) {
  const parsed = bySlug.get(meta.slug);
  const body = parsed?.body ?? "";
  index.push({
    slug: meta.slug,
    title: meta.title,
    summary: meta.summary,
    collection: collectionSlug,
    subCollection: subCollection ?? null,
    bodyPlainText: toPlain(body),
  });
}

for (const col of manifest.collections) {
  for (const a of col.articles) emitArticle(col.slug, null, a);
  for (const sub of col.subCollections) {
    for (const a of sub.articles) emitArticle(col.slug, sub.slug, a);
  }
}

mkdirSync(join(ROOT, "public"), { recursive: true });
writeFileSync(join(ROOT, "public", "help-index.json"), JSON.stringify(index), "utf8");
console.log(`Wrote public/help-index.json (${index.length} articles).`);
