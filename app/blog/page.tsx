import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | West Rose Media",
  description:
    "Brand strategy, content, and positioning for established founders. Editorial insights from West Rose Media.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-elegant py-16 md:py-24">
        <header className="max-w-3xl mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-neutral-900 tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-sans leading-relaxed">
            Editorial notes on brand strategy, content that converts, and what it takes to show up at your level.
          </p>
        </header>

        <ul className="space-y-0 border-t border-neutral-200">
          {blogPosts.map((post) => (
            <li key={post.slug} className="border-b border-neutral-200">
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 md:py-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              >
                <p className="text-sm text-neutral-500 font-sans mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-neutral-600 font-sans text-lg leading-relaxed max-w-2xl">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
