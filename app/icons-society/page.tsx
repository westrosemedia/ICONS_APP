import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export default function IconSocietyPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black text-white">
        <Image
          src="/icons-society-hero.jpg"
          alt="The ICON Society"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold tracking-tight mb-6">The ICON Society</h1>
          <p className="text-xl leading-relaxed">
            Not another Facebook group. Not the same complaints every week. This is a movement and a power circle for people who make things happen.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-lg space-y-6">
        <p>
          The ICON Society is getting a brand new home inside the ICONS app. A fresh platform, premium features, and an upgraded experience built for ICONS only. Get in now before the new platform launches and the price increases.
        </p>
        <p>
          Inside The ICON Society you are surrounded by bold entrepreneurs who want more money, more influence, and more power. It is collaborative, not competitive. When one ICON wins, we all do.
        </p>
      </section>

      {/* What makes it different */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">What Makes It Different</h2>
          <ul className="space-y-4 leading-relaxed">
            <li>
              <strong>Accountability that moves the needle.</strong> You show up, you take action, and the community holds you to it.
            </li>
            <li>
              <strong>Visibility on lock.</strong> Weekly pitch and visibility sessions sharpen your message, presence, and brand until people cannot look away.
            </li>
            <li>
              <strong>Strategy that sticks.</strong> Monthly masterclasses give you what actually works to grow your reach and revenue.
            </li>
            <li>
              <strong>Private ICON directory.</strong> Hire, collaborate with, and invest in each other instead of searching outside the community.
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/icons-society-2.jpg"
            alt="ICON Society Members"
            width={900}
            height={700}
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Locked previews */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">A Glimpse Inside</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Weekly Pitch Sessions",
            "Private ICON Directory",
            "Monthly Masterclasses",
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-64 rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center"
            >
              <Image
                src={`/icons-society-locked-${i + 1}.jpg`}
                alt={item}
                fill
                className="object-cover opacity-40 blur-sm"
              />
              <div className="relative z-10 flex flex-col items-center px-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v3H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-2V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z"/></svg>
                <p className="text-lg font-semibold">{item}</p>
                <p className="text-sm text-gray-300">Members Only</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing copy */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-lg space-y-6 text-center">
        <p>
          This is where your big vision is not too much. This is where your ambition gets celebrated, sharpened, and scaled.
        </p>
        <p>
          When you join The ICON Society, you stop being background noise. You become the one people cannot ignore. Your brand stops being cute and starts being paid.
        </p>
        <p className="font-bold">
          Because when the world sees you as iconic, they pay you like you are.
        </p>
      </section>

      {/* Pricing and buy */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold">Join The ICON Society</h3>
            <p className="text-lg">
              Early entry is open now. Secure your spot before the new app launch and the price increase.
            </p>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-gray-300">
              <li>Weekly pitch and visibility sessions</li>
              <li>Monthly masterclasses</li>
              <li>Private ICON directory</li>
              <li>Members only resources and replays</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-2xl p-8 shadow-xl">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold">$<span>{process.env.NEXT_PUBLIC_ICON_SOCIETY_PRICE_DISPLAY || "XXX"}</span></span>
              <span className="text-sm opacity-70">per month</span>
            </div>
            <p className="text-sm mb-6 opacity-80">
              Founding rate. Price will increase at app launch.
            </p>
            <CheckoutButton
              priceId={process.env.NEXT_PUBLIC_STRIPE_ICON_SOCIETY_PRICE_ID || ""}
              mode="subscription"
              label="Join Now"
              className="w-full"
            />
            <p className="text-xs mt-4 opacity-70">
              You will be redirected to secure checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 text-center">
        <Link
          href="/"
          className="inline-block border border-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-black hover:text-white transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
