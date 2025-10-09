import Link from "next/link";

type Offer = {
  id: string;
  name: string;
  price: string;
  tag: string;
  blurb: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  ribbon?: string;
};

export default function OfferCard({ offer }: { offer: Offer }) {
  const ribbonColors: Record<string, string> = {
    "Limited window": "#E46C32",
    "Ends Oct 13": "#5EB298",
    "Application": "#E46C32",
    "Very limited": "#5EB298",
  };
  
  return (
    <div className="relative bg-white rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden hover:shadow-2xl transition-all">
      {offer.ribbon ? (
        <div 
          className="absolute right-3 top-3 text-white text-xs px-3 py-1 rounded-full font-semibold"
          style={{backgroundColor: ribbonColors[offer.ribbon] || "#000000"}}
        >
          {offer.ribbon}
        </div>
      ) : null}
      <div className="p-8 md:p-10">
        <div className="text-sm uppercase tracking-wide text-gray-500">{offer.tag}</div>
        <h3 className="mt-1 text-2xl font-semibold">{offer.name}</h3>
        <div className="mt-2 text-xl font-medium">{offer.price}</div>
        <p className="mt-4 text-gray-700">{offer.blurb}</p>
        <ul className="mt-6 space-y-2 text-gray-900">
          {offer.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href={offer.ctaHref}
            className="inline-flex items-center justify-center w-full rounded-2xl bg-black text-white px-6 py-3 text-sm font-semibold hover:scale-[1.01] active:scale-[0.99] transition"
          >
            {offer.ctaText}
          </Link>
          <p className="mt-3 text-xs text-gray-500">Ends Oct 13 at 11:59 pm America Edmonton.</p>
        </div>
      </div>
    </div>
  );
}
