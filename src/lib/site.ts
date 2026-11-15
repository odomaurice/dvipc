/**
 * Every contact detail on the site comes from here, so filling one in lights
 * it up in the footer, the call-to-action band and the WhatsApp button at
 * once.
 *
 * All of these are open questions in docs/BRIEF.md (section 6, gap list G).
 * They stay null until DVIPC confirms them: an earlier draft's
 * info@danvickipconsult.com was never confirmed as a working inbox, so it is
 * deliberately not used.
 */

export const SITE = {
  /** As set in the logo artwork. The registered spelling is gap question A1. */
  name: "DanVick Intellectual Property Consult",
  short: "DVIPC",
  academy: "DVIPC Academy",
  tagline: "Protecting Innovation. Preserving Creativity. Empowering Growth.",
  /** Confirmed: Nigeria. A city or office address is not yet confirmed. */
  location: "Nigeria",
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
  email: null,
  phone: null,
  whatsapp: null,
  address: null,
  hours: [],
  socials: [],
};

export const hasDirectContact = Boolean(
  CONTACT.email || CONTACT.phone || CONTACT.whatsapp,
);
