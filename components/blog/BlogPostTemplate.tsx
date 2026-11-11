import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import PaletteBand from "@/components/agency/PaletteBand";

const column =
  "max-w-[680px] w-[90%] md:w-full mx-auto px-5 md:px-6 text-[18px] md:text-[20px] leading-[1.8] text-[#CCCCCE]";

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const external = post.cta.href.startsWith("http");

  return (
    <article className="bg-[#020405] text-[#CCCCCE]">
      <PaletteBand blue="The Journal" camel="Stephanie Rose" />
      <header>
        <div className="relative h-[70vh] min-h-[320px] w-full">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mx-auto w-[90%] max-w-4xl px-5 py-12 md:px-6 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#CCCCCE]">The Journal</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02]">{post.title}</h1>
        </div>
      </header>

      <div className={`${column} space-y-6 pb-10`}>
        {post.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {post.blocks.map((block, index) => {
        if (block.type === "body") {
          return (
            <div key={index} className={`${column} space-y-6 py-6`}>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          );
        }
        if (block.type === "pullquote") {
          return (
            <section key={index} className="my-8 bg-[#404042] px-6 py-16 text-white">
              <blockquote className="mx-auto max-w-3xl text-center font-[family-name:var(--font-wrm-display)] text-2xl italic leading-snug md:text-4xl">
                “{block.quote}”
              </blockquote>
            </section>
          );
        }
        if (block.type === "imageBreak") {
          return (
            <div key={index} className="relative my-8 h-[60vh] min-h-[240px] w-full">
              <Image src={block.imageUrl} alt={block.alt} fill className="object-cover" sizes="100vw" />
            </div>
          );
        }
        return null;
      })}

      <section className="mt-10 bg-[#020405] px-6 py-16 text-[#CCCCCE]">
        <div className="mx-auto max-w-2xl">
          <p className="font-[family-name:var(--font-wrm-display)] text-3xl leading-snug text-white">
            {post.cta.headline}
          </p>
          <Link
            href={post.cta.href}
            className="mt-8 inline-flex border border-[#CCCCCE] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCE]"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {post.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </article>
  );
}
