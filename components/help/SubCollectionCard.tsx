import Link from "next/link";

export function SubCollectionCard(props: {
  href: string;
  title: string;
  description: string;
  articleCount: number;
}) {
  return (
    <Link
      href={props.href}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-800">{props.title}</h2>
      <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">{props.description}</p>
      <p className="mt-3 text-sm font-medium text-indigo-600">
        {props.articleCount} {props.articleCount === 1 ? "article" : "articles"}
      </p>
    </Link>
  );
}
