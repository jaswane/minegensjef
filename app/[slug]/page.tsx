import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { HUBS, formatDate, getArticle, getArticles } from "@/lib/articles";
import { articleSchema, breadcrumbSchema, pageMetadata, schemaGraph, webPageSchema } from "@/lib/seo";

// Artikler ligger på rotnivå (/<slug>/), slik de gamle WordPress-adressene gjorde.
// Bare kjente artikler bygges; alt annet gir 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const result = await getArticle(slug);
  if (!result) return {};
  const { article } = result;
  const base = pageMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    index: !article.draft,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.updated ?? article.published,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const result = await getArticle(slug);
  if (!result) notFound();
  const { article, Content } = result;

  const hub = article.hub ? HUBS[article.hub] : null;
  const crumbs = [
    { name: "Forside", path: "/" },
    { name: "Artikler", path: "/artikler/" },
    { name: article.title, path: article.path },
  ];

  const published = await getArticles();
  const related = (article.related ?? [])
    .map((s) => published.find((a) => a.slug === s))
    .filter((a) => a !== undefined);

  return (
    <main id="innhold">
      <JsonLd
        data={schemaGraph(
          webPageSchema({ title: article.title, description: article.description, path: article.path }),
          articleSchema(article),
          breadcrumbSchema(crumbs),
        )}
      />

      <PageHeader crumbs={crumbs} eyebrow={hub?.label} title={article.title} lead={article.description}>
        <p className="mt-8 text-sm text-subtle">
          Publisert <time dateTime={article.published}>{formatDate(article.published)}</time>
          {article.updated ? (
            <>
              {" · "}Oppdatert <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </>
          ) : null}
        </p>
      </PageHeader>

      <div className="container-page py-14 lg:py-20">
        {article.draft ? (
          <p className="mb-10 max-w-reading rounded-sm border border-line-strong px-4 py-3 text-sm text-muted">
            Utkast. Vises bare lokalt og publiseres ikke.
          </p>
        ) : null}

        {article.affiliate ? (
          <p className="mb-10 max-w-reading border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-subtle">
            Artikkelen inneholder annonselenker. Kjøper du noe eller registrerer deg via en slik lenke, kan
            Min Egen Sjef få provisjon. Det koster deg ikke noe ekstra.{" "}
            <Link href="/ansvarsfraskrivelse/" className="underline underline-offset-2 hover:text-text">
              Les mer
            </Link>
          </p>
        ) : null}

        <article className="prose-mes">
          <Content />
        </article>

        {related.length > 0 || hub?.href ? (
          <aside aria-labelledby="videre-tittel" className="mt-20 max-w-reading border-t border-line pt-10">
            <h2 id="videre-tittel" className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">
              Les videre
            </h2>
            <ul className="mt-5 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={item.path} className="text-lg font-semibold text-text hover:text-accent-soft">
                    {item.title}
                  </Link>
                </li>
              ))}
              {hub?.href ? (
                <li>
                  <Link href={hub.href} className="text-base text-accent-soft hover:text-text">
                    Alt om {hub.label} →
                  </Link>
                </li>
              ) : null}
            </ul>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
