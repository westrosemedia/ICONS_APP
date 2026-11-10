import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { FRAME } from "@/lib/agency";

export const metadata: Metadata = {
  title: "The Journal | West Rose Media",
  description:
    "The Journal. Editorial notes from West Rose Media on brand, content, and being remembered.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <div className={`${FRAME} py-16 lg:py-24`}>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">The Journal</p>
        <h1 className="mt-4 max-w-[12ch] text-[clamp(3.2rem,7vw,6rem)] leading-[0.9]">The Journal</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Notes already published by the studio. The archive is not padded with new essays.
        </p>

        <ul className="mt-16 border-t border-[#171515]">
          {blogPosts.map((post) => (
            <li key={post.slug} className="border-b border-[#171515]">
              <Link href={`/blog/${post.slug}`} className="grid gap-8 py-12 lg:grid-cols-12 lg:items-end">
                <div className="relative aspect-[16/10] lg:col-span-7">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#A66A55]">
                    {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">{post.title}</h2>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed">{post.description}</p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em]">Read</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
