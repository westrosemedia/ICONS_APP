import type { Metadata } from "next";
import Image from "next/image";
import { FRAME } from "@/lib/agency";
import { clientResultStories } from "@/lib/clientResults";

export const metadata: Metadata = {
  title: "Client results | West Rose Media",
  description:
    "Client results from West Rose Media: Erin, Cammy, and a reel from Stephanie Rose, with the view counts already on file.",
  alternates: { canonical: "/results" },
};

export default function ClientResultsPage() {
  return (
    <div>
      {clientResultStories
        .flatMap((story) => story.blocks.map((block) => ({ name: story.name, block })))
        .map(({ name, block }, index) => (
          <article
            key={block.image.src}
            className={index % 2 === 1 ? "wrm-ink bg-[#F4F4F4] text-[#404042]" : "bg-[#020405] text-[#CCCCCE]"}
          >
            <div className={`${FRAME} grid min-h-[calc(100svh-62px)] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-20 lg:py-12`}>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                sizes="(max-width: 1024px) 90vw, 46vw"
                className="mx-auto h-auto max-h-[calc(100svh-160px)] w-auto max-w-full object-contain"
              />
              <div className="max-w-md">
                {index === 0 ? (
                  <h1 className="mb-10 text-[clamp(2.6rem,4vw,3.8rem)] leading-[0.95] text-[#F4F4F4]">Client results</h1>
                ) : null}
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">{name}</p>
                <div className="mt-6 space-y-4 text-lg leading-relaxed">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
