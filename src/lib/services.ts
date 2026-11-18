/**
 * DVIPC's service catalogue, from the 18 November 2026 addendum in
 * docs/BRIEF.md. The service pages, the homepage teaser and the registration
 * form all read from here, so wording is changed in one place.
 *
 * Open questions in the addendum are respected: industrial designs are
 * "advisory and filing support", valuation is "IP valuation advisory", and no
 * PSC or beneficial-ownership filings are listed.
 */

export type Service = {
  id: string;
  title: string;
  /** Short name for tabs, menus and the registration form. */
  short: string;
  /** Sub-heading, where the addendum gives one. */
  strap?: string;
  intro: string;
  items: string[];
  /** CTA label, from the brief's CTA framework (4.11) where one fits. */
  cta: string;
};

/** The four service categories, in the addendum's recommended order. */
export const CATEGORIES = [
  {
    n: "01",
    title: "Intellectual Property Services",
    line: "Protect your ideas, inventions, brands, creative works, and designs.",
    href: "/services/intellectual-property",
    covers: ["Trademarks", "Patents", "Copyright", "Industrial designs"],
  },
  {
    n: "02",
    title: "Business Registration & Corporate Services",
    line: "Establish, structure, and maintain your business through CAC services.",
    href: "/services/business-registration",
    covers: ["CAC pre-incorporation", "Post-incorporation", "Corporate compliance"],
  },
  {
    n: "03",
    title: "IP Strategy & Commercialization",
    line: "Manage, commercialize, and maximize the value of intellectual assets.",
    href: "/services/ip-strategy",
    covers: ["IP audits", "Portfolio management", "Trade secrets", "Licensing", "Technology transfer"],
  },
  {
    n: "04",
    title: "IP Education & Capacity Building",
    line: "Learn, develop expertise, and build an IP-conscious community through DVIPC Academy.",
    href: "/services/training",
    covers: ["DVIPC Academy", "Workshops", "Webinars", "Institutional training"],
  },
] as const;

export const IP_INTRO =
  "Protecting an idea is only the beginning. We help individuals, businesses, innovators, creators, and institutions identify, protect, manage, and maximize the value of their intellectual assets.";

/** Category 01: registration of the four registrable rights. */
export const IP_REGISTRATION: Service[] = [
  {
    id: "trademarks",
    title: "Trademark Registration & Brand Protection",
    short: "Trademarks",
    intro:
      "We help businesses protect the distinctive identities that set them apart in the marketplace. Our services cover trademark searches, classification, application preparation, registration support, opposition-related advisory, and trademark portfolio management.",
    items: [
      "Trademark availability searches",
      "Trademark application and registration",
      "Nice Classification advisory",
      "Trademark opposition support",
      "Trademark renewal advisory",
      "Brand protection strategy",
      "Trademark portfolio management",
    ],
    cta: "Register My Trademark",
  },
  {
    id: "patents",
    title: "Patent Filing & Prosecution",
    short: "Patents",
    intro:
      "We support inventors, researchers, entrepreneurs, and technology-driven businesses in navigating the patent protection process: assessing inventions, understanding patentability requirements, preparing filing documentation, and pursuing appropriate protection strategies.",
    items: [
      "Preliminary patentability assessment",
      "Invention disclosure advisory",
      "Patent application preparation and filing support",
      "Patent prosecution support",
      "Patent portfolio advisory",
      "Patent commercialization guidance",
    ],
    cta: "Protect My Invention",
  },
  {
    id: "copyright",
    title: "Copyright Registration & Creative Rights Protection",
    short: "Copyright",
    intro:
      "We assist authors, publishers, creatives, educators, businesses, and digital content creators in understanding and protecting their copyright interests, with guidance on registration, ownership, licensing, assignment, and management of creative works.",
    items: [
      "Copyright registration support",
      "Copyright ownership advisory",
      "Copyright licensing and assignment",
      "Creative rights management",
      "Copyright commercialization advisory",
      "Copyright awareness and education",
    ],
    cta: "Protect My Work",
  },
  {
    id: "industrial-designs",
    title: "Industrial Design Registration & Protection",
    short: "Industrial designs",
    strap: "Protecting the appearance and aesthetic appeal of products.",
    intro:
      "The appearance of a product can be as commercially valuable as its technical function. We assist designers, manufacturers, entrepreneurs, and businesses in understanding and protecting the visual features that distinguish their products in the marketplace.",
    items: [
      "Industrial design protection advisory",
      "Preliminary registrability assessment",
      "Industrial design application preparation and filing support",
      "Design portfolio management",
      "Industrial design protection strategy",
      "Advisory on design ownership and commercialization",
    ],
    cta: "Protect My Design",
  },
];

/** Category 03: managing and commercializing intellectual assets. */
export const IP_STRATEGY: Service[] = [
  {
    id: "portfolio",
    title: "IP Portfolio Management & Strategic Advisory",
    short: "Portfolio & strategy",
    intro:
      "We help organizations move beyond individual registrations to develop a structured approach to identifying, managing, protecting, and leveraging their intellectual property assets.",
    items: [
      "Intellectual property audits",
      "IP portfolio reviews",
      "IP strategy development",
      "IP asset identification",
      "IP ownership and documentation advisory",
      "IP commercialization planning",
      "Licensing and assignment advisory",
    ],
    cta: "Book an Advisory Session",
  },
  {
    id: "trade-secrets",
    title: "Trade Secrets & Confidential Business Information",
    short: "Trade secrets",
    intro:
      "We help businesses identify commercially valuable confidential information and develop appropriate strategies for protecting their proprietary knowledge, processes, formulas, methods, and business information.",
    items: [
      "Trade secret identification",
      "Confidentiality and non-disclosure advisory",
      "Trade secret protection strategies",
      "Employee and business confidentiality frameworks",
      "Trade secret management advisory",
    ],
    cta: "Protect My Business Information",
  },
  {
    id: "commercialization",
    title: "IP Commercialization, Licensing & Technology Transfer",
    short: "Commercialization",
    intro:
      "Intellectual property should create value beyond ownership. We help innovators, businesses, and institutions explore opportunities to commercialize their intellectual assets through strategic partnerships, licensing, and technology transfer.",
    items: [
      "IP commercialization strategies",
      "Licensing advisory",
      "Assignment advisory",
      "Technology transfer support",
      "IP valuation advisory",
      "Innovation-to-market strategies",
    ],
    cta: "Explore IP Commercialization",
  },
];

/** Category 02: CAC business registration and corporate support. */
export const CAC_INTRO =
  "Establishing a business involves more than choosing a name. It requires the right legal structure, appropriate registration, and ongoing corporate compliance. DVIPC assists entrepreneurs, startups, SMEs, and established businesses with Corporate Affairs Commission (CAC) pre-incorporation and post-incorporation matters.";

export const CAC_SCOPE_NOTE =
  "The precise scope of services will depend on the applicable CAC requirements and the client's corporate structure.";

export const CAC: Service[] = [
  {
    id: "pre-incorporation",
    title: "Pre-Incorporation Services",
    short: "Pre-incorporation",
    strap: "Helping entrepreneurs establish their businesses on a sound legal foundation.",
    intro: "Helping entrepreneurs establish their businesses on a sound legal foundation.",
    items: [
      "Business name availability search and reservation",
      "Company name availability search and reservation",
      "Business name registration",
      "Private company limited by shares incorporation",
      "Company incorporation documentation",
      "Preparation and filing of incorporation documents",
      "Advisory on appropriate business structures",
      "Guidance on objects and scope of business activities",
      "Shareholding and ownership structure advisory",
      "Registration of relevant business particulars",
    ],
    cta: "Register My Business",
  },
  {
    id: "post-incorporation",
    title: "Post-Incorporation Services",
    short: "Post-incorporation",
    strap: "Supporting businesses beyond incorporation to maintain proper corporate records and meet statutory obligations.",
    intro: "Supporting businesses beyond incorporation to maintain proper corporate records and meet statutory obligations.",
    items: [
      "Filing of annual returns",
      "Changes in directors and company secretaries",
      "Changes in registered office address",
      "Changes in shareholding and allotment of shares",
      "Increase or reduction of share capital",
      "Changes to company particulars",
      "Filing of resolutions and statutory notices",
      "Changes to company name",
      "Alteration of memorandum and articles of association",
      "Company status searches and corporate information retrieval",
      "Business name changes and updates",
      "Corporate compliance advisory",
    ],
    cta: "Request Corporate Support",
  },
  {
    id: "structuring",
    title: "Business Structuring & Corporate Advisory",
    short: "Structuring & advisory",
    intro:
      "We provide guidance to entrepreneurs and businesses seeking to establish appropriate legal structures, organize ownership arrangements, and maintain sound corporate governance practices.",
    items: [
      "Business structure advisory",
      "Company formation guidance",
      "Shareholding and ownership structure advisory",
      "Corporate documentation",
      "Corporate compliance support",
      "Business restructuring advisory",
    ],
    cta: "Book a Consultation",
  },
];
