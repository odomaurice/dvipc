import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";
import { Actions, RuledList } from "@/components/content";

/*
 * The homepage's teasers (brief 4.2): each introduces one part of DVIPC and
 * hands off to its page, where the full content lives.
 */

const wrap = "mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8";

export function HomeIntro() {
  return (
    <section data-nav-tone="light" data-nav-bg="var(--canvas)" className="relative py-24 md:py-32">
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <SectionCaption index={1}>Who we are</SectionCaption>
            <h2 className="mt-6 heading-xl">
              More than a <em className="text-brand">registration agency</em>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-soft lg:pt-14">
            <p>
              DanVick Intellectual Property Consult (DVIPC) is a Nigeria-based
              intellectual property consulting and advisory firm, helping
              innovators, creators, businesses, institutions, and communities
              identify, protect, manage, and commercialize their intellectual
              assets.
            </p>
            <p>
              Through DVIPC Academy, we also take IP knowledge to the
              grassroots.
            </p>
            <Actions primary={{ label: "Discover Our Story", href: "/about" }} />
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {[
            {
              n: "01",
              title: "IP Consulting & Protection",
              body: "Registration, protection, management, advisory, and commercialization.",
              href: "/services",
              cta: "Request IP Support",
              cls: "bg-brand-navy",
            },
            {
              n: "02",
              title: "IP Education & Empowerment",
              body: "DVIPC Academy, IP Explorer Club, IP Adventure, training, and grassroots awareness.",
              href: "/academy",
              cta: "Explore Academy",
              cls: "bg-brand",
            },
          ].map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className={`group relative overflow-hidden p-8 text-white sm:p-10 ${p.cls}`}
            >
              <span
                aria-hidden
                className="slash pointer-events-none absolute -right-6 -bottom-8 h-44 w-32 bg-white/8"
              />
              <span className="relative font-serif text-2xl text-brand-rose italic">{p.n}</span>
              <span className="relative mt-6 block heading-md">{p.title}</span>
              <span className="relative mt-4 block max-w-md text-base leading-7 text-white/85">
                {p.body}
              </span>
              <span className="relative mt-8 inline-flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.16em] uppercase">
                <span className="border-b border-white/40 pb-1 transition-colors group-hover:border-white">
                  {p.cta}
                </span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeServices() {
  return (
    <section
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className="relative bg-brand-navy py-24 text-white md:py-32"
    >
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-[6fr_6fr] lg:items-end lg:gap-16">
          <div>
            <SectionCaption tone="dark" index={2}>
              IP services
            </SectionCaption>
            <h2 className="mt-6 heading-xl">
              Practical registration, protection and{" "}
              <em className="text-brand-rose">advisory</em>
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/85">
            From patents and trademarks to copyrights and strategic IP
            advisory, we help secure and maximize the value of intellectual
            assets.
          </p>
        </div>
        <div className="mt-16">
          <RuledList
            tone="navy"
            items={[
              { title: "Patent Filing & Prosecution", href: "/services" },
              { title: "Trademark Registration & Brand Protection", href: "/services" },
              { title: "Copyright Registration & Creative Rights", href: "/services" },
              { title: "IP Portfolio Management & Advisory", href: "/services" },
              { title: "Commercialization & Advisory", href: "/commercialization" },
              { title: "Training & Capacity Building", href: "/training" },
            ]}
          />
        </div>
        <div className="mt-12">
          <Actions tone="navy" primary={{ label: "Request IP Support", href: "/contact" }} secondary={{ label: "All services", href: "/services" }} />
        </div>
      </div>
    </section>
  );
}

export function HomeAcademy() {
  return (
    <section
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-maroon)"
      className="relative bg-brand-maroon py-24 text-white md:py-32"
    >
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-[6fr_6fr] lg:items-end lg:gap-16">
          <div>
            <SectionCaption tone="dark" index={3}>
              DVIPC Academy
            </SectionCaption>
            <h2 className="mt-6 heading-xl">
              IP knowledge, accessible to <em className="text-brand-rose">everyone</em>
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/90">
            Our educational arm, dedicated to democratizing intellectual
            property knowledge and promoting innovation awareness at the
            grassroots.
          </p>
        </div>
        <div className="mt-16">
          <RuledList
            tone="maroon"
            items={[
              { title: "IP Explorer Club", body: "School-based IP awareness for primary and secondary school learners.", href: "/academy/ip-explorer-club" },
              { title: "IP Adventure", body: "A storybook introducing children and teenagers to IP.", href: "/academy/ip-adventure" },
              { title: "DVIPC Academy Summer School", body: "A structured five-day IP learning experience for young learners.", href: "/academy#initiatives" },
              { title: "Young Lawyers' IP Hub", body: "Practical IP learning and professional development for young lawyers.", href: "/academy#initiatives" },
            ]}
          />
        </div>
        <div className="mt-12">
          <Actions tone="maroon" primary={{ label: "Explore Programmes", href: "/academy" }} secondary={{ label: "Learning resources", href: "/resources" }} />
        </div>
      </div>
    </section>
  );
}

export function HomeFounder() {
  return (
    <section data-nav-tone="light" data-nav-bg="var(--canvas)" className="relative py-24 md:py-32">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
        <div className="relative mx-auto w-full max-w-sm">
          <span aria-hidden className="slash absolute -top-6 -left-6 h-44 w-32 bg-brand" />
          <Image
            src="/brand/founder.webp"
            alt="Barr. Onyekachi Eriobu-Aniede, Lead Consultant and Founder of DVIPC"
            width={600}
            height={891}
            sizes="(min-width: 640px) 384px, calc(100vw - 40px)"
            className="relative h-auto w-full"
          />
        </div>
        <div>
          <SectionCaption index={4}>Founder &amp; leadership</SectionCaption>
          <h2 className="mt-6 heading-xl">
            Barr. Onyekachi <em className="text-brand">Eriobu-Aniede</em>
          </h2>
          <p className="mt-3 text-lg font-semibold text-brand">Lead Consultant &amp; Founder</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-soft">
            Intellectual Property Professional, Policy Strategist, Trade
            Negotiator, Legal Practitioner, Educator and Author, with over 15
            years post-call experience and a Master of Intellectual Property.
          </p>
          <div className="mt-10">
            <Actions primary={{ label: "Meet Our Founder", href: "/founder" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
