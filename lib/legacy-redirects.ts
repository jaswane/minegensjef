/**
 * Gamle slugger som WordPress i dag videresender via `_wp_old_slug`.
 * Kilde: docs/migration/url-inventory.md («Historiske slugger som må videresendes»).
 *
 * Målet skal være den endelige adressen, ikke en annen gammel adresse, så det ikke
 * blir redirect-kjeder. SEO That Works-sluggen venter på beslutningen om
 * `/anmeldelse_seo-that-works-2/` (410-kandidat) og gir 404 til da.
 */
export const legacySlugRedirects: { from: string; to: string }[] = [
  { from: "/hva-er-egentlig-affiliate-markedsforing/", to: "/hva-er-affiliate-markedsforing/" },
  { from: "/hvordan-lage-nettside-na-til-dags-det-er-enkelt/", to: "/hvordan-lage-nettside-na-til-dags/" },
  { from: "/hva-er-sokemotoroptimalisering-seo/", to: "/hva-er-seo/" },
  { from: "/hva-syns-jeg-om-kurset-seo-that-works-2/", to: "/anmeldelse_seo-that-works-2/" },
  { from: "/det-arlige-wealthy-affiliate-black-friday-salget/", to: "/wealthy-affiliate/" },
  {
    from: "/hvordan-motta-inntekter-fra-amazon-pa-enklest-mulig-vis/",
    to: "/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/",
  },
];

/**
 * Gamle sider som er erstattet av en ny side med samme formål (301).
 * Bare godkjente 301-er legges inn her. MERGE-forslag og 410-kandidater står i
 * docs/migration/url-inventory.md og venter på GSC-kontroll.
 */
export const replacedPageRedirects: { from: string; to: string }[] = [
  { from: "/blogg/", to: "/artikler/" },
  { from: "/om-meg/", to: "/om/" },
  { from: "/privacy-policy/", to: "/personvern/" },
  { from: "/wealthy-affiliate-black-friday-salg/", to: "/wealthy-affiliate/" },
];
