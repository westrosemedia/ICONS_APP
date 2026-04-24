import Link from "next/link";
import type { HelpCollectionResolved } from "@/lib/help/load-content";
import { articleHref } from "@/lib/help/load-content";
import { cn } from "@/lib/utils";

export function HelpSidebar(props: {
  collection: HelpCollectionResolved;
  currentSubSlug?: string;
  currentArticleSlug?: string;
}) {
  const { collection: col } = props;

  return (
    <nav aria-label="Help topics" className="sticky top-28 space-y-6 text-sm">
      <div>
        <Link
          href={`/help/${col.slug}`}
          className={cn(
            "font-semibold text-gray-900 hover:text-indigo-700",
            !props.currentSubSlug && !props.currentArticleSlug && "text-indigo-700"
          )}
        >
          {col.title}
        </Link>
      </div>
      {col.subCollections.map((sub) => (
        <div key={sub.slug}>
          <Link
            href={`/help/${col.slug}/${sub.slug}`}
            className={cn(
              "font-medium text-gray-800 hover:text-indigo-700",
              props.currentSubSlug === sub.slug && !props.currentArticleSlug && "text-indigo-700"
            )}
          >
            {sub.title}
          </Link>
          <ul className="mt-2 space-y-1 border-l border-gray-200 pl-3">
            {sub.articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={articleHref(a)}
                  className={cn(
                    "block py-0.5 text-gray-600 hover:text-indigo-700",
                    props.currentArticleSlug === a.slug && "font-medium text-indigo-700"
                  )}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {col.articles.length > 0 && (
        <div>
          <p className="mb-2 font-medium text-gray-800">In this collection</p>
          <ul className="space-y-1 border-l border-gray-200 pl-3">
            {col.articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={articleHref(a)}
                  className={cn(
                    "block py-0.5 text-gray-600 hover:text-indigo-700",
                    props.currentArticleSlug === a.slug && "font-medium text-indigo-700"
                  )}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
