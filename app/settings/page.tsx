"use client";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

interface UserData {
  fullName?: string;
  businessName?: string;
  packageType?: string;
  email?: string;
  notifications?: boolean;
  marketingOptIn?: boolean;
  [key: string]: any;
}

export default function Settings() {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const updateNotificationSettings = async (enabled: boolean) => {
    if (!user) return;
    
    setSaving(true);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        notifications: enabled
      });
      setUserData(prev => prev ? { ...prev, notifications: enabled } : null);
    } catch (error) {
      console.error("Error updating notification settings:", error);
    } finally {
      setSaving(false);
    }
  };

  const updateMarketingOptIn = async (optedIn: boolean) => {
    if (!user) return;
    
    setSaving(true);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        marketingOptIn: optedIn
      });
      setUserData(prev => prev ? { ...prev, marketingOptIn: optedIn } : null);
    } catch (error) {
      console.error("Error updating marketing preferences:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-heading">Loading settings...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Access Denied</h1>
          <p className="text-lg font-body text-white/80 mb-8">Please log in to view your settings.</p>
          <Button color="accent" onClick={() => router.push("/login")}>Log In</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-heading text-2xl font-bold">ICONS</span>
            <span className="text-white/60 font-body">Settings</span>
          </div>
          <Button color="white" onClick={() => router.push("/dashboard")} className="text-sm">
            ← Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
            Settings
          </h1>
          <p className="text-xl font-body text-white/80 max-w-2xl mx-auto">
            Manage your account preferences and privacy settings.
          </p>
        </div>

        <div className="space-y-8">
          {/* Account Information */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Account Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 font-body mb-2">Name</label>
                <p className="text-white font-body">{userData?.fullName || userData?.hostName || "N/A"}</p>
              </div>
              <div>
                <label className="block text-white/80 font-body mb-2">Email</label>
                <p className="text-white font-body">{user.email}</p>
              </div>
              <div>
                <label className="block text-white/80 font-body mb-2">Business</label>
                <p className="text-white font-body">{userData?.businessName || "N/A"}</p>
              </div>
              <div>
                <label className="block text-white/80 font-body mb-2">Package</label>
                <p className="text-white font-body">{userData?.packageType || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Push Notifications</h3>
                  <p className="text-white/80 font-body">Receive updates about your content and new features</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={userData?.notifications || false}
                    onChange={(e) => updateNotificationSettings(e.target.checked)}
                    disabled={saving}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Marketing Communications</h3>
                  <p className="text-white/80 font-body">Receive updates about new offers and packages</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={userData?.marketingOptIn || false}
                    onChange={(e) => updateMarketingOptIn(e.target.checked)}
                    disabled={saving}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy & Legal */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Privacy & Legal</h2>
            <div className="space-y-4">
              <button
                onClick={() => router.push("/privacy")}
                className="w-full text-left p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-heading font-bold text-white">Privacy Policy</h3>
                <p className="text-white/80 font-body">Learn how we protect your information</p>
              </button>
              
              <button
                onClick={() => router.push("/terms")}
                className="w-full text-left p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-heading font-bold text-white">Terms of Use</h3>
                <p className="text-white/80 font-body">Read our terms and conditions</p>
              </button>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Account Actions</h2>
            <div className="space-y-4">
              <Button 
                color="white" 
                onClick={handleSignOut}
                className="w-full justify-center"
              >
                Sign Out
              </Button>
              
              <button className="w-full p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors duration-200 font-body">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 