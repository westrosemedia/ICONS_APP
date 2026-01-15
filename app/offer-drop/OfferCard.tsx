"use client";

import { useState } from "react";
import Image from "next/image";

type OfferCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  stripeLink: string;
  isExpired: boolean;
  imageUrl: string;
  imageAlt: string;
};

export default function OfferCard({
  title,
  description,
  price,
  features,
  stripeLink,
  isExpired,
  imageUrl,
  imageAlt,
}: OfferCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white border border-gray-200 rounded-3xl p-6 md:p-8 transition-all ${
        isExpired
          ? "opacity-50"
          : "hover:shadow-2xl hover:-translate-y-1"
      }`}
      onMouseEnter={() => !isExpired && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-100">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <h3 className="text-3xl md:text-4xl font-bold mb-3">{title}</h3>
      <p className="text-base md:text-lg text-gray-600 mb-6">{description}</p>
      
      <div className="mb-8">
        <div className="text-4xl md:text-5xl font-bold mb-1">{price}</div>
        <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Limited drop</div>
        {features.length > 0 && (
          <ul className="space-y-3 mt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-black font-bold text-lg mt-1">✓</span>
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
        className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-base md:text-lg tracking-wide transition-all ${
          isExpired
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isHovered
            ? "bg-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] scale-[1.02]"
            : "bg-black text-white hover:bg-gray-900 shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
        }`}
      >
        {isExpired ? "Offer Expired" : "Claim This Offer"}
      </a>
    </div>
  );
}
