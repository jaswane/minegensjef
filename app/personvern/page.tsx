import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Personvernerklæring",
  description:
    "Hvilke opplysninger Min Egen Sjef behandler: analyse med samtykke, annonselenker, e-post og dine rettigheter.",
  path: "/personvern/",
};

export const metadata = pageMetadata({ ...page, index: false });

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Personvern", path: page.path },
];

export default function PrivacyPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        title="Personvernerklæring"
        lead="Kort fortalt: Analyse slås bare på hvis du sier ja, og vi samler ikke inn mer enn vi trenger."
      >
        <p className="mt-8 text-sm text-subtle">Sist oppdatert 8. oktober 2026</p>
      </PageHeader>

      <div className="container-page py-14 lg:py-20">
        <div className="prose-mes">
          <h2>Hvem som er ansvarlig</h2>
          <p>
            Min Egen Sjef drives av Swane Creative, som er ansvarlig for behandlingen av personopplysninger på
            nettstedet. Spørsmål om personvern sender du via <Link href="/kontakt/">kontaktsiden</Link>.
          </p>

          <h2>Analyse, bare med samtykke</h2>
          <p>
            Vi bruker Google Analytics 4 for å se hvilke sider som blir lest og hvordan folk finner fram. Analyse er
            av til du aktivt godtar det i samtykkebanneret. Før det lastes ikke Google Analytics, og ingen
            forespørsler sendes til Google.
          </p>
          <p>
            Godtar du, registreres blant annet hvilke sider du besøker, omtrentlig område, enhetstype og hvilke
            annonselenker du klikker på. Vi sender ikke navn, e-postadresse eller annen informasjon som direkte
            identifiserer deg. Annonsefunksjoner i Google er slått av.
          </p>
          <p>
            Valget ditt lagres lokalt i nettleseren din. Du kan endre det når som helst med «Endre analysevalg»
            nederst på siden. Trekker du samtykket, slår vi av analysen og sletter Google Analytics-informasjonskapslene
            for nettstedet.
          </p>

          <h2>Annonselenker</h2>
          <p>
            Noen lenker er annonselenker til partnere og affiliatenettverk. Når du klikker en slik lenke, går du via en
            adresse på Min Egen Sjef som sender deg videre. Selve videresendingen lagrer ingenting om deg hos oss.
          </p>
          <p>
            Hos partneren kan klikket bli registrert, slik at de vet at du kom fra Min Egen Sjef. Det skjer på deres
            nettsted og styres av deres personvernerklæring. Har du godtatt analyse, registrerer vi også at lenken ble
            klikket, uten å lagre hvem du er.
          </p>

          <h2>Drift</h2>
          <p>
            Nettstedet driftes hos Vercel. Som de fleste nettverter registrerer Vercel tekniske opplysninger som
            IP-adresse og tidspunkt i serverlogger, for drift og sikkerhet.
          </p>

          <h2>Når du sender e-post</h2>
          <p>
            Sender du en e-post, bruker vi adressen og innholdet bare til å svare deg. Vi deler det ikke med andre.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            Du kan be om innsyn i, retting av eller sletting av opplysninger vi har om deg. Ta kontakt via{" "}
            <Link href="/kontakt/">kontaktsiden</Link>. Mener du at vi behandler opplysninger i strid med regelverket,
            kan du klage til Datatilsynet.
          </p>
        </div>
      </div>
    </main>
  );
}
