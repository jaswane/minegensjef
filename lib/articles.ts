import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

/**
 * Hubene en artikkel kan høre til. `href` er null til huben faktisk finnes,
 * så vi aldri lenker til en side som gir 404.
 */
export const HUBS = {
  "wealthy-affiliate": { label: "Wealthy Affiliate", href: "/wealthy-affiliate/" },
  affiliate: { label: "Affiliate-markedsføring", href: null },
  seo: { label: "SEO og trafikk", href: null },
  nettsider: { label: "Nettsider", href: null },
  ai: { label: "AI", href: null },
  nisje: { label: "Nisje", href: null },
} as const satisfies Record<string, { label: string; href: string | null }>;

export type HubKey = keyof typeof HUBS;

/** Metadata som eksporteres fra hver .mdx-fil som `export const metadata = { ... }`. */
export type ArticleMeta = {
  title: string;
  description: string;
  /** Opprinnelig publiseringsdato (ÅÅÅÅ-MM-DD). Bevares ved migrering fra WordPress. */
  published: string;
  /** Settes bare når artikkelen faktisk er skrevet om eller oppdatert. */
  updated?: string;
  hub?: HubKey;
  /** Slugger til relaterte artikler. Upubliserte eller ukjente slugger hoppes over. */
  related?: string[];
  /** Viser annonsemerking øverst i artikkelen. */
  affiliate?: boolean;
  /** Utkast vises bare i `next dev`, aldri i produksjon, sitemap eller lister. */
  draft?: boolean;
};

export type Article = ArticleMeta & { slug: string; path: string };

type ArticleModule = { default: ComponentType; metadata: ArticleMeta };

const CONTENT_DIR = path.join(process.cwd(), "content", "artikler");
const includeDrafts = process.env.NODE_ENV === "development";
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function listSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function loadModule(slug: string): Promise<ArticleModule> {
  return (await import(`@/content/artikler/${slug}.mdx`)) as ArticleModule;
}

/** Stopper bygget med en tydelig feil hvis en artikkel mangler påkrevde felt. */
function validate(slug: string, meta: ArticleMeta | undefined): ArticleMeta {
  const problems: string[] = [];
  if (!meta) problems.push("mangler `export const metadata`");
  else {
    if (!meta.title) problems.push("title mangler");
    if (!meta.description) problems.push("description mangler");
    if (!meta.published || !DATE.test(meta.published)) problems.push("published må være ÅÅÅÅ-MM-DD");
    if (meta.updated && !DATE.test(meta.updated)) problems.push("updated må være ÅÅÅÅ-MM-DD");
    if (meta.hub && !(meta.hub in HUBS)) problems.push(`ukjent hub «${meta.hub}»`);
  }
  if (problems.length) throw new Error(`content/artikler/${slug}.mdx: ${problems.join(", ")}`);
  return meta as ArticleMeta;
}

function toArticle(slug: string, meta: ArticleMeta): Article {
  return { ...meta, slug, path: `/${slug}/` };
}

/** Publiserte artikler, nyeste først. Utkast tas bare med under utvikling. */
export async function getArticles(): Promise<Article[]> {
  const articles = await Promise.all(
    listSlugs().map(async (slug) => toArticle(slug, validate(slug, (await loadModule(slug)).metadata))),
  );
  return articles
    .filter((article) => includeDrafts || !article.draft)
    .sort((a, b) => b.published.localeCompare(a.published));
}

export async function getArticle(
  slug: string,
): Promise<{ article: Article; Content: ComponentType } | null> {
  if (!listSlugs().includes(slug)) return null;
  const mod = await loadModule(slug);
  const article = toArticle(slug, validate(slug, mod.metadata));
  if (article.draft && !includeDrafts) return null;
  return { article, Content: mod.default };
}

const dateFormat = new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric" });

export function formatDate(iso: string): string {
  return dateFormat.format(new Date(`${iso}T12:00:00`));
}
