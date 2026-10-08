/**
 * Alle affiliatelenker, samlet ett sted. Destinasjonene er kopiert nøyaktig fra
 * Pretty Links-eksporten 28.09.2026 (se docs/migration/affiliate-redirects.md).
 *
 * Ikke «reparer» en destinasjon her uten godkjenning, selv om den ser feil ut.
 * Lenker med `review` er markert for manuell vurdering og skal ikke brukes i nytt
 * innhold før de er avklart, men de beholdes slik at gamle lenker fortsatt virker.
 *
 * Brukes både av /go/[slug]/ og av next.config.ts (kompatibilitetsredirects), så
 * filen skal bare inneholde ren data uten Next-avhengigheter.
 */

export type AffiliateLink = {
  /** Ny rute: /go/<slug>/ */
  slug: string;
  partner: string;
  destination: string;
  /** Gamle Pretty Links-ruter som videresendes til /go/<slug>/ */
  legacyRoutes: string[];
  /** Satt når lenken må vurderes manuelt før den brukes i nytt innhold. */
  review?: string;
};

export const affiliateLinks: AffiliateLink[] = [
  {
    slug: "wealthy-affiliate",
    partner: "Wealthy Affiliate",
    destination: "https://www.wealthyaffiliate.com?a_aid=fe112df7",
    legacyRoutes: ["/wealthyaffiliate"],
  },
  {
    slug: "tradetracker",
    partner: "TradeTracker",
    destination: "http://tc.tradetracker.net/?c=5187&m=12&a=233877",
    legacyRoutes: ["/tradetracker"],
  },
  {
    slug: "adtraction",
    partner: "Adtraction",
    destination: "https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/adtraction"],
  },
  {
    slug: "tradedoubler",
    partner: "Tradedoubler",
    destination: "https://www.tradedoubler.com/",
    legacyRoutes: ["/tradedoubler"],
    review: "Destinasjonen er forsiden uten sporingsparametre.",
  },
  {
    slug: "awin",
    partner: "Awin",
    destination: "https://www.awin1.com/cread.php?awinmid=4030&awinaffid=340337",
    legacyRoutes: ["/awin"],
  },
  {
    slug: "adrecord",
    partner: "Adrecord",
    destination: "https://click.adrecord.com/?c=23765&p=120",
    legacyRoutes: ["/adrecord"],
  },
  {
    slug: "partner-ads",
    partner: "Partner-ads",
    destination: "https://www.partner-ads.com/no/klikbanner.php?partnerid=27345&bannerid=54626",
    legacyRoutes: ["/partnerads"],
  },
  {
    slug: "one-com",
    partner: "One.com",
    destination: "http://one.me/noadtijc",
    legacyRoutes: ["/one", "/one_rabatt"],
  },
  {
    slug: "jaaxy",
    partner: "Jaaxy",
    destination: "https://www.jaaxy.com/?a_aid=fc8cf5cc",
    legacyRoutes: ["/jaaxy"],
  },
  {
    slug: "kwfinder",
    partner: "KWFinder",
    destination: "https://app.kwfinder.com#a573d835c285f735d9b85f00c",
    legacyRoutes: ["/kwfinder"],
  },
  {
    slug: "payoneer",
    partner: "Payoneer",
    destination:
      "https://share.payoneer.com/nav/ie-6IouEo70XkF_ZNOZO16LSJdVcOpBvsMvE3CTFrXjeZQcRPbBPigXUXT3CiYgz-RbJ0xDllXNe08P17YxhUg2",
    legacyRoutes: ["/payoneer"],
  },
  {
    slug: "daisycon",
    partner: "Daisycon",
    destination: "https://ds1.nl/c/?si=1400&li=84664&wi=320283&ws=&dl=",
    legacyRoutes: ["/daisycon"],
  },
  {
    slug: "adsninja",
    partner: "Adsninja",
    destination: "https://trk.an3trk8.tech/t/MjE4NV8zNDc/",
    legacyRoutes: ["/adsninja"],
    review: "Ukjent sporingsdomene.",
  },
  {
    slug: "proisp",
    partner: "ProISP",
    destination: "https://www.proisp.no/",
    legacyRoutes: ["/proisp"],
    review: "Destinasjonen er forsiden uten sporingsparametre.",
  },
  {
    slug: "adservice",
    partner: "Adservice",
    destination: "https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/adservice"],
    review: "Samme destinasjon som /go/adtraction/.",
  },
  {
    slug: "link-whisper",
    partner: "Link Whisper",
    destination: "https://linkwhisper.com/ref/614/",
    legacyRoutes: ["/linkwhisper"],
  },
  {
    slug: "namecheap",
    partner: "Namecheap",
    destination: "http://namecheap.pxf.io/692ZV",
    legacyRoutes: ["/namecheap"],
  },
  {
    slug: "depositphotos",
    partner: "Depositphotos",
    destination: "https://no.depositphotos.com/?ref=26502056&utm_source=linkCopy&utm_medium=referral",
    legacyRoutes: ["/depositphotos"],
  },
  {
    slug: "orion-media",
    partner: "Orion Media",
    destination: "https://orsearchlink.com/click.track?CID=438863&AFID=434772",
    legacyRoutes: ["/orionmedia"],
  },
  {
    slug: "apotera",
    partner: "Apotera",
    destination: "https://www.apotera.no/",
    legacyRoutes: ["/apotera"],
    review: "Destinasjonen er forsiden uten sporingsparametre, og temaet ligger utenfor nettstedet.",
  },
  {
    slug: "pretty-links",
    partner: "Pretty Links",
    destination: "https://prettylinks.com?aff=15500",
    legacyRoutes: ["/prettylinks"],
    review: "Affiliatelenke til en WordPress-plugin den nye løsningen ikke bruker.",
  },
  {
    slug: "morningscore",
    partner: "Morningscore",
    destination: "https://morningscore.io?fpr=andreas-swane57",
    legacyRoutes: ["/morningscore"],
  },
  {
    slug: "addrevenue",
    partner: "Addrevenue",
    destination: "https://addrevenue.io/t?c=3455267&a=984405&m=DK",
    legacyRoutes: ["/addrevenue"],
  },
  {
    slug: "shopify",
    partner: "Shopify",
    destination: "https://shopify.pxf.io/BnyBVy",
    legacyRoutes: ["/shopify"],
  },
  {
    slug: "yougov",
    partner: "YouGov",
    destination: "https://rkn3.net/c/?si=13663&li=1597128&wi=320283&ws=",
    legacyRoutes: ["/yougov"],
    review: "Spørreundersøkelser passer dårlig med «uten hype». Redaksjonell beslutning.",
  },
  {
    slug: "nordnet",
    partner: "Nordnet",
    destination: "https://go.adt212.net/t/t?a=1585769153&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/nordnet"],
    review: "Redaksjonell beslutning.",
  },
  {
    slug: "topsurveys",
    partner: "TopSurveys",
    destination: "https://jdt8.net/c/?si=20189&li=1861844&wi=320283&ws=",
    legacyRoutes: ["/topsurveys"],
    review: "Spørreundersøkelser passer dårlig med «uten hype». Redaksjonell beslutning.",
  },
  {
    slug: "prime-opinion",
    partner: "Prime Opinion",
    destination: "https://jdt8.net/c/?si=19253&li=1826337&wi=320283&ws=",
    legacyRoutes: ["/PrimeOpinion"],
    review: "Spørreundersøkelser passer dårlig med «uten hype». Redaksjonell beslutning.",
  },
  {
    slug: "heycash",
    partner: "HeyCash",
    destination: "https://jdt8.net/c/?si=19639&li=1840453&wi=320283&ws=",
    legacyRoutes: ["/heycash"],
    review: "Spørreundersøkelser passer dårlig med «uten hype». Redaksjonell beslutning.",
  },
];

export function getAffiliateLink(slug: string): AffiliateLink | undefined {
  return affiliateLinks.find((link) => link.slug === slug);
}
