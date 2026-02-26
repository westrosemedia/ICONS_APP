import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    name: "Jen",
    industry: "Event planning",
    city: "Calgary",
    outcome: "Booked solid into Q4",
    href: "/case-studies/jen-event-planner",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0577.jpg?alt=media&token=eccb7758-5b96-46d0-9022-9a72609aa0cd"
  },
  {
    name: "Cheryl",
    industry: "Neuro-inclusive regulation consulting and training",
    city: "Vancouver",
    outcome: "Stronger presence and clearer authority",
    href: "/case-studies/cheryl-neuro-inclusive-consulting-vancouver",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2678.jpg?alt=media&token=acc9d03e-d6fa-47c9-9f49-0d33844bc979"
  },
  {
    name: "Jackie",
    industry: "Event content for an online coach",
    city: "Kelowna",
    outcome: "Booked $10k in clients from event content",
    href: "/case-studies/jackie-event-kelowna",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media&token=030a8826-fc61-4385-86a1-733769131292"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="section-padding">
        <div className="container-elegant">
          <div className="max-w-3xl mb-12">
            <h1 className="text-hero text-black mb-4">Case studies</h1>
            <p className="text-editorial text-gray-700">
              Explore real client results from the ICON Brand Partnership.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="group block overflow-hidden rounded-3xl border border-gray-200 p-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={study.image}
                    alt={study.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-black mb-4">{study.name}</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-black">Industry:</span> {study.industry}
                  </p>
                  <p>
                    <span className="font-semibold text-black">City:</span> {study.city}
                  </p>
                  <p>
                    <span className="font-semibold text-black">Outcome:</span> {study.outcome}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
