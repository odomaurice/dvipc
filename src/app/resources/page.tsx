import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ResourcesSection from "@/components/ResourcesSection";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Educational content, publications, frameworks and case law reviews from DVIPC and DVIPC Academy.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        eyebrow="Resources & insights"
        title="Educational content, publications, and"
        accent="case reviews."
        lead="A knowledge hub that makes intellectual property simple to understand and practical to use."
      />
      <ResourcesSection />
      <CtaSection />
    </>
  );
}
