import Image from "next/image";
import Link from "next/link";
import { GROW_LIKE_YOU_MEAN_IT } from "@/lib/courses/grow-like-you-mean-it";
import GrowLikeYouMeanItClient from "./GrowLikeYouMeanItClient";

const ctaClassName =
  "px-10 py-4 bg-[#1a1a1a] text-[#f5f1ea] rounded-lg font-medium hover:bg-[#2d2d2d] transition-colors text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";

export default function GrowLikeYouMeanItHero() {
  return (
    <section className="border-b border-[#1a1a1a]/10">
      <div className="grid lg:grid-cols-2 lg:min-h-[85vh]">
        <div className="section-padding flex items-center order-2 lg:order-1 bg-[#f5f1ea]">
          <div className="container-elegant max-w-xl lg:max-w-none lg:px-12 xl:px-16 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-[#1a1a1a]/55 mb-8">
              West Rose Media presents
            </p>
            <h1 className="text-hero text-[#1a1a1a] mb-10">
              Grow Like You Mean It
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/80 mb-10">
              You're already posting. You just don't know what to say. Content is
              never neutral, every post brings people closer to buying from you or
              further away.
            </p>
            <GrowLikeYouMeanItClient label="I'm In" className={ctaClassName} />
            <p className="mt-8 text-sm tracking-wide text-[#1a1a1a]/60">
              $47 CAD. Self-paced. Watch it whenever you want.
            </p>
            <Link
              href={GROW_LIKE_YOU_MEAN_IT.coursePath}
              className="mt-6 inline-block text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
            >
              Already enrolled? Go to your course
            </Link>
          </div>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
          <Image
            src={GROW_LIKE_YOU_MEAN_IT.heroImage}
            alt="Grow Like You Mean It by West Rose Media"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
