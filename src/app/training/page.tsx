import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Actions, Label, PageSection, RuledList, SlashList } from "@/components/content";

export const metadata: Metadata = {
  title: "Training & Capacity Building",
  description:
    "IP workshops, institutional and customized training, awareness campaigns, teacher training and innovation management training from DVIPC.",
};

// Brief 2.2 H, with the related programmes of 2.1 and the delivery modes.
const OFFER = [
  { title: "IP workshops" },
  { title: "Institutional training" },
  { title: "Customized IP training" },
  { title: "Capacity-building programmes" },
  { title: "Awareness campaigns" },
  { title: "Innovation management training" },
  { title: "Teacher training" },
  { title: "IP policy and strategy education" },
  { title: "Educational resources" },
];

const PROGRAMMES = [
  { title: "Train-the-Teacher Programme", body: "Equips educators with the knowledge and tools to teach IP concepts effectively.", href: "/academy" },
  { title: "Young Lawyers' IP Hub", body: "Practical IP learning and professional development for young lawyers.", href: "/academy#initiatives" },
  { title: "IP Webinars & Workshops", body: "Virtual and physical sessions on IP protection, registration, commercialization, and contemporary IP issues.", href: "/academy" },
  { title: "IP Explorer Club", body: "School-based IP awareness, with training for teachers and school coordinators.", href: "/academy/ip-explorer-club" },
];

const FOR = [
  "Educational institutions",
  "Universities and research institutions",
  "Organizations seeking IP capacity building",
  "Teachers and educators",
  "Young lawyers and legal practitioners",
  "Innovation hubs",
  "Public institutions",
  "Business and professional associations",
];

const DELIVERY = [
  "Physical workshops and seminars",
  "Virtual webinars",
  "Google Meet sessions",
  "Online courses and training",
  "Mentorship and professional development",
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Training & capacity building" }]}
        eyebrow="Training & capacity building"
        title="Institutional and professional"
        accent="IP learning."
        lead="Workshops, customized training and capacity-building programmes for institutions, schools, professionals and organizations."
      >
        <Actions tone="navy" primary={{ label: "Request IP Training", href: "/contact" }} />
      </PageHero>

      <PageSection
        caption="What we offer"
        title="Training shaped around"
        accent="your organization"
        intro="From a single awareness workshop to a structured capacity-building programme."
      >
        <RuledList items={OFFER} columns={3} />
      </PageSection>

      <PageSection
        tone="maroon"
        caption="Related programmes"
        title="Part of"
        accent="DVIPC Academy"
        intro="Our training draws on the Academy's programmes for educators, legal practitioners and schools."
      >
        <RuledList tone="maroon" items={PROGRAMMES} columns={2} />
      </PageSection>

      <PageSection caption="Who it's for" title="For institutions and" accent="professionals">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Label>Audiences</Label>
            <div className="mt-5">
              <SlashList items={FOR} />
            </div>
          </div>
          <div>
            <Label>How we deliver</Label>
            <div className="mt-5">
              <SlashList items={DELIVERY} />
            </div>
          </div>
        </div>
        <div className="mt-14">
          <Actions primary={{ label: "Request IP Training", href: "/contact" }} secondary={{ label: "Explore the Academy", href: "/academy" }} />
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
