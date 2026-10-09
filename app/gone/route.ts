// Mål for gamle WordPress-adresser som er fjernet med vilje (410 Gone): arkiver,
// feeder og vedleggssider uten publisert parent. Reglene som sender trafikk hit,
// ligger i next.config.ts (rewrites), så den opprinnelige adressen beholdes i nettleseren.
// Se docs/migration/wordpress-archives-and-media.md.
import { goneResponse } from "@/lib/gone";

export function GET() {
  return goneResponse();
}

export function HEAD() {
  return goneResponse("HEAD");
}
