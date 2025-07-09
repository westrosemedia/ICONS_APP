import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type Contract = {
  id: string;
  template: string;
  customNotes: string;
  signed: boolean;
  signatureData?: string;
  createdAt?: any;
};

type Props = {
  uid: string;
  isAdmin: boolean;
  onSelect: (contract: Contract) => void;
};

export default function ContractList({ uid, isAdmin, onSelect }: Props) {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    const fetchContracts = async () => {
      setLoading(true);
      const snap = await getDocs(collection(db, `contracts/${uid}`));
      setContracts(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Contract))
      );
      setLoading(false);
    };
    fetchContracts();
  }, [uid]);

  if (loading) {
    return <div className="text-primary text-center py-4">Loading contracts...</div>;
  }
  if (!contracts.length) {
    return <div className="text-gray-400 text-center py-4">No contracts found.</div>;
  }
  return (
    <ul className="space-y-3">
      {contracts.map((c) => (
        <li
          key={c.id}
          className="bg-white rounded shadow p-4 flex items-center justify-between cursor-pointer hover:bg-primary/5"
          onClick={() => onSelect(c)}
        >
          <div>
            <div className="font-medium">{c.template.slice(0, 40)}...</div>
            <div className="text-xs text-gray-500">{c.signed ? "Signed" : "Unsigned"}</div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-bold ${c.signed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {c.signed ? "Signed" : "Unsigned"}
          </div>
        </li>
      ))}
    </ul>
  );
} 