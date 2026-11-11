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
      <header className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Results</p>
          <div className="mt-5 h-0.5 w-16 bg-[#2D4B70]" />
          <h1 className="mt-8 max-w-[12ch] text-[clamp(3rem,6vw,5.4rem)] leading-[0.9] text-[#020405]">
            Client results
          </h1>
        </div>
      </header>

      {clientResultStories.map((story, index) => (
        <article
          key={story.name}
          className={index % 2 === 0 ? "bg-[#020405] text-[#CCCCCE]" : "wrm-ink bg-[#F4F4F4] text-[#404042]"}
        >
          <div className={`${FRAME} py-16 lg:py-24`}>
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[1]">{story.name}</h2>
            <div className="mt-12 space-y-20">
              {story.blocks.map((block) => (
                <div key={block.image.src} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  <Image
                    src={block.image.src}
                    alt={block.image.alt}
                    width={block.image.width}
                    height={block.image.height}
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="mx-auto h-auto max-h-[70vh] w-full object-contain"
                  />
                  <div className="max-w-md space-y-4 text-lg leading-relaxed">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
