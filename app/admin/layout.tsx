import React from "react";
import Button from "../../components/Button";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin" },
  { name: "Payment Plans", href: "#" },
  { name: "Contracts", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Media Library", href: "#" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r hidden md:flex flex-col p-4 space-y-2">
        <div className="text-xl font-bold text-primary mb-6">Admin</div>
        <nav className="flex flex-col space-y-1">
          {sidebarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded hover:bg-primary/10 text-gray-700 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
      {/* Mobile sidebar placeholder */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white border-b z-10 flex items-center px-4 py-2 shadow-sm">
        <span className="text-lg font-bold text-primary">Admin</span>
      </div>
      <main className="flex-1 p-6 md:ml-64 mt-10 md:mt-0">{children}</main>
    </div>
  );
} 