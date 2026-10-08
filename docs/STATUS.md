# Status – Minegensjef 2.0

**Sist oppdatert:** 08.10.2026
**Status:** Launch foundation bygget, venter på godkjenning. Ikke committet ennå.
**Siste commit:** «Refine Wealthy Affiliate homepage story» (`git log -1`)

Alt arbeid er lokalt. Den eksisterende WordPress-siden på minegensjef.no er live og skal ikke røres. **Domenet skal ikke flyttes**, og ingen DNS-, hosting- eller Vercel-endringer er gjort.

## Ferdig

- Next.js 16.4.0 (App Router), TypeScript, Tailwind 4, ESLint. `next` og `@next/mdx` er låst til samme eksakte versjon. Eneste nye avhengigheter er MDX-pakkene (se under).
- Design tokens i `app/globals.css`, kun mørk modus. Lesetekst for artikler og tekstsider bruker klassen `.prose-mes`.
- Forsiden (`/`), i denne rekkefølgen:
  1. Header med logo-symbol og mobilmeny (`components/site-header.tsx`, `mobile-nav.tsx`)
  2. Hero med én CTA og troverdighetsrad (`hero.tsx`)
  3. Fire steg (`steps.tsx`)
  4. Wealthy Affiliate-panel med historien og tidslinjen 2014 → 2026 → nytt prosjekt (`wa-journey.tsx`)
  5. eButikker-case med laptop-visual (`ebutikker-case.tsx`)
  6. Guide-indeks med tre innganger (`guides-index.tsx`)
  7. Om Andreas-signatur (`about-signature.tsx`)
  8. Minimal footer (`site-footer.tsx`, ligger i layouten)
- Navigasjon samlet i `lib/navigation.ts`. Header og footer peker bare til sider som finnes.

Designbeslutninger for forsiden står i `docs/PRD.md` §8 («Beslutninger om forsidens struktur»).

## Ruter som finnes

| Rute | Innhold | I sitemap |
|---|---|---|
| `/` | Forside | ja |
| `/start/` | Fire steg med råd, lenker til guidene | ja |
| `/guider/` | Planlagte guider, merket «Under arbeid», med ankere | ja |
| `/artikler/` | Liste over publiserte artikler (tom til migreringen starter) | ja |
| `/wealthy-affiliate/` | Første versjon av WA-huben, med én merket annonselenke | ja |
| `/case/ebutikker/` | eButikker som ekte eksempel, ikke oppskrift. Ingen tall | ja |
| `/om/` | Om Andreas og nettstedet | ja |
| `/kontakt/` | **Eneste sted e-postadressen står** | ja |
| `/personvern/` | Analyse og samtykke, annonselenker, kontaktvei, rettigheter | nei, noindex |
| `/ansvarsfraskrivelse/` | Inntekt, skatt/MVA, annonselenker, utdatert innhold | nei, noindex |
| `/<slug>/` | Artikkelmalen (MDX) | ja, når publisert |
| `/go/<slug>/` | Affiliate-redirect, 307 | nei, noindex |
| 404 | Egen side med lenker videre | – |

## Artikkelsystemet er klart

Artikler er MDX-filer i `content/artikler/<slug>.mdx` og publiseres på `/<slug>/`, samme mønster som de gamle WordPress-adressene. Hvorfor og hvordan står i `docs/content.md`.

Malen gir brødsmuler, publisert- og oppdatert-dato, annonsemerking, «Les videre», Article/WebPage/BreadcrumbList-schema, canonical og Open Graph. Bygget stopper hvis et påkrevd felt mangler.

**Ingen av de gamle artiklene er migrert ennå.** `content/artikler/` inneholder bare `eksempel-artikkelmal.mdx`, et utkast som vises i `npm run dev` og aldri i produksjon.

## Redirects implementert

**Affiliate (`/go/<slug>/`):** 29 ruter i `lib/affiliate-links.ts`, med destinasjoner byte-identiske med Pretty Links-eksporten 28.09.2026. Svarer med 307, `X-Robots-Tag: noindex, nofollow` og `Cache-Control: no-store`. Ruter merket `review` virker, men skal ikke brukes i nytt innhold før de er vurdert (se `docs/migration/affiliate-redirects.md`).

**Gamle Pretty Links-ruter:** Alle 30 videresendes med 301 til riktig `/go/`-rute. 30 gamle ruter går til 29 `/go/`-ruter fordi `/one` og `/one_rabatt` har identisk destinasjon i Pretty Links og deler `/go/one-com/`. Alle 30 kjeder er testet helt fram, for eksempel `/wealthyaffiliate` → `/go/wealthy-affiliate/` → Wealthy Affiliate. Uten avsluttende skråstrek blir det ett ekstra hopp (308), fordi Next legger til skråstreken først. Matchingen skiller ikke mellom store og små bokstaver.

**Gamle slugger:** De seks `_wp_old_slug`-redirectene (301) fra `docs/migration/url-inventory.md`, i `lib/legacy-redirects.ts`.

**Blokkering før domene-cutover:** Alle seks målene gir 404 til artiklene er migrert.

| Gammel URL | Mål | Mål i dag |
|---|---|---|
| `/hva-er-egentlig-affiliate-markedsforing/` | `/hva-er-affiliate-markedsforing/` | 404, ikke migrert |
| `/hvordan-lage-nettside-na-til-dags-det-er-enkelt/` | `/hvordan-lage-nettside-na-til-dags/` | 404, ikke migrert |
| `/hva-er-sokemotoroptimalisering-seo/` | `/hva-er-seo/` | 404, ikke migrert |
| `/hva-syns-jeg-om-kurset-seo-that-works-2/` | `/anmeldelse_seo-that-works-2/` | 404, ikke migrert. **Målet er selv en 410-kandidat** |
| `/det-arlige-wealthy-affiliate-black-friday-salget/` | `/wealthy-affiliate-black-friday-salg/` | 404, ikke migrert. **Målet er selv foreslått 301 til `/wealthy-affiliate/`** |
| `/hvordan-motta-inntekter-fra-amazon-pa-enklest-mulig-vis/` | `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` | 404, ikke migrert |

Når beslutningene for de to merkede målene er tatt, bør den gamle sluggen peke rett til det endelige målet (eller gi 410), så det ikke blir en kjede.

**Ikke implementert:** 410-kandidater og MERGE → 301-forslag. De venter på GSC-kontroll.

## SEO

- `metadataBase` er `https://minegensjef.no`. Hver side har unik title, description og canonical.
- **Hele nettstedet er noindex** til miljøvariabelen `SITE_INDEXABLE=true` settes ved lansering. Da stenger også `robots.txt` for all crawling.
- Etter lansering: `robots.txt` åpner alt unntatt `/go/` og oppgir sitemapen.
- Sitemap inneholder bare indekserbare sider og publiserte artikler.
- Schema: WebSite og Organization på forsiden, WebPage og BreadcrumbList på undersider, Article i artikkelmalen. Ingen e-postadresse i schema.
- Open Graph og Twitter-kort med et statisk delingsbilde (`app/opengraph-image.png`).

## Analytics

- GA4 med Consent Mode v2 (basic), etter samme mønster som barbere.no. Taggen lastes først etter samtykke, og consent-standarden settes til «denied» før lasting. Avslå og Godta er like store.
- `affiliate_click` sendes med `partner`, `placement` og `link_slug` ved klikk på `/go/`-lenker, bare med samtykke. Mål-URL-en sendes ikke.
- **Måle-ID mangler.** Den finnes verken i dokumentasjonen eller i kildekoden på den live siden. Hent ID-en for «Min egen sjef - GA4» fra GA-admin og sett `NEXT_PUBLIC_GA_ID`. Uten den er analyse og samtykkebanner helt av.

## Branding og assets

- Nytt Min Egen Sjef-symbol (blått «M») er valgt og godkjent.
- Symbolet brukes foran navnet i header og footer. Navnet er ekte tekst, symbolet er dekorativt (`alt=""`).
- Samme symbol brukes som favicon og app-ikon: `app/favicon.ico`, `app/icon.png` og `app/apple-icon.png`.
- `assets/minegensjef-logo-source.png` er source-asset. `assets/minegensjef-symbol.png` er produksjonsasset for logoen i UI.
- eButikker-caset bruker `assets/minegensjef_ebutikker_laptop.png`.
- `assets/ebutikker-homepage.png` brukes ikke lenger, men beholdes inntil videre.

## Wealthy Affiliate-historien

- Første WA-prosjekt (2014) var en enkel Amazon Associates-side om sportsgadgets for USA-markedet. Domenenavnet skal ikke være sentralt.
- De første affiliateinntektene kom via Amazon Associates, den gangen som fysiske sjekker i posten. Den første sjekken på over 1000 dollar kom i januar 2016 (gammelt innlegg `/min-forste-sjekk-pa-over-1000/`).
- 2026: Andreas går gjennom WA-opplæringen på nytt og bygger et nytt nettsted parallelt med kurset.
- Nisjen og prosjektet er ikke valgt ennå. Ikke finn på et prosjekt.
- eButikker.no er et separat, senere case, ikke det første WA-prosjektet.
- Ikke kommuniser dette som get-rich-quick.

## Regel for forsiden

**Ingen nye hovedseksjoner skal legges til forsiden uten en eksplisitt beslutning.** Strukturen over er låst.

## Ikke implementert

- Migrering av de gamle artiklene.
- Guidesidene (`/guider/<slug>/`) og temahubene (`/nisje/`, `/nettsider/`, `/seo/`, `/ai/`, `/affiliate-markedsforing/`).
- 410-kandidater og MERGE → 301-forslag.
- Vercel-oppsett og domeneovergang.

## Lenker

Ingen synlig intern lenke på noen side gir 404 (kontrollert 08.10.2026).

Forsidens tre guide-lenker peker midlertidig til ankrene på `/guider/` (`#nisje`, `#nettside`, `#trafikk`). De endelige rutene står som `plannedHref` i `components/guides-index.tsx` og byttes inn når guidene er publisert:

- `/guider/finne-nisje/`
- `/guider/bygge-nettside/`
- `/guider/trafikk-fra-google-og-ai-sok/`

## Åpne beslutninger

Fra PRD §20 (fortsatt åpne):

- Dark-only i MVP eller også light mode.
- Hvilke gamle artikler som skal skrives om før lansering, og hvordan kommentarer håndteres.
- Endelig WA-understruktur.
- `/blogg/` mot `/artikler/`.
- Hvor mye av regnskapstallene som vises offentlig.
- Nyhetsbrev nå eller senere.

MDX er nå valgt for innhold (se `docs/content.md`).

Fra forside- og grunnmurarbeidet:

- **Behandlingsansvarlig i personvernerklæringen.** Det står at Swane Creative er ansvarlig. Organisasjonsform og organisasjonsnummer mangler og bør legges inn.
- Ordlyd og URL for Swane Creative-lenken i footeren.
- Hvem som formelt mottar provisjon: Min Egen Sjef eller Swane Creative. Påvirker teksten i footer, artikkelmal, WA-huben og ansvarsfraskrivelsen.
- Om «siden 2014» i Om-signaturen og på `/om/` stemmer for nettsider og affiliate generelt. Det dokumenterte er WA-medlemskap fra 2014.
- WA-påstandene (at plattformen moderniseres) er ikke kontrollert mot WA.
- Forfatter i Article-schema er bare «Andreas». Fullt navn ville styrket E-E-A-T, hvis du ønsker det.
- Fjellbildet er bare 750×562 px.

## Senere teknisk cleanup

- **Gjenstående npm audit-varsler (high) etter oppgraderingen til Next 16.4.0:**
  - `sharp` 0.35.4 (via `next`, GHSA-wq5f-xc86-pv6w) og `source-map-js` 1.2.1 (via `postcss`/`@tailwindcss`, GHSA-68fv-2mgg-jv7q). Begge rettes innenfor eksisterende versjonsspenn med `npm audit fix`, uten endring i `package.json`. Ikke gjort, fordi sprinten bare skulle oppdatere Next.
  - `braces` via `eslint-config-next` (kun utvikling). npm foreslår å nedgradere til 14.x, som ikke er aktuelt.
- Heroen bruker `priority` på fjellbildet, som er avviklet i Next.js 16. Bytt til `preload` eller `loading="eager"`/`fetchPriority="high"`.
- `assets/minegensjef_ebutikker_laptop.png` er 1,4 MB som PNG.
- `assets/ebutikker-homepage.png` kan slettes når det er bestemt at den ikke trengs.

## Neste sprint: P0 legacy-content migration

Migrer de prioriterte gamle artiklene til `content/artikler/`, med bevart URL og opprinnelig publiseringsdato. Rekkefølge og arbeidsbeskrivelse står i `docs/migration/migration-priority.md`. Før start: hent GSC-data og klikktall per Pretty Link.

WA-anmeldelsen skal skrives underveis i Andreas' gjennomgang av den nye WA-opplæringen, ikke før.

## Praktisk

- Dev-server: `npm run dev` (port 3000). `.claude/launch.json` er ignorert i git.
- Miljøvariabler: se `.env.example` (`NEXT_PUBLIC_GA_ID`, `SITE_INDEXABLE`).
- Kontroller før commit: `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- `AGENTS.md`: Next.js 16 avviker fra eldre versjoner. Les dokumentasjonen i `node_modules/next/dist/docs/` før du skriver ny kode.
