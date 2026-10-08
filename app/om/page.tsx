import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Om Andreas og nettstedet",
  description:
    "Hvem som står bak Min Egen Sjef, hva nettstedet handler om, og hvordan det tjener penger.",
  path: "/om/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Om", path: page.path },
];

export default function AboutPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Bak Min Egen Sjef"
        title="Om Min Egen Sjef"
        lead="Min Egen Sjef handler om å bygge en digital ekstrainntekt ved siden av jobb og vanlig liv, uten løfter om raske penger."
      />

      <div className="container-page py-14 lg:py-20">
        <div className="prose-mes">
          <h2>Hvem som står bak</h2>
          <p>
            Jeg heter Andreas. Jeg ble medlem av Wealthy Affiliate i 2014 og bygget mitt første affiliateprosjekt
            for det amerikanske markedet. Siden har jeg bygget flere nettsteder, blant annet eButikker.no.
          </p>
          <p>
            Fra 2016 til 2025 ga arbeidet et dokumentert samlet resultat på rundt 2,3 millioner kroner. Toppåret
            var 2022, og tallene har gått ned siden, i et marked som har endret seg mye. Tallene er historikk, ikke
            en prognose for hva andre kan forvente.
          </p>

          <h2>Hva du finner her</h2>
          <p>
            Rekkefølgen jeg anbefaler for å komme i gang står på <Link href="/start/">Start her</Link>.{" "}
            <Link href="/guider/">Guidene</Link> går gjennom stegene, og{" "}
            <Link href="/artikler/">artiklene</Link> tar for seg enkeltemner. På{" "}
            <Link href="/wealthy-affiliate/">Wealthy Affiliate-siden</Link> skriver jeg om plattformen jeg startet
            med, og som jeg nå går gjennom på nytt.
          </p>
          <p>
            Jeg skiller mellom det jeg har gjort selv, og det andre påstår. Der noe kan ha endret seg, står det når
            artikkelen sist ble oppdatert.
          </p>

          <h2>Slik tjener nettstedet penger</h2>
          <p>
            Noen lenker er annonselenker. Kjøper du noe eller registrerer deg via en slik lenke, kan Min Egen Sjef få
            provisjon. Det koster deg ikke noe ekstra. Artikler med annonselenker er merket øverst. Mer om dette står
            i <Link href="/ansvarsfraskrivelse/">ansvarsfraskrivelsen</Link>.
          </p>

          <h2>Ta kontakt</h2>
          <p>
            Har du spørsmål om noe du har lest, eller funnet en feil? Bruk <Link href="/kontakt/">kontaktsiden</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
