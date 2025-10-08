import Countdown from "@/components/Countdown";
import OfferCard from "@/components/OfferCard";
import StickyBanner from "@/components/StickyBanner";
import { birthdayOffers } from "@/content/birthdayOffers";
import { BIRTHDAY_CAMPAIGN } from "@/lib/birthdayWeek";

export const metadata = {
  title: "Birthday Week | West Rose Media",
  description:
    "Four days. Five offers. Choose the move that fits your next level. Ends Oct 13 at 11:59 pm America Edmonton.",
};

export default function BirthdayWeekPage() {
  return (
    <>
      <StickyBanner />
      <section className="relative isolate bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              {BIRTHDAY_CAMPAIGN.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700">{BIRTHDAY_CAMPAIGN.subtitle}</p>
            <div className="mt-8">
              <Countdown />
              <p className="mt-3 text-sm text-gray-500">
                Offers close Oct 13 at 11:59 pm America Edmonton.
              </p>
            </div>
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
