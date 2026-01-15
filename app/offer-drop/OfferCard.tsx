"use client";

import { useState } from "react";

type OfferCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  stripeLink: string;
  isExpired: boolean;
};

export default function OfferCard({
  title,
  description,
  price,
  features,
  stripeLink,
  isExpired,
}: OfferCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white border-2 rounded-2xl p-8 md:p-10 transition-all ${
        isExpired
          ? "border-gray-300 opacity-50"
          : "border-black hover:shadow-2xl hover:-translate-y-1"
      }`}
      onMouseEnter={() => !isExpired && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-gray-700 mb-6">{description}</p>
      
      <div className="mb-8">
        <div className="text-5xl md:text-6xl font-bold mb-2">{price}</div>
        {features.length > 0 && (
          <ul className="space-y-3 mt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-black font-bold text-xl mt-1">✓</span>
                <span className="text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <a
        href={isExpired ? "#" : stripeLink}
        onClick={(e) => {
          if (isExpired) {
            e.preventDefault();
          }
        }}
        className={`block w-full text-center py-5 px-8 rounded-xl font-bold text-lg md:text-xl transition-all ${
          isExpired
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isHovered
            ? "bg-black text-white shadow-lg scale-105"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {isExpired ? "Offer Expired" : "Claim This Offer"}
      </a>
    </div>
  );
}
