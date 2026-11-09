/**
 * Alle affiliatelenker, samlet ett sted. Alle 30 gamle Pretty Links-ruter er med, og
 * fasit for de gamle destinasjonene er eksporten 03.11.2026 (lik eksporten 28.09.2026),
 * se docs/migration/affiliate-redirects.md. Mangools og Windsor.ai er lagt til 09.11.2026
 * uten gamle ruter.
 *
 * Ikke «reparer» en destinasjon her uten godkjenning, selv om den ser feil ut.
 * Bare lenker med status «active» kan brukes i innhold. <AffiliateLink> stopper bygget
 * for de andre. Alle ruter, også legacy og inactive, virker fortsatt for gamle lenker.
 *
 * Brukes både av /go/[slug]/ og av next.config.ts (kompatibilitetsredirects), så
 * filen skal bare inneholde ren data uten Next-avhengigheter.
 */

/**
 * - `active`: aktiv og bekreftet av Andreas. Den eneste statusen som kan brukes som annonselenke i innhold.
 * - `legacy`: gammel Pretty Link som ikke er kontrollert for 2026. Ruten virker, men brukes ikke i innhold.
 * - `inactive`: ikke en aktiv affiliateavtale, eller destinasjonen virker ikke. Ruten virker for gamle lenker.
 */
export type AffiliateStatus = "active" | "legacy" | "inactive";

export type AffiliateLink = {
  /** Ny rute: /go/<slug>/ */
  slug: string;
  partner: string;
  destination: string;
  /** Gamle Pretty Links-ruter som videresendes til /go/<slug>/ */
  legacyRoutes: string[];
  status: AffiliateStatus;
  /** Hvorfor lenken er legacy eller inaktiv. */
  note?: string;
};

export const affiliateLinks: AffiliateLink[] = [
  {
    slug: "wealthy-affiliate",
    partner: "Wealthy Affiliate",
    destination: "https://www.wealthyaffiliate.com/?a_aid=fe112df7",
    legacyRoutes: ["/wealthyaffiliate"],
    status: "active",
  },
  {
    slug: "tradetracker",
    partner: "TradeTracker",
    destination: "https://tc.tradetracker.net/?c=5187&m=12&a=233877&r=&u=",
    legacyRoutes: ["/tradetracker"],
    status: "active",
  },
  {
    slug: "adtraction",
    partner: "Adtraction",
    destination: "https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/adtraction"],
    status: "active",
  },
  {
    slug: "tradedoubler",
    partner: "Tradedoubler",
    destination: "https://www.tradedoubler.com/",
    legacyRoutes: ["/tradedoubler"],
    status: "inactive",
    note: "Ingen aktiv affiliateavtale.",
  },
  {
    slug: "awin",
    partner: "Awin",
    destination: "https://www.awin1.com/cread.php?awinmid=4030&awinaffid=340337",
    legacyRoutes: ["/awin"],
    status: "inactive",
    note: "Ingen aktiv affiliate-destinasjon funnet. Den gamle lenken går til én annonsør, ikke til Awin-nettverket.",
  },
  {
    slug: "adrecord",
    partner: "Adrecord",
    destination: "https://click.adrecord.com/?c=23765&p=120",
    legacyRoutes: ["/adrecord"],
    status: "inactive",
    note: "Nettstedet og det gamle sporingsdomenet svarer ikke (DNS, november 2026).",
  },
  {
    slug: "partner-ads",
    partner: "Partner-ads",
    destination: "https://www.partner-ads.com/no/klikbanner.php?partnerid=27345&bannerid=54626",
    legacyRoutes: ["/partnerads"],
    status: "active",
  },
  {
    slug: "one-com",
    partner: "One.com",
    destination: "http://one.me/noadtijc",
    legacyRoutes: ["/one", "/one_rabatt"],
    status: "inactive",
    note: "Affiliateprogrammet er ikke lenger aktivt for Andreas (bekreftet 03.11.2026).",
  },
  {
    slug: "jaaxy",
    partner: "Jaaxy",
    destination: "https://www.jaaxy.com/?a_aid=fc8cf5cc",
    legacyRoutes: ["/jaaxy"],
    status: "inactive",
    note: "Den gamle destinasjonen svarer ikke.",
  },
  {
    slug: "kwfinder",
    partner: "KWFinder",
    destination: "https://app.kwfinder.com#a573d835c285f735d9b85f00c",
    legacyRoutes: ["/kwfinder"],
    status: "active",
  },
  {
    // Samme Mangools-affiliatekonto som KWFinder (samme ID etter #). Ingen gammel Pretty Link.
    slug: "mangools",
    partner: "Mangools",
    destination: "https://mangools.com#a573d835c285f735d9b85f00c",
    legacyRoutes: [],
    status: "active",
  },
  {
    slug: "payoneer",
    partner: "Payoneer",
    destination:
      "https://share.payoneer.com/nav/ie-6IouEo70XkF_ZNOZO16LSJdVcOpBvsMvE3CTFrXjeZQcRPbBPigXUXT3CiYgz-RbJ0xDllXNe08P17YxhUg2",
    legacyRoutes: ["/payoneer"],
    status: "legacy",
    note: "Delingslenke fra 2018.",
  },
  {
    slug: "daisycon",
    partner: "Daisycon",
    destination: "https://ds1.nl/c/?si=1400&li=84664&wi=320283&ws=&dl=no%2F",
    legacyRoutes: ["/daisycon"],
    status: "active",
  },
  {
    slug: "adsninja",
    partner: "Adsninja",
    destination: "https://trk.an3trk8.tech/t/MjE4NV8zNDc/",
    legacyRoutes: ["/adsninja"],
    status: "legacy",
    note: "Ukjent sporingsdomene.",
  },
  {
    slug: "proisp",
    partner: "ProISP",
    destination: "https://www.proisp.no/",
    legacyRoutes: ["/proisp"],
    status: "legacy",
    note: "Destinasjonen er forsiden uten sporingsparametre.",
  },
  {
    slug: "adservice",
    partner: "Adservice",
    destination: "https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/adservice"],
    status: "legacy",
    note: "Samme destinasjon som adtraction.",
  },
  {
    slug: "link-whisper",
    partner: "Link Whisper",
    destination: "https://linkwhisper.com/ref/614/",
    legacyRoutes: ["/linkwhisper"],
    status: "legacy",
    note: "Ikke kontrollert for 2026.",
  },
  {
    slug: "namecheap",
    partner: "Namecheap",
    destination: "https://namecheap.pxf.io/692ZV",
    legacyRoutes: ["/namecheap"],
    status: "active",
  },
  {
    slug: "depositphotos",
    partner: "Depositphotos",
    destination: "https://no.depositphotos.com/?ref=26502056&utm_source=linkCopy&utm_medium=referral",
    legacyRoutes: ["/depositphotos"],
    status: "legacy",
    note: "Ikke kontrollert for 2026.",
  },
  {
    slug: "orion-media",
    partner: "Orion Media",
    destination: "https://orionious.com/click.track?CID=438863&AFID=434772",
    legacyRoutes: ["/orionmedia"],
    status: "active",
  },
  {
    slug: "apotera",
    partner: "Apotera",
    destination: "https://www.apotera.no/",
    legacyRoutes: ["/apotera"],
    status: "legacy",
    note: "Destinasjonen er forsiden uten sporingsparametre, og temaet ligger utenfor nettstedet.",
  },
  {
    slug: "pretty-links",
    partner: "Pretty Links",
    destination: "https://prettylinks.com?aff=15500",
    legacyRoutes: ["/prettylinks"],
    status: "legacy",
    note: "Affiliatelenke til en WordPress-plugin den nye løsningen ikke bruker.",
  },
  {
    slug: "morningscore",
    partner: "Morningscore",
    destination: "https://morningscore.io?fpr=andreas-swane57",
    legacyRoutes: ["/morningscore"],
    status: "active",
  },
  {
    slug: "addrevenue",
    partner: "Addrevenue",
    destination: "https://addrevenue.io/t?a=984405&c=3455267",
    legacyRoutes: ["/addrevenue"],
    status: "active",
  },
  {
    slug: "shopify",
    partner: "Shopify",
    destination: "https://shopify.pxf.io/BnyBVy",
    legacyRoutes: ["/shopify"],
    status: "legacy",
    note: "Ikke kontrollert for 2026.",
  },
  {
    slug: "yougov",
    partner: "YouGov",
    destination: "https://rkn3.net/c/?si=13663&li=1597128&wi=320283&ws=",
    legacyRoutes: ["/yougov"],
    status: "legacy",
    note: "Spørreundersøkelser passer dårlig med «uten hype».",
  },
  {
    slug: "nordnet",
    partner: "Nordnet",
    destination: "https://go.adt212.net/t/t?a=1585769153&as=1156469187&t=2&tk=1",
    legacyRoutes: ["/nordnet"],
    status: "legacy",
    note: "Redaksjonell beslutning om finanslenker gjenstår.",
  },
  {
    slug: "topsurveys",
    partner: "TopSurveys",
    destination: "https://jdt8.net/c/?si=20189&li=1861844&wi=320283&ws=",
    legacyRoutes: ["/topsurveys"],
    status: "legacy",
    note: "Spørreundersøkelser passer dårlig med «uten hype».",
  },
  {
    slug: "prime-opinion",
    partner: "Prime Opinion",
    destination: "https://jdt8.net/c/?si=19253&li=1826337&wi=320283&ws=",
    legacyRoutes: ["/PrimeOpinion"],
    status: "legacy",
    note: "Spørreundersøkelser passer dårlig med «uten hype».",
  },
  {
    slug: "heycash",
    partner: "HeyCash",
    destination: "https://jdt8.net/c/?si=19639&li=1840453&wi=320283&ws=",
    legacyRoutes: ["/heycash"],
    status: "legacy",
    note: "Spørreundersøkelser passer dårlig med «uten hype».",
  },
  {
    // Affiliateprogrammet godkjent og lenken levert av Andreas 09.11.2026. Ingen gammel Pretty Link.
    slug: "windsor-ai",
    partner: "Windsor.ai",
    destination: "https://windsor.ai/?fpr=andreas-fd71e3",
    legacyRoutes: [],
    status: "active",
  },
];

export function getAffiliateLink(slug: string): AffiliateLink | undefined {
  return affiliateLinks.find((link) => link.slug === slug);
}
