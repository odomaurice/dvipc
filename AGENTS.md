<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# DVIPC project rules

The block above is managed by `next dev`; everything below it is ours and
survives regeneration. [`README.md`](README.md) explains the reasoning: this is
the short list of things that go wrong when they are not followed.

## Before saying it works

- `npm run build` and `npx eslint src/` must both be clean. The build runs
  TypeScript; lint is not part of it.
- Claims about layout, animation or interaction need a browser, not a
  typecheck. See "Checking it in a browser" in the README.

## Content

- **No em dashes** (the long dash) anywhere in copy, comments or docs. Use a comma,
  colon or full stop, and "to" for ranges ("8AM to 4PM"). The one exception
  is the `next dev` block at the top of this file, which Next.js rewrites.
- Every claim comes from the brief in [`docs/BRIEF.md`](docs/BRIEF.md),
  including its 18 November addendum (services, CAC, contact details), which
  wins where the two differ. Use only what it marks **[CONFIRMED]**. Anything **[IMPLIED]** is worded as
  expertise, not as a service offered, until DVIPC confirms it; anything
  **[MISSING]** is left out, never filled in.
- Never publish the earlier drafts' invented material: the fictional
  testimonials, the placeholder staff (David Adebayo, Grace Nwosu, Chidinma
  Okafor), the unverified "500+" and "100+" figures, or
  `info@danvickipconsult.com`.
- The brand is written **DanVick Intellectual Property Consult**, as in the
  logo, and **DVIPC** for short; the educational arm is **DVIPC Academy**. The
  registered spelling is still open (brief gap A1).
- The founder is **Barr. Onyekachi Eriobu-Aniede**, Lead Consultant & Founder.
  Copy about the founder uses the name or the title, not pronouns.
- Contact details live only in [`src/lib/site.ts`](src/lib/site.ts). Phone,
  email (`info@danvickipc.com`) and address are confirmed; WhatsApp, hours and
  socials stay empty until DVIPC confirms them. Do not assume the phone line
  is on WhatsApp.
- Service wording lives only in [`src/lib/services.ts`](src/lib/services.ts).
  Pages, the homepage teaser and the registration form read from it. Respect
  the addendum's open questions: industrial designs are "advisory and filing
  support", valuation is "advisory", and no PSC or beneficial-ownership
  filings are listed.

## Pages and sections

- The routes follow the brief's architecture (4.1). The page list lives in
  [`src/lib/nav.ts`](src/lib/nav.ts): add a route there and it appears in the
  header or footer. Do not add a `/blog` until real articles exist.
- The header, backdrop and footer are in the root layout. A page renders only
  its own sections.
- Every inner page opens with `PageHero` (navy band, breadcrumb, the page's
  `h1`). Build the rest from `content.tsx` (`PageSection`, `RuledList`,
  `SlashList`, `Actions`) before writing a new layout.
- Every page exports `metadata` with a `title`; the layout adds "| DVIPC".
- Every `<section>` needs `data-nav-tone` and `data-nav-bg`, or the header
  loses its colour over it. Every page must open on a dark band: the header
  starts dark.
- Open sections with `SectionCaption`. Numbered folios (`index`) are for the
  homepage teasers only.
- Calls to action that ask for contact go to `/contact`; ones that sign a
  visitor up for a service or programme go to `/register`, optionally with
  `?service=<short name>` to preselect it.
- `/register` has no backend: it composes an email to the confirmed inbox.
  Replace `submit` in `RegisterForm` with an API call when one exists, and add
  a privacy notice before storing anything.

## Design

- **Palette from the logo only**: maroon `#800000` ("DV"), navy `#010427`
  ("IPC"), white. `brand-rose` is a tint of the maroon for accents on navy and
  maroon grounds, never on white.
- **Editorial, not app-like.** Section headlines use `heading-xl` /
  `heading-md` (Cormorant Garamond) with an italic accent word; body and labels
  are Poppins. Buttons use the `btn` utility. Corners are square.
- **The background is the column guides** (`PageBackdrop` + `ColumnGuides`):
  faint vertical hairlines on the content grid. Only the hero repeats them on a
  coloured band.
- **No decorative gradients or glows.** Flat fills only.
- **No frames.** No outlined boxes or cards floating on visible panels. Lists
  are separated by hairline rules; emphasis is a flat tinted fill.
- The slash (the diagonal cut through "DV", the `slash` utility) is the one
  recurring shape. Do not add others.
- Light theme only.

## Images

- Everything on the page is a cropped, resized WebP in `public/brand/`. Check
  the file signature, not the extension.
- The logo is cut out of the JPG master with a colour-to-alpha pass, in a
  colour and an all-white version. Use `Logo`; do not recolour it with CSS
  filters.
- `sizes` must match the real rendered width, not a guessed `vw`.
- After replacing an image, clear `.next/cache/images` **and**
  `.next/dev/cache/images`: `npm run dev` keeps its own.
- Nothing unreferenced in `public/`, and no source masters beside derivatives.
  The masters are kept outside the repo, in `../dvipc-assets/`.

## React

- No `setState` in an effect body; the lint rule is an error. Use
  `useSyncExternalStore` for a hydration-time value, or let `ResizeObserver`
  fire on `observe`.

## Windows, and this shell

- sharp holds its source file open: read into a Buffer before writing back to
  the same path, or the write fails with `UNKNOWN`/`EPERM`.
- Git Bash heredocs and `node -e` break on the apostrophes in this repo's
  prose. Write the script to a file and run the file.
- Stop `next start` before rebuilding; it holds `.next` open. Stopping the
  `npx` wrapper can leave the Node server running: check the port is free.

## Do not invent commitments

Prices, fees, turnaround times, jurisdictions, legal representation, plan
entitlements and legal wording are decisions for DVIPC, not drafting choices.
Leave a marked gap and ask. The open ones are listed under "Known gaps" in the
README and in the brief's gap list.
