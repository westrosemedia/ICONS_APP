import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/help/Breadcrumbs";
import { ArticleCard } from "@/components/help/ArticleCard";
import { ArticleBody } from "@/components/help/ArticleBody";
import { Feedback } from "@/components/help/Feedback";
import { HelpSidebar } from "@/components/help/HelpSidebar";
import {
  articleHref,
  getAllCollections,
  getArticle,
  getCollection,
  getSubCollection,
} from "@/lib/help/load-content";
import { helpSiteBaseUrl } from "@/lib/help/site-base";
import { getRelatedArticles } from "@/lib/help/related-articles";

type Props = { params: Promise<{ collection: string; segments: string[] }> };

export function generateStaticParams() {
  const out: { collection: string; segments: string[] }[] = [];
  for (const col of getAllCollections()) {
    for (const a of col.articles) {
      out.push({ collection: col.slug, segments: [a.slug] });
    }
    for (const sub of col.subCollections) {
      out.push({ collection: col.slug, segments: [sub.slug] });
      for (const a of sub.articles) {
        out.push({ collection: col.slug, segments: [sub.slug, a.slug] });
      }
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection: cSlug, segments } = await params;
  const col = getCollection(cSlug);
  if (!col || !segments?.length) return { title: "Not found" };

  if (segments.length === 1) {
    const seg = segments[0];
    const sub = getSubCollection(cSlug, seg);
    if (sub) {
      const url = `${helpSiteBaseUrl()}/help/${cSlug}/${seg}`;
      return {
        title: sub.title,
        description: sub.description,
        alternates: { canonical: `/help/${cSlug}/${seg}` },
        openGraph: { title: sub.title, description: sub.description, url },
        twitter: { title: sub.title, description: sub.description },
      };
    }
    const article = getArticle(cSlug, seg);
    if (article) {
      const url = `${helpSiteBaseUrl()}${articleHref(article)}`;
      return {
        title: article.title,
        description: article.summary,
        alternates: { canonical: articleHref(article) },
        openGraph: { title: article.title, description: article.summary, url },
        twitter: { title: article.title, description: article.summary },
      };
    }
    return { title: "Not found" };
  }

  if (segments.length === 2) {
    const article = getArticle(cSlug, segments[0], segments[1]);
    if (article) {
      const url = `${helpSiteBaseUrl()}${articleHref(article)}`;
      return {
        title: article.title,
        description: article.summary,
        alternates: { canonical: articleHref(article) },
        openGraph: { title: article.title, description: article.summary, url },
        twitter: { title: article.title, description: article.summary },
      };
    }
  }

  return { title: "Not found" };
}

export default async function HelpSegmentsPage({ params }: Props) {
  const { collection: cSlug, segments } = await params;
  const col = getCollection(cSlug);
  if (!col || !segments?.length) notFound();

  if (segments.length === 1) {
    const seg = segments[0];
    const sub = getSubCollection(cSlug, seg);
    if (sub) {
      return (
        <div className="mx-auto max-w-[1100px] px-4 py-10 sm:py-14">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <aside className="mb-10 hidden lg:block">
              <HelpSidebar collection={col} currentSubSlug={sub.slug} />
            </aside>
            <div id="help-main">
              <Breadcrumbs
                items={[
                  { name: "Help", href: "/help" },
                  { name: col.title, href: `/help/${col.slug}` },
                  { name: sub.title },
                ]}
              />
              <header className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{sub.title}</h1>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{sub.description}</p>
              </header>
              <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2">
                {sub.articles.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard
                      href={articleHref(a)}
                      title={a.title}
                      summary={a.summary}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    const article = getArticle(cSlug, seg);
    if (!article) notFound();

    const related = getRelatedArticles(col, article, 3);
    const updated = new Date(article.updatedAt).toISOString().slice(0, 10);

    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      dateModified: new Date(article.updatedAt).toISOString(),
    };

    return (
      <div className="mx-auto max-w-[1100px] px-4 py-10 sm:py-14">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <aside className="mb-10 hidden lg:block">
            <HelpSidebar collection={col} currentArticleSlug={article.slug} />
          </aside>
          <article id="help-main" className="min-w-0 max-w-[720px]">
            <Breadcrumbs
              items={[
                { name: "Help", href: "/help" },
                { name: col.title, href: `/help/${col.slug}` },
                { name: article.title },
              ]}
            />
            <header>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{article.title}</h1>
              <p className="mt-2 text-sm text-gray-500">Last updated {updated}</p>
            </header>
            <div className="mt-8">
              <ArticleBody markdown={article.body} />
            </div>
            <Feedback articleSlug={article.slug} collection={col.slug} />
            {related.length > 0 && (
              <section className="mt-14 border-t border-gray-200 pt-10" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-lg font-semibold text-gray-900">
                  Related articles
                </h2>
                <ul className="mt-4 grid list-none gap-4 p-0">
                  {related.map((a) => (
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
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
          </article>
        </div>
      </div>
    );
  }

  if (segments.length === 2) {
    const article = getArticle(cSlug, segments[0], segments[1]);
    if (!article) notFound();
    const sub = getSubCollection(cSlug, segments[0]);
    if (!sub) notFound();

    const related = getRelatedArticles(col, article, 3);
    const updated = new Date(article.updatedAt).toISOString().slice(0, 10);

    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      dateModified: new Date(article.updatedAt).toISOString(),
    };

    return (
      <div className="mx-auto max-w-[1100px] px-4 py-10 sm:py-14">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <aside className="mb-10 hidden lg:block">
            <HelpSidebar
              collection={col}
              currentSubSlug={sub.slug}
              currentArticleSlug={article.slug}
            />
          </aside>
          <article id="help-main" className="min-w-0 max-w-[720px]">
            <Breadcrumbs
              items={[
                { name: "Help", href: "/help" },
                { name: col.title, href: `/help/${col.slug}` },
                { name: sub.title, href: `/help/${col.slug}/${sub.slug}` },
                { name: article.title },
              ]}
            />
            <header>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{article.title}</h1>
              <p className="mt-2 text-sm text-gray-500">Last updated {updated}</p>
            </header>
            <div className="mt-8">
              <ArticleBody markdown={article.body} />
            </div>
            <Feedback articleSlug={article.slug} collection={col.slug} />
            {related.length > 0 && (
              <section className="mt-14 border-t border-gray-200 pt-10" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-lg font-semibold text-gray-900">
                  Related articles
                </h2>
                <ul className="mt-4 grid list-none gap-4 p-0">
                  {related.map((a) => (
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
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
          </article>
        </div>
      </div>
    );
  }

  notFound();
}
