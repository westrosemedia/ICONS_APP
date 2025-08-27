"use client";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Button from "../../components/Button";

interface UserSubmission {
  id: string;
  fullName?: string;
  hostName?: string;
  businessName?: string;
  packageType?: string;
  email?: string;
  website?: string;
  instagram?: string;
  createdAt?: any;
  [key: string]: any;
}

export default function AdminPanel() {
  const [user, setUser] = useState<any>(null);
  const [submissions, setSubmissions] = useState<UserSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Fetch all user submissions
        try {
          const usersRef = collection(db, "users");
          const q = query(usersRef, orderBy("createdAt", "desc"));
          const querySnapshot = await getDocs(q);
          const submissionsData: UserSubmission[] = [];
          querySnapshot.forEach((doc) => {
            submissionsData.push({
              id: doc.id,
              ...doc.data()
            });
          });
          setSubmissions(submissionsData);
        } catch (error) {
          console.error("Error fetching submissions:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getPackageDisplayName = (packageType: string) => {
    const packageNames: Record<string, string> = {
      empire: "The ICON Package",
      spotlight: "The Spotlight",
      lite: "WRM Lite",
      immersion: "Event / Immersion Package"
    };
    return packageNames[packageType] || packageType;
  };

  const getPackagePrice = (packageType: string) => {
    const prices: Record<string, string> = {
      empire: "$5,000/month",
      spotlight: "$1,200 CAD",
      lite: "$2,400/month",
      immersion: "$6,000 (2 days)"
    };
    return prices[packageType] || "N/A";
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesFilter = filter === "all" || submission.packageType === filter;
    const matchesSearch = searchTerm === "" || 
      (submission.fullName || submission.hostName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (submission.businessName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (submission.email || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTotalValue = () => {
    const prices: Record<string, number> = {
      empire: 5000,
      spotlight: 1200,
      lite: 2400,
      immersion: 6000
    };
    return filteredSubmissions.reduce((total, submission) => {
      return total + (prices[submission.packageType || ""] || 0);
    }, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-heading">Loading admin panel...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Access Denied</h1>
          <p className="text-lg font-body text-white/80 mb-8">Admin access required.</p>
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
            <span className="text-white/60 font-body">Admin Panel</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/80 font-body">
              Welcome, {user.email}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            Lead Dashboard
          </h1>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-bold text-white">{filteredSubmissions.length}</h3>
              <p className="text-white/80 font-body">Total Leads</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-bold text-white">${getTotalValue().toLocaleString()}</h3>
              <p className="text-white/80 font-body">Potential Value</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-bold text-white">
                {submissions.filter(s => s.packageType === "empire").length}
              </h3>
              <p className="text-white/80 font-body">ICON Packages</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-bold text-white">
                {submissions.filter(s => s.packageType === "immersion").length}
              </h3>
              <p className="text-white/80 font-body">Event Packages</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, business, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg placeholder-white/40"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg"
          >
            <option value="all">All Packages</option>
            <option value="empire">ICON Package</option>
            <option value="spotlight">Spotlight</option>
            <option value="lite">WRM Lite</option>
            <option value="immersion">Event Package</option>
          </select>
        </div>

        {/* Submissions List */}
        <div className="space-y-6">
          {filteredSubmissions.map((submission) => (
            <div key={submission.id} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {submission.fullName || submission.hostName || "Unknown"}
                  </h3>
                  <p className="text-white/80 font-body">{submission.businessName || "No business name"}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-body">
                    {getPackageDisplayName(submission.packageType || "")}
                  </span>
                  <span className="text-white/60 font-body">
                    {getPackagePrice(submission.packageType || "")}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-heading font-bold text-white mb-3">Contact Info</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80 font-body">Email:</span>
                      <span className="text-white font-body">{submission.email || "N/A"}</span>
                    </div>
                    {submission.website && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Website:</span>
                        <span className="text-white font-body">{submission.website}</span>
                      </div>
                    )}
                    {submission.instagram && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Instagram:</span>
                        <span className="text-white font-body">@{submission.instagram}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-heading font-bold text-white mb-3">Additional Info</h4>
                  <div className="space-y-2">
                    {submission.monthlyRevenue && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Revenue:</span>
                        <span className="text-white font-body">{submission.monthlyRevenue}</span>
                      </div>
                    )}
                    {submission.eventDates && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Event Dates:</span>
                        <span className="text-white font-body">{submission.eventDates}</span>
                      </div>
                    )}
                    {submission.participantCount && (
                      <div className="flex justify-between">
                        <span className="text-white/80 font-body">Participants:</span>
                        <span className="text-white font-body">{submission.participantCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-white/60 font-body text-sm">
                  Submitted: {submission.createdAt?.toDate?.()?.toLocaleDateString() || "Recently"}
                </span>
                <div className="flex space-x-3">
                  <Button color="accent" className="text-sm">Contact Lead</Button>
                  <Button color="white" className="text-sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">No leads found</h3>
            <p className="text-white/80 font-body">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
} 