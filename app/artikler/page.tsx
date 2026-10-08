import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { formatDate, getArticles } from "@/lib/articles";
import { breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

const page = {
  title: "Artikler om affiliate, SEO og nettsider",
  description:
    "Artikler om affiliate-markedsføring, SEO og å bygge nettsider, med datoer som viser når de sist ble oppdatert.",
  path: "/artikler/",
};

export const metadata = pageMetadata(page);

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Artikler", path: page.path },
];

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main id="innhold">
      <JsonLd data={schemaGraph(webPageSchema(page), breadcrumbSchema(crumbs))} />
      <PageHeader
        crumbs={crumbs}
        title="Artikler"
        lead="Artikler om affiliate-markedsføring, SEO og å bygge nettsider. Hver artikkel viser når den ble publisert, og når den sist ble oppdatert."
      />

      <div className="container-page py-14 lg:py-20">
        {articles.length === 0 ? (
          <p className="max-w-reading text-base leading-relaxed text-muted">
            Artiklene fra forrige versjon av Min Egen Sjef blir gått gjennom, oppdatert og flyttet hit én etter
            én. Til da finner du rekkefølgen og de viktigste rådene på{" "}
            <Link href="/start/" className="text-accent-soft underline underline-offset-4 hover:text-text">
              Start her
            </Link>
            .
          </p>
        ) : (
          <ul className="border-b border-line">
            {articles.map((article) => (
              <li key={article.slug} className="group relative border-t border-line py-8 lg:py-10">
                <p className="text-sm text-subtle">
                  <time dateTime={article.updated ?? article.published}>
                    {article.updated
                      ? `Oppdatert ${formatDate(article.updated)}`
                      : formatDate(article.published)}
                  </time>
                  {article.draft ? " · Utkast (bare lokalt)" : null}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-balance lg:text-[2rem]">
                  <Link
                    href={article.path}
                    className="transition-colors duration-(--duration-fast) after:absolute after:inset-0 group-hover:text-accent-soft"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-reading text-base leading-relaxed text-muted">{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
