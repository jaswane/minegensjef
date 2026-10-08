import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Ansvarsfraskrivelse",
  description:
    "Om inntektstall, annonselenker og råd om skatt og MVA på Min Egen Sjef, og hvorfor innhold kan bli utdatert.",
  path: "/ansvarsfraskrivelse/",
};

export const metadata = pageMetadata({ ...page, index: false });

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Ansvarsfraskrivelse", path: page.path },
];

export default function DisclaimerPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        title="Ansvarsfraskrivelse"
        lead="Min Egen Sjef deler erfaringer og generell informasjon. Det er ikke en garanti for resultater, og ikke personlig rådgivning."
      >
        <p className="mt-8 text-sm text-subtle">Sist oppdatert 8. oktober 2026</p>
      </PageHeader>

      <div className="container-page py-14 lg:py-20">
        <div className="prose-mes">
          <h2>Ingen garanti for inntekt</h2>
          <p>
            Det du leser her, er ingen garanti for at du vil tjene penger. Resultatene avhenger av tema, innsats,
            konkurranse og tid, og det kan ta lang tid før et nettsted gir inntekt, om det gjør det i det hele tatt.
          </p>
          <p>
            Tall om mine egne resultater er historikk fra et marked som har endret seg. De sier ikke noe om hva du kan
            forvente.
          </p>

          <h2>Ikke skatte-, regnskaps- eller juridisk rådgivning</h2>
          <p>
            Artiklene om skatt, MVA og regnskap er generelle og bygger på regelverket slik det var da de ble skrevet
            eller sist oppdatert. Reglene endres, og din situasjon kan være annerledes. Sjekk med Skatteetaten eller en
            regnskapsfører før du tar beslutninger.
          </p>

          <h2>Annonselenker</h2>
          <p>
            Noen lenker er annonselenker. Kjøper du noe eller registrerer deg via en slik lenke, kan Min Egen Sjef få
            provisjon. Det koster deg ikke noe ekstra. Artikler som inneholder annonselenker, er merket øverst.
          </p>

          <h2>Innhold kan bli utdatert</h2>
          <p>
            Priser, vilkår og funksjoner hos tjenester endres, ofte uten varsel. Hver artikkel viser når den ble
            publisert og sist oppdatert. Sjekk alltid gjeldende vilkår hos tjenesten selv før du kjøper eller
            registrerer deg.
          </p>

          <h2>Lenker til andre nettsteder</h2>
          <p>
            Vi lenker til andre nettsteder når det er nyttig, men har ikke kontroll over innholdet deres og er ikke
            ansvarlige for det.
          </p>

          <p>
            Hvordan vi behandler opplysninger om deg, står i <Link href="/personvern/">personvernerklæringen</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
