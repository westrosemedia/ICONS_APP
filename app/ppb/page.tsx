"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const BF_END_ISO = "2025-12-03T07:00:00Z"; // set your end time for Black Friday window
const CURRENCY = "USD";

type PriceBlock = {
  title: string;
  blurb: string;
  priceMain: string;
  priceAlt?: string;
  notes?: string[];
};

export default function PPBPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isBF = useMemo(() => {
    if (!isClient) return false;
    try {
      const now = new Date();
      const cut = new Date(BF_END_ISO);
      return now < cut;
    } catch {
      return false;
    }
  }, [isClient]);

  const pricing: PriceBlock[] = useMemo(() => {
    if (isBF) {
      return [
        {
          title: "The One Year Experience",
          blurb:
            "Get an entire year of support, biweekly Q and A and pitch sessions, and a full year to refine your brand and pitches.",
          priceMain: `$3,500 ${CURRENCY}`,
          priceAlt: "12 month payment plan available",
          notes: [
            "Biweekly Q and A calls for a full year",
            "Biweekly pitch sessions with feedback",
            "Ongoing support through changes and pivots",
          ],
        },
        {
          title: "The 16 Week Intensive",
          blurb:
            "Dive into the full program and elevate your brand in four months. Structured, focused, and outcome driven.",
          priceMain: `$2,500 ${CURRENCY}`,
          priceAlt: "Six month payment plan available",
          notes: ["Clear weekly outcomes", "Six month plan spreads the total over six payments"],
        },
      ];
    }
    return [
      {
        title: "The One Year Experience",
        blurb:
          "A full year of support with biweekly Q and A and pitch sessions to refine your message and presence.",
        priceMain: `$5,000 ${CURRENCY}`,
        notes: ["Biweekly Q and A and biweekly pitch sessions all year"],
      },
      {
        title: "The 16 Week Intensive",
        blurb:
          "Four months to implement the full framework and bring your brand to life with clarity and confidence.",
        priceMain: `$3,000 ${CURRENCY}`,
      },
    ];
  }, [isBF]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_077.jpg?alt=media&token=9a8f6303-cd9a-4e76-9302-4bbba5cacc47')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-24 max-w-5xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl">
            <h1 className="text-hero text-black mb-6">
              Powerful Personal Brand
            </h1>
            <p className="text-large text-black/90 max-w-3xl leading-relaxed mb-8 font-semibold">
              Build a clear, iconic brand presence that positions you as the authority in your industry.
            </p>
            <button 
              onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* Hero Description Section */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                Powerful Personal Brand is a sixteen week group coaching and brand overhaul program for ambitious women and nonbinary leaders who want bigger stages, bigger opportunities, and bigger visibility, but know their current brand and marketing system are not built for the level they are rising into.
              </p>
              
              <p>
                Inside PPB you build a clear, powerful brand identity, refine your message, and create a marketing system you can actually follow. You walk away with clarity, structure, and confidence to grow your income and influence, get invited onto stages and podcasts, and become the name people think of first in your industry.
              </p>
              
              <p className="font-semibold">
                If you are ready to be respected, recognized, and paid as the leader you already are, this is your next step.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
              <p className="text-editorial font-semibold">
                Black Friday pricing is live.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Black Friday Countdown */}
      {isBF && isClient && (
        <section className="bg-gray-50 py-8">
          <div className="max-w-5xl mx-auto px-6">
            <Countdown endDate={BF_END_ISO} />
          </div>
        </section>
      )}

      <main className="w-full bg-white">
        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">

        {/* Section 2: Is Powerful Personal Brand Your Next Step */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">Is Powerful Personal Brand Your Next Step</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                Powerful Personal Brand is for leaders who already have a real business… but keep noticing moments that make them think, "Why is no one talking about me yet?"
              </p>
              
              <p className="font-semibold text-black">
                Ask yourself:
              </p>
              
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>When people ask "Who do you recommend for…" are you ever the one being tagged?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Do you watch speakers or podcast guests and think "I should be up there, not them"?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Does your content stay inside your small bubble instead of reaching new audiences?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Do people still DM you asking what you actually do instead of how to work with you?</span>
                </li>
              </ul>
              
              <p className="mt-8">
                If even one of these feels uncomfortably true, your brand is not showing the world the level you operate at.
              </p>
              
              <p>
                Powerful Personal Brand gives you the clarity, identity, and message you need to finally become the person people tag first, invite quickly, and recognize instantly.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 3: What Powerful Personal Brand Actually Is */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">What Powerful Personal Brand Actually Is</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                Powerful Personal Brand is where you stop guessing about your brand and finally show up in a way people take seriously.
              </p>
              
              <p className="font-semibold text-black">
                Here is what that actually means:
              </p>
              
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">You look like a leader</h3>
                  <p>
                    Your visuals match your prices, your presence matches your results, and your online brand finally reflects the level you work at.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">You sound like a leader</h3>
                  <p>
                    You can explain what you do clearly, your content has direction, and your message lands the same way everywhere you show up.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">You show up like a leader</h3>
                  <p>
                    You post without overthinking, you pitch without spiraling, and you talk about your work in a way that makes people pay attention.
                  </p>
                </div>
              </div>
              
              <p className="font-semibold text-black mt-8">
                Inside Powerful Personal Brand you get:
              </p>
              
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Weekly clarity lessons that show you what to fix and what to build</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Coaching twice a month where your ideas get sharper</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Pitch sessions where you practice your story, your delivery, and your interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Guest trainings from leaders already doing what you want to be known for</span>
                </li>
              </ul>
              
              <p className="mt-8 font-semibold text-black">
                This is not theory.
              </p>
              
              <p>
                This is where your identity, your message, and your presence finally match the level you are meant for.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_077.jpg?alt=media&token=9a8f6303-cd9a-4e76-9302-4bbba5cacc47"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 4: What Powerful Personal Brand Helps You Do */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">What Powerful Personal Brand Helps You Do</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                You are missing opportunities you should already have.
              </p>
              
              <p>
                Not because you are not good enough.
              </p>
              
              <p>
                Because your brand is not showing people the level you actually operate at.
              </p>
              
              <p className="font-semibold text-black mt-8">
                Powerful Personal Brand helps you:
              </p>
              
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Be understood instantly</h3>
                  <p>
                    People finally get what you do without needing long explanations or clarifying questions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Stand out instead of blending in</h3>
                  <p>
                    Your message stops sounding like everyone else and becomes the one people remember, quote, and share.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Attract better opportunities</h3>
                  <p>
                    Podcast hosts, event organizers, and collaborators see you as someone worth inviting because your brand communicates authority the moment they land on your page.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Create content people actually care about</h3>
                  <p>
                    You know what to say, how to say it, and why it works. Your content stops dying inside your bubble and starts reaching the audiences you want.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Become the obvious choice</h3>
                  <p>
                    Your identity, message, visuals, and presence finally match the level of leader you are, so people stop overlooking you and start choosing you.
                  </p>
                </div>
              </div>
              
              <p className="mt-8">
                If you feel like your talent is bigger than your current visibility, this is where that gap closes.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 5: The Powerful Personal Brand Framework */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">The Powerful Personal Brand Framework</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p className="text-lg font-semibold">
                Sixteen weeks.
              </p>
              <p className="text-lg font-semibold">
                One identity shift.
              </p>
              <p className="text-lg font-semibold">
                A brand people take seriously.
              </p>
              <p className="text-lg font-semibold">
                A message people remember.
              </p>
              <p className="text-lg font-semibold mb-8">
                A presence people trust.
              </p>
              
              <p className="font-semibold text-black">
                Here is how the process actually works:
              </p>
              
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Purpose</h3>
                  <p>
                    You get clear on why you do this and where you want your brand and visibility to go so your content has direction instead of chaos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Leadership</h3>
                  <p>
                    You step into your voice, own your story, and speak with presence instead of shrinking or rambling.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Clarity</h3>
                  <p>
                    You refine your brand, fix the invisible cracks blocking your authority, and learn exactly how your audience thinks and decides.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Visibility</h3>
                  <p>
                    You build a strategy you can actually follow. No chasing trends. No guessing. Just a repeatable way to show up consistently.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Story and pitch</h3>
                  <p>
                    You turn your personal story into a strategic asset and learn how to pitch yourself for podcasts, stages, collaborations, and partnerships.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Execution</h3>
                  <p>
                    You build the assets, the delivery, and the confidence you need to start showing up like someone people want to book, hire, and feature.
                  </p>
                </div>
              </div>
              
              <p className="mt-8">
                By the end of sixteen weeks you know who you are, how to talk about your work, and how to be seen as the leader you have always been.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 6: What You Get Inside Powerful Personal Brand */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">What You Get Inside Powerful Personal Brand</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                Everything inside Powerful Personal Brand is built to help you get clear, be seen, and communicate like the leader you already are.
              </p>
              
              <p className="font-semibold text-black">
                Here is what you receive:
              </p>

              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Weekly clarity trainings</h3>
                  <p>
                    Short, focused lessons that show you exactly what to fix and what to build so your brand finally makes sense to the people you want to reach.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Biweekly coaching calls</h3>
                  <p>
                    This is where your ideas get sharper. You bring your message, your content, your positioning, and you get direct feedback so you stop second guessing yourself.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Biweekly pitch sessions</h3>
                  <p>
                    You practice your story, your delivery, your offers, and your interviews in a room designed to make you sound confident, clear, and prepared when real opportunities come.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Guest expert workshops</h3>
                  <p>
                    Sessions from leaders in visibility, storytelling, messaging, media, and brand voice so you learn from people already doing what you want to be known for.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">A complete brand and visibility system</h3>
                  <p>
                    You leave with a clear identity, a refined message, a sustainable visibility plan, and the confidence to show up in a way that stands out instead of blending in.
                  </p>
                </div>
              </div>
              
              <p className="mt-8">
                Powerful Personal Brand gives you the skills, the structure, and the support to finally rise into the level of recognition your work deserves.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_077.jpg?alt=media&token=9a8f6303-cd9a-4e76-9302-4bbba5cacc47"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 8: Why Your Current Branding Is Not Working */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">Why Your Current Branding Is Not Working</h2>
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p className="font-semibold text-black">
                Your brand does not feel like the level you operate at.
              </p>
              
              <p className="font-semibold text-black mb-8">
                And people can feel that.
              </p>
              
              <p className="font-semibold text-black">
                You know your branding is off when:
              </p>
              
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Your content feels scattered and you never know what to say</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Your online presence still looks like an older version of you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Nothing you post feels memorable and people scroll past you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>You feel invisible even though you know you are qualified</span>
                </li>
              </ul>
              
              <p className="font-semibold text-black mt-8">
                Here is the real reason this keeps happening:
              </p>
              
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Most branding only makes you look good, not understood.</h3>
                  <p>
                    Pretty visuals cannot fix unclear messaging or flat presence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Most visibility advice teaches posting, not leadership.</h3>
                  <p>
                    You want stages and podcasts, not just more reels.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Most programs give information, not practice.</h3>
                  <p>
                    Without feedback and repetition, you do not sound like the person people want to book.
                  </p>
                </div>
              </div>
              
              <p className="mt-8">
                This is why you are getting overlooked.
              </p>
              
              <p>
                Not because you are not good enough, but because your brand is not showing the world who you actually are.
              </p>
              
              <p className="font-semibold text-black mt-8">
                Powerful Personal Brand fixes the disconnect so people finally see you.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Proof That This Work Creates Real Leaders */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">Proof That This Work Creates Real Leaders</h2>
          <div className="space-y-8 text-editorial max-w-3xl mx-auto">
              <p>
                These are not lucky breaks.
              </p>
              <p>
                These are the results of leaders who got clear on their brand, refined their message, and showed up with a presence people trust.
              </p>

              <div className="text-left space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-6">Real Leader Wins</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">How J Went From Nervous To Sold Out</h4>
                      <p>
                        J wanted to host live events but had no idea how to talk about her vision. Her message felt shaky and her confidence was low. After she clarified her brand and transformation, she sold out her second event with ease. She went from hesitant to in demand because people finally understood what she stood for and why it mattered.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">How T Became A Leader People Quote</h4>
                      <p>
                        T was an experienced event planner with flat, forgettable content. She wanted to step into speaking and thought leadership but did not know how to position herself as a voice worth listening to. After using this framework, her content was shared by the biggest names in her industry. She was invited to speak at conferences and landed the largest client of her entire career.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">How One Message Shift Created A 5k Month</h4>
                      <p>
                        A client applied one piece of advice and shared,
                      </p>
                      <p className="italic ml-4">
                        "There is one day left in this month and I am about to hit 5k after having no recurring income for months."
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">How Visibility Turned Into Real Invitations</h4>
                      <p>
                        Another client said,
                      </p>
                      <p className="italic ml-4">
                        "Just got a conference for 2026 because of LinkedIn posts."
                      </p>
                      <p className="mt-3">
                        This is what happens when your brand and message actually position you as the authority.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-6">Real Momentum</h3>
                  <div className="space-y-4">
                    <p className="italic">
                      "My views went from 200 to 7k and seventy percent were people who do not follow me. I went from 37 to 118 followers who are not just people I already know."
                    </p>
                    <p className="italic">
                      "Most views on a reel on this account ever from day one's challenge task."
                    </p>
                    <p className="italic">
                      "Fifty five signed up for my webinar. Twenty nine attended. Six bought my course tonight."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-6">Real Confidence and Clarity</h3>
                  <div className="space-y-4">
                    <p className="italic">
                      "My burnout last year destroyed my business and my confidence. I am excited because I know this is going to kick my ass into gear."
                    </p>
                    <p className="italic">
                      "Thank you for this teaching. It was the step by step breakdown I have been craving. I had answers for every question without overthinking."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-6">Real Brand Transformation</h3>
                  <p className="italic">
                    "Stephanie helps us establish our branding goals, generates innovative ways to achieve them, and pushes me past my comfort zone so we actually get the results we want."
                  </p>
                </div>
              </div>

              <p className="mt-8 font-semibold text-black">
                These results are not random.
              </p>
              <p className="font-semibold">
                They are the natural outcome of clear messaging, aligned identity, and strategic visibility.
              </p>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Section 10: Your Questions Answered */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-8">Your Questions Answered</h2>
          <div className="space-y-8 text-editorial max-w-3xl mx-auto">
              <div className="text-left space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Will this actually help me get real opportunities like stages, podcasts, and partnerships</h3>
                  <p className="mb-4">
                    Yes. This is one of the core outcomes of Powerful Personal Brand.
                  </p>
                  <p className="mb-4">
                    You learn how to pitch yourself clearly, speak about your work confidently, and show up with a message that positions you as the authority. This is not content tips. This is visibility training for real rooms and real invitations.
                  </p>
                  <p>
                    Clients have booked conferences, landed podcast interviews, been shared by industry leaders, and secured partnerships because their brand finally communicated their level.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">I have invested before and did not get results</h3>
                  <p className="mb-4 font-semibold text-black">
                    This is different.
                  </p>
                  <p className="mb-4">
                    Most programs give you information.
                  </p>
                  <p className="mb-4">
                    Powerful Personal Brand gives you:
                  </p>
                  <ul className="space-y-3 ml-4 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>repetition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>message refinement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>pitch training</span>
                    </li>
                  </ul>
                  <p>
                    This is the missing piece that makes everything finally work. You are not learning theory. You are building skills. And you get guidance every step of the way so you do not get stuck or fall off.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Will this help me make more money</h3>
                  <p className="mb-4">
                    Yes, because clarity creates conversions.
                  </p>
                  <p className="mb-4">
                    When your message is clear and your presence is confident, people trust you faster and buy from you more easily. Clients have increased sales, booked their largest clients ever, filled events, and hit their best months because their brand finally matched the level of their work.
                  </p>
                  <p>
                    The goal of this program is to help you become known, respected, and chosen. That naturally increases income.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Why would I sign up for the full year instead of just the sixteen weeks</h3>
                  <p className="mb-4">
                    The sixteen week program gives you the transformation and the system.
                  </p>
                  <p className="mb-4 font-semibold text-black">
                    The year gives you the mastery.
                  </p>
                  <p className="mb-4">
                    Visibility, leadership, and brand growth require consistency, support, and refinement over time. When you stay for the year you:
                  </p>
                  <ul className="space-y-3 ml-4 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>continue implementing your visibility strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>get ongoing feedback as you rise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>sharpen your speaking and storytelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>refine your message as your brand grows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>keep momentum instead of losing it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>stay grounded and accountable as you step into bigger rooms</span>
                    </li>
                  </ul>
                  <p>
                    Sixteen weeks gives you the foundation.
                  </p>
                  <p className="font-semibold text-black">
                    Twelve months turns you into a leader with staying power.
                  </p>
                </div>
              </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt="Stephanie Rose"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-display text-black mb-8">Your Next Level Starts When You Do</h2>
                <div className="space-y-6 text-editorial max-w-3xl mx-auto">
                  <p>
                    You already know you are meant for more.
                  </p>
                  <p>
                    You already feel the pull toward bigger rooms and bigger recognition.
                  </p>
                  <p>
                    Powerful Personal Brand gives you the clarity and structure to step into that level with confidence.
                  </p>
                  <p className="font-semibold text-black">
                    If you are ready to lead, this is your moment to say yes.
                  </p>
                  <p className="font-semibold">
                    Join now while Black Friday pricing is live.
                  </p>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section id="investment" className="section-padding bg-gray-50">
          <div className="container-elegant">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-display text-black mb-8">Your Investment</h2>
              <p className="text-large font-semibold mb-4 text-black">
                Powerful Personal Brand begins January 2026.
              </p>
              <p className="text-editorial mb-6">
                This is your moment to step into a new level of clarity, visibility, and authority. The level you are stepping into requires support, structure, and a brand identity that actually communicates your expertise.
              </p>
              <p className="font-semibold text-black mb-8">
                Here are your options.
              </p>

              <div className="text-left space-y-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">The Sixteen Week Intensive</h3>
                  <p className="mb-6 text-editorial">
                    A complete brand and visibility overhaul with the weekly curriculum, biweekly coaching, pitch sessions, and guest trainings.
                  </p>
                  <div className="space-y-2">
                    <p className="text-editorial">
                      Regular price: <strong className="text-black">3500 USD</strong>
                    </p>
                    <p className="text-editorial">
                      Black Friday price: <strong className="text-black">2500 USD</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">The Full Year Experience</h3>
                  <p className="mb-6 text-editorial">
                    A full year of implementation, support, feedback, and refinement so you rise into consistent visibility and stay there.
                  </p>
                  <div className="space-y-2">
                    <p className="text-editorial">
                      Regular price: <strong className="text-black">5000 USD</strong>
                    </p>
                    <p className="text-editorial">
                      Black Friday price: <strong className="text-black">3500 USD</strong>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-editorial mb-4">
                The sixteen week program gives you the full transformation.
              </p>
              <p className="font-semibold text-black mb-8">
                The year gives you the space to master it and rise into real authority.
              </p>

              <Script
                src="https://js.stripe.com/v3/pricing-table.js"
                strategy="afterInteractive"
              />
              <div className="max-w-2xl mx-auto">
                <stripe-pricing-table
                  pricing-table-id="prctbl_1SQB3eCcsY3WjV3QGmc6dPm2"
                  publishable-key="pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

