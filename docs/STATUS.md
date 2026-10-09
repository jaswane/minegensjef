# Status – Minegensjef 2.0

**Sist oppdatert:** 09.10.2026
**Status:** Legacy-migreringen er lukket. Alle 39 gamle URL-er har en dokumentert behandling: 22 migrert, 3 rebygget, 8 med 301, 2 utsatt og 4 410-kandidater. Se «Sluttregnskap» i `docs/migration/url-inventory.md`.
**Siste commit:** «Return 410 for old WordPress media and query archives» (`git log -1`)

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
| `/artikler/` | Liste over publiserte artikler (22) | ja |
| `/wealthy-affiliate/` | Første versjon av WA-huben, med én merket annonselenke og lenke til anmeldelsen | ja |
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

`eksempel-artikkelmal.mdx` er et utkast som vises i `npm run dev` og aldri i produksjon.

**Annonsemerking per lenke:** `AffiliateLink` setter «(annonselenke)» etter hver lenke, som Forbrukertilsynet anbefaler. Der lenken står i en boks som allerede er merket «Annonselenke», slås dette av med `marked={false}` (WA-huben).

## Migrerte artikler (P0, 08.10.2026)

Ni artikler er skrevet om og ligger på samme URL som i WordPress, med opprinnelig publiseringsdato og `updated` 2026-10-08. Listen står i `docs/migration/migration-priority.md`. Alle er kontrollert for title, description, canonical, én H1, Article-schema med Person, brødsmuler, «Les videre» og annonsemerking. Annonselenkene går via `/go/`.

- Skatt-, MVA- og Amazon-artiklene er kontrollert mot Skatteetaten, Brønnøysundregistrene og Amazon. De har en merknad om at det er generell informasjon og ikke rådgivning.
- WA-anmeldelsen er en levende versjon. 2016-innholdet er merket historisk. Ny vurdering, pris og funksjoner kommer etter gjennomgangen av den nye opplæringen.
- Fjernet fra `/seriose-mater-a-tjene-penger-pa-nettet/`: lenker til spørreundersøkelser (TopSurveys, HeyCash, Prime Opinion, YouGov), Shopify og Nordnet. Rutene finnes fortsatt i `/go/`.

## Migrerte artikler (bølge 2, 09.10.2026)

Seks artikler, valgt ut fra GSC-data til og med 08.10.2026. Detaljer står i `docs/migration/migration-priority.md`.

- **De to personlige innleggene** (`/min-forste-sjekk-pa-over-1000/` og `/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/`) er beholdt som historie, uten `updated`. «Min første sjekk» har en redaksjonell merknad om at resultatet ikke kan forventes i dag.
- **Amazon- og Morningscore-artiklene** skiller mellom det Andreas opplevde da, og dagens fakta. Dagens fakta er kontrollert mot Amazon og Morningscore 09.10.2026.
- **SEO-blogg-artikkelen** er bygget om fra «topp ti» til en datert status for den gamle listen.
- **`/norske-affiliate-programmer/`:** har fått én linje om at AffiliateProgrammer.no også er et prosjekt fra Swane Creative.

**Må kontrolleres manuelt:**

- Morningscore-prisene (USD per måned, hentet fra prissiden 09.10.2026), og om de er uten mva.
- Hvilke norske SEO-kilder Andreas følger i dag, hvis SEO-blogg-artikkelen skal få en anbefaling.
- W-8BEN/ITIN-krav i dag, Amazons menynavn og minstegrense for utbetaling.
- Brønnøysund-gebyret (lenket, ikke oppgitt).
- Vilkårene for årstermin og mva-fristene.

## Migrerte artikler (bølge 3, 09.10.2026)

`/gratis-bilder/` og `/gode-verktoy-for-sokeordsanalyse/` er skrevet om. De tre personlige innleggene `/introduksjon-drommen-om-a-bli-sin-egen-sjef/`, `/har-jeg-gitt-opp/` og `/suksess-motbakke-status-og-nye-mal-for-2017/` er beholdt som historie, uten `updated`. Detaljer og beslutningene for resten står i `docs/migration/migration-priority.md`.

## Bølge 4 (09.10.2026): migreringen lukket

- `/verdifulle-tips-fra-simon/` er migrert som historisk gjestepost, og `/amazon-julehandel-over-alle-stovelskaft/` som historisk innlegg. Ingen av dem har `updated`.
- Fire MERGE → 301 er implementert (se «Redirects implementert»).
- `/chatgpt-og-affiliate-markedsforing/` og `/mine-erfaringer-med-affiliatenettverket-tradetracker/` er KEEP/REWRITE, utsatt.
- `/tanker-rundt-inspirasjon/`, `/ifttt-er-et-nyttig-verktoy-for-a-automatisere-sma-oppgaver/`, `/anmeldelse_seo-that-works-2/` og `/betalt-annonsering-med-google-adwords/` er markert «410 candidate – backlink validation required». Ingen 410 er implementert.

## WordPress-arkiver, feeder og vedlegg (09.10.2026)

Detaljer, antall og begrunnelser står i `docs/migration/wordpress-archives-and-media.md`.

- **301:** `/category/blogg/` med paginering og `/blogg/page/<n>/` → `/artikler/`, og `/author/andreas/` → `/om/`. I tillegg går 137 vedleggssider direkte til parent-artikkelens endelige URL (`lib/legacy-attachments.ts`, generert fra WXR).
- **410** (`app/gone/route.ts` via rewrites): øvrige kategorier, alle tag-arkiver, øvrige forfatter-URL-er, `/page/<n>/`, alle feeder (`/feed/`, `/comments/feed/`, `/<slug>/feed/`, `?feed=`), og 20 vedleggssider uten publisert parent.
- **WordPress-ID-er** (`/?p=`, `/?page_id=`, `/?attachment_id=`): kjent ID gir 301 til endelig mål, og ukjent ID gir 410 (`app/wp-id/route.ts`, `lib/legacy-wp-ids.ts`). Andre parametre som `utm_source` påvirkes ikke.
- **410 også for** `/wp-content/uploads/...` og `?cat=`, `?tag=`, `?author=`, `?s=` på forsiden.
- **Ikke behandlet:** 28 vedleggssider som følger de fire 410-kandidatene og de to utsatte artiklene.
- **Media:** Ikke kopiert inn i repoet. Backupen har 3 065 filer (81,7 MB), og ingen av de 22 migrerte artiklene bruker gamle bilder. Bare filer som faktisk tas i bruk, bevares, og gamle bildeadresser gir 410.

## Partnerlenker Andreas skal kontrollere

Ingen destinasjoner er endret. Når Andreas leverer en ny partnerlenke, endres bare `destination` for riktig slug i `lib/affiliate-links.ts`. `/go/<slug>/` og alle gamle Pretty Links-ruter (`legacyRoutes`) fortsetter å virke uten andre endringer.

| Slug | Gamle ruter | Hvorfor den bør kontrolleres |
|---|---|---|
| `tradedoubler` | `/tradedoubler` | Lenken mangler sporingsparametre. En gammel artikkel hadde en sporet `clk.tradedoubler.com`-lenke |
| `awin` | `/awin` | Peker til én bestemt annonsør (`awinmid=4030`), ikke til nettverket |
| `partner-ads` | `/partnerads` | Peker til en bannerlenke |
| `addrevenue` | `/addrevenue` | Peker til den danske versjonen (`m=DK`) |
| `payoneer` | `/payoneer` | Delingslenke fra 2018 |
| `kwfinder` | `/kwfinder` | Sporings-ID-en ligger i et URL-fragment (`#…`), som ofte ikke blir registrert |
| `tradetracker` | `/tradetracker` | HTTP, ikke HTTPS. Trengs også før TradeTracker-artikkelen kan migreres |
| `one-com` | `/one`, `/one_rabatt` | HTTP, ikke HTTPS |
| `namecheap` | `/namecheap` | HTTP, ikke HTTPS |
| `adservice` | `/adservice` | Samme destinasjon som `adtraction` |
| `jaaxy` | `/jaaxy` | **Ny 09.10.2026:** jaaxy.com sender videre til www.jaaxy.com, som ikke svarte da lenken ble sjekket. Brukes i `/hva-er-seo/` |

## Redirects implementert

**Affiliate (`/go/<slug>/`):** 29 ruter i `lib/affiliate-links.ts`, med destinasjoner byte-identiske med Pretty Links-eksporten 28.09.2026. Svarer med 307, `X-Robots-Tag: noindex, nofollow` og `Cache-Control: no-store`. Ruter merket `review` virker, men skal ikke brukes i nytt innhold før de er vurdert (se `docs/migration/affiliate-redirects.md`).

**Gamle Pretty Links-ruter:** Alle 30 videresendes med 301 til riktig `/go/`-rute. 30 gamle ruter går til 29 `/go/`-ruter fordi `/one` og `/one_rabatt` har identisk destinasjon i Pretty Links og deler `/go/one-com/`. Alle 30 kjeder er testet helt fram, for eksempel `/wealthyaffiliate` → `/go/wealthy-affiliate/` → Wealthy Affiliate. Uten avsluttende skråstrek blir det ett ekstra hopp (308), fordi Next legger til skråstreken først. Matchingen skiller ikke mellom store og små bokstaver.

**Gamle slugger:** De seks `_wp_old_slug`-redirectene (301) fra `docs/migration/url-inventory.md`, i `lib/legacy-redirects.ts`.

**Status:** Fem av seks går til en side som svarer 200. Bare SEO That Works gir 404.

| Gammel URL | Mål | Mål i dag |
|---|---|---|
| `/hva-er-egentlig-affiliate-markedsforing/` | `/hva-er-affiliate-markedsforing/` | 200, migrert |
| `/hvordan-lage-nettside-na-til-dags-det-er-enkelt/` | `/hvordan-lage-nettside-na-til-dags/` | 200, migrert |
| `/hva-er-sokemotoroptimalisering-seo/` | `/hva-er-seo/` | 200, migrert |
| `/hva-syns-jeg-om-kurset-seo-that-works-2/` | `/anmeldelse_seo-that-works-2/` | 404, ikke migrert. **Målet er selv en 410-kandidat** |
| `/det-arlige-wealthy-affiliate-black-friday-salget/` | `/wealthy-affiliate/` | 200, går direkte uten kjede |
| `/hvordan-motta-inntekter-fra-amazon-pa-enklest-mulig-vis/` | `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` | 200, migrert |

Når beslutningene for de to merkede målene er tatt, bør den gamle sluggen peke rett til det endelige målet (eller gi 410), så det ikke blir en kjede.

**Erstattede og sammenslåtte sider (301, `replacedPageRedirects` i `lib/legacy-redirects.ts`):** `/blogg/` → `/artikler/`, `/om-meg/` → `/om/`, `/privacy-policy/` → `/personvern/`, `/wealthy-affiliate-black-friday-salg/` → `/wealthy-affiliate/`, `/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/` og `/er-det-umulig-a-tjene-penger-pa-nett/` → `/seriose-mater-a-tjene-penger-pa-nettet/`, `/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/` → `/hva-er-seo/`, og `/hvordan-heve-sjekk-fra-utlandet-i-norge/` → `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/`. Alle er én direkte 301 til et mål som svarer 200.

**Ikke implementert:** De fire 410-kandidatene. De venter på kontroll av lenker inn.

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

- De to utsatte artiklene (ChatGPT og TradeTracker).
- Guidesidene (`/guider/<slug>/`) og temahubene (`/nisje/`, `/nettsider/`, `/seo/`, `/ai/`, `/affiliate-markedsforing/`).
- 410 for de fire kandidatene.
- De 28 vedleggssidene som følger parent-artiklene.
- Vercel-oppsett og domeneovergang.

## Lenker

Ingen synlig intern lenke på noen side gir 404 (kontrollert 08.10.2026, også i de ni artiklene).

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

## Gjenstår før domenet kan flyttes

1. **De to utsatte artiklene** (`/chatgpt-og-affiliate-markedsforing/` og `/mine-erfaringer-med-affiliatenettverket-tradetracker/`) må migreres. Ellers gir de 404 etter flyttingen. ChatGPT-artikkelen venter på WA/Ace-gjennomgangen, og TradeTracker-artikkelen på en kontrollert partnerlenke.
2. **De fire 410-kandidatene** må få endelig behandling (410, eller 301 hvis de har verdifulle lenker inn) etter at lenkene inn er kontrollert. Uten beslutning gir de 404.
3. **WordPress-arkiver, feeder, vedlegg, ID-spørringer og gamle bildeadresser er behandlet** (se `docs/migration/wordpress-archives-and-media.md`). Det som gjenstår, er 28 vedleggssider som følger parent-artiklene og avgjøres sammen med dem.
4. **Partnerlenkene** i listen over må kontrolleres. De virker teknisk, men flere er gamle eller mangler sporing. Jaaxy svarte ikke da lenken ble sjekket.
5. **GA4-måle-ID** (`NEXT_PUBLIC_GA_ID`) mangler. Uten den er analyse og samtykkebanner av.
6. **Juridiske detaljer:** organisasjonsform og organisasjonsnummer for behandlingsansvarlig i personvernerklæringen, og hvem som formelt mottar provisjon (Min Egen Sjef eller Swane Creative).
7. **Vercel og domene** (krever godkjenning fra Andreas): sette opp prosjektet, sette `SITE_INDEXABLE=true` og miljøvariablene, teste på en forhåndsvisningsadresse, og deretter flytte DNS. WordPress-produksjonen skal ikke røres før dette er bestemt.
8. **Etter flyttingen:** kjøre alle 39 gamle URL-er og Pretty Links-rutene mot det nye domenet, sende inn sitemapen i Search Console og følge med på 404-feil de første ukene.

Mindre, ikke blokkerende: `npm audit fix` for sharp og source-map-js, bytte avviklet `priority` på heltebildet, og fullt forfatternavn i Article-schema hvis Andreas ønsker det.

WA-anmeldelsen oppdateres med pris, nivåer og ny vurdering underveis i Andreas' gjennomgang av den nye WA-opplæringen.

## Praktisk

- Dev-server: `npm run dev` (port 3000). `.claude/launch.json` er ignorert i git.
- Miljøvariabler: se `.env.example` (`NEXT_PUBLIC_GA_ID`, `SITE_INDEXABLE`).
- Kontroller før commit: `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- `AGENTS.md`: Next.js 16 avviker fra eldre versjoner. Les dokumentasjonen i `node_modules/next/dist/docs/` før du skriver ny kode.
