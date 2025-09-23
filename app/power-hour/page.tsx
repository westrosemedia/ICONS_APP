"use client";

import { useState } from "react";

export default function PowerHourPage() {
  const [submitting, setSubmitting] = useState(false);

  const handlePayment = () => {
    setSubmitting(true);
    // Redirect to Stripe payment link
    window.location.href = "https://buy.stripe.com/cNifZggRqcXr4vpfZz87K0J";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 ONLY 5 SPOTS THIS MONTH
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            POWER HOUR
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-light">
            Transform Your Brand in 60 Minutes
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            For ambitious entrepreneurs scaling past six figures who want their online presence to finally match their success level.
          </p>
          
          {/* Price Badge */}
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-6 rounded-3xl text-3xl font-bold mb-4 shadow-2xl">
            $212 USD
          </div>
          
          <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-2xl p-4 mb-8 max-w-md mx-auto">
            <p className="text-yellow-400 font-semibold">
              ⚡ Early Bird Pricing - Increases to $297 Soon
            </p>
          </div>
          
          <p className="text-sm text-gray-500 mb-12">
            One-time investment • Instant access • No recurring fees
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You&apos;ve Built Success, But Your Brand Doesn&apos;t Show It
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you&apos;re making $80K-$500K but feel invisible online, you&apos;re not alone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">😰</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Feeling Invisible</h3>
            <p className="text-gray-300">Your content doesn&apos;t reflect the expert you&apos;ve become</p>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🤔</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Generic Content</h3>
            <p className="text-gray-300">Your posts look like everyone else&apos;s - not premium</p>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Not Converting</h3>
            <p className="text-gray-300">Content isn&apos;t attracting the high-paying clients you deserve</p>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Time Wasted</h3>
            <p className="text-gray-300">Hours creating content that doesn&apos;t build your authority</p>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">😤</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Flat Presence</h3>
            <p className="text-gray-300">Your visuals don&apos;t match your brilliance or success level</p>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3 text-red-400">Wrong Clients</h3>
            <p className="text-gray-300">Attracting price-shoppers instead of premium buyers</p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What If I Told You...
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You could finally show up as the premium expert you are - in just 60 minutes?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Positioning</h3>
                  <p className="text-gray-300">Finally align your brand with your success level</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High-Converting Content</h3>
                  <p className="text-gray-300">Content that attracts premium buyers, not price-shoppers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Roadmap</h3>
                  <p className="text-gray-300">Clear next steps to elevate your brand presence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Authority Confidence</h3>
                  <p className="text-gray-300">Show up as the expert you&apos;ve become</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">My Signature Framework</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">AUDIT</h4>
                  <p className="text-sm text-gray-400">Identify what&apos;s not working in your brand presence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">ALIGN</h4>
                  <p className="text-sm text-gray-400">Clarify your message and premium positioning</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">AMPLIFY</h4>
                  <p className="text-sm text-gray-400">Map your next-level strategy and quick wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You&apos;ll Walk Away With
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Brand Clarity</h3>
            <p className="text-gray-300">Know exactly who you are, what you do, and why people should choose you</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Content Strategy</h3>
            <p className="text-gray-300">A clear plan for what to post, when to post, and how to make it convert</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Revenue Focus</h3>
            <p className="text-gray-300">Every piece of content works toward growing your business and attracting ideal clients</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Immediate Actions</h3>
            <p className="text-gray-300">Specific steps you can take within 24 hours to start seeing results</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Session Recording</h3>
            <p className="text-gray-300">Full recording of our call so you can reference our strategy anytime</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Confidence Boost</h3>
            <p className="text-gray-300">The clarity and confidence to show up as the leader you are</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why I&apos;m Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            15 years as an entrepreneur. Deep understanding of high-achieving coaches and consultants.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Strategic + Creative</h3>
            <p className="text-gray-300 mb-4">
              Most strategists talk theory. Most photographers just take pictures. I&apos;m the rare blend who actually does both.
            </p>
            <p className="text-gray-300">
              I see the full ecosystem of your brand - from message to visuals to conversion.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Proven Results</h3>
            <p className="text-gray-300 mb-4">
              Clients have gone from underbooked to sold out. Content that builds trust fast and allows for price increases.
            </p>
            <p className="text-gray-300">
              Helped women step into their next-level presence and attract aligned, premium buyers.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">15+</div>
            <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
            <p className="text-gray-400">As an entrepreneur understanding the journey</p>
          </div>
          
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">Multi-6</div>
            <h3 className="text-xl font-semibold mb-2">Figure Clients</h3>
            <p className="text-gray-400">Worked with seven-figure coaches and consultants</p>
          </div>
          
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">100%</div>
            <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
            <p className="text-gray-400">Chosen by industry leaders in Canada</p>
          </div>
        </div>
      </div>

      {/* Urgency Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ⚠️ Limited Availability
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I only take on 5 Power Hour sessions each month to ensure each client gets my full attention and expertise.
          </p>
          <div className="bg-red-600/20 border border-red-500/50 rounded-2xl p-6 inline-block mb-6">
            <p className="text-lg font-semibold text-red-400">
              🕐 Only 5 spots available this month
            </p>
          </div>
          <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-2xl p-4 inline-block">
            <p className="text-yellow-400 font-semibold">
              ⏰ Price increases to $297 soon - lock in $212 today
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Stop struggling with inconsistent branding. Get the clarity and strategy you need to show up as the expert you are.
        </p>
        
        <div className="space-y-6">
          {/* Main CTA */}
          <button
            onClick={handlePayment}
            disabled={submitting}
            className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-16 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
          >
            {submitting ? "Redirecting to Payment..." : "Secure Your Power Hour - $212"}
          </button>
          
          {/* Guarantee */}
          <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-400 mb-2">✅ 100% Satisfaction Guarantee</h3>
            <p className="text-gray-300">
              If you don&apos;t walk away with actionable insights that transform your brand, I&apos;ll refund your investment. No questions asked.
            </p>
          </div>
          
          {/* Alternative Calendar Link */}
          <div className="pt-6">
            <p className="text-gray-400 mb-4">Prefer to book directly?</p>
            <a
              href="https://cal.com/stephanie-westrosemedia/power-hour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              📅 Book on Calendar (Payment Required)
            </a>
          </div>
          
          {/* Bundle Option */}
          <div className="pt-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">💎 Special Add-On</h3>
              <p className="text-gray-300 mb-3">
                Power Hour + Follow-Up Call: $150 additional
              </p>
              <p className="text-sm text-gray-400">
                Perfect for implementation support and deeper strategy development
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          Secure payment via Stripe • 60-minute Zoom call • Recording included • Satisfaction guaranteed
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">West Rose Media</h3>
            <p className="text-gray-400">Strategic Brand Transformation</p>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} West Rose Media • Power Hour Strategy Sessions
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Questions? Email stephanie@westrosemedia.com
          </p>
        </div>
      </div>
    </div>
  );
}