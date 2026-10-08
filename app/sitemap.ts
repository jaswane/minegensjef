import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

/**
 * Bare ekte, indekserbare sider. Ikke med: /go/ (affiliate), personvern og
 * ansvarsfraskrivelse (noindex), utkast og 404.
 */
const staticPaths = [
  "/",
  "/start/",
  "/guider/",
  "/artikler/",
  "/wealthy-affiliate/",
  "/case/ebutikker/",
  "/om/",
  "/kontakt/",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = (await getArticles()).filter((article) => !article.draft);

  return [
    ...staticPaths.map((path) => ({ url: absoluteUrl(path) })),
    ...articles.map((article) => ({
      url: absoluteUrl(article.path),
      lastModified: article.updated ?? article.published,
    })),
  ];
}
