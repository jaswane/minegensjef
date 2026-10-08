import { getAffiliateLink } from "@/lib/affiliate-links";

// /go/ skal aldri indekseres eller caches som en fast adresse: destinasjonene
// endres når avtaler endres. Derfor 307 og no-store, slik Pretty Links gjorde.
const baseHeaders = {
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "no-store",
};

export async function GET(_request: Request, ctx: RouteContext<"/go/[slug]">) {
  const { slug } = await ctx.params;
  const link = getAffiliateLink(slug);

  if (!link) {
    return new Response("Fant ikke lenken.", { status: 404, headers: baseHeaders });
  }

  // Location settes direkte, ikke via NextResponse.redirect, så destinasjonen
  // sendes nøyaktig slik den er dokumentert uten URL-normalisering.
  return new Response(null, {
    status: 307,
    headers: { ...baseHeaders, Location: link.destination },
  });
}
