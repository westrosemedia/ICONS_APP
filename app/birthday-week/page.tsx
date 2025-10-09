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
            sizes="100vw"
            priority
            quality={85}
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

      {/* Offers Section with Background */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/DJI_0112.jpg?alt=media&token=fbb4c92f-8d48-4b23-8e89-4abebc7652f6"
            alt="West Rose Media Birthday Week"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
              Choose Your <span style={{color: '#E46C32'}}>Offer</span>
            </h2>
            <p className="text-lg text-gray-700">
              Four exclusive opportunities. One <span style={{color: '#5EB298'}} className="font-semibold">powerful</span> week.
            </p>
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

      {/* Featured Image Section */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/K%2BS_ENGAGEMENT_18.jpg?alt=media&token=e193eea2-a066-46df-b0b6-781a781ead76"
            alt="Stephanie Rose - West Rose Media Birthday Week"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>
    </>
  );
}
