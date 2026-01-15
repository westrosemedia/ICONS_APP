"use client";

export default function ExpiredState() {
  return (
    <div className="text-center py-12 md:py-16">
      <div className="text-6xl md:text-8xl font-bold mb-4">⏰</div>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">This Offer Has Expired</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Missed out? Check back for future offers or reach out to discuss your needs.
      </p>
    </div>
  );
}
