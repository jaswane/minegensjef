import type { Metadata } from "next";
import { AboutSignature } from "@/components/about-signature";
import { EbutikkerCase } from "@/components/ebutikker-case";
import { GuidesIndex } from "@/components/guides-index";
import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { JsonLd } from "@/components/json-ld";
import { WaJourney } from "@/components/wa-journey";
import { organizationSchema, schemaGraph, webPageSchema, websiteSchema } from "@/lib/seo";

// Tittel, beskrivelse og Open Graph kommer fra layouten.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="innhold">
      <JsonLd
        data={schemaGraph(
          websiteSchema(),
          organizationSchema(),
          webPageSchema({
            title: "Min Egen Sjef – bygg en digital ekstrainntekt uten hype",
            description:
              "Lær å finne en nisje, bygge noe nyttig, få trafikk og tjene penger på nett over tid – ved siden av jobb og vanlig liv.",
            path: "/",
          }),
        )}
      />
      <Hero />
      <Steps />
      <WaJourney />
      <EbutikkerCase />
      <GuidesIndex />
      <AboutSignature />
    </main>
  );
}
