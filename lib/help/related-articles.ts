import type { HelpArticleWithBody, HelpCollectionResolved } from "@/lib/help/load-content";

export function getRelatedArticles(
  col: HelpCollectionResolved,
  current: HelpArticleWithBody,
  limit = 3
): HelpArticleWithBody[] {
  const pool: HelpArticleWithBody[] =
    current.subCollection ?
      col.subCollections.find((s) => s.slug === current.subCollection)?.articles ?? []
    : col.articles;

  return pool
    .filter((a) => a.slug !== current.slug)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
    .slice(0, limit);
}
