"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  Calendar03Icon,
  CourtHouseIcon,
  SchoolIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 4.7 (IP Explorer Club), 4.8 (IP Adventure), the Summer School
// features of 2.1, and the Young Lawyers' IP Hub. No purchase link, price,
// schedule or registration link exists yet (all "missing" in the brief), so
// the Summer School and Young Lawyers CTAs are enquiries, and the other two
// lead to their own pages.
const INITIATIVES = [
  {
    id: "explorer-club",
    icon: SchoolIcon,
    name: "IP Explorer Club",
    lead: "Introducing IP education to schools and young innovators.",
    points: [
      "IP awareness for primary and secondary school learners",
      "Creativity and innovation development",
      "Training for teachers and school coordinators",
      "Partnerships with schools",
    ],
    cta: "Discover IP Explorer Club",
    href: "/academy/ip-explorer-club",
    tone: "navy",
  },
  {
    id: "ip-adventure",
    icon: BookOpen01Icon,
    name: "IP Adventure",
    lead: "Learning IP through stories and creativity.",
    points: [
      "A storybook introducing children and teenagers to intellectual property",
      "Relatable stories and practical examples",
      "Builds IP awareness and responsible ownership",
      "With a companion IP Adventure Workbook, as part of DVIPC Academy",
    ],
    cta: "Discover IP Adventure",
    href: "/academy/ip-adventure",
    tone: "blush",
  },
  {
    id: "summer-school",
    icon: Calendar03Icon,
    name: "DVIPC Academy Summer School",
    lead: "A structured five-day IP learning experience for young learners.",
    points: [
      "Daily sessions incorporating intellectual property knowledge",
      "Creativity, innovation, branding, and entrepreneurship activities",
      "Practical projects and assessments",
      "Certificates, subject to attendance and assessment requirements",
    ],
    cta: "Enquire About Summer School",
    href: "/contact",
    tone: "grey",
  },
  {
    id: "young-lawyers",
    icon: CourtHouseIcon,
    name: "Young Lawyers' IP Hub",
    lead: "Practical IP learning and professional development for young lawyers.",
    points: [
      "A community for practical intellectual property learning",
      "Professional development for young legal practitioners",
      "Identifying IP issues in everyday legal practice",
      "Trademark filing, prosecution, opposition, and classification",
    ],
    cta: "Join Young Lawyers' IP Hub",
    href: "/contact",
    tone: "maroon",
  },
] as const;

const TONES = {
  navy: { fill: "bg-brand-navy text-white", icon: "bg-brand text-white", lead: "text-brand-rose", text: "text-white/90", dot: "bg-brand-rose", cta: "bg-white text-brand-navy hover:bg-brand-blush" },
  maroon: { fill: "bg-brand text-white", icon: "bg-white text-brand", lead: "text-brand-rose", text: "text-white/90", dot: "bg-brand-rose", cta: "bg-white text-brand hover:bg-brand-blush" },
  blush: { fill: "bg-brand-blush text-ink", icon: "bg-brand text-white", lead: "text-brand", text: "text-ink/80", dot: "bg-brand", cta: "bg-brand text-white hover:bg-brand-maroon-dark" },
  grey: { fill: "bg-surface-2 text-ink", icon: "bg-brand-navy text-white", lead: "text-brand", text: "text-ink/80", dot: "bg-brand-navy", cta: "bg-brand-navy text-white hover:bg-brand-navy-light" },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function InitiativesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="initiatives"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>
          Featured initiatives
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 max-w-4xl heading-xl"
        >
          Taking IP to the <em className="text-brand">grassroots</em>
        </motion.h2>
        <motion.p
          {...reveal(0.2)}
          className="mt-6 max-w-2xl text-lg leading-8 text-soft"
        >
          From storybooks for children to a professional community for young
          lawyers, these are the initiatives at the heart of DVIPC Academy.
        </motion.p>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {INITIATIVES.map((item, i) => {
            const t = TONES[item.tone];
            return (
              <motion.article
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease }}
                className={`relative flex flex-col overflow-hidden p-8 sm:p-10 ${t.fill}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -bottom-10 font-serif text-[11rem] leading-none font-medium italic opacity-[0.08] select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className={`relative grid h-14 w-14 place-items-center ${t.icon}`}>
                  <HugeiconsIcon icon={item.icon} size={28} strokeWidth={1.8} />
                </span>
                <h3 className="relative mt-8 heading-md">
                  {item.name}
                </h3>
                <p className={`relative mt-3 text-lg leading-7 font-medium ${t.lead}`}>
                  {item.lead}
                </p>

                <ul className="relative mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className={`flex gap-3 text-[0.95rem] leading-7 ${t.text}`}>
                      <span aria-hidden className={`slash mt-2 h-3 w-2.5 shrink-0 ${t.dot}`} />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className={`relative mt-8 btn self-start ${t.cta}`}
                >
                  {item.cta}
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
