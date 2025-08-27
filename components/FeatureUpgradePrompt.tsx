"use client";
import React from "react";
import Button from "./Button";

interface FeatureUpgradePromptProps {
  feature: string;
  description: string;
  onUpgrade: () => void;
  onClose: () => void;
}

export default function FeatureUpgradePrompt({ feature, description, onUpgrade, onClose }: FeatureUpgradePromptProps) {
  const getFeatureIcon = (featureName: string) => {
    switch (featureName.toLowerCase()) {
      case 'vault':
        return '🎙️';
      case 'gallery':
        return '📸';
      case 'icon society':
      case 'iconsociety':
        return '👥';
      case 'community':
        return '💬';
      default:
        return '⭐';
    }
  };

  const getUpgradeMessage = (featureName: string) => {
    switch (featureName.toLowerCase()) {
      case 'vault':
        return "Unlock your Story Vault to capture voice notes and transform them into powerful content.";
      case 'gallery':
        return "Access your Content Gallery to view professional photos and videos.";
      case 'icon society':
      case 'iconsociety':
        return "Join the ICON Society to connect with other bold creators in our private community.";
      case 'community':
        return "Access the community to network and collaborate with fellow entrepreneurs.";
      default:
        return "Upgrade your package to access this premium feature.";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-black/90 rounded-lg shadow-2xl border border-white/10 p-8 text-center">
        <div className="text-6xl mb-6">
          {getFeatureIcon(feature)}
        </div>
        
        <h2 className="text-3xl font-heading font-bold text-white mb-4">
          {feature}
        </h2>
        
        <p className="text-lg font-body text-white/80 mb-6">
          {getUpgradeMessage(feature)}
        </p>
        
        <p className="text-sm font-body text-white/60 mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            color="white"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Maybe Later
          </Button>
          <Button
            color="accent"
            onClick={onUpgrade}
            className="w-full sm:w-auto"
          >
            Upgrade Now
          </Button>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 text-white/40 hover:text-white/60 transition-colors duration-200 text-sm font-body"
        >
          Close
        </button>
      </div>
    </div>
  );
} 