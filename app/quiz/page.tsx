"use client";
import React, { useState } from "react";
import Button from "../../components/Button";

const questions = [
  {
    q: "Which of these best describes your current content routine?",
    options: [
      { a: "I create content consistently every week", value: "A" },
      { a: "I batch and post content semi-regularly", value: "B" },
      { a: "I took a break and I'm easing back in", value: "C" },
      { a: "I'm just starting to show up for my brand", value: "D" },
    ],
  },
  {
    q: "How much time freedom do you want back every week?",
    options: [
      { a: "Just a few hours. I still enjoy doing some content myself", value: "A" },
      { a: "5 to 10 hours. I'm tired of spending nights and weekends on it", value: "B" },
      { a: "10 plus hours. I want to focus on growth, not content chaos", value: "C" },
      { a: "I need to be fully present at my event while someone else handles the content", value: "D" },
    ],
  },
  {
    q: "What do you want your content to do for your brand?",
    options: [
      { a: "Build social proof. I already have momentum", value: "A" },
      { a: "Build more trust so selling gets easier", value: "B" },
      { a: "Position me as an industry leader people remember", value: "C" },
      { a: "Sell out my mastermind and build a waitlist for the next one", value: "D" },
    ],
  },
  {
    q: "What's been your experience with content support in the past?",
    options: [
      { a: "I've DIY'd it or used a family photographer and it didn't hit", value: "A" },
      { a: "I've hired help but they didn't really get my brand", value: "B" },
      { a: "I've had support and I'm ready to hand the whole thing off", value: "C" },
      { a: "My event was amazing but no one saw it because there was no content", value: "D" },
    ],
  },
  {
    q: "What kind of support system do you have right now?",
    options: [
      { a: "I mostly do it alone and I'd love a space to be seen and supported", value: "A" },
      { a: "I've got some biz friends but I want a community that really gets it", value: "B" },
      { a: "I've joined programs but I want something long-term and grounded", value: "C" },
      { a: "I already have a solid network and just need the right content partner", value: "D" },
    ],
  },
];

const packages = {
  empire: {
    name: "The ICON Package",
    price: "$5,000/month (GST included)",
    commitment: "4-month minimum",
    summary: "Full content creation, strategy, execution, and ICON Society membership. For leaders ready to dominate their industry and scale fast.",
    deliverables: [
      "Monthly strategy intensives",
      "Monthly shoot (photo + video)",
      "Full content planning and execution",
      "Caption writing + post scheduling",
      "Brand voice and storytelling support",
      "Strategic 90-day review",
      "Slack access",
      "Delivery via app (1 week photos / 10 days video)"
    ],
    bonuses: [
      "12-month commitment: 1 bonus shoot",
      "12-month pay-in-full: 1 free month"
    ],
    includesIconSociety: true,
    cta: "Book The ICON Package",
    formType: "empire"
  },
  spotlight: {
    name: "The Spotlight",
    price: "$1,200 CAD (GST included)",
    summary: "90-minute shoot with professional editing and strategic content planning.",
    deliverables: [
      "90-minute shoot",
      "20 edited photos",
      "3 vertical videos",
      "Pre-shoot questionnaire",
      "Photos: 1 week | Videos: 10 days"
    ],
    upsells: [
      "Additional photos: $35 each",
      "Extra videos: $100 each",
      "Rush delivery (3 business days): $250"
    ],
    includesIconSociety: false,
    cta: "Book The Spotlight",
    formType: "spotlight"
  },
  lite: {
    name: "WRM Lite",
    price: "$2,400/month (GST included)",
    summary: "Consistent content with strategic support. Perfect for growing brands.",
    deliverables: [
      "2 posts/week (caption writing + scheduling)",
      "Monthly 30-minute strategy check-in",
      "Brand-aligned photo + video content",
      "1 shoot every other month (6 total per year)"
    ],
    includesIconSociety: false,
    cta: "Book WRM Lite",
    formType: "lite"
  },
  immersion: {
    name: "Event / Immersion Package",
    price: "$6,000 (GST included) for 2 days",
    summary: "Stunning, business-changing content for your event and clients.",
    deliverables: [
      "Content for the event and organizer",
      "Group footage, BTS, cinematic reels",
      "Photo + video delivery via the app",
      "2 shooters included for groups over 4",
      "Travel quoted per city"
    ],
    participantAddon: "$1,000 per participant",
    includesIconSociety: false,
    cta: "Book Event Package",
    formType: "immersion"
  }
};

function getResult(answers: string[]) {
  // Initialize score tracking for each package
  const scores: Record<string, number> = {
    empire: 0,
    immersion: 0,
    lite: 0,
    spotlight: 0
  };
  
  // Track bonus question for ICON Society recommendation
  let suggestIconSociety = false;
  
  // Score each answer based on the final approved mapping
  answers.forEach((answer, index) => {
    switch(index) {
      case 0: // Q1 - "Which of these best describes your current content routine?"
        if (answer === 'A' || answer === 'B') {
          scores.empire += 1; // ICON
          scores.immersion += 1; // Event
        } else if (answer === 'C' || answer === 'D') {
          scores.lite += 1; // Lite
          scores.spotlight += 1; // Spotlight
        }
        break;
        
              case 1: // Q2 - "How much time freedom do you want back every week?"
        if (answer === 'A') scores.spotlight += 1; // Spotlight
        else if (answer === 'B') scores.lite += 1; // Lite
        else if (answer === 'C') scores.empire += 1; // ICON
        else if (answer === 'D') scores.immersion += 1; // Event
        break;
        
              case 2: // Q3 - "What do you want your content to do for your brand?"
        if (answer === 'A') scores.spotlight += 1; // Spotlight
        else if (answer === 'B') scores.lite += 1; // Lite
        else if (answer === 'C') scores.empire += 1; // ICON
        else if (answer === 'D') scores.immersion += 1; // Event
        break;
        
              case 3: // Q4 - "What's been your experience with content support?"
        if (answer === 'A') scores.spotlight += 1; // Spotlight
        else if (answer === 'B') scores.lite += 1; // Lite
        else if (answer === 'C') scores.empire += 1; // ICON
        else if (answer === 'D') scores.immersion += 1; // Event
        break;
        
              case 4: // Q5 - "What kind of support system do you have?" (Bonus)
        if (answer === 'A' || answer === 'B' || answer === 'C') {
          suggestIconSociety = true;
        }
        break;
    }
  });
  
  // Find the highest scoring package and runner-up
  let bestMatch = 'spotlight'; // default
  let highestScore = 0;
  let runnerUp = null;
  let secondHighestScore = 0;
  
  // Find the highest score
  for (const [pkgName, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestMatch = pkgName;
    }
  }
  
  // Find the second highest score (runner-up)
  for (const [pkgName, score] of Object.entries(scores)) {
    if (score < highestScore && score > secondHighestScore) {
      secondHighestScore = score;
      runnerUp = pkgName;
    }
  }
  
  // Check if runner-up is only 1 point behind
  if (runnerUp && (highestScore - secondHighestScore) <= 1) {
    // Runner-up is close enough to recommend
  } else {
    runnerUp = null; // Only show runner-up if it's close
  }
  
  // Check for ties (packages with the same score as the best match)
  const tiedPackages = Object.entries(scores)
    .filter(([pkgName, score]) => score === highestScore)
    .map(([pkgName]) => pkgName);
  
  // If there's a tie, prioritize by package hierarchy
  if (tiedPackages.length > 1) {
    const packageHierarchy = ["empire", "immersion", "lite", "spotlight"];
    for (const pkg of packageHierarchy) {
      if (tiedPackages.includes(pkg)) {
        bestMatch = pkg;
        break;
      }
    }
    // If tied, the other tied package becomes the runner-up
    runnerUp = tiedPackages.find(p => p !== bestMatch) || null;
  }
  
  // Store the result and ICON Society recommendation
  return {
    primary: bestMatch,
    secondary: runnerUp,
    suggestIconSociety
  };
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{primary: string, secondary: string | null, suggestIconSociety: boolean} | null>(null);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => [...prev, value]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const res = getResult([...answers, value]);
      setResult(res);
      setShowResult(true);
    }
  };

  if (showResult && result) {
    const pkg = packages[result.primary as keyof typeof packages];
    const runnerUp = result.secondary ? packages[result.secondary as keyof typeof packages] : null;
    
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-none">
              Your Power Move
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/80 mb-8 max-w-2xl mx-auto">
              Based on your answers, here's the package that will transform your brand and accelerate your success.
            </p>
            <div className="text-3xl md:text-4xl font-bold text-white mb-6">
              {pkg.name}
            </div>
            {runnerUp && (
              <div className="text-lg md:text-xl font-body text-white/80 mb-8 max-w-3xl mx-auto">
                <div className="text-2xl font-heading font-bold text-white mb-4">
                  ✨ You're right on the edge of two powerful options.
                </div>
                <p className="text-lg font-body text-white/80 mb-4">
                  You're landing between <span className="font-bold text-white">{pkg.name}</span> and <span className="font-bold text-white">{runnerUp.name}</span>, and honestly? Both are iconic in their own way.
                </p>
                <p className="text-lg font-body text-white/80 mb-4">
                  If you're craving more support, strategy, and long-term partnership - lean toward <span className="font-bold text-white">{pkg.name}</span>.
                </p>
                <p className="text-lg font-body text-white/80 mb-4">
                  If you want more flexibility, a lighter lift, or a one-time refresh - <span className="font-bold text-white">{runnerUp.name}</span> might be the perfect fit right now.
                </p>
                <p className="text-lg font-body text-white/80 font-bold">
                  Trust your gut. You can't go wrong.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Featured Package Section */}
        <div className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media"
                  alt="Featured package image"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                  {pkg.name}
                </h2>
                <div className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {pkg.price}
                </div>
                {(pkg as any).commitment && (
                  <div className="text-lg font-body text-white/60 mb-6">
                    {(pkg as any).commitment}
                  </div>
                )}
                <p className="text-xl font-body text-white/80 mb-8 leading-relaxed">
                  {pkg.summary}
                </p>
                
                {pkg.deliverables && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {pkg.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-3 text-xl">•</span>
                          <span className="text-lg font-body text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(pkg as any).bonuses && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">Bonuses</h3>
                    <ul className="space-y-3">
                      {(pkg as any).bonuses.map((bonus: any, index: any) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-3 text-xl">🎁</span>
                          <span className="text-lg font-body text-white/80">{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-4">
                  <Button 
                    color="accent" 
                    className="w-full md:w-auto text-xl font-bold py-4 px-8" 
                    onClick={() => window.location.href = `/quiz/book?package=${pkg.formType}`}
                  >
                    Icons Don't Hesitate - Book Now
                  </Button>
                  <Button 
                    color="white" 
                    className="w-full md:w-auto text-xl font-bold py-4 px-8" 
                    onClick={() => window.open('mailto:hello@westrosemedia.com?subject=ICONS%20Quiz%20Call%20Request')}
                  >
                    Got questions? Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Packages Section */}
        <div className="py-24 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 text-center">All Packages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(packages).map(([key, pkgItem], index) => (
                <div key={key} className={`relative overflow-hidden rounded-lg border ${key === result.primary ? 'border-white bg-white/10' : 'border-white/20 bg-black/20'}`}>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR${3352 + (index * 200)}.jpg?alt=media`}
                    alt={`${pkgItem.name} image`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-2xl font-heading font-bold text-white mb-4">{pkgItem.name}</h4>
                    <div className="text-xl font-bold text-white mb-4">{pkgItem.price}</div>
                    <p className="text-base font-body text-white/70 mb-6">{pkgItem.summary}</p>
                    {key !== result.primary && (
                      <Button 
                        color="white" 
                        className="w-full text-lg font-bold py-3" 
                        onClick={() => window.location.href = `/quiz/book?package=${pkgItem.formType}`}
                      >
                        {pkgItem.cta}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Spaces are limited. Packages book out quickly - reserve your spot now.
            </h2>
            <div className="text-lg font-body text-white/80 mb-8">
              🔥 Photos delivered within 1 week. Videos within 10 days.<br/>
              📍 No travel charges for Calgary, Banff, Vancouver, or Toronto. Additional travel costs elsewhere.
            </div>
            <div className="text-white/60 text-base">
              Want to be surrounded by rising icons just like you? <span className="text-white font-bold">Join the ICON Society.</span>
            </div>
          </div>
        </div>

        {/* ICON Society Upsell Section */}
        {result.suggestIconSociety && (
          <div className="py-16 px-4 bg-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-2xl font-heading font-bold text-white mb-6">
                💡 One more thing...
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                You're clearly building something big - and big visions deserve real support.
              </h2>
              <p className="text-xl font-body text-white/80 mb-6">
                Add the ICON Society to your package: a monthly membership for creators who want connection, clarity, and a room full of people who actually get it.
              </p>
              <p className="text-lg font-body text-white/80 mb-8">
                Pitch your ideas. Get feedback. Stay visible all year long - without doing it all alone.
              </p>
              <div className="text-2xl font-bold text-white mb-6">
                👉 Add the ICON Society for $88/month CAD
              </div>
              <Button 
                color="accent" 
                className="text-xl font-bold py-4 px-8" 
                onClick={() => window.open('mailto:hello@westrosemedia.com?subject=ICON%20Society%20Inquiry')}
              >
                Learn More About ICON Society
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24 transition-all duration-700">
      <div className="relative max-w-xl w-full bg-black/80 rounded-lg shadow-2xl p-10 flex flex-col items-center text-center border border-white/10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4578.jpg?alt=media"
          alt="Quiz background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20"
        />
        <div className="relative z-10">
          <div className="text-sm uppercase tracking-widest text-white mb-2">ICONS Quiz</div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {questions[step].q}
          </h2>
          <div className="flex flex-col gap-4 w-full">
            {questions[step].options.map((opt, i) => (
              <Button
                key={i}
                color="accent"
                className="w-full text-lg font-body py-4"
                onClick={() => handleAnswer(opt.value)}
              >
                {opt.a}
              </Button>
            ))}
          </div>
          <div className="mt-8 text-white/40 text-xs">
            Step {step + 1} of {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
} 