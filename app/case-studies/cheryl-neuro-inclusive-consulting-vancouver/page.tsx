import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cheryl — Neuro-Inclusive Regulation Consulting and Training Case Study",
  description:
    "Vancouver-based neuro-inclusive consultant building trust and authority with large organizations and non-profits."
};

const proofImages = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Screenshot%202026-01-19%20at%202.39.29%E2%80%AFPM.png?alt=media&token=21f726a8-04ab-49ea-8841-d88c742ed7db",
    alt: "Cheryl client feedback highlighting trust, clarity, and professionalism",
    width: 1198,
    height: 478
  }
];

const afterImages = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2487.jpg?alt=media&token=122df80c-a83f-42d1-900d-506f7f95bf34",
    alt: "Cheryl after image 1",
    width: 4691,
    height: 7037
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2862.jpg?alt=media&token=449a2bdc-e3e2-4374-8a52-478d8481be78",
    alt: "Cheryl after image 2",
    width: 4615,
    height: 6923
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2561.jpg?alt=media&token=11526ac1-1557-402c-befc-5c0bd8ca614b",
    alt: "Cheryl after image 3",
    width: 4823,
    height: 7234
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2623.jpg?alt=media&token=991110b2-8797-49e3-b139-0eb8a4212d56",
    alt: "Cheryl after image 4",
    width: 4919,
    height: 7378
  }
];

export default function CherylNeuroInclusiveConsultingVancouverCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2678.jpg?alt=media&token=acc9d03e-d6fa-47c9-9f49-0d33844bc979"
          alt="Cheryl neuro-inclusive regulation consulting and training hero image"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container-elegant flex min-h-[70vh] items-end pb-14 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-hero text-white mb-6 drop-shadow-lg">
              Cheryl, Neuro-Inclusive Regulation Consulting and Training
            </h1>
            <p className="text-editorial text-white/90 max-w-2xl">
              Vancouver-based neuro-inclusive consultant building trust and authority with large organizations and non-profits.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="section-padding bg-black">
        <div className="container-elegant">
          <div className="grid gap-4 md:grid-cols-3">
            {proofImages.map((image) => (
              <div key={image.src} className="relative w-full rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-contain"
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
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/WhatsApp%20Image%202026-01-19%20at%2014.37.08.jpeg?alt=media&token=6a60df02-75bc-4af9-9608-61ded3a473de"
                alt="Cheryl before image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {afterImages.map((image) => (
                <div key={image.src} className="relative w-full rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-3xl mt-10 text-editorial text-gray-700">
            <p>
              Before working together, Cheryl’s online presence did not reflect the level of expertise or the seriousness of the organizations they were capable of serving.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">Results that compound</h2>
            <p className="text-editorial text-gray-700">
              We clarified Cheryl’s positioning, elevated their visual presence, and aligned content with the level of institutions they wanted to be hired by. The focus was trust, clarity, and authority.
            </p>
            <p className="text-editorial text-gray-700 mt-6">
              Cheryl began attracting more qualified leads and significantly increased trust with organizations. They are now being hired by large non-profits and institutions that require credibility and professionalism before engaging.
            </p>
          </div>
          <div className="mt-12 relative aspect-video overflow-hidden rounded-2xl bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              muted
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/SBS%20Inclusion%20Reel%206.mp4?alt=media&token=1efb2fc2-eb76-4d82-aa59-9d9bd520cf74"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* After Proof */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl mb-10">
            <h2 className="text-display text-black">After proof — trust in action</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm max-w-2xl">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Screenshot%202026-01-19%20at%202.39.29%E2%80%AFPM.png?alt=media&token=21f726a8-04ab-49ea-8841-d88c742ed7db"
              alt="Client feedback highlighting trust, clarity, and professionalism."
              width={1198}
              height={478}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How it worked */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 className="text-display text-black mb-6">How working together looks</h2>
            <p className="text-editorial text-gray-700">
              Cheryl works with West Rose Media through the ICON Brand Partnership, combining strategy, photography, video, and execution to support long-term authority and visibility.
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
              View one-time shoots
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
