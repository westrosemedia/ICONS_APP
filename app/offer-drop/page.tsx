"use client";

import { useEffect, useState } from "react";
import CountdownBar from "./CountdownBar";
import OfferCard from "./OfferCard";
import ExpiredState from "./ExpiredState";

function getTargetTime(): Date {
  const now = new Date();
  const edmontonNowStr = now.toLocaleString("en-US", { timeZone: "America/Edmonton" });
  const edmontonNow = new Date(edmontonNowStr);
  
  const targetStr = new Date(edmontonNow);
  targetStr.setDate(targetStr.getDate() + 1);
  targetStr.setHours(9, 0, 0, 0);
  
  const targetDateStr = targetStr.toLocaleString("en-US", { 
    timeZone: "America/Edmonton",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  
  const [datePart, timePart] = targetDateStr.split(", ");
  const [month, day, year] = datePart.split("/");
  const [hour, minute, second] = timePart.split(":");
  
  const targetInEdmonton = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
  const utcNow = new Date();
  const edmontonNowParsed = new Date(edmontonNowStr);
  const offset = edmontonNowParsed.getTime() - utcNow.getTime();
  
  return new Date(targetInEdmonton.getTime() - offset);
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
    price: "$2,997",
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
    price: "$1,997",
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
    price: "$997",
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
      
      <main className="pt-20 md:pt-8">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Limited Time Offer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Choose your package. Act fast. This won't last.
            </p>
          </div>

          {/* Offers */}
          {expired ? (
            <ExpiredState />
          ) : (
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
              {offers.map((offer, index) => (
                <OfferCard
                  key={index}
                  title={offer.title}
                  description={offer.description}
                  price={offer.price}
                  features={offer.features}
                  stripeLink={offer.stripeLink}
                  isExpired={expired}
                />
              ))}
            </div>
          )}

          {/* Footer CTA */}
          {!expired && (
            <div className="text-center mt-16 md:mt-20">
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                Questions? We're here to help.
              </p>
              <a
                href="mailto:hello@westrosemedia.com"
                className="text-black font-bold underline text-lg md:text-xl hover:text-gray-700"
              >
                hello@westrosemedia.com
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
