import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ServiceTabs from "@/components/ServiceTabs";
import { Actions, Label, PageSection, RuledList, SlashList } from "@/components/content";
import { CAC, CAC_INTRO, CAC_SCOPE_NOTE } from "@/lib/services";

export const metadata: Metadata = {
  title: "Business Registration & Corporate Services",
  description:
    "CAC pre-incorporation and post-incorporation services, business structuring and corporate advisory for entrepreneurs, startups, SMEs and established businesses.",
};

export default function BusinessRegistrationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Business registration" }]}
        eyebrow="02 / Business registration & corporate support"
        title="From business idea to legally recognized"
        accent="enterprise."
        lead={CAC_INTRO}
      >
        <Actions tone="navy" primary={{ label: "Register My Business", href: "/register?service=Pre-incorporation" }} />
      </PageHero>

      <ServiceTabs
        id="cac"
        services={CAC}
        caption="CAC services"
        title="Establish, structure, and"
        accent="maintain your business"
        intro="Corporate Affairs Commission (CAC) support before incorporation, after it, and on how your business is structured."
        note={CAC_SCOPE_NOTE}
      />

      <PageSection
        caption="Who it's for"
        title="Then protect what the business"
        accent="builds"
        intro="A registered business is ready to protect its name, logo, inventions and creative work. Our intellectual property services take it from there."
      >
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Label>For</Label>
            <div className="mt-5">
              <SlashList items={["Entrepreneurs", "Startups", "SMEs", "Established businesses"]} />
            </div>
          </div>
          <RuledList
            columns={1}
            items={[
              { title: "Trademark Registration & Brand Protection", href: "/services/intellectual-property" },
              { title: "IP Portfolio Management & Strategic Advisory", href: "/services/ip-strategy" },
            ]}
          />
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
