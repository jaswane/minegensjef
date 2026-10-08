import type { MetadataRoute } from "next";
import { absoluteUrl, isSiteIndexable } from "@/lib/site";

/**
 * Før lansering stenges hele nettstedet for crawling. Etter lansering
 * (SITE_INDEXABLE=true) er alt åpent unntatt /go/, og sitemapen oppgis.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isSiteIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/go/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
