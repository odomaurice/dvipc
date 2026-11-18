/**
 * The site's pages, from the architecture in docs/BRIEF.md 4.1. The header
 * shows MAIN; the footer shows every group. There is no blog route yet:
 * no articles exist (see README, Known gaps).
 */

export type NavLink = {
  label: string;
  href: string;
  /** Other routes that count as this section, for the header highlight. */
  also?: string[];
};

export const MAIN: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Founder", href: "/founder" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Intellectual property", href: "/services/intellectual-property" },
      { label: "Business registration (CAC)", href: "/services/business-registration" },
      { label: "IP strategy & commercialization", href: "/services/ip-strategy" },
      { label: "Training & capacity building", href: "/services/training" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "DVIPC Academy", href: "/academy" },
      { label: "IP Explorer Club", href: "/academy/ip-explorer-club" },
      { label: "IP Adventure", href: "/academy/ip-adventure" },
      { label: "Resources & insights", href: "/resources" },
    ],
  },
  {
    title: "DVIPC",
    links: [
      { label: "About DVIPC", href: "/about" },
      { label: "Founder & leadership", href: "/founder" },
      { label: "Contact", href: "/contact" },
      { label: "Register", href: "/register" },
    ],
  },
];

const within = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/** True when the link's page, one of its children, or an `also` route is current. */
export const isActive = (pathname: string, link: NavLink) =>
  [link.href, ...(link.also ?? [])].some((href) => within(pathname, href));
