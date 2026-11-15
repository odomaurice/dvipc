import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Actions, Label, PageSection, RuledList, SlashList } from "@/components/content";

export const metadata: Metadata = {
  title: "Commercialization & Advisory",
  description:
    "IP portfolio management, audits, strategy, commercialization planning, licensing and technology transfer from DVIPC.",
};

// Brief 2.2 F (portfolio management and advisory) and G (commercialization
// and licensing), with the page's key message and CTA from 4.1.
const ADVISORY = [
  { title: "IP portfolio reviews" },
  { title: "IP audits" },
  { title: "IP strategy development" },
  { title: "IP management" },
  { title: "Innovation management" },
  { title: "Strategic advisory" },
];

const COMMERCIALIZATION = [
  { title: "Commercialization planning" },
  { title: "Licensing strategies and support" },
  { title: "Technology transfer" },
  { title: "IP valuation support" },
  { title: "Innovation-to-market strategies" },
  { title: "Intellectual property as a business asset" },
];

// Brief 3.1: the audiences whose stated needs include commercialization.
const FOR = [
  "Entrepreneurs and business owners",
  "Startups and SMEs",
  "Innovators and inventors",
  "Creators and creative professionals",
  "Researchers and academic institutions",
];

export default function CommercializationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Commercialization & advisory" }]}
        eyebrow="Commercialization & advisory"
        title="Turning IP into strategic and"
        accent="economic value."
        lead="We help businesses identify, protect, manage, and commercialize intellectual property to support growth, investment readiness, and long-term competitiveness."
      >
        <Actions tone="navy" primary={{ label: "Book Advisory Session", href: "/contact" }} />
      </PageHero>

      <PageSection
        caption="Portfolio management & advisory"
        title="Know what you own, and"
        accent="manage it well"
        intro="Reviews, audits and strategy that bring your intellectual property into view and keep it working for the business."
      >
        <RuledList items={ADVISORY} columns={3} />
      </PageSection>

      <PageSection
        tone="navy"
        caption="Commercialization & licensing"
        title="From ownership to"
        accent="value creation"
        intro="Planning, licensing and transfer strategies that treat intellectual property as a business asset."
      >
        <RuledList tone="navy" items={COMMERCIALIZATION} columns={3} />
      </PageSection>

      <PageSection caption="Who it's for" title="Built for those who" accent="create value">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Label>Typical clients</Label>
            <div className="mt-5">
              <SlashList items={FOR} />
            </div>
          </div>
          <Actions primary={{ label: "Explore IP Commercialization", href: "/contact" }} secondary={{ label: "All services", href: "/services" }} />
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
