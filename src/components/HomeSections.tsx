import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";
import { Actions, RuledList } from "@/components/content";
import { CATEGORIES } from "@/lib/services";

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
              body: "IP registration and protection, CAC business registration, IP management, advisory, and commercialization.",
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
              Our services
            </SectionCaption>
            <h2 className="mt-6 heading-xl">
              From incorporation to{" "}
              <em className="text-brand-rose">protected assets</em>
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/85">
            Intellectual property services are our specialism, complemented
            by CAC business registration, so we can serve a business from
            establishment through brand protection, IP management, and growth.
          </p>
        </div>

        {/* Named one by one, so every service is visible from the homepage. */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {HOME_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="font-serif text-2xl text-brand-rose italic">{g.n}</p>
              <h3 className="mt-3 heading-md">{g.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-white/80">{g.line}</p>
              <div className="mt-8">
                <RuledList tone="navy" columns={1} items={g.items} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-x-12 border-t border-white/20 pt-10 sm:grid-cols-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-white/70 uppercase sm:col-span-2">
            Also from DVIPC
          </p>
          {CATEGORIES.slice(2).map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group mt-5 flex items-baseline justify-between gap-6 transition-colors hover:text-brand-rose"
            >
              <span>
                <span className="block font-serif text-2xl font-medium">{c.title}</span>
                <span className="mt-1 block text-[0.95rem] leading-7 text-white/75">{c.line}</span>
              </span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
                className="shrink-0 text-brand-rose transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <Actions tone="navy" primary={{ label: "Request IP Support", href: "/register" }} secondary={{ label: "All services", href: "/services" }} />
        </div>
      </div>
    </section>
  );
}

// The homepage names the flagship services individually (addendum, 18 Nov):
// the four registrable IP rights, and CAC pre- and post-incorporation.
const IP_HREF = "/services/intellectual-property";
const CAC_HREF = "/services/business-registration";
const HOME_GROUPS = [
  {
    n: "01",
    title: "Intellectual Property Services",
    line: "Protect your ideas, inventions, brands, creative works, and designs.",
    items: [
      { title: "Trademark Registration & Brand Protection", body: "Availability searches, Nice Classification, registration, opposition and renewal.", href: IP_HREF },
      { title: "Patent Filing & Prosecution", body: "Patentability assessment, application preparation, filing and prosecution support.", href: IP_HREF },
      { title: "Copyright Registration & Creative Rights", body: "Registration, ownership, licensing and assignment of creative works.", href: IP_HREF },
      { title: "Industrial Design Registration & Protection", body: "Protecting the appearance and aesthetic appeal of products.", href: IP_HREF },
    ],
  },
  {
    n: "02",
    title: "CAC Pre- & Post-Incorporation",
    line: "Establish, structure, and maintain your business through Corporate Affairs Commission (CAC) services.",
    items: [
      { title: "Pre-Incorporation Services", body: "Name searches and reservation, business name registration, and company incorporation.", href: CAC_HREF },
      { title: "Post-Incorporation Services", body: "Annual returns, changes to directors, shareholding and particulars, and compliance.", href: CAC_HREF },
      { title: "Business Structuring & Corporate Advisory", body: "Business structure, ownership arrangements, and corporate governance.", href: CAC_HREF },
    ],
  },
];

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
            width={896}
            height={1120}
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
