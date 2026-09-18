import { AboutSignature } from "@/components/about-signature";
import { EbutikkerCase } from "@/components/ebutikker-case";
import { GuidesIndex } from "@/components/guides-index";
import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { WaJourney } from "@/components/wa-journey";

export default function HomePage() {
  return (
    <main id="innhold">
      <Hero />
      <Steps />
      <WaJourney />
      <EbutikkerCase />
      <GuidesIndex />
      <AboutSignature />
    </main>
  );
}
