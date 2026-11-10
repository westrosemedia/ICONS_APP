import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";

const column =
  "max-w-[680px] w-[90%] md:w-full mx-auto px-5 md:px-6 text-[18px] md:text-[20px] leading-[1.8] text-neutral-800 font-sans";

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white text-neutral-900 font-sans antialiased">
      {/* Hero */}
      <header className="relative w-full h-[70vh] min-h-[280px] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 pb-10 md:pb-14">
          <h1 className="max-w-4xl text-left text-white font-bold font-sans tracking-tight text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.1] drop-shadow-sm">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Intro */}
      <div className={`${column} py-14 md:py-20 space-y-6`}>
        {post.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Blocks */}
      {post.blocks.map((block, i) => {
        if (block.type === "body") {
          return (
            <div key={i} className={`${column} py-6 md:py-8 space-y-6`}>
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          );
        }
        if (block.type === "pullquote") {
          return (
            <section
              key={i}
              className="w-full bg-neutral-950 py-14 md:py-20 px-6 my-4 md:my-6"
            >
              <blockquote className="max-w-3xl mx-auto text-center text-white text-xl md:text-2xl font-semibold leading-snug font-sans">
                &ldquo;{block.quote}&rdquo;
              </blockquote>
            </section>
          );
        }
        if (block.type === "imageBreak") {
          return (
            <div
              key={i}
              className="relative w-screen left-1/2 -translate-x-1/2 h-[60vh] min-h-[240px] my-4 md:my-8 bg-neutral-200"
            >
              <Image
                src={block.imageUrl}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        }
        return null;
      })}

      {/* CTA */}
      <section className="w-full bg-neutral-950 text-white py-16 md:py-20 px-6 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-bold text-lg md:text-xl mb-8 text-white">
            {post.cta.headline}
          </p>
          <Link
            href={post.cta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-neutral-950 text-base font-semibold font-sans hover:bg-neutral-100 transition-colors"
            {...(post.cta.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {post.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </article>
  );
}
