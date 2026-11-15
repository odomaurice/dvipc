import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import AudiencesSection from "@/components/AudiencesSection";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "DVIPC is a consulting and educational intellectual property organization with a grassroots mission.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow="About DVIPC"
        title="A consulting and educational IP organization with a"
        accent="grassroots mission."
        lead="We help innovators, creators, businesses, institutions, and communities identify, protect, manage, and commercialize intellectual assets, while advancing IP education and awareness at the grassroots."
      />
      <AboutSection />
      <AudiencesSection />
      <CtaSection />
    </>
  );
}
