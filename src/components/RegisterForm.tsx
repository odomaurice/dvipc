"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { CONTACT } from "@/lib/site";
import { CAC, IP_REGISTRATION, IP_STRATEGY } from "@/lib/services";

/*
 * The registration form. There is no backend yet, so submitting composes an
 * email to DVIPC's confirmed inbox with every field filled in, and opens the
 * visitor's email app to send it. Nothing is stored or sent by the site.
 * Swap `submit` for a POST to an API route when DVIPC has one.
 */

const GROUPS: { label: string; options: string[] }[] = [
  { label: "Intellectual property services", options: IP_REGISTRATION.map((s) => s.short) },
  { label: "Business registration (CAC)", options: CAC.map((s) => s.short) },
  { label: "IP strategy & commercialization", options: IP_STRATEGY.map((s) => s.short) },
  {
    label: "Education & training",
    options: [
      "DVIPC Academy programme",
      "Summer School",
      "Young Lawyers' IP Hub",
      "IP Explorer Club (schools)",
      "Institutional training",
      "IP Adventure partnership",
    ],
  },
  { label: "Other", options: ["General enquiry"] },
];

const ALL = GROUPS.flatMap((g) => g.options);
const REGISTRANTS = ["Individual", "Business or startup", "School", "Institution or organization"];

// The ?service= query, read once on the client. A never-notifying subscribe
// keeps this out of an effect (see the React rules in AGENTS.md).
const noSubscribe = () => () => {};
const readService = () => {
  const s = new URLSearchParams(window.location.search).get("service");
  return s && ALL.includes(s) ? s : "";
};

const field =
  "mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand";
const label = "block text-[0.7rem] font-semibold tracking-[0.24em] text-soft uppercase";

export default function RegisterForm() {
  const preset = useSyncExternalStore(noSubscribe, readService, () => "");
  const [chosen, setChosen] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const service = chosen ?? preset;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Registering as: ${get("registrant")}`,
      get("organization") ? `Organization: ${get("organization")}` : null,
      `Interested in: ${get("service")}`,
      "",
      get("message"),
    ]
      .filter((line) => line !== null)
      .join("\n");
    const subject = `Registration: ${get("service")} (${get("name")})`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <label className="sm:col-span-1">
        <span className={label}>Full name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label>
        <span className={label}>Email *</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label>
        <span className={label}>Phone *</span>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="+234" className={field} />
      </label>
      <label>
        <span className={label}>Registering as *</span>
        <select name="registrant" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          {REGISTRANTS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <label>
        <span className={label}>Organization, business or school</span>
        <input name="organization" autoComplete="organization" className={field} />
      </label>
      <label>
        <span className={label}>I am interested in *</span>
        <select
          name="service"
          required
          value={service}
          onChange={(e) => setChosen(e.target.value)}
          className={field}
        >
          <option value="" disabled>
            Choose a service or programme
          </option>
          {GROUPS.map((g) => (
            <optgroup key={g.label} label={g.label}>
              {g.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className={label}>Tell us about your needs</span>
        <textarea
          name="message"
          rows={4}
          placeholder="For example: the name or mark you want to protect, the business you want to register, or the programme you are interested in."
          className={`${field} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-soft">
          Submitting opens your email app with your details filled in, ready to
          send to {CONTACT.email}.
        </p>
        <button type="submit" className="btn cursor-pointer bg-brand text-white hover:bg-brand-navy">
          Submit registration
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
        </button>
      </div>

      {sent && (
        <p role="status" className="bg-brand-blush p-5 text-base leading-7 text-ink sm:col-span-2">
          Your email app should now be open with your registration. If it did
          not open, email us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-brand underline-offset-4 hover:underline">
            {CONTACT.email}
          </a>
          {CONTACT.phone && (
            <>
              {" "}or call{" "}
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="font-semibold text-brand underline-offset-4 hover:underline">
                {CONTACT.phone}
              </a>
            </>
          )}
          .
        </p>
      )}
    </form>
  );
}
