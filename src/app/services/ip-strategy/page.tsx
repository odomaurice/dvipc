import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ServiceTabs from "@/components/ServiceTabs";
import { Actions, PageSection, RuledList } from "@/components/content";
import { IP_STRATEGY } from "@/lib/services";

export const metadata: Metadata = {
  title: "IP Strategy & Commercialization",
  description:
    "IP audits and portfolio management, trade secret protection, and IP commercialization, licensing and technology transfer.",
};

// Brief 2.2 I: policy work is the founder's institutional experience, kept
// apart from the commercial services above it and worded as expertise.
const POLICY = [
  { title: "IP policy", body: "IP policy development and regulatory development." },
  { title: "Research", body: "Legal and policy research, IP research and publications." },
  { title: "Stakeholder engagement", body: "Engagement across public, private and professional stakeholders." },
  { title: "Innovation management", body: "Innovation policy and knowledge economy development." },
];

export default function IpStrategyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "IP strategy & commercialization" }]}
        eyebrow="03 / IP strategy & commercialization"
        title="Intellectual property should create value"
        accent="beyond ownership."
        lead="Manage, commercialize, and maximize the value of intellectual assets."
      >
        <Actions tone="navy" primary={{ label: "Book an Advisory Session", href: "/register?service=Portfolio%20%26%20strategy" }} />
      </PageHero>

      <ServiceTabs
        id="strategy"
        services={IP_STRATEGY}
        caption="Strategy & commercialization"
        title="Manage it, protect it,"
        accent="put it to work"
        intro="From audits and confidentiality frameworks to licensing, assignment and technology transfer."
      />

      <PageSection
        caption="Innovation & policy advisory"
        title="Policy experience behind the"
        accent="advice"
        intro="Our expertise extends to IP policy, research, stakeholder engagement, and innovation management, drawing on the founder's work in IP policy development and trade negotiation."
      >
        <RuledList items={POLICY} columns={2} />
      </PageSection>

      <CtaSection />
    </>
  );
}
