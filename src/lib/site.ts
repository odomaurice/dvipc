/**
 * Every contact detail on the site comes from here, so filling one in lights
 * it up in the footer, the contact page, the registration form and the
 * WhatsApp button at once.
 *
 * Phone, email and address were confirmed by DVIPC on 18 November 2026 (see
 * the addendum in docs/BRIEF.md). WhatsApp, hours and social links are still
 * open, so they stay empty. Note the confirmed inbox is info@danvickipc.com,
 * not the unconfirmed info@danvickipconsult.com of an earlier draft.
 */

export const SITE = {
  /** As set in the logo artwork. The registered spelling is gap question A1. */
  name: "DanVick Intellectual Property Consult",
  short: "DVIPC",
  academy: "DVIPC Academy",
  tagline: "Protecting Innovation. Preserving Creativity. Empowering Growth.",
  location: "Abuja, Nigeria",
} as const;

type Social = { label: string; href: string };

export const CONTACT: {
  email: string | null;
  /** International format, for example "+234 800 000 0000". */
  phone: string | null;
  /** Digits only, country code first, for wa.me links. */
  whatsapp: string | null;
  address: string | null;
  hours: { days: string; time: string }[];
  socials: Social[];
} = {
  email: "info@danvickipc.com",
  phone: "+234 812 284 0413",
  /** Not confirmed: the phone line is not assumed to be on WhatsApp. */
  whatsapp: null,
  address: "14 Iroko Street, SIL Estate, Mbora District, Citec, Abuja",
  hours: [],
  socials: [],
};

export const hasDirectContact = Boolean(
  CONTACT.email || CONTACT.phone || CONTACT.whatsapp,
);
