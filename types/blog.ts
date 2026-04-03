export type BlogBlock =
  | { type: "body"; paragraphs: string[] }
  | { type: "pullquote"; quote: string }
  | { type: "imageBreak"; imageUrl: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  blocks: BlogBlock[];
  cta: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
};
