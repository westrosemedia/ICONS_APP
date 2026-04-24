import Link from "next/link";
import { helpSiteBaseUrl } from "@/lib/help/site-base";

export type BreadcrumbItem = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const base = helpSiteBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: `${base}${it.href}` } : {}),
    })),
  };

  return (
    <div className="mb-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((it, i) => (
            <li key={`${it.name}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300" aria-hidden="true">›</span>}
              {it.href ?
                <Link
                  href={it.href}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  {it.name}
                </Link>
              : <span className="font-medium text-gray-900">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
