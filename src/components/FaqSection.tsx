"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Every answer is assembled from statements in docs/BRIEF.md. Pricing,
// turnaround times and jurisdictions are open questions there (gap list B),
// so they are not answered here.
const ITEMS = [
  {
    q: "What does DVIPC do?",
    a: "DVIPC works on two connected fronts. Through IP consulting and protection, we help businesses, innovators, creators, and institutions identify, protect, manage, and commercialize their intellectual property. Through IP education, our Academy makes intellectual property knowledge accessible at the grassroots.",
  },
  {
    q: "Is intellectual property only for lawyers and big companies?",
    a: "No. Intellectual property is not exclusively for lawyers, large corporations, or established innovators. Everyone who creates, innovates, brands, or produces original work can benefit from understanding it, from children and young creators to small business owners and community innovators.",
  },
  {
    q: "What can DVIPC help me protect?",
    a: "Our four core services cover patents, trademarks and brands, copyright and creative rights, and IP portfolio management and advisory. Industrial designs and trade secrets are also part of our expertise, as are commercialization and licensing.",
  },
  {
    q: "What is DVIPC Academy?",
    a: "DVIPC Academy is the educational arm of DanVick Intellectual Property Consult. It runs initiatives such as the IP Adventure Series, IP Explorer Club, the Train-the-Teacher Programme, the Summer School, and the Young Lawyers' IP Hub, alongside webinars, workshops, awareness campaigns, and publications.",
  },
  {
    q: "How are Academy programmes delivered?",
    a: "Through online courses and training, virtual webinars and Google Meet sessions, physical workshops and seminars, school-based clubs, teacher training, mentorship, educational publications, and WhatsApp learning communities.",
  },
  {
    q: "Who leads DVIPC?",
    a: "DVIPC is led by its founder and Lead Consultant, Barr. Onyekachi Eriobu-Aniede: a legal practitioner with over 15 years post-call experience, a Master of Intellectual Property, and a WIPO Academy alumnus.",
  },
  {
    q: "Where is DVIPC based?",
    a: "DVIPC is a Nigeria-based business with African intellectual property education and development ambitions.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FaqSection() {
  // One answer open at a time, so the list never jumps under the reader.
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section
      id="faq"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionCaption>Questions</SectionCaption>
          <h2 className="mt-6 heading-xl">
            Questions, <em className="text-brand">answered</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-soft">
            What DVIPC does, who it is for, and how DVIPC Academy works.
          </p>
        </div>

        <ul>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={item.q}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.03, ease }}
                className="overflow-hidden border-t border-ink/15 last:border-b"
              >
                <button
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="font-serif text-2xl leading-tight font-medium sm:text-[1.7rem]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition duration-300 ${
                      isOpen ? "rotate-45 bg-brand text-brand-fg" : "bg-brand-blush text-brand"
                    }`}
                  >
                    <HugeiconsIcon icon={Add01Icon} size={20} strokeWidth={2.4} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.32, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-base leading-8 text-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
