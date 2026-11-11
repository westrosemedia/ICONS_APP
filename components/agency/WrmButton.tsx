import Link from "next/link";

const variants = {
  solid:
    "border-[#F4F4F4] bg-[#F4F4F4] text-[#020405] hover:border-[#CCCCCE] hover:bg-[#CCCCCE]",
  line:
    "border-[#CCCCCE] bg-transparent text-[#F4F4F4] hover:bg-[#F4F4F4] hover:text-[#020405]",
  light:
    "border-[#F4F4F4] bg-transparent text-[#F4F4F4] hover:bg-[#F4F4F4] hover:text-[#020405]",
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
