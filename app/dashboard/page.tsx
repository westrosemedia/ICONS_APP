"use client";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import Onboarding from "../../components/Onboarding";
import PermissionsHandler from "../../components/PermissionsHandler";
import notificationService from "../../lib/notifications";

interface UserData {
  fullName?: string;
  businessName?: string;
  packageType?: string;
  [key: string]: any;
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Fetch user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data() as UserData;
            setUserData(data);
            
            // Check if user needs onboarding
            if (!data.onboardingCompleted) {
              setShowOnboarding(true);
            } else {
              // Initialize notifications
              await notificationService.initialize();
            }
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
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleOnboardingComplete = async () => {
    if (user) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          onboardingCompleted: true,
          onboardingCompletedAt: new Date().toISOString()
        });
        setShowOnboarding(false);
        setShowPermissions(true);
      } catch (error) {
        console.error("Error updating onboarding status:", error);
      }
    }
  };

  const handleOnboardingSkip = async () => {
    if (user) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          onboardingCompleted: true,
          onboardingSkipped: true,
          onboardingCompletedAt: new Date().toISOString()
        });
        setShowOnboarding(false);
        setShowPermissions(true);
      } catch (error) {
        console.error("Error updating onboarding status:", error);
      }
    }
  };

  const handlePermissionsGranted = async () => {
    setShowPermissions(false);
    // Initialize notifications after permissions are granted
    await notificationService.initialize();
  };

  const handlePermissionsDenied = () => {
    setShowPermissions(false);
    // Continue without notifications
  };

  const getPackageDisplayName = (packageType: string) => {
    const packageNames: Record<string, string> = {
      empire: "The ICON Package",
      spotlight: "The Spotlight",
      lite: "WRM Lite",
      immersion: "Event / Immersion Package"
    };
    return packageNames[packageType] || packageType;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-heading">Loading your dashboard...</div>
      </div>
    );
  }

  if (showOnboarding) {
    return (
      <Onboarding
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingSkip}
      />
    );
  }

  if (showPermissions) {
    return (
      <PermissionsHandler
        onPermissionsGranted={handlePermissionsGranted}
        onPermissionsDenied={handlePermissionsDenied}
      />
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Access Denied</h1>
          <p className="text-lg font-body text-white/80 mb-8">Please log in to view your dashboard.</p>
          <Button color="accent" className="w-full">Log In</Button>
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
            <span className="text-white/60 font-body">Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/80 font-body">
              Welcome back, {userData?.fullName || userData?.hostName || "Icon"}
            </span>
            <Button color="white" onClick={() => router.push("/settings")} className="text-sm">
              Settings
            </Button>
            <Button color="white" onClick={handleSignOut} className="text-sm">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            Your Empire Awaits
          </h1>
          <p className="text-xl font-body text-white/80 max-w-2xl mx-auto">
            Welcome to your command center. Here's everything you need to know about your investment in your brand.
          </p>
        </div>

        {/* Purchase Summary */}
        {userData?.packageType && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
              Your Current Package
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {getPackageDisplayName(userData.packageType)}
                  </h3>
                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-body">
                    Active
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-4">Package Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Status:</span>
                        <span className="text-white font-body">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Start Date:</span>
                        <span className="text-white font-body">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Business:</span>
                        <span className="text-white font-body">{userData.businessName || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-4">Next Steps</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        <span className="text-white/80 font-body">Welcome call scheduled</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        <span className="text-white/80 font-body">Strategy session booked</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                        <span className="text-white/60 font-body">First shoot planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Account Information */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
            Your Information
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-heading font-bold text-white mb-4">Personal Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80 font-body">Name:</span>
                      <span className="text-white font-body">{userData?.fullName || userData?.hostName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-body">Business:</span>
                      <span className="text-white font-body">{userData?.businessName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-body">Pronouns:</span>
                      <span className="text-white font-body">{userData?.pronouns || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-body">Email:</span>
                      <span className="text-white font-body">{user.email}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-heading font-bold text-white mb-4">Contact & Social</h4>
                  <div className="space-y-3">
                    {userData?.website && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Website:</span>
                        <span className="text-white font-body">{userData.website}</span>
                      </div>
                    )}
                    {userData?.instagram && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Instagram:</span>
                        <span className="text-white font-body">@{userData.instagram}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            What's Next?
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-heading font-bold text-white mb-3">Schedule Call</h3>
              <p className="text-white/80 font-body mb-4">Book your welcome call to discuss your strategy</p>
              <Button color="accent" className="w-full">Book Call</Button>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-heading font-bold text-white mb-3">View Portfolio</h3>
              <p className="text-white/80 font-body mb-4">See examples of our work and style</p>
                             <Button color="white" className="w-full">Browse Work</Button>
             </div>
             
             <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
               <h3 className="text-xl font-heading font-bold text-white mb-3">Get Support</h3>
               <p className="text-white/80 font-body mb-4">Need help? Reach out to our team</p>
               <Button color="white" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 