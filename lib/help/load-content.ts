import fs from "fs";
import path from "path";
import type {
  HelpArticleListItem,
  HelpCollectionManifest,
  HelpContentManifest,
  HelpSubCollectionManifest,
} from "@/lib/help/types";
import { parseMarkdownArticlesFile } from "@/lib/help/parse-articles";

export type HelpArticleWithBody = HelpArticleListItem & {
  collection: string;
  subCollection?: string;
  body: string;
  sourceFile: string;
  updatedAt: number;
};

export type HelpSubCollectionResolved = Omit<HelpSubCollectionManifest, "articles"> & {
  articles: HelpArticleWithBody[];
};

export type HelpCollectionResolved = Omit<HelpCollectionManifest, "articles" | "subCollections"> & {
  articles: HelpArticleWithBody[];
  subCollections: HelpSubCollectionResolved[];
};

let cache: {
  collections: HelpCollectionResolved[];
  bySlug: Map<string, HelpArticleWithBody>;
} | null = null;

const COLLECTION_TO_FILE: Record<string, string> = {
  "getting-started": "getting-started",
  "schedule-and-publishing": "schedule-publishing",
  "link-in-bio": "link-in-bio",
};

function readManifest(root: string): HelpContentManifest {
  const raw = fs.readFileSync(path.join(root, "help-center", "content.json"), "utf8");
  return JSON.parse(raw) as HelpContentManifest;
}

function build() {
  const root = process.cwd();
  const manifest = readManifest(root);
  const parsedBlocks: Map<
    string,
    { body: string; collection: string; subCollection?: string; sourceFile: string }
  > = new Map();

  const mtimeByFile = new Map<string, number>();

  for (const [collectionSlug, fileBase] of Object.entries(COLLECTION_TO_FILE)) {
    const fp = path.join(root, "help-center", `${fileBase}.md`);
    const stat = fs.statSync(fp);
    mtimeByFile.set(`${fileBase}.md`, stat.mtimeMs);
    const doc = parseMarkdownArticlesFile(fp, collectionSlug);
    for (const a of doc.articles) {
      parsedBlocks.set(a.slug, {
        body: a.body,
        collection: a.collection,
        subCollection: a.subCollection,
        sourceFile: `${fileBase}.md`,
      });
    }
  }

  function hydrateArticle(
    collectionSlug: string,
    subSlug: string | undefined,
    meta: HelpArticleListItem
  ): HelpArticleWithBody {
    const parsed = parsedBlocks.get(meta.slug);
    const fileBase = COLLECTION_TO_FILE[collectionSlug] ?? collectionSlug;
    const sourceFile = parsed?.sourceFile ?? `${fileBase}.md`;
    const updatedAt = mtimeByFile.get(sourceFile) ?? Date.now();
    const body =
      parsed?.body?.trim().length ?
        parsed.body
      : `_This article is listed in the manifest but no body was found for slug \`${meta.slug}\`._\n`;

    return {
      ...meta,
      collection: collectionSlug,
      subCollection: subSlug,
      body,
      sourceFile,
      updatedAt,
    };
  }

  const collections: HelpCollectionResolved[] = manifest.collections.map((col) => ({
    slug: col.slug,
    title: col.title,
    description: col.description,
    icon: col.icon,
    articles: col.articles.map((a) => hydrateArticle(col.slug, undefined, a)),
    subCollections: col.subCollections.map((sub) => ({
      slug: sub.slug,
      title: sub.title,
      description: sub.description,
      articles: sub.articles.map((a) => hydrateArticle(col.slug, sub.slug, a)),
    })),
  }));

  const bySlug = new Map<string, HelpArticleWithBody>();
  for (const col of collections) {
    for (const a of col.articles) bySlug.set(a.slug, a);
    for (const sub of col.subCollections) {
      for (const a of sub.articles) bySlug.set(a.slug, a);
    }
  }

  return { collections, bySlug };
}

function getCache() {
  if (!cache) cache = build();
  return cache;
}

/** Call in dev if help-center files change without restart. */
export function clearHelpContentCache() {
  cache = null;
}

export function getAllCollections(): HelpCollectionResolved[] {
  return getCache().collections;
}

export function getCollection(slug: string): HelpCollectionResolved | undefined {
  return getCache().collections.find((c) => c.slug === slug);
}

export function getSubCollection(
  collectionSlug: string,
  subSlug: string
): HelpSubCollectionResolved | undefined {
  const col = getCollection(collectionSlug);
  return col?.subCollections.find((s) => s.slug === subSlug);
}

/**
 * getArticle(collection, articleSlug) — top-level article.
 * getArticle(collection, subSlug, articleSlug) — article inside a sub-collection.
 */
export function getArticle(
  collectionSlug: string,
  a: string,
  b?: string
): HelpArticleWithBody | undefined {
  const col = getCollection(collectionSlug);
  if (!col) return undefined;
  if (b !== undefined) {
    const sub = col.subCollections.find((s) => s.slug === a);
    return sub?.articles.find((x) => x.slug === b);
  }
  if (col.subCollections.some((s) => s.slug === a)) return undefined;
  return col.articles.find((x) => x.slug === a);
}

export function getAllArticles(): HelpArticleWithBody[] {
  const { collections } = getCache();
  const out: HelpArticleWithBody[] = [];
  for (const col of collections) {
    out.push(...col.articles);
    for (const sub of col.subCollections) {
      out.push(...sub.articles);
    }
  }
  return out;
}

export function articleHref(a: HelpArticleWithBody): string {
  if (a.subCollection) {
    return `/help/${a.collection}/${a.subCollection}/${a.slug}`;
  }
  return `/help/${a.collection}/${a.slug}`;
}

export function collectionArticleCount(col: HelpCollectionResolved): number {
  return col.articles.length + col.subCollections.reduce((n, s) => n + s.articles.length, 0);
}
