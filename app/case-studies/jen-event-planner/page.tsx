import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Jen — Event Planner Case Study",
  description:
    "How an event planner in Calgary turned inconsistent visibility into consistent inquiries through the ICON Brand Partnership."
};

const proofImages = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5828.jpg?alt=media&token=539fa681-ca7a-43c1-86c9-ad92e7f20c41",
    alt: "Jen event planner proof image 1"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0384-2.jpg?alt=media&token=64e37d3b-df27-4c84-b5f7-c00a99a04a0b",
    alt: "Jen event planner proof image 2"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0426.jpg?alt=media&token=aa93e69d-37b6-4364-b92a-7157b379e6cd",
    alt: "Jen event planner proof image 3"
  }
];

const afterImages = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0139.jpg?alt=media&token=c5218f8e-da0f-4b1f-b8c9-b54197576d89",
    alt: "Jen event planner after image 1"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0418.jpg?alt=media&token=eea07cc1-7197-4291-8a2a-369383b035d1",
    alt: "Jen event planner after image 2"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5907.jpg?alt=media&token=66dd35a3-9a99-46b3-bfd4-287aac36269f",
    alt: "Jen event planner after image 3"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9335.jpg?alt=media&token=cd03db5e-5143-4fd8-9160-557f31d728c4",
    alt: "Jen event planner after image 4"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0367.jpg?alt=media&token=7b65c8e6-fb2f-4aee-b924-85c00487a542",
    alt: "Jen event planner after image 5"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0374.jpg?alt=media&token=f70dedfc-4623-429c-afcb-fb8ce6659435",
    alt: "Jen event planner after image 6"
  }
];

export default function JenEventPlannerCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0577.jpg?alt=media&token=eccb7758-5b96-46d0-9022-9a72609aa0cd"
          alt="Jen event planner hero image"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container-elegant flex min-h-[70vh] items-end pb-14 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-hero text-white mb-6 drop-shadow-lg">
              From no visibility to booked solid
            </h1>
            <p className="text-editorial text-white/90 max-w-2xl">
              How consistent content turned visibility into sales and demand
            </p>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="section-padding bg-black">
        <div className="container-elegant">
          <div className="grid gap-4 md:grid-cols-3">
            {proofImages.map((image) => (
              <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl mb-10">
            <h2 className="text-display text-black">
              Before and after — real brand transformation
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr] items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/WhatsApp%20Image%202026-01-16%20at%2015.14.54.jpeg?alt=media&token=8abf239e-10ec-4fbf-b351-906a817a60b2"
                alt="Jen event planner before image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {afterImages.map((image) => (
                <div key={image.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Results that compound</h2>
            <p className="text-editorial text-gray-700">
              When we took over content for Jen, she had almost no online presence and relied on a social media manager producing low quality graphics with poor communication. Within the first week of our partnership, Jen received multiple inquiries through LinkedIn and her website after months of silence. Those inquiries turned into sales, and she is now booked solid into Q4 with multi day events, allowing her to focus entirely on planning while her brand does the selling.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Video */}
      <section className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Jen%20Hangar%20Reel%203.mp4?alt=media&token=06dd7da2-7b42-4bfc-b618-9e7685c85b6d"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "50vh",
            maxHeight: "80vh",
            objectFit: "cover",
            objectPosition: "center center"
          }}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 pb-8">
          <div className="container-elegant">
            <p className="text-sm text-white/80">
              A look at the scale and energy behind the events
            </p>
          </div>
        </div>
      </section>

      {/* Why it worked */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Why the ICON Brand Partnership works</h2>
            <p className="text-editorial text-gray-700">
              Through the ICON Brand Partnership, strategy, production, and publishing are handled end to end. Jen does not manage content, review drafts, or direct posts. Her brand presence runs consistently in the background, creating inbound demand and supporting higher level event opportunities without added workload.
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
          <Button asChild size="lg" className="group bg-white text-black hover:bg-gray-100">
            <Link href="/apply">Apply to work with us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
