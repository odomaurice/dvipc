import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Actions, PageSection, RuledList } from "@/components/content";

export const metadata: Metadata = {
  title: "IP Adventure",
  description:
    "IP Adventure is DVIPC Academy's educational storybook initiative, introducing children and teenagers to intellectual property through stories.",
};

// Brief 4.8 and 5.3. There is no purchase link, price, edition list or
// licensing terms yet (gaps D33 to D36), so the only CTA is an enquiry.
const PURPOSE = [
  { title: "IP education through storytelling", body: "Relatable stories and practical examples that make intellectual property easy to grasp." },
  { title: "For children and teenagers", body: "Written to introduce young readers to the ideas behind IP." },
  { title: "Creative learning", body: "Learning that encourages young people to create, and to value what they create." },
  { title: "Awareness and responsible ownership", body: "Building IP awareness and a sense of responsible ownership." },
];

const ALSO = [
  { title: "IP Adventure Workbook", body: "The companion educational resource to the storybook." },
  { title: "Part of DVIPC Academy", body: "One of the Academy's initiatives for taking IP knowledge to the grassroots.", href: "/academy" },
];

export default function AdventurePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Academy", href: "/academy" }, { label: "IP Adventure" }]}
        eyebrow="DVIPC Academy initiative"
        title="Learning IP through stories and"
        accent="creativity."
        lead="IP Adventure is an educational storybook initiative introducing children and teenagers to intellectual property through relatable stories and practical examples."
      >
        <Actions
          tone="navy"
          primary={{ label: "Educational Partnership Enquiry", href: "/contact" }}
        />
      </PageHero>

      <PageSection
        caption="The storybook"
        title="Why tell IP as a"
        accent="story"
        intro="Stories turn an abstract subject into something young readers recognize from their own ideas, drawings and inventions."
      >
        <RuledList items={PURPOSE} columns={2} />
      </PageSection>

      <PageSection tone="maroon" caption="Around the book" title="More than" accent="one book">
        <RuledList tone="maroon" items={ALSO} columns={2} />
        <div className="mt-12">
          <Actions
            tone="maroon"
            primary={{ label: "Educational Partnership / Licensing Enquiry", href: "/contact" }}
          />
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
