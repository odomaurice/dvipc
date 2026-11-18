import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Actions, PageSection } from "@/components/content";
import { CATEGORIES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Intellectual property services, CAC business registration and corporate support, IP strategy and commercialization, and IP education and capacity building.",
};

// The four categories of the 18 November addendum, flagship first.
export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="Our services"
        title="From business idea to"
        accent="protected, valuable assets."
        lead="We serve businesses from establishment through brand protection, IP management, and growth, alongside IP education and capacity building through DVIPC Academy."
      >
        <Actions tone="navy" primary={{ label: "Request IP Support", href: "/register" }} secondary={{ label: "Contact us", href: "/contact" }} />
      </PageHero>

      <PageSection
        caption="Four service areas"
        title="Choose where to"
        accent="start"
        intro="Intellectual property services are our specialism. Business registration and corporate support complement them, so one adviser can see a business through from incorporation to its brand, inventions and creative work."
      >
        <ol className="border-b border-ink/15">
          {CATEGORIES.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group grid gap-4 border-t border-ink/15 py-8 transition-colors hover:bg-brand-blush/50 sm:px-4 lg:grid-cols-[5rem_5fr_6fr_auto] lg:items-baseline lg:gap-8"
              >
                <span className="font-serif text-3xl text-brand italic">{c.n}</span>
                <span>
                  <span className="block heading-md transition-colors group-hover:text-brand">{c.title}</span>
                  <span className="mt-2 block text-base leading-7 text-soft">{c.line}</span>
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1 text-[0.95rem] text-ink/75">
                  {c.covers.map((x) => (
                    <span key={x} className="after:ml-3 after:text-brand after:content-['/'] last:after:content-none">
                      {x}
                    </span>
                  ))}
                </span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={22}
                  strokeWidth={2}
                  className="hidden text-brand transition-transform group-hover:translate-x-1 lg:block"
                />
              </Link>
            </li>
          ))}
        </ol>
      </PageSection>

      <CtaSection />
    </>
  );
}
