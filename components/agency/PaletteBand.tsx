import Link from "next/link";

export default function PaletteBand({
  blue = "West Rose Media",
  camel = "Stephanie Rose",
  href,
}: {
  blue?: string;
  camel?: string;
  href?: string;
}) {
  const inner = (
    <div className="grid grid-cols-2">
      <div className="flex min-h-[4.75rem] items-center bg-[#2D4B70] px-4 py-4 sm:min-h-[5.5rem] sm:px-8 lg:px-14">
        <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(1.15rem,2.5vw,2.75rem)] leading-[1.05] text-[#F4F4F4]">
          {blue}
        </p>
      </div>
      <div className="flex min-h-[4.75rem] items-center bg-[#916545] px-4 py-4 sm:min-h-[5.5rem] sm:px-8 lg:px-14">
        <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(1.15rem,2.5vw,2.75rem)] italic leading-[1.05] text-[#F4F4F4]">
          {camel}
        </p>
      </div>
    </div>
  );

  if (!href) return inner;

  return (
    <Link href={href} className="block">
      {inner}
    </Link>
  );
}
