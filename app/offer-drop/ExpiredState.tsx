"use client";

export default function ExpiredState() {
  return (
    <div className="text-center py-12 md:py-16 bg-gray-50 border border-gray-200 rounded-3xl">
      <div className="text-6xl md:text-7xl font-bold mb-4">⏰</div>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">This offer has expired</h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        Want first access to the next drop? Email us and we will keep you close.
      </p>
    </div>
  );
}
