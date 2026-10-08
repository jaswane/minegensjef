import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { affiliateLinks } from "./lib/affiliate-links";
import { legacySlugRedirects } from "./lib/legacy-redirects";

/** Med trailingSlash: true legger Next selv til avsluttende skråstrek før disse reglene kjøres. */
function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

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
    const oldSlugs = legacySlugRedirects.map(({ from, to }) => ({
      source: withSlash(from),
      destination: to,
      statusCode: 301 as const,
    }));
    return [...prettyLinks, ...oldSlugs];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
