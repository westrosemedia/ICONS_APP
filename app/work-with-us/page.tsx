import type { Metadata } from "next";
import WorkWithUsPage from "@/components/agency/WorkWithUsPage";

export const metadata: Metadata = {
  title: "Work With Us | West Rose Media",
  description:
    "ICON Brand Partnership, private 1:1 coaching, and Hot & Viral. The public offers at West Rose Media.",
  alternates: { canonical: "/work-with-us" },
};

export default function Page() {
  return <WorkWithUsPage />;
}
