import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export default function IconSocietyPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black text-white">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9804.jpg?alt=media&token=18f1ef3e-da8a-4ee2-bd23-a4a9c8df4c2e"
          alt="The ICON Society"
          fill
          className="object-cover opacity-60"
          priority
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
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
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">What Makes It Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-6 leading-relaxed">
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
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9372.jpg?alt=media&token=9b8ba4b7-5acc-4739-8f94-afa51f421f0d"
              alt="ICON Society Members"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </div>
      </section>

      {/* Locked previews */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">A Glimpse Inside</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Weekly Pitch Sessions", image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9188.jpg?alt=media&token=814572b8-22a5-4a09-83f6-1546c528d742" },
            { title: "Private ICON Directory", image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8823.jpg?alt=media&token=c86b10bb-3abc-470e-9562-42ad16bfff13" },
            { title: "Monthly Masterclasses", image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6405.jpg?alt=media&token=4d35cab4-2fe4-44f3-a385-21ca6bf46270" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v3H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-2V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z"/></svg>
                <p className="text-lg font-semibold">{item.title}</p>
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
            <div className="text-center mb-6">
              <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                3-Day Free Trial
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">$88</span>
                <span className="text-sm opacity-70">per month</span>
              </div>
              <p className="text-sm opacity-80">
                After your free trial
              </p>
            </div>
            <CheckoutButton
              label="Start Free Trial"
              className="w-full"
            />
            <p className="text-xs mt-4 opacity-70 text-center">
              Cancel anytime. No commitment.
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
