"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Book02Icon,
  BookOpen01Icon,
  Comment01Icon,
  JusticeScale01Icon,
  LibraryIcon,
  Mail01Icon,
  Note01Icon,
  Search01Icon,
  TranslateIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 5.3 and 2.3. There is no blog or resource URL yet, so these are
// described, not linked.
const ASSETS = [
  { icon: BookOpen01Icon, kind: "Storybook", name: "IP Adventure", body: "Our featured book, introducing intellectual property through stories." },
  { icon: Note01Icon, kind: "Workbook", name: "IP Adventure Workbook", body: "The companion educational resource to IP Adventure." },
  { icon: Book02Icon, kind: "Textbook project", name: "Understanding Intellectual Property for Junior Secondary School", body: "An educational textbook project for junior secondary learners." },
  { icon: Mail01Icon, kind: "Newsletter", name: "IP to the Grassroots", body: "Our newsletter, taking IP knowledge to communities." },
  { icon: Comment01Icon, kind: "Series", name: "DVIPC IP Tips", body: "An educational content series of practical IP pointers." },
  { icon: TranslateIcon, kind: "Series", name: "A-Z Daily Word", body: "An IP vocabulary and knowledge series, one term at a time." },
  { icon: Search01Icon, kind: "Framework", name: "IP Spotting Framework™", body: "A learning tool and practical framework for identifying IP." },
  { icon: LibraryIcon, kind: "Training resource", name: "DVIPC Practice Lab™", body: "A practical IP training resource." },
  { icon: JusticeScale01Icon, kind: "Legal insight", name: "Case Law Reviews", body: "Simplified commentaries on IP decisions for practitioners, businesses, educators, and learners." },
];

// Brief 4.10: the knowledge-hub categories.
const SUBJECTS = [
  "Intellectual Property Basics",
  "Trademarks",
  "Patents",
  "Copyright",
  "Industrial Designs",
  "Trade Secrets",
  "IP Commercialization",
  "IP in Business",
  "IP Education",
  "IP & Policy",
  "Case Law Review",
  "Innovation & Entrepreneurship",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ResourcesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="resources"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <SectionCaption {...reveal(0)}>
              Resources &amp; insights
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 heading-xl"
            >
              A knowledge hub, <em className="text-brand">not a news feed</em>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.2)} className="text-lg leading-8 text-soft">
            Books, series, frameworks and case reviews that make intellectual
            property simple to understand and practical to use.
          </motion.p>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((a, i) => (
            <motion.li
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease }}
              className="flex gap-5 border-t border-ink/15 pt-6 pb-4"
            >
              <span className="shrink-0 pt-1 text-brand">
                <HugeiconsIcon icon={a.icon} size={24} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-[0.16em] text-soft uppercase">
                  {a.kind}
                </span>
                <span className="mt-1 block font-serif text-2xl leading-tight font-medium">
                  {a.name}
                </span>
                <span className="mt-2 block text-[0.95rem] leading-7 text-soft">
                  {a.body}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.div {...reveal(0.3)} className="mt-14">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-soft uppercase">
            Subjects we cover
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {SUBJECTS.map((s) => (
              <li
                key={s}
                className="text-[0.95rem] text-white after:ml-3 after:text-brand-rose after:content-['/'] last:after:content-none"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
