import Countdown from "@/components/Countdown";
import OfferCard from "@/components/OfferCard";
import StickyBanner from "@/components/StickyBanner";
import { birthdayOffers } from "@/content/birthdayOffers";
import { BIRTHDAY_CAMPAIGN } from "@/lib/birthdayWeek";
import Image from "next/image";

export const metadata = {
  title: "Birthday Week | West Rose Media",
  description:
    "Four days. Four offers. Choose the move that fits your next level. Ends Oct 13 at 11:59 pm America Edmonton.",
};

export default function BirthdayWeekPage() {
  return (
    <>
      <StickyBanner />
      
      {/* Hero Section with Image */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_0428.jpg?alt=media&token=ea7f180f-5440-4344-85b8-97ea13bf6662"
            alt="Stephanie Rose - Birthday Week Special Offers"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              {BIRTHDAY_CAMPAIGN.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{BIRTHDAY_CAMPAIGN.subtitle}</p>
            <div className="mt-8">
              <Countdown />
              <p className="mt-3 text-sm text-white/80">
                Offers close Oct 13 at 11:59 pm America Edmonton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="relative isolate bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Choose Your Offer</h2>
            <p className="text-lg text-gray-700">Four exclusive opportunities. One powerful week.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {birthdayOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer as any} />
            ))}
          </div>

          <div className="mt-16 mx-auto max-w-3xl text-center text-sm text-gray-600">
            Prices revert after the deadline. Availability may be limited due to scheduling. If you have questions, contact us and we will guide you to the right fit.
          </div>
        </div>
      </section>
    </>
  );
}
