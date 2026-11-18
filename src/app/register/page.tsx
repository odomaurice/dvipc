import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Location05Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/RegisterForm";
import { Label, PageSection } from "@/components/content";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register with DVIPC for intellectual property services, CAC business registration, IP strategy and commercialization, or DVIPC Academy programmes.",
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Register" }]}
        eyebrow="Register with DVIPC"
        title="Tell us what you want to"
        accent="protect, register or learn."
        lead="Register for an intellectual property service, CAC business registration, IP advisory, or a DVIPC Academy programme, and we will get back to you."
      />

      <PageSection caption="Registration" title="Your" accent="details">
        <div className="grid gap-16 lg:grid-cols-[8fr_4fr]">
          <RegisterForm />

          <aside>
            <Label>Prefer to talk first?</Label>
            <ul className="mt-5 border-b border-ink/15 text-base">
              {CONTACT.phone && (
                <li className="flex items-start gap-4 border-t border-ink/15 py-5">
                  <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.8} className="mt-0.5 shrink-0 text-brand" />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-brand">{CONTACT.phone}</a>
                </li>
              )}
              {CONTACT.email && (
                <li className="flex items-start gap-4 border-t border-ink/15 py-5">
                  <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.8} className="mt-0.5 shrink-0 text-brand" />
                  <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-brand">{CONTACT.email}</a>
                </li>
              )}
              {CONTACT.address && (
                <li className="flex items-start gap-4 border-t border-ink/15 py-5 leading-7">
                  <HugeiconsIcon icon={Location05Icon} size={20} strokeWidth={1.8} className="mt-1 shrink-0 text-brand" />
                  {CONTACT.address}
                </li>
              )}
            </ul>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
