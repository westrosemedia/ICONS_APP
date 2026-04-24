export type HelpArticleListItem = {
  slug: string;
  title: string;
  summary: string;
  order: number;
};

export type HelpSubCollectionManifest = {
  slug: string;
  title: string;
  description: string;
  articles: HelpArticleListItem[];
};

export type HelpCollectionManifest = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  articles: HelpArticleListItem[];
  subCollections: HelpSubCollectionManifest[];
};

export type HelpContentManifest = {
  collections: HelpCollectionManifest[];
};

export type ParsedArticleBlock = {
  slug: string;
  title: string;
  summary: string;
  order: number;
  collection: string;
  subCollection?: string;
  body: string;
};

export type HelpArticleResolved = ParsedArticleBlock & {
  sourceFile: string;
  updatedAt: number;
};
