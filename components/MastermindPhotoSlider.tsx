"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const MASTERMIND_GALLERY = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FDJI_0012.jpg?alt=media&token=4d9d0dca-cf43-4429-abcb-d3eb01e93527",
    alt: "Mastermind retreat aerial view",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1477.jpg?alt=media&token=d2d64084-5115-465a-8759-0ad738cebabe",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1485.jpg?alt=media&token=e6468384-3ae5-4555-9dc4-fee7740a2571",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1514.jpg?alt=media&token=e540e4cc-11fc-459b-a6ec-735a17f9202f",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1628.jpg?alt=media&token=ddeefafa-ff92-4631-b825-8fe3c3042639",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1692.jpg?alt=media&token=f5d91ee1-e18e-4140-9c9c-b6760e567ad9",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1721.jpg?alt=media&token=89e1a234-30f4-4909-abad-f70ba41b5ebb",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1752.jpg?alt=media&token=a1ba3932-bd34-463a-bd32-f3b73500c7f1",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1763.jpg?alt=media&token=3a8f25fa-11a5-4808-9bec-434a10a36bc7",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1773.jpg?alt=media&token=b00e5d18-1b18-48db-97c4-cf27d04aaf75",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1816.jpg?alt=media&token=2c514071-4517-4630-8c10-a411f0d37512",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1822.jpg?alt=media&token=3b1f7a21-5936-4bfa-b940-1e4059352221",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1833.jpg?alt=media&token=e7c36300-580f-4c31-b452-f2d2eb33429f",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1882.jpg?alt=media&token=0f30e811-67df-489f-8239-07b94ed0cdb9",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1946.jpg?alt=media&token=82df1afa-1025-457d-911f-aa233b71b8ad",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2038.jpg?alt=media&token=028a8f85-1b69-4c31-ad30-d053c1020eb8",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2043.jpg?alt=media&token=b1641533-3892-4bc6-a33d-23825e1f0c9d",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2127.jpg?alt=media&token=fff7b1ba-5221-4a48-81b9-00a044da8d81",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2183.jpg?alt=media&token=703ab039-6462-48f6-baa1-501f9c4a32f7",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2401.jpg?alt=media&token=f59d2da6-c4c7-4130-86f6-36191fd1ddd9",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR4779.jpg?alt=media&token=175c031a-a0ce-4f1c-8c84-c771453ca305",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR4782.jpg?alt=media&token=1bcd4d0a-26e3-47ea-b68a-f4a8595cf799",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR4790.jpg?alt=media&token=6d98c11c-f2a4-432f-9baa-9223a39d7db7",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR5060.jpg?alt=media&token=75ee5b95-6830-40be-b451-6d254b449d06",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR5470.jpg?alt=media&token=3ea9f08b-b18d-4cee-99d3-aaacfe66a795",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR5995.jpg?alt=media&token=8cd7762e-a067-4110-a205-295bd51b99fa",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6063.jpg?alt=media&token=8bea8a92-e1af-4abb-9047-a099d6dcdb0c",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6082.jpg?alt=media&token=2de2b7d5-5913-479f-a7d5-fef748dbf914",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6169.jpg?alt=media&token=8828b287-1b3b-4534-98c9-fcf2605862a9",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6173.jpg?alt=media&token=605a5d26-d47f-4661-85bb-b27a04fe8d44",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6345.jpg?alt=media&token=eae2043f-fdaa-42e8-a180-54344af8c248",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6464.jpg?alt=media&token=67113470-b8c8-441b-b5d4-f9daa81f8d21",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6521.jpg?alt=media&token=965b051a-8e6f-43d7-bfd2-44ebf95cde8d",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6561.jpg?alt=media&token=e71edc54-29bd-4cab-a46b-fdaa50c6ee69",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6751.jpg?alt=media&token=f4187b4b-6852-4985-b5a5-61869e02a461",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6790.jpg?alt=media&token=e4020407-8379-4172-aa6d-84a83faf9fa9",
    alt: "Mastermind moment",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6863.jpg?alt=media&token=749b0527-f85a-4f9c-8133-0d31d25306ef",
    alt: "Mastermind moment",
  },
] as const;

export default function MastermindPhotoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = MASTERMIND_GALLERY.length;
  const current = MASTERMIND_GALLERY[index]!;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (next: number) => {
    setIndex((next + total) % total);
  };

  return (
    <section
      className="py-20 md:py-28 bg-black"
      aria-labelledby="gallery-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#c1ff72] mb-4">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-heading font-light tracking-tight text-4xl md:text-6xl leading-[1.05]"
          >
            Inside the{" "}
            <span className="italic text-[#c1ff72]">room</span>
          </h2>
        </div>
        <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden border border-white/20"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
            if (Math.abs(delta) > 40) {
              goTo(index + (delta < 0 ? 1 : -1));
            }
            touchStartX.current = null;
          }}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover animate-fade-in"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 border border-white/30 bg-black/60 text-[#c1ff72] text-lg hover:bg-[#c1ff72] hover:text-black transition-colors"
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 border border-white/30 bg-black/60 text-[#c1ff72] text-lg hover:bg-[#c1ff72] hover:text-black transition-colors"
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 md:mt-8 overflow-x-auto px-6 md:px-10 scrollbar-hide">
        <div className="flex gap-3 w-max mx-auto pb-2">
          {MASTERMIND_GALLERY.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View photo ${i + 1}`}
              aria-current={i === index}
              className={`relative h-16 w-12 md:h-20 md:w-14 overflow-hidden border transition-opacity ${
                i === index
                  ? "border-[#c1ff72] opacity-100"
                  : "border-white/15 opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
