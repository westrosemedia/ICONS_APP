"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

interface OnboardingStep {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const onboardingSteps: OnboardingStep[] = [
  {
    title: "Welcome to ICONS",
    description: "Your journey to becoming iconic starts here. Let's get you set up for success.",
    image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media",
    features: [
      "Personalized content strategy",
      "Professional photography & videography",
      "Strategic brand positioning",
      "Community support"
    ]
  },
  {
    title: "Your Story Vault",
    description: "Capture your voice notes and transform them into powerful content. Your private space for authentic storytelling.",
    image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media",
    features: [
      "Voice-to-text transcription",
      "Private content creation",
      "Authentic storytelling",
      "Content inspiration"
    ]
  },
  {
    title: "Content Gallery",
    description: "View your professional photos and videos. Every piece of content is crafted to elevate your brand.",
    image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3352.jpg?alt=media",
    features: [
      "Professional photography",
      "Branded video content",
      "Strategic captions",
      "Content scheduling"
    ]
  },
  {
    title: "ICON Society",
    description: "Connect with other bold creators. This is where real influence is built - in rooms where everyone is playing big.",
    image: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4578.jpg?alt=media",
    features: [
      "Private community",
      "Peer support",
      "Strategic networking",
      "Long-term growth"
    ]
  }
];

interface OnboardingProps {
  onComplete: () => void;
  onSkip: () => void;
}

export default function Onboarding({ onComplete, onSkip }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={currentStepData.image}
          alt="Onboarding background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/80 rounded-lg shadow-2xl p-12 border border-white/10">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    index === currentStep ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Step Content */}
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              {currentStepData.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-body text-white/80 mb-8 max-w-2xl mx-auto">
              {currentStepData.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {currentStepData.features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/80">
                  <span className="text-white mr-3 text-xl">•</span>
                  <span className="font-body text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {currentStep > 0 && (
                <Button
                  color="white"
                  className="w-full sm:w-auto"
                  onClick={prevStep}
                >
                  Back
                </Button>
              )}
              
              <Button
                color="accent"
                className="w-full sm:w-auto"
                onClick={nextStep}
              >
                {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
              </Button>
            </div>

            {/* Skip Option */}
            <button
              onClick={onSkip}
              className="mt-8 text-white/60 hover:text-white transition-colors duration-200 font-body"
            >
              Skip onboarding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 