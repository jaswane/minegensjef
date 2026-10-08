import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Start her: slik bygger du en digital ekstrainntekt",
  description:
    "Fire steg i den rekkefølgen de faktisk tar tid: finn en nisje, bygg noe nyttig, få trafikk og tenk på inntekt til slutt.",
  path: "/start/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Start her", path: page.path },
];

const steps = [
  {
    id: "nisje",
    title: "Finn en nisje du orker å jobbe med i flere år",
    text: "Velg et tema du synes er interessant nok til å skrive om lenge, og der andre faktisk leter etter svar. Det tar tid før et nettsted får besøk, og interessen er det som holder deg i gang mens ingenting skjer. Sjekk at folk søker etter det du vil skrive om før du bygger noe.",
    link: "Om nisjevalg i guidene",
  },
  {
    id: "nettside",
    title: "Bygg noe som hjelper noen konkret",
    text: "Et nettsted blir nyttig når det løser et problem for leseren: svarer på et spørsmål, sammenligner alternativer eller gjør et valg enklere. AI gjør selve byggingen raskere, men gjør ikke innholdet nyttig av seg selv.",
    link: "Om å bygge nettsiden",
  },
  {
    id: "trafikk",
    title: "Få trafikk, og regn med at det tar tid",
    text: "Besøk fra Google og AI-søk kommer gradvis, når sidene dine svarer bedre enn det som allerede finnes. Regn med måneder, ikke uker, før du ser om noe fungerer.",
    link: "Om trafikk fra søk",
  },
  {
    id: "inntekt",
    title: "Tjen penger, til slutt",
    text: "Med jevn trafikk kan affiliatelenker og andre inntektskilder begynne å gi noe. Det er ingen garanti, og beløpene er ofte små i starten. Når pengene kommer, kommer også skatt og MVA inn i bildet.",
    link: "Om affiliate og inntekt",
  },
];

export default function StartPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Fire steg"
        title="Start her"
        lead="Dette er rekkefølgen jeg anbefaler: finn en nisje, bygg noe nyttig, få trafikk, og tenk på inntekt til slutt. De tre første stegene er der det meste av arbeidet ligger."
      />

      <div className="container-page py-14 lg:py-20">
        <ol className="border-b border-line">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="relative grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <span aria-hidden="true" className="absolute -top-px left-0 h-px w-12 bg-accent" />
              <p className="text-sm font-semibold tabular-nums text-accent-soft lg:col-span-2">
                <span className="sr-only">Steg </span>
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance lg:text-3xl">{step.title}</h2>
                <p className="mt-4 max-w-reading text-base leading-relaxed text-muted lg:text-lg">{step.text}</p>
                <Link
                  href={`/guider/#${step.id}`}
                  className="mt-5 inline-block text-sm font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:text-text"
                >
                  {step.link} →
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:max-w-4xl">
          <Link href="/wealthy-affiliate/" className="group border-t border-line pt-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">Min egen vei</span>
            <span className="mt-2 block text-lg font-semibold text-text group-hover:text-accent-soft">
              Slik startet jeg med Wealthy Affiliate i 2014 →
            </span>
          </Link>
          <Link href="/artikler/" className="group border-t border-line pt-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">Les mer</span>
            <span className="mt-2 block text-lg font-semibold text-text group-hover:text-accent-soft">
              Alle artikler →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
