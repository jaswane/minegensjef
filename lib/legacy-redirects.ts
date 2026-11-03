/**
 * Gamle slugger som WordPress i dag videresender via `_wp_old_slug`.
 * Kilde: docs/migration/url-inventory.md («Historiske slugger som må videresendes»).
 *
 * Målet skal være den endelige adressen, ikke en annen gammel adresse, så det ikke
 * blir redirect-kjeder. Alle seks mål er publiserte artikler som svarer 200.
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
 * Gamle sider som er erstattet av, eller slått sammen med, en side med samme formål (301).
 * Bare godkjente 301-er legges inn her. Hele regnskapet står i docs/migration/url-inventory.md.
 */
export const replacedPageRedirects: { from: string; to: string }[] = [
  { from: "/blogg/", to: "/artikler/" },
  { from: "/om-meg/", to: "/om/" },
  { from: "/privacy-policy/", to: "/personvern/" },
  { from: "/wealthy-affiliate-black-friday-salg/", to: "/wealthy-affiliate/" },
  // MERGE → 301, godkjent etter GSC-kontroll
  { from: "/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/", to: "/seriose-mater-a-tjene-penger-pa-nettet/" },
  { from: "/er-det-umulig-a-tjene-penger-pa-nett/", to: "/seriose-mater-a-tjene-penger-pa-nettet/" },
  { from: "/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/", to: "/hva-er-seo/" },
  { from: "/hvordan-heve-sjekk-fra-utlandet-i-norge/", to: "/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/" },
];
