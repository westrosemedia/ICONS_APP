"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import PPBStructuredData from "@/components/PPBStructuredData";

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';

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

  const pricing: PriceBlock[] = useMemo(() => {
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
        priceMain: `$3,500 ${CURRENCY}`,
      },
    ];
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_077.jpg?alt=media&token=9a8f6303-cd9a-4e76-9302-4bbba5cacc47"
          alt="Stephanie Rose"
          fill
          className="object-cover brightness-110"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-24 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl max-w-4xl w-full mx-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero text-black mb-6 font-bold">
              Powerful Personal Brand
            </h1>
            <p className="text-lg sm:text-xl md:text-large text-black/90 max-w-3xl mx-auto leading-relaxed mb-8 font-semibold">
              You're running a successful business, yet your brand still feels rushed and inconsistent. It is time to transform it into a clear, high level identity that attracts the right clients and makes sales easy.
            </p>
            <button 
              onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block rounded-xl px-6 sm:px-8 py-3 sm:py-4 bg-black text-white no-underline text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
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
                Inside Powerful Personal Brand you build a clear, powerful brand identity, refine your message, and create a marketing system you can actually follow. You walk away with clarity, structure, and confidence to grow your income and influence, get invited onto stages and podcasts, and become the name people think of first in your industry.
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
            </div>
          </motion.div>
        </div>
      </section>


      <main className="w-full bg-white">
        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">

        {/* Section: Why Your Current Branding Is Not Working */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
        </motion.div>

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
              
              <p>
                It feels like watching inquiries come in because your brand finally communicates the level you operate at instead of making you look like you are still figuring it out.
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

        {/* Image Break 1 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
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
              
              <ul className="space-y-6 text-left max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-black mb-2">Weekly training videos that teach you how to fix the gaps in your brand, refine your messaging, and build a visibility system that increases trust, authority, and sales.</p>
                    <p>This helps you stop guessing and finally create content that converts because it is built on strategy, not vibes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-black mb-2">Group coaching calls twice a month where Stephanie answers your questions directly and gives feedback on your specific brand so your positioning gets stronger and your content becomes more strategic.</p>
                    <p>This helps you remove blind spots fast, tighten your message, and create a brand people understand and want to buy from.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-black mb-2">Pitch sessions where you practice your story, your delivery, and your interviews so you can confidently land podcasts, stages, and opportunities that expand your reach and credibility.</p>
                    <p>This helps you get noticed by bigger audiences, increase your authority, and attract clients who trust you before they ever speak to you.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-black mb-2">Guest trainings from leaders already doing what you want to be known for so you learn real strategies that accelerate your growth, visibility, and brand recognition.</p>
                    <p>This helps you shorten your learning curve and adopt proven methods that move your brand forward instead of spinning your wheels.</p>
                  </div>
                </li>
              </ul>
              
              <p className="mt-8 font-semibold text-black">
                This is not theory.
              </p>
              
              <p>
                This is where your identity, your message, and your presence finally match your true level, and people become obsessed with your kick ass brand and fight for a spot to work with you or have you on their stage.
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

        {/* Image Break 2 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4830.jpg?alt=media&token=82f77039-1b7d-4cf8-886f-89591e213ad2"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40" />
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
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break 3 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
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
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break 4 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/40" />
        </section>

        {/* Image Break 6 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6981.jpg?alt=media&token=9d18b961-5a37-4d16-9056-598f854480eb"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/40" />
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
          <div className="space-y-6 text-editorial max-w-3xl mx-auto">
              <p>
                These are not random wins.
              </p>
              
              <p className="mb-8">
                These are the kinds of results that happen when your brand finally matches your level.
              </p>

              <div className="text-left space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">How J went from overlooked to sold out</h3>
                  <p>
                    J wanted to host live events but could not explain her transformation without rambling.
                  </p>
                  <p>
                    Inside Powerful Personal Brand she learned how to talk about her work with clarity and confidence.
                  </p>
                  <p>
                    Her second event sold out because people finally understood what she offered and why it mattered.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">How T became the person people quote</h3>
                  <p>
                    T was an experienced event planner with content no one remembered.
                  </p>
                  <p>
                    After refining her message and story inside the program, her posts were shared by major industry leaders.
                  </p>
                  <p>
                    She booked speaking spots and landed the largest client of her career because her voice finally sounded like someone worth listening to.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">How one message shift created a five thousand dollar month</h3>
                  <p>
                    A client applied a single piece of feedback about her transformation story.
                  </p>
                  <p>
                    She posted confidently for the first time in months.
                  </p>
                  <p>
                    Within twenty four hours she crossed five thousand dollars in sales after a long stretch of nothing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">How visibility turned into real invitations</h3>
                  <p>
                    Another client gained traction on LinkedIn after clarifying her voice and positioning.
                  </p>
                  <p>
                    Her posts attracted organizers outside her circle.
                  </p>
                  <p>
                    She was booked for a 2026 conference without even pitching.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">How the momentum compounds</h3>
                  <p className="mb-4">
                    Clients report
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>views jumping from two hundred to seven thousand</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>new audiences discovering them daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>bigger rooms paying attention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>confidence returning after burnout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>finally sounding like the expert they are</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                These shifts are not magic.
              </p>
              
              <p>
                They happen when your identity, message, and presence align.
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

        {/* Image Break 7 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/30 via-transparent to-black/40" />
        </section>

        {/* Section 10: Your Questions Answered */}
        <section className="section-padding bg-gray-50">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display text-black mb-12">Your Questions Answered</h2>
          <div className="space-y-10 text-editorial max-w-3xl mx-auto">
              <div className="text-left space-y-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">Will this actually help me get real opportunities like stages, podcasts, and partnerships?</h3>
                  <p>
                    Yes. Powerful Personal Brand teaches you how to pitch yourself, tell your story clearly, speak without rambling, and show up with the presence people want on their platforms. Clients book conferences, interviews, and collaborations because their brand finally communicates their level.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">I have invested before and did not get results. How is this different?</h3>
                  <p>
                    Most programs just give information. Powerful Personal Brand gives you information plus coaching, feedback, practice, repetition, message refinement, and pitch development. You do not sit and learn. You build skills and get support as you rise.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">Will this help me make more money?</h3>
                  <p>
                    Yes. Clear messaging and confident presence increase conversions. When people understand you, they trust you faster. Clients inside this program have filled events, landed their biggest clients ever, and hit their strongest months because their brand finally matched their expertise.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">Why choose the full year instead of sixteen weeks?</h3>
                  <p className="mb-4">
                    Sixteen weeks gives you the transformation.
                  </p>
                  <p className="mb-4 font-semibold text-black">
                    The full year gives you mastery.
                  </p>
                  <p>
                    If you want long term support, consistent refinement, stronger delivery, and a visibility strategy that keeps growing with you, the year is where you build staying power.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">How much access do I get to Stephanie inside Powerful Personal Brand?</h3>
                  <p className="mb-4">
                    You get two group coaching calls every month where Stephanie answers your questions directly and gives feedback on your specific brand, messaging, and visibility strategy. These calls are designed to help you refine your ideas, fix blind spots fast, and get clarity on what will actually move your business forward.
                  </p>
                  <p>
                    If you want more hands on support, deeper strategy, or private coaching, you can inquire about the mastermind or one to one coaching. Those containers include more access, more personalized work, and higher level strategy tailored to your business.
                  </p>
                </div>
              </div>
            </div>
        </motion.div>

            </div>
          </div>
        </section>

        {/* Image Break 8 */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c"
            alt="Stephanie Rose"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/40" />
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
              <div className="space-y-6 text-editorial max-w-3xl mx-auto mb-12">
                <p>
                  Powerful Personal Brand begins in January 2026.
                </p>
                
                <p>
                  This is your moment to step into the level of clarity, visibility, and recognition you have been working toward.
                </p>
                
                <p className="font-semibold text-black">
                  You have two options.
                </p>
              </div>

              <div className="text-left space-y-8 mb-12 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-black mb-6">The 16 Week Intensive</h3>
                  <p className="mb-4 text-editorial">
                    A complete brand and visibility overhaul including
                  </p>
                  <ul className="space-y-3 mb-6 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>the full weekly curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>biweekly coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>biweekly pitch sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>guest expert trainings</span>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <p className="text-editorial">
                      Price: <strong className="text-black">$3,500 USD</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-black mb-6">The Full Year Experience</h3>
                  <p className="mb-6 text-editorial">
                    A full year of implementation, practice, support, and refinement so you rise consistently instead of in short bursts.
                  </p>
                  <div className="space-y-2">
                    <p className="text-editorial">
                      Price: <strong className="text-black">$5,000 USD</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-editorial max-w-3xl mx-auto mb-8">
                <p>
                  The sixteen week path gives you the transformation.
                </p>
                <p>
                  The full year gives you the mastery and staying power.
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
      
      {/* Microsoft Clarity Tracking */}
      <Script id="clarity-ppb" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "u7rqk5v9bp");
        `}
      </Script>
      
      {/* Structured Data for SEO */}
      <PPBStructuredData />
    </div>
  );
}

