import Image from "next/image";
import Link from "next/link";
import {
  GROW_LIKE_YOU_MEAN_IT,
  formatCoursePrice,
} from "@/lib/courses/grow-like-you-mean-it";
import GrowLikeYouMeanItClient from "./GrowLikeYouMeanItClient";

const HERO_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7";

const heroDescription =
  "Self-paced video lessons to help you show up consistently, grow with intention, and build momentum that actually sticks.";

const priceLabel = formatCoursePrice(
  GROW_LIKE_YOU_MEAN_IT.priceAmount,
  GROW_LIKE_YOU_MEAN_IT.priceCurrency
);

export default function GrowLikeYouMeanItHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Grow Like You Mean It by West Rose Media"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
          West Rose Media Course
        </p>
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight text-white font-[family-name:var(--font-cormorant-garamond)]">
          {GROW_LIKE_YOU_MEAN_IT.title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          {heroDescription}
        </p>
        <p className="mt-4 text-base text-white/70">
          8 self-paced video lessons · {priceLabel} one-time
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <GrowLikeYouMeanItClient
            label={`Get Instant Access · ${priceLabel}`}
            className="px-10 py-4 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <Link
            href={GROW_LIKE_YOU_MEAN_IT.coursePath}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Already enrolled? Go to your course
          </Link>
        </div>
      </div>
    </section>
  );
}
