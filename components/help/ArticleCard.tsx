import Link from "next/link";

export function ArticleCard(props: { href: string; title: string; summary: string }) {
  return (
    <Link
      href={props.href}
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-800">{props.title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{props.summary}</p>
    </Link>
  );
}
