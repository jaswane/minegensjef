import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { affiliateLinks } from "./lib/affiliate-links";
import { attachmentRedirects, goneAttachmentPaths } from "./lib/legacy-attachments";
import { legacySlugRedirects, replacedPageRedirects } from "./lib/legacy-redirects";

/** Med trailingSlash: true legger Next selv til avsluttende skråstrek før disse reglene kjøres. */
function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

/** Route handler som svarer 410 Gone. Brukes via rewrites, så den gamle adressen beholdes. */
const GONE = "/gone/";

const nextConfig: NextConfig = {
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    // Gamle Pretty Links-ruter → /go/<slug>/. Selve partnerlenken ligger i /go/-ruten,
    // så destinasjoner kan byttes uten at disse permanente redirectene må endres.
    // Matchingen skiller ikke mellom store og små bokstaver (/PrimeOpinion = /primeopinion).
    const prettyLinks = affiliateLinks.flatMap((link) =>
      link.legacyRoutes.map((route) => ({
        source: withSlash(route),
        destination: `/go/${link.slug}/`,
        statusCode: 301 as const,
      })),
    );
    const oldPages = [...legacySlugRedirects, ...replacedPageRedirects, ...attachmentRedirects].map(({ from, to }) => ({
      source: withSlash(from),
      destination: to,
      statusCode: 301 as const,
    }));
    // WordPress-arkiver med et tydelig tematisk mål. Resten av arkivene får 410 (se rewrites).
    const archives = [
      { source: "/category/blogg/", destination: "/artikler/" },
      { source: "/category/blogg/page/:n(\\d+)/", destination: "/artikler/" },
      { source: "/blogg/page/:n(\\d+)/", destination: "/artikler/" },
      { source: "/author/andreas/", destination: "/om/" },
    ].map((rule) => ({ ...rule, statusCode: 301 as const }));
    return [...prettyLinks, ...oldPages, ...archives];
  },
  async rewrites() {
    return {
      // Spørringsvarianter på forsiden må fanges før forsiden selv blir servert.
      beforeFiles: [
        // Gamle WordPress-ID-er: kjent ID gir 301 til endelig mål, ukjent ID gir 410 (app/wp-id/route.ts).
        { source: "/", has: [{ type: "query", key: "p" }], destination: "/wp-id/" },
        { source: "/", has: [{ type: "query", key: "page_id" }], destination: "/wp-id/" },
        { source: "/", has: [{ type: "query", key: "attachment_id" }], destination: "/wp-id/" },
        { source: "/", has: [{ type: "query", key: "feed" }], destination: GONE },
        // Gamle WordPress-arkiver og søk via spørring. Andre parametre (utm_* osv.) påvirkes ikke.
        { source: "/", has: [{ type: "query", key: "cat" }], destination: GONE },
        { source: "/", has: [{ type: "query", key: "tag" }], destination: GONE },
        { source: "/", has: [{ type: "query", key: "author" }], destination: GONE },
        { source: "/", has: [{ type: "query", key: "s" }], destination: GONE },
      ],
      // 410 for gamle WordPress-arkiver, feeder og vedleggssider uten publisert parent.
      afterFiles: [
        { source: "/category/:path*/", destination: GONE },
        { source: "/tag/:path*/", destination: GONE },
        { source: "/author/:path*/", destination: GONE },
        { source: "/page/:n(\\d+)/", destination: GONE },
        { source: "/feed/:path*/", destination: GONE },
        { source: "/comments/feed/:path*/", destination: GONE },
        { source: "/:slug/feed/:path*/", destination: GONE },
        // Gamle mediefiler fra WordPress. Ingen kopieres inn i 2.0 (se docs/migration/wordpress-archives-and-media.md).
        { source: "/wp-content/uploads/:path*", destination: GONE },
        ...goneAttachmentPaths.map((path) => ({ source: withSlash(path), destination: GONE })),
      ],
    };
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
