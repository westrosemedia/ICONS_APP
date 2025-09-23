"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';

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
  const router = useRouter();

  useEffect(() => {
    // Simulate authentication check
    // In production, this would use Firebase Auth
    const checkAuth = async () => {
      try {
        // Mock authentication - replace with actual Firebase Auth
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        const mockUser = {
          uid: "mock-user-id",
          email: "user@example.com"
        };
        
        const mockUserData: UserData = {
          fullName: "John Doe",
          businessName: "Example Business",
          packageType: "spotlight",
          onboardingCompleted: true
        };
        
        setUser(mockUser);
        setUserData(mockUserData);
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleSignOut = async () => {
    // Mock sign out - replace with actual Firebase Auth
    setUser(null);
    setUserData(null);
    router.push("/login");
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your dashboard..." />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-hero text-black mb-6">Access Denied</h1>
          <p className="text-editorial mb-8">Please log in to view your dashboard.</p>
          <Button asChild size="lg">
            <a href="/login">Log In</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-elegant py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-elegant text-2xl">ICONS</span>
            <span className="text-gray-600">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">
              Welcome back, {userData?.fullName || "Icon"}
            </span>
            <Button variant="outline" size="sm" onClick={() => router.push("/settings")}>
              Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-elegant py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-hero text-black mb-8">
            Your Empire Awaits
          </h1>
          <p className="text-editorial max-w-3xl mx-auto">
            Welcome to your command center. Here's everything you need to know about your investment in your brand.
          </p>
        </div>

        {/* Purchase Summary */}
        {userData?.packageType && (
          <div className="mb-16">
            <h2 className="text-display text-black mb-8 text-center">
              Your Current Package
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-elegant text-2xl text-black">
                    {getPackageDisplayName(userData.packageType)}
                  </h3>
                  <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm">
                    Active
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-elegant text-lg text-black mb-4">Package Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="text-black font-medium">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="text-black font-medium">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Business:</span>
                        <span className="text-black font-medium">{userData.businessName || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-elegant text-lg text-black mb-4">Next Steps</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-gray-700">Welcome call scheduled</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-gray-700">Strategy session booked</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                        <span className="text-gray-500">First shoot planning</span>
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
          <h2 className="text-display text-black mb-8 text-center">
            Your Information
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-elegant text-lg text-black mb-4">Personal Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="text-black font-medium">{userData?.fullName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Business:</span>
                      <span className="text-black font-medium">{userData?.businessName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-black font-medium">{user.email}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-elegant text-lg text-black mb-4">Contact & Social</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="text-black font-medium">{getPackageDisplayName(userData?.packageType || "")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-display text-black mb-8">
            What's Next?
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-elegant text-xl text-black mb-3">Schedule Call</h3>
              <p className="text-gray-600 mb-4">Book your welcome call to discuss your strategy</p>
              <Button className="w-full">Book Call</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-elegant text-xl text-black mb-3">View Portfolio</h3>
              <p className="text-gray-600 mb-4">See examples of our work and style</p>
              <Button variant="outline" className="w-full">Browse Work</Button>
            </div>
             
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-elegant text-xl text-black mb-3">Get Support</h3>
              <p className="text-gray-600 mb-4">Need help? Reach out to our team</p>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 