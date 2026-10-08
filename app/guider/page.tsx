import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Guider: fra nisje til inntekt",
  description:
    "Guidene på Min Egen Sjef går gjennom stegene fra idé til inntekt: nisjevalg, nettside, trafikk fra søk og affiliate.",
  path: "/guider/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Guider", path: page.path },
];

// Planlagte guider. Ingen lenker før guidene er publisert.
const guides = [
  {
    id: "nisje",
    category: "Nisje",
    title: "Slik finner du en nisje du faktisk orker å jobbe med",
    scope: "Hvordan du velger et tema du kan jobbe med i flere år, og sjekker at noen faktisk leter etter det.",
  },
  {
    id: "nettside",
    category: "Nettsider",
    title: "Slik bygger du en nettside i 2026",
    scope: "Hva det krever å sette opp et nettsted, og hvor AI hjelper og ikke hjelper.",
  },
  {
    id: "trafikk",
    category: "SEO og trafikk",
    title: "Slik får en ny nettside trafikk fra Google og AI-søk",
    scope: "Hvordan søk fungerer for et nytt nettsted, og hva du kan forvente de første månedene.",
  },
  {
    id: "inntekt",
    category: "Affiliate og inntekt",
    title: "Affiliate-nettverk, skatt og MVA",
    scope: "Artiklene om affiliate-nettverk, skatt og MVA fra forrige versjon av nettstedet oppdateres og publiseres her.",
  },
];

export default function GuidesPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Guider og artikler"
        title="Guider"
        lead={
          <>
            Guidene går gjennom stegene fra idé til inntekt. De skrives nå og publiseres her etter hvert. Til da
            finner du rekkefølgen og de viktigste rådene på{" "}
            <Link href="/start/" className="text-accent-soft underline underline-offset-4 hover:text-text">
              Start her
            </Link>
            .
          </>
        }
      />

      <div className="container-page py-14 lg:py-20">
        <ul className="border-b border-line">
          {guides.map((guide) => (
            <li
              key={guide.id}
              id={guide.id}
              className="grid scroll-mt-24 gap-3 border-t border-line py-8 lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-12"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase lg:col-span-3">
                {guide.category}
              </p>
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance lg:text-[2rem]">
                  {guide.title}
                </h2>
                <p className="mt-3 max-w-reading text-base leading-relaxed text-muted">{guide.scope}</p>
              </div>
              <p className="text-sm text-subtle lg:col-span-2 lg:text-right">Under arbeid</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
