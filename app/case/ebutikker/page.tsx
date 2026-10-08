import Image from "next/image";
import Link from "next/link";
import ebutikkerLaptop from "@/assets/minegensjef_ebutikker_laptop.png";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "eButikker.no: et ekte eksempel, ikke en oppskrift",
  description:
    "eButikker.no begynte mye mindre enn den er i dag og har vokst over mange år. Hvorfor det er et eksempel, og ikke en oppskrift du må følge.",
  path: "/case/ebutikker/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "eButikker.no", path: page.path },
];

export default function EbutikkerCasePage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Et ekte eksempel"
        title="eButikker.no begynte mye mindre enn dette"
        lead="Poenget med å vise eButikker er ikke at du skal bygge noe like stort. Det er at et nyttig prosjekt kan få vokse gradvis."
      />

      <div className="container-page py-14 lg:py-20">
        <figure className="max-w-3xl">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-[6%] bottom-[-4%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgb(37_99_235/0.16)_0%,rgb(80_60_220/0.07)_40%,transparent_72%)]"
            />
            <Image
              src={ebutikkerLaptop}
              alt="Forsiden til eButikker.no vist på en bærbar PC, med søkefelt og oversikter over nettbutikker i kategorier som klær, elektronikk og sport."
              sizes="(min-width: 768px) 48rem, 100vw"
              className="relative h-auto w-full"
            />
          </div>
          <figcaption className="mt-5 flex items-center gap-4 text-sm text-subtle">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
            Et eksempel, ikke en oppskrift
          </figcaption>
        </figure>

        <div className="prose-mes mt-16">
          <h2>Hva eButikker.no er</h2>
          <p>
            eButikker.no hjelper folk med å finne nettbutikker i Norge. Siden samler butikker etter kategori, med egne
            oversikter for blant annet klær, elektronikk, hjem og interiør, sport, helse og skjønnhet og barn, og et
            søk etter butikk, merkevare eller produkt.
          </p>

          <h2>Den startet som et lite sideprosjekt</h2>
          <p>
            I eldre innlegg her på Min Egen Sjef beskrev jeg eButikker som én av flere norske sider jeg jobbet med, ikke
            den store satsingen. Den ble ikke bygget ferdig på én gang. Den har blitt utvidet litt etter litt, over mange
            år.
          </p>

          <h2>Der jeg har lært mest</h2>
          <p>
            eButikker er prosjektet der jeg har lært mest om innhold, søk og hva folk faktisk leter etter. Det har også
            gitt reelle inntekter.
          </p>
          <p>
            Tall viser jeg ikke her ennå. De skal stå med forklaring og riktig sammenheng, ikke som et blikkfang.
          </p>

          <h2>Hvorfor dette ikke er en oppskrift</h2>
          <p>
            eButikker er ett prosjekt, i én nisje, bygget over lang tid i et marked som har endret seg. Det som fungerte
            der, er ikke automatisk det som fungerer for deg i 2026.
          </p>
          <p>
            Du trenger ikke starte stort. Start med et tema du synes er interessant, lag noe som hjelper noen konkret, og
            la det vokse derfra. Rekkefølgen jeg anbefaler står på <Link href="/start/">Start her</Link>.
          </p>
          <p>
            Vil du se siden slik den er i dag, finner du den på{" "}
            <a href="https://www.ebutikker.no/">ebutikker.no</a>.
          </p>
        </div>

        <div className="mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Link href="/start/" className="group border-t border-line pt-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">Kom i gang</span>
            <span className="mt-2 block text-lg font-semibold text-text group-hover:text-accent-soft">
              Fire steg, i riktig rekkefølge →
            </span>
          </Link>
          <Link href="/om/" className="group border-t border-line pt-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">Bak Min Egen Sjef</span>
            <span className="mt-2 block text-lg font-semibold text-text group-hover:text-accent-soft">
              Om Andreas og nettstedet →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
