import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Clock01Icon,
  Location05Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import FaqSection from "@/components/FaqSection";
import PageHero from "@/components/PageHero";
import { Label, PageSection, RuledList } from "@/components/content";
import { CONTACT, SITE, hasDirectContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with DVIPC for consultation, training, or partnership.",
};

// The enquiry types of brief 4.11, grouped. There is no form: the brief has
// no confirmed form recipient (6.2), so enquiries go to the details below
// once they are confirmed.
const ENQUIRIES = [
  { title: "IP consultation", body: "Trademarks, patents, copyright, portfolio management and advisory.", href: "/services" },
  { title: "Commercialization & advisory", body: "Licensing, commercialization planning and IP strategy.", href: "/commercialization" },
  { title: "Training", body: "Institutional, professional and customized IP training.", href: "/training" },
  { title: "DVIPC Academy", body: "Programmes for students, educators and young lawyers.", href: "/academy" },
  { title: "School partnerships", body: "Bringing IP Explorer Club to your school.", href: "/academy/ip-explorer-club" },
  { title: "Educational partnerships", body: "IP Adventure and other learning resources.", href: "/academy/ip-adventure" },
];

const row = "flex items-start gap-4 border-t border-ink/15 py-5 text-lg";
const icon = "mt-1 shrink-0 text-brand";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact DVIPC"
        title="Let's talk about what you"
        accent="create."
        lead="Connect with DVIPC for consultation, training, or partnership."
      />

      <PageSection caption="How we can help" title="What would you like to" accent="discuss?">
        <div className="grid gap-16 lg:grid-cols-[7fr_5fr]">
          <RuledList items={ENQUIRIES} columns={2} />

          <div>
            <Label>Reach us</Label>
            <ul className="mt-5 border-b border-ink/15">
              <li className={row}>
                <HugeiconsIcon icon={Location05Icon} size={20} strokeWidth={1.8} className={icon} />
                {CONTACT.address ?? SITE.location}
              </li>
              {CONTACT.email && (
                <li className={row}>
                  <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.8} className={icon} />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-brand">{CONTACT.email}</a>
                </li>
              )}
              {CONTACT.phone && (
                <li className={row}>
                  <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.8} className={icon} />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-brand">{CONTACT.phone}</a>
                </li>
              )}
              {CONTACT.whatsapp && (
                <li className={row}>
                  <HugeiconsIcon icon={WhatsappIcon} size={20} strokeWidth={1.8} className={icon} />
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                    WhatsApp
                  </a>
                </li>
              )}
              {CONTACT.hours.map((slot) => (
                <li key={slot.days} className={row}>
                  <HugeiconsIcon icon={Clock01Icon} size={20} strokeWidth={1.8} className={icon} />
                  <span>
                    {slot.days}: {slot.time}
                  </span>
                </li>
              ))}
            </ul>
            {!hasDirectContact && (
              // A marked gap, not an invented address: see src/lib/site.ts.
              <p className="mt-8 bg-brand-blush p-6 text-base leading-7 text-ink/80">
                Our phone, email and office details are being confirmed and
                will appear here shortly.
              </p>
            )}
          </div>
        </div>
      </PageSection>

      <FaqSection />
    </>
  );
}
