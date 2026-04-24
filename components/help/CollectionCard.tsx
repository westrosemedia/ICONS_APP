import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function CollectionCard(props: {
  href: string;
  title: string;
  description: string;
  articleCount: number;
  icon: LucideIcon;
}) {
  const Icon = props.icon;
  return (
    <Link
      href={props.href}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-100">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-800">{props.title}</h2>
      <p className="mt-2 flex-1 text-gray-600 leading-relaxed">{props.description}</p>
      <p className="mt-4 text-sm font-medium text-indigo-600">
        {props.articleCount} {props.articleCount === 1 ? "article" : "articles"}
      </p>
    </Link>
  );
}
