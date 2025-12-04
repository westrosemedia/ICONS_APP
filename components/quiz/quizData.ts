/* Do not change copy without explicit written approval from Stephanie. No em dashes anywhere. */

export type QuizResult = "spotlight" | "immersion" | "icon";

export const quizIntro =
  "Ready to find out which ICON Brand Partnership will take your brand to the next level? Answer a few quick questions and get a personalized plan that fits your goals.";

export type QuizOption = {
  label: string;
  result: QuizResult;       // which package this option votes for
  ppbSignal?: boolean;      // marks interest or fit for Powerful Personal Brand
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

// Q1 The Gap
const q1: QuizQuestion = {
  id: "q1_gap",
  prompt: "What's holding you back from the next level right now?",
  options: [
    { label: "I don't have consistent content that actually sells.", result: "spotlight", ppbSignal: true },
    { label: "I've grown, but my brand doesn't reflect my success.", result: "spotlight", ppbSignal: true },
    { label: "My events and masterminds are incredible, but no one really knows about them.", result: "immersion" },
    { label: "I want to scale, but there aren't enough hours in the day to handle content on top of everything else.", result: "icon" }
  ]
};

// Q2 The Vision
const q2: QuizQuestion = {
  id: "q2_vision",
  prompt: "When you picture your business a year from now, what excites you the most?",
  options: [
    { label: "Finally being consistent and visible so my ideal clients actually find me.", result: "spotlight", ppbSignal: true },
    { label: "Looking like the authority I already am, with a brand that reflects my success.", result: "spotlight", ppbSignal: true },
    { label: "Filling my events and masterminds because people see the value before they even walk in the room.", result: "immersion" },
    { label: "Scaling to new income levels while staying focused on my genius instead of drowning in content.", result: "icon" }
  ]
};

// Q3 The Struggle
const q3: QuizQuestion = {
  id: "q3_struggle",
  prompt: "How does content feel in your business right now?",
  options: [
    { label: "I'm scrambling to post and it never feels strategic.", result: "spotlight", ppbSignal: true },
    { label: "I have some content, but it doesn't match the level I'm operating at.", result: "spotlight", ppbSignal: true },
    { label: "I'm so focused on running my events that content barely happens at all.", result: "immersion" },
    { label: "I know content is critical to scaling, but I don't have the hours in the day to keep up with it.", result: "icon" }
  ]
};

// Q4 The Big Goal
const q4: QuizQuestion = {
  id: "q4_goal",
  prompt: "What's the big audacious goal you're chasing right now?",
  options: [
    { label: "Hitting consistent five-figure months.", result: "spotlight", ppbSignal: true },
    { label: "Becoming the go-to authority in my industry.", result: "spotlight", ppbSignal: true },
    { label: "Selling out my events and masterminds with ease.", result: "immersion" },
    { label: "Scaling to multi-six or seven figures while keeping my freedom.", result: "icon" }
  ]
};

// Q5 The Hand Off
const q5: QuizQuestion = {
  id: "q5_handoff",
  prompt: "How much of your content do you want taken off your plate?",
  options: [
    { label: "Just enough to give me consistency and momentum.", result: "spotlight", ppbSignal: true },
    { label: "A solid mix of photo and video content that matches my level.", result: "spotlight", ppbSignal: true },
    { label: "Full coverage of my events and masterminds so I can turn them into business assets.", result: "immersion" },
    { label: "Everything. I want a full partner managing my brand content so I can stay focused on scaling.", result: "icon" }
  ]
};

// Q6 The Support Factor
const q6: QuizQuestion = {
  id: "q6_support",
  prompt: "When it comes to content and visibility, how much are you doing alone right now?",
  options: [
    { label: "Pretty much everything. I'm the photographer, videographer, editor, and poster.", result: "spotlight", ppbSignal: true },
    { label: "I have a little help, but I'm still the one driving it all.", result: "spotlight", ppbSignal: true },
    { label: "I delegate some things, but I still don't feel fully supported.", result: "immersion", ppbSignal: true },
    { label: "I know I need a true partner to make my vision happen.", result: "icon" }
  ]
};

// Q7 Path Preference for PPB guidance
const q7: QuizQuestion = {
  id: "q7_path",
  prompt: "What path fits you best right now?",
  options: [
    { label: "I want to learn the full framework and build my brand with live coaching over 8 weeks.", result: "spotlight", ppbSignal: true },
    { label: "I want consistent content and quick momentum with a lighter lift.", result: "spotlight" },
    { label: "I want my live event or mastermind captured and turned into business assets.", result: "immersion" },
    { label: "I want a full partner who takes content off my plate so I can scale.", result: "icon" }
  ]
};

export const quizQuestions: QuizQuestion[] = [q1, q2, q3, q4, q5, q6, q7];

// Results copy
export const resultCopy: Record<QuizResult, { title: string; body: string; cta: string; }> = {
  spotlight: {
    title: "Your Result: The Spotlight Package",
    body:
      "You're ready to get consistent and visible without burning yourself out. Right now your biggest barrier isn't talent or ambition, it's that your brand isn't showing up as often or as powerfully as it should.\n\nThe Spotlight Package gives you exactly what you need: stunning photo and video content that keeps your business consistent, magnetic, and unforgettable. No more scrambling for posts. No more hiding behind inconsistency. Just strategic content that makes your audience stop scrolling and start paying attention.\n\nThis is how you step into the spotlight and claim the authority you already are.",
    cta: "Book your Spotlight Package now."
  },
  immersion: {
    title: "Your Result: The Immersion Package",
    body:
      "Your events and masterminds are powerful, but they're not reaching the audience they deserve. Without professional coverage, all those incredible experiences disappear once the weekend ends.\n\nThe Immersion Package changes that. You get full photo and video coverage of your live event, turning every key moment into high value business assets. Your guests get more value, your brand gets more visibility, and your events keep selling themselves long after the chairs are stacked.\n\nThis is how you transform your events into an engine for growth.",
    cta: "Book your Immersion Package now."
  },
  icon: {
    title: "Your Result: The ICON Brand Partnership",
    body:
      "You're ready to scale in a way that most entrepreneurs only dream about. You've built something incredible, but your next level requires more than effort, it requires partnership.\n\nWith the ICON Brand Partnership, you get a full brand partner who takes content completely off your plate. Your photos, videos, and strategy are executed at the highest level so you can stay in your genius and scale without limits.\n\nAnd because we know scaling isn't meant to be done alone, your ICON Brand Partnership also includes free access to the ICON Society, a private community of bold entrepreneurs who are growing just as fast as you are. It's where strategy, content, and high level support all come together.\n\nThis is the move that ensures your vision stays alive without you chasing it.",
    cta: "Book your ICON Brand Partnership now."
  }
};

// Tie break priority
export const priorityOrder: QuizResult[] = ["icon", "immersion", "spotlight"];
