import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import FounderSection from "@/components/FounderSection";

export const metadata: Metadata = {
  title: "Founder & Leadership",
  description:
    "Barr. Onyekachi Eriobu-Aniede, Lead Consultant and Founder of DVIPC.",
};

export default function FounderPage() {
  return (
    <>
      <FounderSection asPage />
      <CtaSection />
    </>
  );
}
