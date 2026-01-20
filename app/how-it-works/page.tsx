import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImage =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4185.jpg?alt=media&token=28bf6bd2-861b-459b-bc13-59381159cc0c";
const sectionImages = [
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8802.jpg?alt=media&token=4d2ceab7-b80b-4d87-bcb7-e074f4893700",
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8772.jpg?alt=media&token=ec7967fe-a5bb-4911-b537-5ae53ac3d342"
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="West Rose Media founder portrait"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container-elegant relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl rounded-3xl border border-white/70 bg-white/90 p-8 sm:p-10 lg:p-12 shadow-xl backdrop-blur">
            <h1 className="text-hero text-black mb-4">How the ICON Brand Partnership works</h1>
            <p className="text-editorial text-gray-700 mb-6">
              This page is for founders who want to understand how the ICON Brand Partnership works and whether it makes sense for where their business is right now.
            </p>
            <p className="text-editorial text-gray-700">
              West Rose Media partners with established founders who are already generating revenue and want their brand to create more authority, opportunities, and income without managing content themselves.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/apply">Apply to work with us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant">
          <div className="space-y-12">
            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4 text-gray-700">
                  <h2 className="text-2xl font-semibold text-black">Who the ICON Brand Partnership is built for</h2>
                  <p>
                    The ICON Brand Partnership is designed for founders who are no longer trying to get their first clients.
                  </p>
                  <p>
                    Most founders we partner with are already generating consistent revenue and feel capped by how fragmented or time consuming content has become. They know visibility matters, but it is not compounding into the level of recognition or opportunity they want.
                  </p>
                  <p>This typically looks like:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Monthly revenue in the 20k to 50k range and pushing for the next level</li>
                    <li>Strong offers that sell, but inconsistent or disjointed content</li>
                    <li>Too much time spent managing content instead of scaling the business</li>
                    <li>A desire for more inbound opportunities, authority, and recognition</li>
                  </ul>
                  <p>
                    If you are still building fundamentals, this partnership will feel premature. If you are scaling, it will feel relieving.
                  </p>
                </div>
                <div className="relative aspect-[3/4] max-w-sm w-full mx-auto overflow-hidden rounded-2xl">
                  <Image
                    src={sectionImages[0]}
                    alt="West Rose Media partnership visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="relative aspect-[3/4] max-w-sm w-full mx-auto overflow-hidden rounded-2xl lg:order-2">
                  <Image
                    src={sectionImages[1]}
                    alt="West Rose Media content strategy visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="space-y-4 text-gray-700 lg:order-1">
                  <h2 className="text-2xl font-semibold text-black">Why content becomes the bottleneck at this stage</h2>
                  <p>
                    At this level of business, content stops being about creativity and starts being about leverage.
                  </p>
                  <p>
                    When content is fragmented across multiple people or tools, momentum stalls. Visibility becomes inconsistent. Opportunities slow down.
                  </p>
                  <p>
                    Founders get stuck not because they lack ideas, but because content is not owned end to end.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-2xl font-semibold text-black">How the ICON Brand Partnership solves that</h2>
                <p>
                  West Rose Media operates as a brand partner, not a vendor.
                </p>
                <p>
                  Through the ICON Brand Partnership, strategy, production, and publishing live inside one system so content moves consistently without you managing every detail.
                </p>
                <p>
                  You stay involved at the strategic level. We handle execution, timelines, and follow through so your brand stays visible, recognizable, and positioned for growth.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-2xl font-semibold text-black">Investment context</h2>
                <p>
                  The ICON Brand Partnership is a monthly investment designed for founders who see brand and visibility as revenue levers, not marketing experiments.
                </p>
                <p>
                  Most founders reach out when they are ready to invest several thousand dollars per month into a partnership that supports long term authority, opportunity, and income growth.
                </p>
                <p>If that aligns with your current stage, the next step is to apply.</p>
              </div>
            </section>
          </div>

          <section className="mt-16 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-black">Apply to work with us</h2>
            <p className="text-editorial text-gray-700 mb-8">
              Applications for the ICON Brand Partnership are reviewed carefully. If the partnership is aligned, you will hear from us with next steps.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/apply">Apply to work with us</Link>
            </Button>
            <Button asChild size="lg" className="group mt-4">
              <Link href="/case-studies">View case studies</Link>
            </Button>
          </section>
        </div>
      </section>
    </main>
  );
}
