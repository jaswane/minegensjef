import Image from "next/image";
import Link from "next/link";
import { AffiliateLink } from "@/components/affiliate-link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { PARTNER_GROUPS, partners, type Partner } from "@/lib/partners";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Partnere og annonselenker",
  description:
    "Verktøy, plattformer og affiliatenettverk Min Egen Sjef har en aktiv affiliateavtale med, og hva hver av dem gjør.",
  path: "/partnere/",
};

// En liste med annonselenker gir lite egenverdi i søk. Siden er for åpenhet og
// navigasjon, så den holdes utenfor indeksen og sitemapen.
export const metadata = pageMetadata({ ...page, index: false });

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Partnere", path: page.path },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <li className="flex flex-col rounded-md border border-line bg-bg-alt p-6 sm:p-7">
      {partner.logo ? (
        // Logoen står på en hvit flate, så partnernes vanlige logoer kan brukes uendret.
        // Dekorativ: navnet står som overskrift rett under.
        <div className="flex h-14 w-40 items-center justify-center rounded-sm bg-white px-4">
          <Image
            src={partner.logo}
            alt=""
            className="max-h-8 w-auto object-contain"
            sizes="128px"
          />
        </div>
      ) : null}
      <h3 className={`${partner.logo ? "mt-5" : ""} text-xl font-semibold tracking-[-0.01em] text-text`}>
        {partner.name}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{partner.description}</p>
      <p className="mt-6 text-sm">
        <AffiliateLink
          slug={partner.slug}
          placement="partner_page"
          className="font-semibold text-accent-soft underline-offset-4 transition-colors duration-(--duration-fast) hover:text-text hover:underline"
        >
          Gå til {partner.name.replace(/ \(.*\)$/, "")}
        </AffiliateLink>
      </p>
    </li>
  );
}

export default function PartnersPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Annonselenker"
        title="Partnere"
        lead="Her er verktøyene, plattformene og affiliatenettverkene Min Egen Sjef har en aktiv affiliateavtale med. Listen er ikke en rangering."
      />

      <div className="container-page py-14 lg:py-20">
        <div className="max-w-reading text-base leading-relaxed text-muted">
          <p>
            Alle lenkene på denne siden er annonselenker. Registrerer du deg eller kjøper noe via dem, kan Swane
            Creative, som driver Min Egen Sjef, få provisjon. Det koster deg ikke noe ekstra.
          </p>
          <p className="mt-4">
            Hvordan nettverkene fungerer og hva som skiller dem, står i{" "}
            <Link href="/norske-affiliate-programmer/" className="text-accent-soft underline underline-offset-4 hover:text-text">
              norske affiliate-programmer
            </Link>
            .
          </p>
        </div>

        {PARTNER_GROUPS.map((group) => (
          <section key={group.id} aria-labelledby={`gruppe-${group.id}`} className="mt-16 lg:mt-20">
            <h2 id={`gruppe-${group.id}`} className="text-2xl font-semibold tracking-[-0.02em] lg:text-[2rem]">
              {group.title}
            </h2>
            <p className="mt-3 max-w-reading text-base leading-relaxed text-muted">{group.lead}</p>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {partners
                .filter((partner) => partner.group === group.id)
                .map((partner) => (
                  <PartnerCard key={partner.slug} partner={partner} />
                ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
