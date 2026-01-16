"use client";

import { useEffect, useState } from "react";
import CountdownBar from "./CountdownBar";
import OfferCard from "./OfferCard";
import ExpiredState from "./ExpiredState";

function getTargetTime(): Date {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Edmonton",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  
  const parts = formatter.formatToParts(now);
  const getPart = (type: string) => parts.find(p => p.type === type)?.value || "0";
  
  const year = parseInt(getPart("year"));
  const month = parseInt(getPart("month")) - 1;
  const day = parseInt(getPart("day"));
  
  let target = new Date(Date.UTC(year, month, day + 1, 16, 0, 0, 0));
  
  const testParts = formatter.formatToParts(target);
  let testHour = parseInt(testParts.find(p => p.type === "hour")?.value || "0");
  
  if (testHour !== 9) {
    target = new Date(Date.UTC(year, month, day + 1, 15, 0, 0, 0));
    const verifyParts = formatter.formatToParts(target);
    testHour = parseInt(verifyParts.find(p => p.type === "hour")?.value || "0");
    
    if (testHour !== 9) {
      target = new Date(Date.UTC(year, month, day + 1, 17, 0, 0, 0));
    }
  }
  
  return target;
}

function isExpired(): boolean {
  const now = new Date();
  const target = getTargetTime();
  return target.getTime() - now.getTime() <= 0;
}

const offers = [
  {
    title: "VIP Day + Coaching",
    description: "Intensive one-day session plus ongoing support",
    price: "$5,000 CAD",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35&v=2",
    imageAlt: "VIP day session",
    features: [
      "Full day VIP session",
      "3 months 1:1 coaching",
      "Post-session strategy call",
      "Email support",
    ],
    stripeLink: "https://buy.stripe.com/cNi4gy30A5uZ1jdbJj87K12",
  },
  {
    title: "Spotlight + Strategy",
    description: "Brand spotlight package with strategic guidance",
    price: "$2,000 CAD",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_003.jpg?alt=media&token=62172af0-d2ad-4af1-a500-eb8a48d795a3&v=2",
    imageAlt: "Spotlight session",
    features: [
      "Complete brand spotlight",
      "Strategic roadmap",
      "2 months Slack coaching",
      "Post collaboration",
    ],
    stripeLink: "https://buy.stripe.com/9B69ASfNmbTn7HB7t387K0S",
  },
  {
    title: "3 Months Coaching",
    description: "Extended 1:1 support and collaboration",
    price: "$2,200 CAD",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35&v=2",
    imageAlt: "Coaching session",
    features: [
      "3 months 1:1 Slack coaching",
      "Weekly strategy calls",
      "Post collaboration",
      "Priority support",
    ],
    stripeLink: "https://buy.stripe.com/4gM00i30AaPje5ZeVv87K13",
  },
];

export default function OfferDropPage() {
  const [expired, setExpired] = useState(isExpired());

  useEffect(() => {
    const interval = setInterval(() => {
      setExpired(isExpired());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CountdownBar />
      
      <main className="pt-20 md:pt-0">
        <section className="section-padding bg-black text-white">
          <div className="container-elegant">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-4">
              Offer Drop
            </p>
            <h1 className="text-hero text-white mb-6">
              Premium offers. Short window.
            </h1>
            <p className="text-editorial text-white/85 max-w-2xl">
              Choose your package, move fast, and lock in the rate before the timer ends.
            </p>
            <div className="mt-6 text-sm uppercase tracking-[0.3em] text-white/60">
              Prices in CAD
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-elegant">
            <div className="max-w-3xl mb-12 md:mb-16">
              <p className="text-lg md:text-2xl text-gray-800 mb-6">
                If you’ve been circling the same problems in your business, this is your moment to stop hesitating.
              </p>
              <p className="text-base md:text-xl text-gray-700 mb-6">
                The difference between brands that stall and brands that scale is not talent.
                It’s timing and support.
              </p>
              <p className="text-base md:text-xl text-gray-700 mb-6">
                What’s here is designed to change how your business moves, how your content performs, and how confident you feel selling. Quickly. Decisively. With momentum.
              </p>
              <p className="text-base md:text-xl text-gray-700 mb-6">
                This is not something to bookmark.
                This is something you act on now.
              </p>
              <p className="text-base md:text-xl text-gray-700">
                Because a year from now, you’ll either be glad you moved or you’ll still be fixing the same problems at a higher cost.
              </p>
              <p className="text-base md:text-xl text-gray-900 font-semibold mt-6">
                Choose accordingly.
              </p>
            </div>
            {expired ? (
              <ExpiredState />
            ) : (
              <div className="grid gap-8 md:grid-cols-3">
                {offers.map((offer, index) => (
                  <OfferCard
                    key={index}
                    title={offer.title}
                    description={offer.description}
                    price={offer.price}
                    features={offer.features}
                    stripeLink={offer.stripeLink}
                    isExpired={expired}
                    imageUrl={offer.imageUrl}
                    imageAlt={offer.imageAlt}
                  />
                ))}
              </div>
            )}

            {!expired && (
              <div className="text-center mt-16 md:mt-20">
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                  Questions? We reply fast.
                </p>
                <a
                  href="mailto:admin@westrosemedia.com"
                  className="text-black font-bold underline text-lg md:text-xl hover:text-gray-700"
                >
                  admin@westrosemedia.com
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
