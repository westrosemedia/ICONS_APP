import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/help/Breadcrumbs";
import { SubCollectionCard } from "@/components/help/SubCollectionCard";
import { ArticleCard } from "@/components/help/ArticleCard";
import { HelpSidebar } from "@/components/help/HelpSidebar";
import {
  articleHref,
  collectionArticleCount,
  getAllCollections,
  getCollection,
} from "@/lib/help/load-content";
import { helpSiteBaseUrl } from "@/lib/help/site-base";

type Props = { params: Promise<{ collection: string }> };

export function generateStaticParams() {
  return getAllCollections().map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection: slug } = await params;
  const col = getCollection(slug);
  if (!col) return { title: "Not found" };
  const url = `${helpSiteBaseUrl()}/help/${col.slug}`;
  return {
    title: col.title,
    description: col.description,
    alternates: { canonical: `/help/${col.slug}` },
    openGraph: { title: col.title, description: col.description, url },
    twitter: { title: col.title, description: col.description },
  };
}

export default async function HelpCollectionPage({ params }: Props) {
  const { collection: slug } = await params;
  const col = getCollection(slug);
  if (!col) notFound();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10 sm:py-14">
      <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside className="mb-10 hidden lg:block">
          <HelpSidebar collection={col} />
        </aside>
        <div id="help-main">
          <Breadcrumbs items={[{ name: "Help", href: "/help" }, { name: col.title }]} />
          <header className="max-w-3xl">
            <p className="text-sm font-medium text-indigo-600">
              {collectionArticleCount(col)} articles
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">{col.title}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{col.description}</p>
          </header>

          {col.subCollections.length > 0 && (
            <section className="mt-12" aria-labelledby="subcollections-heading">
              <h2 id="subcollections-heading" className="text-xl font-semibold text-gray-900">
                Topics
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {col.subCollections.map((sub) => (
                  <SubCollectionCard
                    key={sub.slug}
                    href={`/help/${col.slug}/${sub.slug}`}
                    title={sub.title}
                    description={sub.description}
                    articleCount={sub.articles.length}
                  />
                ))}
              </div>
            </section>
          )}

          {col.articles.length > 0 && (
            <section className="mt-14" aria-labelledby="articles-heading">
              <h2 id="articles-heading" className="text-xl font-semibold text-gray-900">
                Articles in this collection
              </h2>
              <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2">
                {col.articles.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard
                      href={articleHref(a)}
                      title={a.title}
                      summary={a.summary}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
