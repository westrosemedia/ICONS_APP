"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

interface AuthGuardProps {
  children: React.ReactNode;
  requiredPackage?: string;
  fallbackUrl?: string;
}

export default function AuthGuard({ 
  children, 
  requiredPackage, 
  fallbackUrl = "/packages" 
}: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userPackage, setUserPackage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking authentication status
    // In a real implementation, this would check Firebase Auth and Firestore
    const checkAuth = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock authentication check
        const mockUser = {
          isAuthenticated: true,
          package: "spotlight", // This would come from Firestore
        };
        
        setIsAuthenticated(mockUser.isAuthenticated);
        setUserPackage(mockUser.package);
        
        if (!mockUser.isAuthenticated) {
          router.push("/login");
        } else if (requiredPackage && mockUser.package !== requiredPackage) {
          // User doesn't have the required package
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [requiredPackage, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock className="w-12 h-12 text-accent" />
          </div>
          
          <h1 className="text-hero text-black mb-6">
            {requiredPackage ? "Premium Content" : "Members Only"}
          </h1>
          
          <p className="text-editorial mb-8">
            {requiredPackage 
              ? `This content is available to ${requiredPackage} package holders. Upgrade your package to access this exclusive content.`
              : "Please log in to access your dashboard and exclusive content."
            }
          </p>
          
          <div className="space-y-4">
            {requiredPackage ? (
              <>
                <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
                  <Link href="/packages">
                    View Packages
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/quiz">Take Quiz to Find Your Package</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/login">
                    Log In
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/packages">View Packages</Link>
                </Button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
