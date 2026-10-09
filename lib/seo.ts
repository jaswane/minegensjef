import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl, isSiteIndexable } from "@/lib/site";

export type Crumb = { name: string; path: string };

/**
 * Standardbildet for deling. Må settes eksplisitt: når en side har sitt eget
 * openGraph-objekt, erstatter det bildet fra app/opengraph-image.png.
 */
const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Min Egen Sjef – Bygg en digital ekstrainntekt. Uten hype.",
};

/**
 * Robots for én side. Hele nettstedet er noindex/nofollow før lansering.
 * Etter lansering styrer `index` hver side, og lenker følges alltid.
 */
export function robotsFor(index = true): Metadata["robots"] {
  if (!isSiteIndexable) return { index: false, follow: false };
  return index ? { index: true, follow: true } : { index: false, follow: true };
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Kanonisk sti med avsluttende skråstrek, f.eks. "/start/". */
  path: string;
  /** Sett til false for sider som ikke skal i søk eller sitemap. */
  index?: boolean;
};

export function pageMetadata({ title, description, path, index = true }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: robotsFor(index),
    openGraph: {
      type: "website",
      locale: "nb_NO",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

// Ingen e-postadresse i strukturerte data. Den skal bare stå på /kontakt/.
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl("/icon.png"),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "nb-NO",
    publisher: { "@id": organizationId },
  };
}

export function webPageSchema({ title, description, path }: { title: string; description: string; path: string }) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "nb-NO",
    isPartOf: { "@id": websiteId },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
  author?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${absoluteUrl(input.path)}#article`,
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: { "@id": `${absoluteUrl(input.path)}#webpage` },
    datePublished: input.published,
    dateModified: input.updated ?? input.published,
    inLanguage: "nb-NO",
    author: { "@type": "Person", name: input.author ?? "Andreas" },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId },
  };
}

/** Samler flere schema-noder i én @graph. */
export function schemaGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
