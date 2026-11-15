import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "IP Services",
  description:
    "Patent filing and prosecution, trademark registration and brand protection, copyright and creative rights, and IP portfolio management and advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="IP services"
        title="Practical IP registration, protection, and"
        accent="advisory services."
        lead="From patents and trademarks to copyrights and strategic IP advisory, we help innovators, creators, startups, and businesses secure and maximize the value of their intellectual assets."
      />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
