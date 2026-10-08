export const SITE_URL = "https://minegensjef.no";
export const SITE_NAME = "Min Egen Sjef";

/**
 * Hele nettstedet er noindex til lanseringen er besluttet. Settes til "true"
 * i produksjonsmiljøet først når domenet er flyttet (se docs/STATUS.md).
 */
export const isSiteIndexable = process.env.SITE_INDEXABLE === "true";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
