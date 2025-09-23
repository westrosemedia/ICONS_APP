"use client";

export default function BGSection({
  image,
  children,
  height = "h-[70vh]"
}: {
  image: string;
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      <div
        className={`${height} w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 grid place-items-center p-6 text-center">
        <div className="mx-auto max-w-2xl text-white">{children}</div>
      </div>
    </section>
  );
}
