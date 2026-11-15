import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import { HomeAcademy, HomeFounder, HomeIntro, HomeServices } from "@/components/HomeSections";

// Brief 4.2: the hero, then a short introduction to each part of DVIPC,
// each handing off to its own page.
export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HomeAcademy />
      <HomeFounder />
      <CtaSection />
    </>
  );
}
