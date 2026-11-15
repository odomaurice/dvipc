"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Book02Icon,
  BookOpen01Icon,
  Calendar03Icon,
  CourtHouseIcon,
  JusticeScale01Icon,
  Megaphone01Icon,
  NewsIcon,
  SchoolIcon,
  TeacherIcon,
  Video01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 2.1: every programme and initiative, with its description.
const PROGRAMMES = [
  { icon: BookOpen01Icon, name: "IP Adventure Series", body: "An educational storybook initiative introducing children and teenagers to IP through relatable stories and practical examples." },
  { icon: SchoolIcon, name: "IP Explorer Club", body: "A school-based IP awareness initiative for primary and secondary school learners." },
  { icon: TeacherIcon, name: "Train-the-Teacher Programme", body: "Equips educators with the knowledge and tools to teach IP concepts effectively." },
  { icon: Calendar03Icon, name: "DVIPC Academy Summer School", body: "A structured IP learning programme for young learners, combining IP knowledge, creativity, innovation, and practical application." },
  { icon: CourtHouseIcon, name: "Young Lawyers' IP Hub", body: "A practical intellectual property learning and professional development community for young lawyers." },
  { icon: Video01Icon, name: "IP Webinars & Workshops", body: "Virtual and physical sessions on IP protection, registration, commercialization, and contemporary IP issues." },
  { icon: Megaphone01Icon, name: "IP Awareness Campaigns", body: "Public-facing initiatives to improve understanding of intellectual property rights." },
  { icon: Book02Icon, name: "IP Publications & Learning Resources", body: "Educational materials, storybooks, workbooks, newsletters, articles, and simplified IP content." },
  { icon: JusticeScale01Icon, name: "IP Case Law Review", body: "Reviews and simplified commentaries on IP decisions for practitioners, businesses, educators, and learners." },
];

const DELIVERY = [
  "Online courses and training",
  "Virtual webinars",
  "Google Meet sessions",
  "Physical workshops and seminars",
  "School-based clubs",
  "Teacher training",
  "Mentorship and professional development",
  "Educational publications and resources",
  "WhatsApp learning communities",
];

const TOPICS = [
  "Introduction to Intellectual Property",
  "Trademark registration and protection",
  "Patent protection and innovation",
  "Copyright and creative rights",
  "Industrial designs",
  "Trade secrets",
  "IP commercialization",
  "IP licensing",
  "IP portfolio management",
  "IP spotting and identification",
  "IP entrepreneurship",
  "Intellectual property in business",
  "Intellectual property for schools",
  "Intellectual property for educators",
  "IP issues in everyday legal practice",
  "Trademark filing and prosecution",
  "Trademark opposition",
  "Trademark classification",
  "IP policy and trade",
  "IP and innovation management",
];

const TOPICS_SHOWN = 10;
const ease = [0.22, 1, 0.36, 1] as const;

export default function AcademySection() {
  const [allTopics, setAllTopics] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  const topics = allTopics ? TOPICS : TOPICS.slice(0, TOPICS_SHOWN);

  return (
    <section
      id="academy"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-maroon)"
      className="relative isolate overflow-hidden bg-brand-maroon py-24 text-white md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <SectionCaption tone="dark" {...reveal(0)}>
              DVIPC Academy
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 heading-xl"
            >
              IP knowledge, accessible to{" "}
              <em className="text-brand-rose">everyone</em>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.2)} className="text-lg leading-8 text-white/90">
            DVIPC Academy is our educational arm, dedicated to democratizing
            intellectual property knowledge. It equips individuals and
            communities to understand, identify, protect, and leverage IP.
          </motion.p>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease }}
              className="border-t border-white/25 pt-6 pb-4"
            >
              <span className="block text-brand-rose">
                <HugeiconsIcon icon={p.icon} size={22} strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-tight font-medium">{p.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-white/90">{p.body}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div {...reveal(0.2)}>
            <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
              <HugeiconsIcon icon={NewsIcon} size={18} strokeWidth={2} />
              How we teach
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
              {DELIVERY.map((d) => (
                <li
                  key={d}
                  className="text-[0.95rem] text-white after:ml-3 after:text-brand-rose after:content-['/'] last:after:content-none"
                >
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal(0.3)}>
            <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
              <HugeiconsIcon icon={BookOpen01Icon} size={18} strokeWidth={2} />
              What we teach
            </h3>
            <ul id="academy-topics" className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
              {topics.map((t) => (
                <li
                  key={t}
                  className="text-[0.95rem] text-white after:ml-3 after:text-brand-rose after:content-['/'] last:after:content-none"
                >
                  {t}
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-expanded={allTopics}
              aria-controls="academy-topics"
              onClick={() => setAllTopics((v) => !v)}
              className="mt-4 cursor-pointer text-sm font-semibold text-brand-rose underline-offset-4 hover:underline"
            >
              {allTopics
                ? "Show fewer topics"
                : `Show all ${TOPICS.length} topics`}
            </button>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.35)}
          className="mt-14 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/academy#initiatives"
            className="btn bg-white text-brand hover:bg-brand-navy hover:text-white"
          >
            Explore Programmes
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
          </Link>
          <Link
            href="/contact"
            className="btn bg-white/10 text-white hover:bg-white/20"
          >
            Request Institutional Training
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
