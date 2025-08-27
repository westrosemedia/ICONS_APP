"use client";
import React, { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-lg font-body text-white/80">
            Sign in to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-body mb-2 text-lg">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg placeholder-white/40"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white font-body mb-2 text-lg">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg placeholder-white/40"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-white font-body text-base bg-white/10 border border-white/20 rounded p-4">
              {error}
            </div>
          )}

          <Button 
            color="accent" 
            className="w-full text-lg font-bold py-4" 
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-white/60 font-body text-sm">
            Don't have an account? Complete the quiz to get started.
          </p>
          <Button color="white" className="mt-4" onClick={() => router.push("/quiz")}>
            Take the Quiz
          </Button>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <button 
                onClick={() => router.push("/privacy")}
                className="text-white/60 hover:text-white transition-colors duration-200 font-body"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => router.push("/terms")}
                className="text-white/60 hover:text-white transition-colors duration-200 font-body"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 