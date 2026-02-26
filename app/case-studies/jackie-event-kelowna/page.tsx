import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Jackie — Event Case Study",
  description:
    "Kelowna-based live event for an online coach and founder of Tapping School, generating immediate revenue through strategic event content."
};

const eventImages = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c",
    alt: "Jackie event image 1",
    width: 8256,
    height: 5504
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6646.jpg?alt=media&token=3797f23a-1150-4bf7-bc0a-759d991bd870",
    alt: "Jackie event image 2",
    width: 8256,
    height: 5504
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8910.jpg?alt=media&token=0b80f86e-b011-499d-93b5-c4999fb5fdb1",
    alt: "Jackie event image 3",
    width: 8256,
    height: 5504
  }
];

export default function JackieEventKelownaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media&token=030a8826-fc61-4385-86a1-733769131292"
          alt="Jackie event hero image"
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container-elegant flex min-h-[70vh] items-end pb-14 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-hero text-white mb-6 drop-shadow-lg">
              Booked $10k in clients from event content
            </h1>
            <p className="text-editorial text-white/90 max-w-2xl">
              First in-person event turned into immediate sales
            </p>
            <p className="text-editorial text-white/90 max-w-2xl mt-4">
              Kelowna-based live event for an online coach and founder of Tapping School, generating immediate revenue through strategic event content.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Overview</h2>
            <p className="text-editorial text-gray-700">
              Jackie is an online coach and founder of Tapping School. This event marked her first major in-person experience for her clients, designed to deepen connection and momentum inside her business.
            </p>
          </div>
        </div>
      </section>

      {/* Event Context */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Event context</h2>
            <p className="text-editorial text-gray-700">
              This was Jackie’s first large-scale in-person event. The goal was to capture high-quality photo and video content that reflected the energy, trust, and transformation happening in the room, while also creating assets that could be used immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Results</h2>
            <p className="text-editorial text-gray-700">
              Jackie booked $10,000 in clients directly from content posted during the first day of the event. The footage created immediate demand and converted into sales while the event was still in progress.
            </p>
          </div>
        </div>
      </section>

      {/* After / Event Images */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl mb-10">
            <h2 className="text-display text-black">Event imagery</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventImages.map((image) => (
              <div key={image.src} className="rounded-2xl overflow-hidden bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How this led to more */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">How this led to more</h2>
            <p className="text-editorial text-gray-700">
              The success of the event content created a clear path into ongoing support. High-performing event footage became the foundation for continued visibility, authority, and sales beyond the event itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-elegant text-center">
          <h2 className="text-hero text-white mb-6">Want this for your brand?</h2>
          <p className="text-editorial text-white/90 max-w-2xl mx-auto mb-10">
            If you are a founder ready to turn visibility into opportunity without managing content yourself, you can apply to work with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="group bg-white text-black hover:bg-gray-100">
              <Link href="/apply">Apply for the ICON Brand Partnership</Link>
            </Button>
            <Link href="/packages" className="text-white/80 hover:text-white underline underline-offset-4">
              View Event and Immersion Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
