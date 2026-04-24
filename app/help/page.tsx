import type { Metadata } from "next";
import Link from "next/link";
import { HelpSearch } from "@/components/help/HelpSearch";
import { CollectionCard } from "@/components/help/CollectionCard";
import { ArticleCard } from "@/components/help/ArticleCard";
import { Breadcrumbs } from "@/components/help/Breadcrumbs";
import {
  articleHref,
  collectionArticleCount,
  getAllCollections,
} from "@/lib/help/load-content";
import { resolveLucideIcon } from "@/lib/help/resolve-lucide-icon";
import { helpSiteBaseUrl } from "@/lib/help/site-base";

export const metadata: Metadata = {
  title: "Cadence Help Center",
  description: "Search guides for scheduling, publishing, and link-in-bio pages in Cadence.",
  alternates: { canonical: "/help" },
  openGraph: {
    title: "Cadence Help Center",
    description: "Search guides for scheduling, publishing, and link-in-bio pages in Cadence.",
    url: `${helpSiteBaseUrl()}/help`,
  },
};

function popularArticles() {
  const cols = getAllCollections();
  const picks = [];
  for (const col of cols) {
    if (col.subCollections[0]?.articles[0]) picks.push(col.subCollections[0].articles[0]);
    else if (col.articles[0]) picks.push(col.articles[0]);
  }
  if (cols[1]?.articles[0]) picks.push(cols[1].articles[0]);
  if (cols[1]?.subCollections[0]?.articles[1]) picks.push(cols[1].subCollections[0].articles[1]);
  const seen = new Set<string>();
  const out = [];
  for (const a of picks) {
    const k = `${a.collection}-${a.slug}`;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(a);
    if (out.length >= 6) break;
  }
  return out.slice(0, 6);
}

export default function HelpHomePage() {
  const collections = getAllCollections();
  const popular = popularArticles();

  return (
    <main id="help-main" className="mx-auto max-w-[1100px] px-4 py-12 sm:py-16">
      <Breadcrumbs items={[{ name: "Help", href: "/help" }, { name: "Cadence Help Center" }]} />

      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Cadence Help Center
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Guides for scheduling, publishing across networks, and building your link-in-bio pages.
        </p>
        <div className="mt-8">
          <HelpSearch />
        </div>
      </header>

      <section className="mt-16" aria-labelledby="collections-heading">
        <h2 id="collections-heading" className="sr-only">
          Collections
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((col) => (
            <CollectionCard
              key={col.slug}
              href={`/help/${col.slug}`}
              title={col.title}
              description={col.description}
              articleCount={collectionArticleCount(col)}
              icon={resolveLucideIcon(col.icon)}
            />
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-xl font-semibold text-gray-900">
          Popular articles
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((a) => (
            <ArticleCard
              key={`${a.collection}-${a.slug}`}
              href={articleHref(a)}
              title={a.title}
              summary={a.summary}
            />
          ))}
        </div>
      </section>

      <p className="mt-16 text-center text-sm text-gray-500">
        Looking for the product?{" "}
        <Link href="/cadence" className="text-indigo-600 hover:underline">
          Cadence overview
        </Link>
      </p>
    </main>
  );
}
