import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Content Challenge | Return to Leader Status in 20 Days",
  description:
    "Join The Content Challenge for a 20-day sprint to rebuild your consistency, create content that converts, and lead your brand with confidence. Starts November 8.",
  openGraph: {
    title: "The Content Challenge | Return to Leader Status in 20 Days",
    description:
      "A 20-day sprint to reignite your presence, rebuild your consistency, and create content that converts. Starts November 8.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Content Challenge | Return to Leader Status in 20 Days",
    description:
      "A 20-day sprint to reignite your presence, rebuild your consistency, and create content that converts. Starts November 8.",
  },
};

export default function ContentChallengePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/1.png?alt=media&token=1c0c50cf-c2a0-4bb4-8616-6b23aedf48cc"
            alt="The Content Challenge by Stephanie Rose"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            The Content Challenge
          </p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Return to Leader Status in 20 Days.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            You already know how to create; now it’s time to lead again.
          </p>
          <Link
            href="https://buy.stripe.com/14A9AS8kU4qVbXR9Bb87K0T"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-10 inline-flex"
          >
            Join The Content Challenge
          </Link>
        </div>
      </section>

      <section className="section bg-white text-black">
        <div className="container-elegant">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div>
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-gray-800">
                <p>
                  The Content Challenge is a 20-day sprint to reignite your presence,
                  rebuild your consistency, and finally create content that converts.
                </p>
                <p>
                  Starting November 8, you’ll join a private Instagram group chat where I’ll
                  drop daily voice notes, post instructions, and strategy frameworks that
                  help you show up with confidence and momentum again.
                </p>
                <p>
                  No PDFs. No fluff. No overthinking. Just 20 days of direction,
                  accountability, and clarity so you can end the year as the leader your
                  brand deserves.
                </p>
              </div>

              <div className="divider" />

              <div>
                <h2 className="text-3xl font-semibold text-black">
                  By the end, you’ll have:
                </h2>
                <ul className="mt-6 space-y-4 text-lg text-gray-800">
                  <li>• 20 powerful posts out in the world</li>
                  <li>• Real engagement and traction again</li>
                  <li>• The clarity to keep showing up long after the challenge ends</li>
                </ul>
              </div>

              <div className="mt-12 rounded-2xl border border-black/10 bg-black/5 p-8 text-lg text-gray-800">
                <p>
                  It’s $99. You get immediate access to the private group after checkout.
                  We start November 8.
                </p>
                <Link
                  href="https://buy.stripe.com/14A9AS8kU4qVbXR9Bb87K0T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline mt-8 inline-flex"
                >
                  Join The Content Challenge
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-8">
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/1.png?alt=media&token=1c0c50cf-c2a0-4bb4-8616-6b23aedf48cc"
                  alt="Instagram carousel preview for The Content Challenge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-black text-white">
        <div className="container-elegant text-center">
          <p className="text-lg text-white/70">
            Get your rhythm back. Reclaim your edge. This is your return to leader status.
          </p>
          <Link
            href="https://buy.stripe.com/14A9AS8kU4qVbXR9Bb87K0T"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-10 inline-flex"
          >
            Join The Content Challenge
          </Link>
        </div>
      </section>
    </div>
  );
}

