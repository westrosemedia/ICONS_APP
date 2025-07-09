import React from "react";
import VoiceRecorder from "../../components/VoiceRecorder";

export default function StoryVaultPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-primary text-center">Story Vault</h1>
        <VoiceRecorder />
      </div>
    </main>
  );
} 