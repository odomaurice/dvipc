import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ServiceTabs from "@/components/ServiceTabs";
import { Actions, PageSection, RuledList } from "@/components/content";
import { IP_INTRO, IP_REGISTRATION } from "@/lib/services";

export const metadata: Metadata = {
  title: "Intellectual Property Services",
  description:
    "Trademark registration and brand protection, patent filing and prosecution, copyright registration and creative rights, and industrial design registration and protection.",
};

export default function IntellectualPropertyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Intellectual property" }]}
        eyebrow="01 / Intellectual property services"
        title="Comprehensive intellectual property"
        accent="solutions."
        lead={IP_INTRO}
      >
        <Actions tone="navy" primary={{ label: "Protect My Innovation", href: "/register" }} />
      </PageHero>

      <ServiceTabs
        id="registration"
        services={IP_REGISTRATION}
        caption="Registration & protection"
        title="Protect your brands, inventions, works and"
        accent="designs"
        intro="Protect your ideas, inventions, brands, creative works, and designs."
      />

      <PageSection
        caption="Beyond registration"
        title="Manage and grow what you"
        accent="own"
        intro="Once your rights are secured, we help you manage, protect and commercialize them."
      >
        <RuledList
          columns={3}
          items={[
            { title: "IP Portfolio Management", body: "Audits, portfolio reviews and IP strategy.", href: "/services/ip-strategy" },
            { title: "Trade Secrets", body: "Protecting confidential business information.", href: "/services/ip-strategy" },
            { title: "Commercialization & Licensing", body: "Licensing, assignment and technology transfer.", href: "/services/ip-strategy" },
          ]}
        />
      </PageSection>

      <CtaSection />
    </>
  );
}
