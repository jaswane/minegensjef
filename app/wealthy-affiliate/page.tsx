import Link from "next/link";
import { AffiliateLink } from "@/components/affiliate-link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Wealthy Affiliate: min erfaring siden 2014",
  description:
    "Hvordan jeg startet med Wealthy Affiliate i 2014, hva det første prosjektet ga, og hvorfor jeg tar den nye opplæringen på nytt i 2026.",
  path: "/wealthy-affiliate/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Wealthy Affiliate", path: page.path },
];

const planned = [
  "Wealthy Affiliate anmeldelse 2026, med erfaringene fra 12 år. Den gamle anmeldelsen fra 2016 oppdateres på sin opprinnelige adresse.",
  "Hva den moderniserte opplæringen faktisk inneholder, del for del.",
  "Pris og medlemsnivåer, kontrollert mot Wealthy Affiliate før publisering.",
  "Hvordan det nye nettstedet utvikler seg, fra nisjevalg og videre.",
];

export default function WealthyAffiliatePage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Wealthy Affiliate · siden 2014"
        title="Min vei med Wealthy Affiliate"
        lead="Her samler jeg det jeg skriver om Wealthy Affiliate: hvordan jeg startet i 2014, og hva jeg finner når jeg tar opplæringen på nytt i 2026."
      />

      <div className="container-page py-14 lg:py-20">
        <div className="prose-mes">
          <h2>Slik begynte det i 2014</h2>
          <p>
            Jeg ble medlem av Wealthy Affiliate i 2014. Det første prosjektet jeg bygget gjennom opplæringen, var
            en enkel Amazon Associates-side om sportsgadgets for det amerikanske markedet. Der tjente jeg mine
            første affiliate-dollar.
          </p>
          <p>
            Den gangen kom provisjonen fra Amazon som sjekker i posten, og jeg måtte i banken for å løse dem inn. I
            januar 2016 kom den første sjekken på over 1000 dollar.
          </p>

          <h2>Hvorfor jeg tar opplæringen på nytt</h2>
          <p>
            Mye har endret seg siden 2014. Søk fungerer annerledes, og AI har gjort det raskere å bygge et
            nettsted, uten at det gir trafikk eller inntekt av seg selv. Nå moderniserer Wealthy Affiliate
            plattformen og opplæringen, og derfor går jeg gjennom hele løpet fra start.
          </p>
          <p>
            Underveis skriver jeg om hva som fortsatt fungerer, hva som er nytt, og hvordan jeg ville brukt det i
            Norge i 2026.
          </p>

          <h2>Et nytt nettsted, bygget fra bunnen av</h2>
          <p>
            Parallelt med opplæringen bygger jeg et nytt nettsted. Nisjen er ikke valgt ennå. Den bestemmer jeg når
            jeg kommer til nisjevalget i kurset.
          </p>

          <h2>Ingen snarvei til penger</h2>
          <p>
            Wealthy Affiliate er en læringsplattform. Den gir struktur og verktøy, men trafikken og inntekten må du
            fortsatt bygge selv, og det tar tid. Hvis du leter etter raske penger, er dette feil sted å begynne.
          </p>

          <h2>Dette kommer her</h2>
          <ul>
            {planned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Vil du vite hvor du bør begynne uavhengig av plattform, er <Link href="/start/">Start her</Link> et
            bedre utgangspunkt.
          </p>
        </div>

        <aside
          aria-labelledby="annonse-tittel"
          className="mt-16 max-w-reading rounded-md border border-line-accent bg-bg-alt p-6 sm:p-8"
        >
          <p id="annonse-tittel" className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">
            Annonselenke
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Vil du se Wealthy Affiliate selv, kan du gå via lenken under. Blir du betalende medlem, kan Min Egen
            Sjef få provisjon. Det koster deg ikke noe ekstra.
          </p>
          <AffiliateLink
            slug="wealthy-affiliate"
            placement="wa_hub"
            className="group mt-5 inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
          >
            Gå til Wealthy Affiliate
            <span aria-hidden="true">→</span>
          </AffiliateLink>
        </aside>
      </div>
    </main>
  );
}
