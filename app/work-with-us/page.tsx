import type { Metadata } from "next";
import WorkWithUsPage from "@/components/agency/WorkWithUsPage";

export const metadata: Metadata = {
  title: "Work With Us | West Rose Media",
  description:
    "ICON Brand Partnership is open. Private 1:1 coaching is full. Hot & Rich and the Manifesting & Marketing Mastermind both open in January.",
  alternates: { canonical: "/work-with-us" },
};

export default function Page() {
  return <WorkWithUsPage />;
}
