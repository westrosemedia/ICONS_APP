import type { Metadata } from "next";
import Image from "next/image";
import PaletteBand from "@/components/agency/PaletteBand";
import CoachingWaitlistForm from "@/components/coaching/CoachingWaitlistForm";
import { FRAME, portraits } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Private 1:1 Coaching | West Rose Media",
  description: "Join the waitlist for private 1:1 coaching with Stephanie Rose.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <PaletteBand blue="Private 1:1" camel="Waitlist" />
      <section className="grid lg:grid-cols-12">
        <div className={`${FRAME} py-16 lg:col-span-6 lg:max-w-none lg:py-24`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">Private</p>
          <h1 className="mt-4 text-[clamp(3rem,6vw,5.6rem)] leading-[0.9]">Private 1:1 Coaching</h1>
          <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-[1.75]">
            <p>Private 1:1 coaching is direct time with Stephanie Rose on the strategy behind the brand.</p>
            <p>This is the waitlist for private 1:1 coaching.</p>
            <CoachingWaitlistForm />
            <p>
              ICON Brand Partnership is open. Hot & Rich and the Manifesting & Marketing Mastermind are separate programs, and both open in January.
            </p>
          </div>
        </div>
        <div className="relative min-h-[70vh] overflow-hidden lg:col-span-6">
          <Image
            src={portraits.story}
            alt="Stephanie Rose"
            fill
            priority
            className="object-cover object-[center_28%] wrm-ken"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
}
