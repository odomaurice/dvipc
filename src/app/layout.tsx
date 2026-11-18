import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import PageBackdrop from "@/components/PageBackdrop";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import "./globals.css";

// Body copy and labels are in Poppins. Headlines are in Cormorant Garamond,
// with its italic for accent words.
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.short} | ${SITE.name}`,
    template: `%s | ${SITE.short}`,
  },
  description:
    "DVIPC is an intellectual property consulting and advisory firm that helps innovators, creators, businesses, institutions and communities identify, protect, manage and commercialize intellectual assets, while advancing IP education at the grassroots through DVIPC Academy.",
  icons: {
    icon: [{ url: "/brand/dvipc-icon.webp", type: "image/webp" }],
    shortcut: "/brand/dvipc-icon.webp",
    apple: "/brand/dvipc-icon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <PageBackdrop />
        <SiteHeader />
        <main className="relative flex-1 overflow-x-clip font-sans text-ink">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
