import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Actions, Label, PageSection, RuledList, SlashList } from "@/components/content";

export const metadata: Metadata = {
  title: "IP Explorer Club",
  description:
    "IP Explorer Club is DVIPC Academy's school-based IP awareness initiative for primary and secondary school learners.",
};

// Brief 4.7. Membership fees, joining requirements and current school numbers
// are open questions (gaps D28 to D32), so none are stated.
const COVERS = [
  { title: "IP awareness for young learners", body: "Introducing intellectual property to primary and secondary school learners." },
  { title: "Creativity and innovation", body: "Developing creativity and innovation alongside an understanding of IP." },
  { title: "Teacher and coordinator training", body: "Training for the teachers and school coordinators who run the club." },
  { title: "School partnerships", body: "Working with schools to bring IP education into school life." },
];

export default function ExplorerClubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Academy", href: "/academy" }, { label: "IP Explorer Club" }]}
        eyebrow="DVIPC Academy initiative"
        title="IP"
        accent="Explorer Club."
        lead="Introducing IP education to schools and young innovators: a school-based IP awareness initiative for primary and secondary school learners."
      >
        <Actions
          tone="navy"
          primary={{ label: "Bring IP Explorer Club to Your School", href: "/contact" }}
        />
      </PageHero>

      <PageSection
        caption="The initiative"
        title="Where young learners meet"
        accent="intellectual property"
        intro="IP Explorer Club brings IP awareness into primary and secondary schools, helping learners understand, identify and value what they create."
      >
        <RuledList items={COVERS} columns={2} />
      </PageSection>

      <PageSection tone="blush" caption="For schools" title="Bring the club to" accent="your school">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Label>Who takes part</Label>
            <div className="mt-5">
              <SlashList items={["Primary school learners", "Secondary school learners", "Teachers", "School coordinators"]} />
            </div>
          </div>
          <Actions
            primary={{ label: "Partner With DVIPC", href: "/contact" }}
            secondary={{ label: "Request School Programme Information", href: "/contact" }}
          />
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
