import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

// Dette er det ENESTE stedet e-postadressen skal stå (PRD §18). Ikke i footer,
// header, metadata, strukturerte data eller andre globale komponenter.
const CONTACT_EMAIL = "kontakt@swanecreative.no";

const page = {
  title: "Kontakt",
  description:
    "Kontakt Min Egen Sjef på e-post om noe du har lest, en feil i en artikkel eller et mulig samarbeid.",
  path: "/kontakt/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Kontakt", path: page.path },
];

export default function ContactPage() {
  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        title="Kontakt"
        lead="Send en e-post hvis du har spørsmål om noe du har lest, har funnet en feil, eller vil foreslå et samarbeid."
      />

      <div className="container-page py-14 lg:py-20">
        <div className="max-w-reading">
          <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">E-post</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block text-2xl font-semibold tracking-[-0.02em] break-all text-text underline decoration-accent-soft/40 underline-offset-8 transition-colors duration-(--duration-fast) hover:text-accent-soft sm:text-3xl"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="prose-mes mt-14">
          <h2>Før du skriver</h2>
          <p>
            Jeg kan ikke svare på spørsmål om skatt, MVA eller regnskap for din egen situasjon. Det må du ta med
            Skatteetaten eller en regnskapsfører. Artiklene om temaet er generelle.
          </p>
          <p>
            Gjelder det en feil i en artikkel, hjelper det om du tar med lenken til artikkelen og hva som er feil.
          </p>
        </div>
      </div>
    </main>
  );
}
