import type { StaticImageData } from "next/image";
import addrevenueLogo from "@/assets/partners/addrevenue.svg";
import adtractionLogo from "@/assets/partners/adtraction.png";
import daisyconLogo from "@/assets/partners/daisycon.svg";
import mangoolsLogo from "@/assets/partners/mangools.svg";
import morningscoreLogo from "@/assets/partners/morningscore.svg";
import partnerAdsLogo from "@/assets/partners/partner-ads.svg";
import tradetrackerLogo from "@/assets/partners/tradetracker.svg";
import wealthyAffiliateLogo from "@/assets/partners/wealthy-affiliate.svg";
import windsorLogo from "@/assets/partners/windsor-ai.png";

/**
 * Partnere som vises på /partnere/. Bare slugger med status «active» i
 * lib/affiliate-links.ts kan stå her. <AffiliateLink> stopper bygget ellers.
 *
 * Beskrivelsene bygger på det som allerede er dokumentert på nettstedet eller hos
 * partneren selv. Ingen rangering: rekkefølgen er alfabetisk innen hver gruppe.
 */
export type PartnerGroup = "verktoy" | "nettverk";

export type Partner = {
  /** Slug i lib/affiliate-links.ts. Lenken går til /go/<slug>/. */
  slug: string;
  name: string;
  group: PartnerGroup;
  description: string;
  /** Logo fra partnerens eget nettsted, lagret lokalt. Kilder: assets/partners/KILDER.md. Uten logo vises bare navnet. */
  logo?: StaticImageData;
};

export const PARTNER_GROUPS: { id: PartnerGroup; title: string; lead: string }[] = [
  {
    id: "verktoy",
    title: "Verktøy og plattformer",
    lead: "Verktøy for søkeord, analyse og nettsider, og læringsplattformen jeg startet med.",
  },
  {
    id: "nettverk",
    title: "Affiliatenettverk",
    lead: "Nettverkene der norske nettbutikker og tjenester har affiliateprogrammene sine. Medlemskap er gratis.",
  },
];

export const partners: Partner[] = [
  {
    slug: "mangools",
    name: "Mangools (KWFinder)",
    group: "verktoy",
    logo: mangoolsLogo,
    description:
      "SEO-verktøy med KWFinder for søkeordsanalyse, SERPChecker, SERPWatcher, LinkMiner og SiteProfiler. Kan kobles til ChatGPT og Claude via Mangools' egen MCP-server. Gratiskontoen gir 5 søkeordoppslag per døgn.",
  },
  {
    slug: "morningscore",
    name: "Morningscore",
    group: "verktoy",
    logo: morningscoreLogo,
    description:
      "Dansk SEO-verktøy med søkeordsanalyse, rangeringssporing, lenkeanalyse og helsesjekk av nettstedet, og søkeorddata også på norsk.",
  },
  {
    slug: "namecheap",
    name: "Namecheap",
    group: "verktoy",
    description:
      "Domeneregistrar som også selger webhotell. Jeg har kjøpt engelske .com-domener her. Sammenlign prisen for første år med prisen ved fornyelse.",
  },
  {
    slug: "wealthy-affiliate",
    name: "Wealthy Affiliate",
    group: "verktoy",
    logo: wealthyAffiliateLogo,
    description:
      "Engelskspråklig læringsplattform for affiliate-markedsføring, med opplæring, WordPress-hosting og AI-assistenten Ace. Starter-nivået er gratis. Jeg har vært medlem siden 2014.",
  },
  {
    slug: "windsor-ai",
    name: "Windsor.ai",
    group: "verktoy",
    logo: windsorLogo,
    description:
      "Henter data fra blant annet Google Search Console og GA4 og kobler dem til ChatGPT og Claude via MCP, eller til Looker Studio, Google Sheets og BigQuery. Gratisplanen har én datakilde.",
  },
  {
    slug: "addrevenue",
    name: "Addrevenue",
    group: "nettverk",
    logo: addrevenueLogo,
    description:
      "Globalt nettverk med norske programmer innen blant annet klær, hjem og interiør, helse og skjønnhet og familie.",
  },
  {
    slug: "adtraction",
    name: "Adtraction",
    group: "nettverk",
    logo: adtractionLogo,
    description:
      "Svensk nettverk med egen norsk avdeling. Du kan legge inn flere nettsteder og søke på programmer for hvert av dem.",
  },
  {
    slug: "daisycon",
    name: "Daisycon",
    group: "nettverk",
    logo: daisyconLogo,
    description: "Internasjonalt nettverk med mange programmer. De fleste er utenlandske, men en del er norske.",
  },
  {
    slug: "orion-media",
    name: "Orion Media",
    group: "nettverk",
    description: "Norsk nettverk. Da jeg skrev om det i 2024, hadde det flere programmer innen helse og kosttilskudd.",
  },
  {
    slug: "partner-ads",
    name: "Partner-ads",
    group: "nettverk",
    logo: partnerAdsLogo,
    description: "Dansk nettverk med programmer i Norge, Sverige og Danmark, blant dem noen du ikke finner i andre nettverk.",
  },
  {
    slug: "tradetracker",
    name: "TradeTracker",
    group: "nettverk",
    logo: tradetrackerLogo,
    description: "Internasjonalt nettverk med norsk side og mange norske programmer.",
  },
];
