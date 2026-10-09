// Gamle WordPress-spørringsadresser på forsiden: /?p=<id>, /?page_id=<id> og /?attachment_id=<id>.
// next.config.ts sender dem hit med rewrite, og spørringen følger med.
// Kjent ID: 301 direkte til endelig mål. Ukjent, ikke-offentlig eller ugyldig ID: 410.
// Andre parametre (utm_source osv.) uten disse nøklene når aldri denne ruten.
// Se docs/migration/wordpress-archives-and-media.md.
import { goneResponse } from "@/lib/gone";
import { wpIdTargets, type WpIdTarget } from "@/lib/legacy-wp-ids";

/** Hvilke innholdstyper hver parameter kan slå opp. ?p= gjelder alle typer, som i WordPress. */
const PARAMS: { key: string; types: WpIdTarget["type"][] }[] = [
  { key: "p", types: ["post", "page", "attachment"] },
  { key: "page_id", types: ["page"] },
  { key: "attachment_id", types: ["attachment"] },
];

function resolve(request: Request): string | null {
  const params = new URL(request.url).searchParams;
  for (const { key, types } of PARAMS) {
    const value = params.get(key);
    if (value === null) continue;
    const target = /^\d+$/.test(value) ? wpIdTargets[value] : undefined;
    return target && types.includes(target.type) ? target.to : null;
  }
  return null;
}

function handle(request: Request): Response {
  const to = resolve(request);
  if (!to) return goneResponse(request.method);
  return new Response(null, { status: 301, headers: { Location: to, "Cache-Control": "public, max-age=3600" } });
}

export function GET(request: Request) {
  return handle(request);
}

export function HEAD(request: Request) {
  return handle(request);
}
