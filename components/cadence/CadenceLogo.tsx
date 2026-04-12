import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CADENCE_IMAGES } from "@/lib/cadence";

type Variant = "light" | "dark";

/**
 * `light` = cream/light logo asset for dark backgrounds (hero).
 * `dark` = charcoal logo asset for light backgrounds (nav).
 * `compact` = smaller max width for sticky header on mobile.
 */
export function CadenceLogo({
  variant,
  href = "/cadence",
  className = "",
  priority = false,
  compact = false,
}: {
  variant: Variant;
  href?: string;
  className?: string;
  /** Set true in hero so LCP logo loads eagerly */
  priority?: boolean;
  /** Narrower logo in the top bar (mobile) */
  compact?: boolean;
}) {
  const src = variant === "dark" ? CADENCE_IMAGES.logoDark : CADENCE_IMAGES.logoLight;

  return (
    <Link href={href} className={cn("block select-none", className)}>
      <Image
        src={src}
        alt="Cadence by West Rose Media"
        width={360}
        height={120}
        priority={priority}
        className={cn(
          "h-auto w-full object-contain object-left",
          variant === "dark"
            ? compact
              ? "max-w-[min(100%,136px)] sm:max-w-[min(100%,190px)] md:max-w-[min(100%,220px)]"
              : "max-w-[min(100%,220px)]"
            : "max-w-[min(100%,280px)]",
        )}
        sizes={compact ? "(max-width: 640px) 140px, 220px" : "(max-width: 768px) 200px, 260px"}
      />
    </Link>
  );
}
