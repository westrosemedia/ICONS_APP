"use client";

import Image from "next/image";

export default function BgPanel({
  src,
  children,
  height = "h-[60vh]",
  overlay = "bg-black/20",
}: {
  src: string;
  children?: React.ReactNode;
  height?: string;     // tailwind class for height, eg h-[60vh] or h-[80vh]
  overlay?: string;    // tailwind class for overlay color
}) {
  return (
    <section className={`relative w-full ${height}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={false}
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}

