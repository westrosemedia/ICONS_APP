"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import ContractBuilder from "../../components/contracts/ContractBuilder";
import ContractList from "../../components/contracts/ContractList";
import ContractViewer from "../../components/contracts/ContractViewer";

// Placeholder: determine admin vs client
const isAdmin = (email: string) => email && email.endsWith("@admin.com");

export default function ContractsPage() {
  const [user, setUser] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.replace("/login");
        return;
      }
      setUser(u);
    });
    return () => unsub();
  }, [router]);

  const handleSave = () => setRefresh((v) => !v);
  const handleSelect = (contract: any) => setSelected(contract);
  const handleSign = async (signature: string) => {
    if (!user || !selected) return;
    await updateDoc(doc(db, `contracts/${user.uid}/${selected.id}`), {
      signed: true,
      signatureData: signature,
    });
    setSelected({ ...selected, signed: true, signatureData: signature });
  };

  if (!user) return null;
  const admin = isAdmin(user.email || "");

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Contracts</h1>
        {admin && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Create Contract</h2>
            <ContractBuilder onSave={handleSave} />
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold mb-2">Your Contracts</h2>
          <ContractList
            uid={user.uid}
            isAdmin={admin}
            onSelect={handleSelect}
            key={refresh}
          />
        </div>
        {selected && (
          <div>
            <h2 className="text-lg font-semibold mb-2">View Contract</h2>
            <ContractViewer
              contract={selected}
              clientName={user.displayName || "Client"}
              paymentPlan={"Standard"}
              location={"Toronto"}
              onSign={handleSign}
            />
          </div>
        )}
      </div>
    </main>
  );
} 