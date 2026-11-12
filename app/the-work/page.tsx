import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Work | West Rose Media",
  description: "Photographs from West Rose Media.",
  alternates: { canonical: "/the-work" },
};

const JEN = "/case-studies/jen-event-planner";
const CHERYL = "/case-studies/cheryl-neuro-inclusive-consulting-vancouver";
const JACKIE = "/case-studies/jackie-event-kelowna";

type WorkPhoto = {
  src: string;
  alt: string;
  brand?: "Jen" | "Cheryl" | "Jackie";
  href?: string;
  wide?: boolean;
};

const photos: WorkPhoto[] = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0577.jpg?alt=media&token=eccb7758-5b96-46d0-9022-9a72609aa0cd",
    alt: "Jen, event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2678.jpg?alt=media&token=acc9d03e-d6fa-47c9-9f49-0d33844bc979",
    alt: "Cheryl, neuro-inclusive regulation consulting and training",
    brand: "Cheryl",
    href: CHERYL,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media&token=030a8826-fc61-4385-86a1-733769131292",
    alt: "Jackie, live event in Kelowna",
    brand: "Jackie",
    href: JACKIE,
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5828.jpg?alt=media&token=539fa681-ca7a-43c1-86c9-ad92e7f20c41",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6646.jpg?alt=media&token=3797f23a-1150-4bf7-bc0a-759d991bd870",
    alt: "Jackie event",
    brand: "Jackie",
    href: JACKIE,
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_037.jpg?alt=media&token=04a83038-59fe-447a-8f3b-99900c5db7f1",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2487.jpg?alt=media&token=122df80c-a83f-42d1-900d-506f7f95bf34",
    alt: "Cheryl",
    brand: "Cheryl",
    href: CHERYL,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
    alt: "West Rose Media photograph",
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0139.jpg?alt=media&token=c5218f8e-da0f-4b1f-b8c9-b54197576d89",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0384-2.jpg?alt=media&token=64e37d3b-df27-4c84-b5f7-c00a99a04a0b",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2862.jpg?alt=media&token=449a2bdc-e3e2-4374-8a52-478d8481be78",
    alt: "Cheryl",
    brand: "Cheryl",
    href: CHERYL,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c",
    alt: "Jackie event",
    brand: "Jackie",
    href: JACKIE,
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0426.jpg?alt=media&token=aa93e69d-37b6-4364-b92a-7157b379e6cd",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2561.jpg?alt=media&token=11526ac1-1557-402c-befc-5c0bd8ca614b",
    alt: "Cheryl",
    brand: "Cheryl",
    href: CHERYL,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_012.jpg?alt=media&token=d22f0bf0-f15c-458c-bcc7-421c4006bc28",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8910.jpg?alt=media&token=0b80f86e-b011-499d-93b5-c4999fb5fdb1",
    alt: "Jackie event",
    brand: "Jackie",
    href: JACKIE,
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0418.jpg?alt=media&token=eea07cc1-7197-4291-8a2a-369383b035d1",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2623.jpg?alt=media&token=991110b2-8797-49e3-b139-0eb8a4212d56",
    alt: "Cheryl",
    brand: "Cheryl",
    href: CHERYL,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5907.jpg?alt=media&token=66dd35a3-9a99-46b3-bfd4-287aac36269f",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8802.jpg?alt=media&token=4d2ceab7-b80b-4d87-bc7e-e074f4893700",
    alt: "West Rose Media photograph",
    wide: true,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9335.jpg?alt=media&token=cd03db5e-5143-4fd8-9160-557f31d728c4",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0367.jpg?alt=media&token=7b65c8e6-fb2f-4aee-b924-85c00487a542",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8772.jpg?alt=media&token=ec7967fe-a5bb-4911-b537-5ae53ac3d342",
    alt: "West Rose Media photograph",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0374.jpg?alt=media&token=f70dedfc-4623-429c-afcb-fb8ce6659435",
    alt: "Jen event planner",
    brand: "Jen",
    href: JEN,
  },
];

const strip = photos.slice(0, 10);
const wall = photos.slice(10);
const wallHeights = ["h-[78vh]", "h-[52vh]", "h-[64vh]", "h-[70vh]"];

function Picture({ photo, priority = false, sizes }: { photo: WorkPhoto; priority?: boolean; sizes: string }) {
  const image = (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
    />
  );

  const label = photo.brand ? (
    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020405]/70 to-transparent px-4 pb-4 pt-16 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F4F4F4]">
      {photo.brand}
    </span>
  ) : null;

  if (!photo.href) {
    return (
      <>
        {image}
        {label}
      </>
    );
  }

  return (
    <Link href={photo.href} className="absolute inset-0 block">
      {image}
      {label}
    </Link>
  );
}

export default function TheWorkPage() {
  return (
    <div className="bg-[#020405] text-[#F4F4F4]">
      <h1 className="sr-only">The work</h1>

      <section className="overflow-hidden" aria-label="Photographs">
        <div className="wrm-marquee flex w-max hover:[animation-play-state:paused]" style={{ animationDuration: "90s" }}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex" aria-hidden={copy === 1}>
              {strip.map((photo, index) => (
                <li
                  key={`${copy}-${photo.src}`}
                  className={`relative h-[70vh] shrink-0 ${photo.wide ? "w-[86vw] lg:w-[58vw]" : "w-[78vw] lg:w-[34vw]"}`}
                >
                  <Picture photo={photo} priority={copy === 0 && index < 2} sizes="(max-width: 1024px) 86vw, 58vw" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="columns-1 gap-2 px-2 pb-2 sm:columns-2 lg:columns-3" aria-label="More photographs">
        {wall.map((photo, index) => (
          <figure key={photo.src} className={`relative mb-2 break-inside-avoid ${wallHeights[index % wallHeights.length]}`}>
            <Picture photo={photo} sizes="(max-width: 640px) 100vw, 33vw" />
          </figure>
        ))}
      </section>
    </div>
  );
}
