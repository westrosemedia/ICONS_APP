import Link from "next/link";

type Variant = "light" | "dark";

export function CadenceLogo({
  variant,
  href = "/cadence",
  className = "",
}: {
  variant: Variant;
  href?: string;
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <Link href={href} className={`block select-none ${className}`}>
      <span
        className={`font-[family-name:var(--font-cadence-display),serif] text-2xl sm:text-3xl lowercase tracking-tight leading-none ${
          dark ? "text-[#171717]" : "text-[#f5f0e8]"
        }`}
      >
        cadence
      </span>
      <span
        className={`mt-1 block font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] ${
          dark ? "text-[#171717]" : "text-[#f5f0e8]/90"
        }`}
      >
        BY WEST ROSE MEDIA
      </span>
    </Link>
  );
}
