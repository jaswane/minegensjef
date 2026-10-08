/**
 * Gamle slugger som WordPress i dag videresender via `_wp_old_slug`.
 * Kilde: docs/migration/url-inventory.md («Historiske slugger som må videresendes»).
 *
 * Bare disse seks er implementert. 410-kandidater og MERGE/301-forslag er ikke
 * godkjent ennå og skal ikke legges inn her før de er kontrollert mot GSC.
 *
 * Målene finnes ikke før artiklene er migrert, så frem til da ender
 * videresendingen på en 404 i den nye løsningen.
 */
export const legacySlugRedirects: { from: string; to: string }[] = [
  { from: "/hva-er-egentlig-affiliate-markedsforing/", to: "/hva-er-affiliate-markedsforing/" },
  { from: "/hvordan-lage-nettside-na-til-dags-det-er-enkelt/", to: "/hvordan-lage-nettside-na-til-dags/" },
  { from: "/hva-er-sokemotoroptimalisering-seo/", to: "/hva-er-seo/" },
  { from: "/hva-syns-jeg-om-kurset-seo-that-works-2/", to: "/anmeldelse_seo-that-works-2/" },
  { from: "/det-arlige-wealthy-affiliate-black-friday-salget/", to: "/wealthy-affiliate-black-friday-salg/" },
  {
    from: "/hvordan-motta-inntekter-fra-amazon-pa-enklest-mulig-vis/",
    to: "/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/",
  },
];
