import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GROW_LIKE_YOU_MEAN_IT,
  formatCoursePrice,
} from "@/lib/courses/grow-like-you-mean-it";
import GrowLikeYouMeanItClient from "./GrowLikeYouMeanItClient";

const priceLabel = formatCoursePrice(
  GROW_LIKE_YOU_MEAN_IT.priceAmount,
  GROW_LIKE_YOU_MEAN_IT.priceCurrency
);

export const metadata: Metadata = {
  title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
  description: GROW_LIKE_YOU_MEAN_IT.description,
  openGraph: {
    title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
    description: GROW_LIKE_YOU_MEAN_IT.description,
    url: `https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.salesPath}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
    description: GROW_LIKE_YOU_MEAN_IT.description,
  },
};

const highlights = [
  "Eight focused video lessons you can watch on your own schedule",
  "Practical frameworks for showing up consistently and growing with intention",
  "Lifetime access after purchase",
  "Start immediately after checkout",
];

export default function GrowLikeYouMeanItPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7"
            alt="Grow Like You Mean It by West Rose Media"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            West Rose Media Course
          </p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            {GROW_LIKE_YOU_MEAN_IT.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            {GROW_LIKE_YOU_MEAN_IT.description}
          </p>
          <p className="mt-4 text-base text-white/70">
            8 self-paced video lessons · {priceLabel} one-time
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <GrowLikeYouMeanItClient />
            <Link
              href={GROW_LIKE_YOU_MEAN_IT.coursePath}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Already enrolled? Go to your course
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-black">
        <div className="container-elegant">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2 className="text-display text-black mb-6">
                Grow with clarity, not chaos.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                <p>
                  You do not need another content plan that collects dust. You
                  need a simple system for showing up, staying visible, and
                  building momentum you can actually sustain.
                </p>
                <p>
                  {GROW_LIKE_YOU_MEAN_IT.title} gives you eight practical
                  lessons designed to help you grow like you mean it: with
                  consistency, confidence, and a brand that keeps moving
                  forward.
                </p>
                <p>
                  Work through the lessons at your own pace. Revisit them
                  whenever you need a reset, a push, or a clearer next step.
                </p>
              </div>

              <ul className="mt-10 space-y-4 text-lg text-gray-800">
                {highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-gray-50 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                What you get
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-black">
                Instant access to all 8 lessons
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                One payment. Self-paced. Yours to keep.
              </p>
              <div className="mt-8 border-t border-black/10 pt-8">
                <p className="text-4xl font-bold text-black">{priceLabel}</p>
                <p className="mt-2 text-gray-600">One-time payment in CAD</p>
              </div>
              <div className="mt-8">
                <GrowLikeYouMeanItClient
                  label={`Get Access for ${priceLabel}`}
                  className="w-full px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-elegant max-w-3xl text-center">
          <h2 className="text-display text-white mb-6">
            Ready to grow like you mean it?
          </h2>
          <p className="text-editorial text-white/80 mb-8">
            Create your account, complete checkout, and start the course
            immediately.
          </p>
          <GrowLikeYouMeanItClient
            label={`Start for ${priceLabel}`}
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </section>
    </div>
  );
}
