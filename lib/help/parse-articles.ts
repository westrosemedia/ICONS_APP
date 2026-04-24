import fs from "fs";
import path from "path";
import type { ParsedArticleBlock } from "@/lib/help/types";
import { parseFlatYaml } from "@/lib/help/parse-flat-yaml";

export type ParsedMarkdownFile = {
  collectionSlug: string;
  sourcePath: string;
  introMarkdown: string;
  articles: ParsedArticleBlock[];
};

function isLikelyArticleOpen(lines: string[], i: number): boolean {
  if (lines[i] !== "---") return false;
  const next = lines[i + 1];
  if (!next) return false;
  const t = next.trim();
  return /^(slug|title|collection|subCollection|order|summary):/.test(t);
}

function readYamlAndBody(lines: string[], startAt: number): { yaml: string; body: string; nextLine: number } | null {
  let i = startAt;
  if (lines[i] !== "---") return null;
  i++;
  const yamlLines: string[] = [];
  while (i < lines.length && lines[i] !== "---") {
    yamlLines.push(lines[i]);
    i++;
  }
  if (i >= lines.length || lines[i] !== "---") return null;
  i++;
  const bodyLines: string[] = [];
  while (i < lines.length) {
    if (lines[i] === "---" && isLikelyArticleOpen(lines, i)) break;
    bodyLines.push(lines[i]);
    i++;
  }
  return {
    yaml: yamlLines.join("\n"),
    body: bodyLines.join("\n").trimEnd(),
    nextLine: i,
  };
}

/**
 * Reads a markdown help file: optional intro (no opening ---), then repeated
 * --- / yaml / --- / body blocks. Bodies must not use a lone `---` line
 * followed by `slug:` unless starting a new article.
 */
export function parseMarkdownArticlesFile(
  filePath: string,
  fileCollectionSlug: string
): ParsedMarkdownFile {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  const introLines: string[] = [];

  if (lines[0] !== "---") {
    while (i < lines.length && !isLikelyArticleOpen(lines, i)) {
      introLines.push(lines[i]);
      i++;
    }
  }

  const articles: ParsedArticleBlock[] = [];
  while (i < lines.length) {
    const block = readYamlAndBody(lines, i);
    if (!block) {
      i++;
      continue;
    }
    i = block.nextLine;
    const fm = parseFlatYaml(block.yaml) as Record<string, string | number>;
    const slug = fm.slug;
    const title = fm.title;
    if (typeof slug !== "string" || typeof title !== "string") continue;

    const summary = typeof fm.summary === "string" ? fm.summary : "";
    const order = typeof fm.order === "number" ? fm.order : 0;
    const collection =
      typeof fm.collection === "string" && fm.collection.length > 0
        ? fm.collection
        : fileCollectionSlug;
    const subCollection =
      typeof fm.subCollection === "string" && fm.subCollection.length > 0
        ? fm.subCollection
        : undefined;

    articles.push({
      slug,
      title,
      summary,
      order,
      collection,
      subCollection,
      body: block.body,
    });
  }

  return {
    collectionSlug: fileCollectionSlug,
    sourcePath: filePath,
    introMarkdown: introLines.join("\n").trimEnd(),
    articles,
  };
}

export function helpMarkdownPath(root: string, fileBase: string): string {
  return path.join(root, "help-center", `${fileBase}.md`);
}
