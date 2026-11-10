import Link from "next/link";

const variants = {
  solid:
    "border-[#4A1828] bg-[#4A1828] text-white hover:border-[#171515] hover:bg-[#171515]",
  line:
    "border-[#171515] bg-transparent text-[#171515] hover:bg-[#171515] hover:text-[#E9E1D7]",
  light:
    "border-[#E9E1D7] bg-transparent text-[#E9E1D7] hover:bg-[#E9E1D7] hover:text-[#4A1828]",
} as const;

export default function WrmButton({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
}) {
  const className = `inline-flex items-center justify-center border px-7 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${variants[variant]}`;

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
