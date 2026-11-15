import type { Metadata } from "next";
import AcademySection from "@/components/AcademySection";
import CtaSection from "@/components/CtaSection";
import InitiativesSection from "@/components/InitiativesSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "DVIPC Academy",
  description:
    "DVIPC Academy is the educational arm of DVIPC, dedicated to democratizing intellectual property knowledge and promoting innovation awareness at the grassroots.",
};

export default function AcademyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Academy" }]}
        eyebrow="DVIPC Academy"
        title="IP knowledge,"
        accent="accessible to everyone."
        lead="A platform for IP dissemination to the grassroots, equipping individuals and communities with the knowledge to understand, identify, protect, and leverage intellectual property."
      />
      <AcademySection />
      <InitiativesSection />
      <CtaSection />
    </>
  );
}
