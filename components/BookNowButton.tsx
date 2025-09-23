import Link from "next/link";

export function BookNowButton() {
  return (
    <Link
      href="/packages"
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-black font-semibold hover:opacity-90"
      prefetch={true}
    >
      Book now
    </Link>
  );
}
