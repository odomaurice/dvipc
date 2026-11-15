"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Briefcase01Icon,
  BulbIcon,
  CourtHouseIcon,
  PaintBoardIcon,
  Rocket01Icon,
  SchoolIcon,
  StudentIcon,
  TeacherIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 3.1 (audience and need) joined to 4.11 (the CTA for that visitor),
// split into the two journeys of section 4.
const JOURNEYS = [
  {
    title: "Protect",
    sub: "For visitors seeking IP registration, protection, or advisory services.",
    people: [
      {
        icon: Briefcase01Icon,
        who: "Entrepreneurs & business owners",
        need: "Brand protection, trademark registration, IP management, commercialization.",
        cta: "Register My Trademark",
        href: "/contact",
      },
      {
        icon: Rocket01Icon,
        who: "Startups & SMEs",
        need: "Early-stage IP identification, protection, strategy, and business growth.",
        cta: "Book an IP Consultation",
        href: "/contact",
      },
      {
        icon: BulbIcon,
        who: "Innovators & inventors",
        need: "Patent protection, invention assessment, and commercialization guidance.",
        cta: "Protect My Invention",
        href: "/contact",
      },
      {
        icon: PaintBoardIcon,
        who: "Creators & creative professionals",
        need: "Copyright protection, ownership, licensing, and creative rights management.",
        cta: "Protect My Work",
        href: "/contact",
      },
      {
        icon: UserGroupIcon,
        who: "Researchers & academic institutions",
        need: "IP protection, research commercialization, and institutional IP awareness.",
        cta: "Explore IP Commercialization",
        href: "/services",
      },
    ],
  },
  {
    title: "Learn",
    sub: "For visitors seeking IP knowledge, training, programmes, or community.",
    people: [
      {
        icon: StudentIcon,
        who: "Students & young people",
        need: "IP awareness, creativity, innovation, and entrepreneurship education.",
        cta: "Join DVIPC Academy",
        href: "/academy",
      },
      {
        icon: SchoolIcon,
        who: "Primary & secondary schools",
        need: "IP education, IP Explorer Clubs, learning resources, and teacher engagement.",
        cta: "Bring IP Explorer Club to Our School",
        href: "/academy#initiatives",
      },
      {
        icon: TeacherIcon,
        who: "Teachers & educators",
        need: "IP teaching resources, capacity building, and curriculum-support initiatives.",
        cta: "Explore IP Teaching Resources",
        href: "/resources",
      },
      {
        icon: CourtHouseIcon,
        who: "Legal practitioners & young lawyers",
        need: "IP professional development, practical training, and IP issue identification.",
        cta: "Join Young Lawyers' IP Hub",
        href: "/academy#initiatives",
      },
    ],
  },
];

// Brief 3.2.
const ALSO = [
  "Universities and research institutions",
  "Innovation hubs",
  "Government stakeholders",
  "Policymakers",
  "Public institutions",
  "Business associations",
  "Creative industry organizations",
  "Professional associations",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AudiencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="audiences"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>
          Who we help
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 max-w-4xl heading-xl"
        >
          IP is for everyone who <em className="text-brand">creates</em>
        </motion.h2>
        <motion.p
          {...reveal(0.2)}
          className="mt-6 max-w-2xl text-lg leading-8 text-soft"
        >
          Intellectual property is not exclusively for lawyers, large
          corporations, or established innovators. Find yourself below, and
          the next step that fits.
        </motion.p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {JOURNEYS.map((j, ji) => (
            <div key={j.title}>
              <motion.div {...reveal(0.25 + ji * 0.1)} className="flex items-baseline gap-4">
                <h3 className="heading-md">
                  {j.title}
                </h3>
                <p className="text-sm text-soft">{j.sub}</p>
              </motion.div>
              <ul className="mt-6 border-b border-ink/15">
                {j.people.map((p, i) => (
                  <motion.li
                    key={p.who}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease }}
                  >
                    <Link
                      href={p.href}
                      className="group flex items-start gap-5 border-t border-ink/15 px-1 py-6 transition-colors duration-300 hover:bg-brand-blush/60 sm:px-3"
                    >
                      <span
                        className={`shrink-0 pt-1 ${ji === 0 ? "text-brand-navy" : "text-brand"}`}
                      >
                        <HugeiconsIcon icon={p.icon} size={24} strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-serif text-2xl leading-tight font-medium">
                          {p.who}
                        </span>
                        <span className="mt-1 block text-[0.95rem] leading-7 text-soft">
                          {p.need}
                        </span>
                        <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-brand uppercase">
                          {p.cta}
                          <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={16}
                            strokeWidth={2}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div {...reveal(0.3)} className="mt-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-soft uppercase">
            Also for
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {ALSO.map((a) => (
              <li
                key={a}
                className="text-[0.95rem] text-ink/80 after:ml-3 after:text-brand after:content-['/'] last:after:content-none"
              >
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
