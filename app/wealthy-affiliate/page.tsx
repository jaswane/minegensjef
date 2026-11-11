import Link from "next/link";
import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/affiliate-link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Wealthy Affiliate 2026 på norsk: startløype i sju steg",
  description:
    "Slik er nye Wealthy Affiliate bygget opp med Hub, Ace, Gameplan og Ace Research, og en norsk startløype i sju steg. Medlem siden 2014. Ikke WAs offisielle kurs.",
  path: "/wealthy-affiliate/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Wealthy Affiliate", path: page.path },
];

/** Dato da WA-fakta på siden sist ble kontrollert mot Wealthy Affiliates egne sider. */
const CHECKED = "11. november 2026";

const linkClass = "text-accent-soft underline underline-offset-4 transition-colors duration-(--duration-fast) hover:text-text";

type Step = {
  id: string;
  title: string;
  text: ReactNode;
  where: ReactNode;
  goal: string;
  next: string;
  /** Publisert guide på nettstedet, eller en planlagt guide uten lenke. */
  guide: { href: string; label: string } | { planned: string };
};

const steps: Step[] = [
  {
    id: "modellen",
    title: "Forstå modellen",
    text: "Affiliate-markedsføring betyr at du lager innhold som hjelper folk med et valg, og får provisjon når noen kjøper via lenkene dine. Inntekten kommer fra trafikk, og trafikk tar tid. Wealthy Affiliate gir deg opplæring, verktøy og hosting, men ikke besøkende.",
    where: "Learn, og Ace hvis du lurer på noe underveis.",
    goal: "Du vet hvordan nettstedet ditt skal tjene penger, og at det tar måneder.",
    next: "Velg et tema du orker å jobbe med lenge.",
    guide: { href: "/hva-er-affiliate-markedsforing/", label: "Hva affiliate-markedsføring er" },
  },
  {
    id: "nisje",
    title: "Velg nisje og målgruppe",
    text: (
      <>
        Bestem hva nettstedet skal handle om, og hvem det er for. For et norsk nettsted betyr det også at du som
        regel tjener penger via norske nettbutikker, og da gjennom{" "}
        <Link href="/norske-affiliate-programmer/" className={linkClass}>
          norske affiliatenettverk
        </Link>
        . Sjekk at det finnes programmer i nisjen før du bestemmer deg.
      </>
    ),
    where: "Du forteller Ace hva du vil bygge, og Ace lager en Hub for det.",
    goal: "Én setning som sier hvem nettstedet hjelper, og med hva.",
    next: "Skriv det inn i en Hub.",
    guide: { planned: "Slik finner du en nisje" },
  },
  {
    id: "hub",
    title: "Opprett og definer en Hub",
    text: "En Hub er arbeidsområdet for én virksomhet inne i Wealthy Affiliate. Den er ikke nettstedet ditt. Ifølge WA holder Huben nisjen, målgruppen, stemmen og målene dine, og Ace bruker den når den foreslår innhold og planer. Jo mer presist du beskriver hver av de fire, jo mindre må Ace gjette.",
    where: "Hubs. Starter-medlemskapet gir deg den første Huben.",
    goal: "En Hub der idé, målgruppe, stemme og mål står så konkret at en annen person kunne skrevet for nettstedet.",
    next: "Bruk Huben som utgangspunkt for research.",
    guide: { planned: "Hubs og Ace på norsk" },
  },
  {
    id: "research",
    title: "Gjennomfør Ace Research",
    text: (
      <>
        Ace Research ble lansert 6. november 2026 og samler research om søkeord, spørsmål, problemer, produkter,
        konkurrenter, fakta og trender i Huben. Bruk resultatene som forslag, ikke som fasit. Søkevolumet er et
        anslag, og WA forklarer ikke hvordan det er beregnet, så sjekk de viktigste søkeordene i et eget verktøy,
        for eksempel{" "}
        <Link href="/kwfinder-i-chatgpt/" className={linkClass}>
          KWFinder
        </Link>
        , før du bygger planen på dem. Mer om delene står{" "}
        <a href="#ace-research" className={linkClass}>
          lenger ned
        </a>
        .
      </>
    ),
    where: "Spør Ace, eller åpne Research-fanen i Huben (Overview, Content, Research). Alle søk lagres der.",
    goal: "En kort liste med søkeord og spørsmål du har kontrollert, koblet til Huben.",
    next: "Send de beste funnene til Gameplan med Send.",
    guide: { href: "/gode-verktoy-for-sokeordsanalyse/", label: "Søkeordsanalyse på norsk" },
  },
  {
    id: "gameplan",
    title: "Følg Gameplan og bruk Learn",
    text: "En Gameplan er WAs betegnelse på en kort rekke konkrete steg mot ett mål, lagret i Huben. Ace lager den og oppdaterer den etter hvert som du jobber, og det finnes egne planer for nettsted og sosiale kanaler. Learn er opplæringen: veiledninger, plattformguider og direktesendte klasser. Plattformguidene ble utvidet og oppdatert 9. november 2026. Bruk Learn når et steg i planen krever noe du ikke kan ennå.",
    where: "Gameplan i Huben, og Learn i menyen. Live-klassene på fredager er åpne for alle som registrerer seg gratis.",
    goal: "Du vet hvilke tre oppgaver som kommer nå, og hvor du lærer det du mangler.",
    next: "Bygg nettstedet planen peker mot.",
    guide: { planned: "Gameplan og Learn i praksis" },
  },
  {
    id: "nettsted",
    title: "Bygg og publiser nettsted",
    text: "Nettstedet lages i Websites. Det er et WordPress-nettsted driftet av WA, med testmiljø (staging) og domene du kan kjøpe der eller koble til. Innholdet lager du i Studio, der Writer skriver utkast og Artist lager bilder. Les og rediger alt som er skrevet med AI før det publiseres, og kontroller fakta. WA sier ikke noe om hvor godt Writer skriver på norsk.",
    where: "Websites for nettstedet. Studio, Writer og Artist for innholdet. Starter får et øvingsnettsted på siterubix.com.",
    goal: "Et publisert nettsted med de første sidene som svarer på spørsmål folk faktisk stiller.",
    next: "Mål hva som skjer når Google begynner å vise sidene.",
    guide: { href: "/hvordan-lage-nettside-na-til-dags/", label: "Slik lager du en nettside i dag" },
  },
  {
    id: "maal",
    title: "Mål resultater og forbedre",
    text: "Google Search Console viser hvilke søk sidene vises på, og Google Analytics viser hva besøkende gjør. Search Console må settes opp for nettstedet ditt. Siden 3. november 2026 kan du på betalt plan koble Google-kontoen til WA, og da viser hvert nettsted i Hubene klikk, visninger, gjennomsnittlig plassering og klikkfrekvens for de siste 28 dagene mot de 28 før, og hvilke søk og sider som gir besøk. Google Analytics bruker du fortsatt utenfor WA. Forbedre sidene som nesten når opp, før du skriver nye.",
    where: "Nettstedet i Huben (betalt plan, med Google-kontoen koblet til), Home for daglig oversikt, og Search Console og Google Analytics direkte.",
    goal: "Du vet hvilke sider som får visninger i Google, og hvilke du skal forbedre først.",
    next: "Tilbake til Gameplan, med det du har lært.",
    guide: { href: "/windsor-ai-chatgpt/", label: "Search Console og GA4 i ChatGPT" },
  },
];

/** Delene i Ace Research, slik WA beskriver dem i release notes i plattformen 06.11.2026 (v20261106.1). */
const researchParts: { name: string; text: string }[] = [
  { name: "Keywords", text: "Søkefraser det kan være verdt å skrive om, hver med et anslag på månedlige søk. «Worth writing?» merker hvert søkeord som Great, Good eller Stretch." },
  { name: "Questions", text: "Hva folk spør om innen temaet, gruppert etter tema." },
  { name: "Pain points", text: "Hva målgruppen sliter med, klager over eller skulle ønske var enklere." },
  { name: "Products and offers", text: "Produkter og affiliateprogrammer det kan være aktuelt å anbefale, med vilkårene deres." },
  { name: "Competitors", text: "Hvem som leder innen temaet, eller alternativer til et merke du oppgir." },
  { name: "Facts and stats", text: "Tall og fakta du kan sitere, med kilde." },
  { name: "Trends", text: "Om interessen øker, er stabil, avtar eller varierer gjennom året." },
];

export default function WealthyAffiliatePage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Wealthy Affiliate · medlem siden 2014"
        title="Wealthy Affiliate 2026: slik kommer du i gang"
        lead="En norsk startløype for den nye plattformen med Hub, Ace og Gameplan, i den rekkefølgen jeg anbefaler å lære den. Det er ikke WAs offisielle kurs, og jeg går selv gjennom plattformen på nytt nå."
      />

      <div className="container-page py-14 lg:py-20">
        <div className="prose-mes">
          <p>
            Wealthy Affiliate ble relansert i oktober 2026. Før gikk alle gjennom det samme kurset, leksjon for
            leksjon. Nå starter du med en Hub for virksomheten din, AI-assistenten Ace lager en Gameplan med neste
            steg, og opplæringen i Learn bruker du når planen krever det. Nettstedet bygger du fortsatt selv, og
            trafikken må du fortsatt jobbe frem.
          </p>
          <p>
            Fakta om plattformen er kontrollert mot Wealthy Affiliates egne sider og release notes {CHECKED}. Jeg har tatt i bruk
            Hubs, Ace, Ace Research, Gameplan, Learn, Studio og Websites, men har ikke gjennomført en full test. Der
            jeg skriver hvordan noe fungerer, er det WAs egen beskrivelse med mindre jeg sier noe annet.
          </p>

          <h2>Slik begynte det i 2014</h2>
          <p>
            Jeg ble medlem i 2014. Det første prosjektet jeg bygget gjennom opplæringen, var en enkel Amazon
            Associates-side om sportsgadgets for det amerikanske markedet. Provisjonen kom som sjekker i posten, og
            i januar 2016 kom den første på over 1000 dollar. Hva plattformen ga meg da, og hva jeg mener om det i
            dag, står i{" "}
            <Link href="/wealthy-affiliate-anmeldelse-en-gylden-mulighet/">
              Wealthy Affiliate-anmeldelsen
            </Link>
            .
          </p>

          <h2>Det gamle kurset og den nye plattformen</h2>
          <p>
            Da jeg startet, var opplæringen et sertifiseringskurs i fem nivåer med ti leksjoner hver, fra nisjevalg
            og WordPress til trafikk og inntekt. Alle fulgte samme rekkefølge, og søkeordsverktøyet Jaaxy lå ved
            siden av.
          </p>
          <p>
            I den nye plattformen er utgangspunktet din egen virksomhet. Huben beskriver hva du bygger, Ace foreslår
            hva du skal gjøre, og Gameplan holder orden på stegene. Learn er bygget om til veiledninger,
            plattformguider og direktesendte klasser som du bruker etter behov. Jaaxy er lagt ned, og søkeordsarbeidet
            gjøres nå av Ace og i Ace Research.
          </p>
          <p>
            Ulempen er at du ikke lenger får én fast rekkefølge å følge. Det er grunnen til at jeg har satt opp
            løypen under.
          </p>
        </div>

        <section aria-labelledby="loypen" className="mt-16 lg:mt-24">
          <p className="eyebrow">Anbefalt rekkefølge</p>
          <h2 id="loypen" className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-balance lg:text-[2.5rem]">
            Startløypen i sju steg
          </h2>
          <p className="mt-4 max-w-reading text-base leading-relaxed text-muted lg:text-lg">
            Dette er rekkefølgen jeg anbefaler for en norsk nybegynner, ikke et offisielt kurs fra Wealthy Affiliate.
            Navnene på funksjonene er WAs egne, og står på engelsk i plattformen.
          </p>

          <ol className="mt-10 border-b border-line">
            {steps.map((step, index) => (
              <li
                key={step.id}
                id={step.id}
                className="relative grid scroll-mt-24 gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <span aria-hidden="true" className="absolute -top-px left-0 h-px w-12 bg-accent" />
                <p className="text-sm font-semibold tabular-nums text-accent-soft lg:col-span-2">
                  <span className="sr-only">Steg </span>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-balance lg:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-reading text-base leading-relaxed text-muted lg:text-lg">{step.text}</p>
                  <dl className="mt-6 grid max-w-reading gap-x-6 gap-y-3 text-sm leading-relaxed sm:grid-cols-[8rem_1fr]">
                    <dt className="font-semibold text-subtle">I WA</dt>
                    <dd className="text-muted">{step.where}</dd>
                    <dt className="font-semibold text-subtle">Målet</dt>
                    <dd className="text-muted">{step.goal}</dd>
                    <dt className="font-semibold text-subtle">Neste steg</dt>
                    <dd className="text-muted">{step.next}</dd>
                  </dl>
                  <p className="mt-6 text-sm">
                    {"href" in step.guide ? (
                      <Link
                        href={step.guide.href}
                        className="font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:text-text"
                      >
                        {step.guide.label} →
                      </Link>
                    ) : (
                      <span className="text-subtle">
                        {step.guide.planned}: guide under arbeid
                      </span>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="prose-mes mt-16 lg:mt-24">
          <h2 id="ace-research">Ace Research: delene</h2>
          <p>
            Ace Research er WAs nye researchverktøy, lansert 6. november 2026. Du spør Ace med vanlige ord, eller
            åpner Research-fanen i en Hub, velger en type og søker. Ifølge WA viser Ace kilden bak hvert svar.
          </p>
          <p>
            Vet du ikke hva du skal spørre om, lister <strong>Research my Hub</strong> opp de fem tingene det er mest
            verdt å finne ut først om idéen og målgruppen i Huben. Research everything starter alle typene på en gang,
            og Find more graver videre når du har noen resultater. Dette er de sju typene, slik WA beskriver dem:
          </p>
          <dl>
            {researchParts.map((part) => (
              <div key={part.name}>
                <dt>
                  <strong>{part.name}</strong>
                </dt>
                <dd>{part.text}</dd>
              </div>
            ))}
          </dl>
          <p>
            Alt du finner, lagres i Research-fanen i Huben. Det du vil bruke, sender du med Send til en kanal, og da
            blir det neste steg i Gameplan for den kanalen. For et søkeord kan du også sjekke hvem som har de øverste
            plassene i Google, og om AI-svar dekker søket.
          </p>
          <p>
            WA skrev selv ved lanseringen at det kunne være feil i verktøyet. Bruk resultatene som forslag.
            Søkevolumet er et anslag, og vurderingen Great, Good eller Stretch er WAs egen. Søkevolum, anbefalte
            produkter, vilkår og tall må kontrolleres før du bruker dem som grunnlag for hva du bygger. For norske
            søkeord er <Link href="/gode-verktoy-for-sokeordsanalyse/">søkevolum ekstra usikkert</Link> uansett
            verktøy. WA sier ikke noe om hvor godt Ace Research fungerer for norske søkeord.
          </p>

          <h2>Pris og medlemsnivåer, kort</h2>
          <p>
            Starter er gratis og krever ikke kort. Det gir en Hub, 4 000 credits én gang og et øvingsnettsted. De
            betalte nivåene starter på 29 dollar i måneden. Credits er én felles pott som brukes av alt AI-arbeid,
            fra svar fra Ace til artikler og bilder, og WA oppgir ingen fast pris per handling. Medlemmer som hadde
            et medlemskap før relanseringen, beholder prisen så lenge medlemskapet er aktivt, så vilkårene kan være
            andre enn for nye medlemmer.
          </p>
          <p>
            Gjeldende priser står på{" "}
            <a href="https://www.wealthyaffiliate.com/pricing">Wealthy Affiliates prisside</a>, kontrollert{" "}
            {CHECKED}.
          </p>

          <h2>Ingen snarvei til penger</h2>
          <p>
            Wealthy Affiliate er en læringsplattform. Den gir struktur og verktøy, men trafikken og inntekten må du
            fortsatt bygge selv, og det tar tid. Hvis du leter etter raske penger, er dette feil sted å begynne. Vil
            du vite hvor du bør begynne uavhengig av plattform, er <Link href="/start/">Start her</Link> et bedre
            utgangspunkt.
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
            Vil du prøve Starter-medlemskapet selv, kan du gå via lenken under. Blir du betalende medlem, kan Swane
            Creative, som driver Min Egen Sjef, få provisjon. Det koster deg ikke noe ekstra.
          </p>
          <AffiliateLink
            slug="wealthy-affiliate"
            placement="wa_hub"
            marked={false}
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
