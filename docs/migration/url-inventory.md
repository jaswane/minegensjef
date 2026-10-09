# URL-inventar – minegensjef.no

**Dato:** 28.09.2026
**Kilde:** `minegensjef.WordPress.2026-09-28.xml` (rå backup utenfor repoet: `C:\_Nettsider\_backups\minegensjef\`), supplert med lesing av live-siden (statuskoder, `Location`-headere, sitemap, robots-meta).
**Status:** Forslag. Ingen beslutninger er endelige før de er kontrollert mot Google Search Console og backlinks.
**Oppdatert 09.10.2026 (arkiver):** Kategori-, tag- og forfatterarkiver, feeder, paginering, vedleggssider og media er ikke blant de 39. De er behandlet i `wordpress-archives-and-media.md`.
**Oppdatert 09.10.2026 (bølge 4):** Alle 39 gamle URL-er har nå en dokumentert behandling. Se «Sluttregnskap» under.
**Oppdatert 09.10.2026 (bølge 3):** Bølge 3: `/gratis-bilder/`, `/gode-verktoy-for-sokeordsanalyse/` og tre personlige innlegg er migrert. Fire 301-er er implementert. Beslutningene for resten står i `migration-priority.md`.
**Oppdatert 09.10.2026:** Bølge 2 er migrert: seks artikler, valgt ut fra GSC-data til og med 08.10.2026. `/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/` er beholdt, ikke slått sammen, fordi den har egen trafikk.
**Oppdatert 08.10.2026:** De ni P0-artiklene er migrert til `content/artikler/` på samme URL, merket «**migrert**» i oversikten under. Fire av de seks gamle sluggene virker nå (se under).

Ingen rå WordPress-data, kommentarer eller e-postadresser er kopiert inn i dette dokumentet.

## Omfang

| | Antall |
|---|---|
| Publiserte innlegg | 33 |
| Publiserte sider | 6 |
| **Sum publiserte URL-er i inventaret** | **39** |
| Utkast (ikke i migreringslisten) | 19 |
| Vedlegg/mediefiler i eksporten | 202 |
| URL-er i live sitemap | 36 |

De tre publiserte URL-ene som ikke ligger i sitemapen, er `/privacy-policy/` og `/ansvarsfraskrivelse/` (begge `noindex` på live, som er normalt for juridiske sider) og `/hva-er-seo/` (indekserbar, men mangler i sitemapen – **må undersøkes**).

## Beslutningsfordeling

| Beslutning | Antall |
|---|---|
| KEEP | 6 |
| REWRITE | 20 |
| MERGE → 301 | 5 |
| 301 | 4 |
| 410-kandidat – må valideres | 4 |

## Prinsipper brukt

1. **URL-en beholdes som hovedregel.** Innholdet skrives om, URL-en blir stående. Alle 301-er og merges under er begrunnet enkeltvis.
2. **URL ≠ hub.** Artikkelen beholder sin egen URL. Huben (`/seo/`, `/nisje/` osv.) er der den internlenkes fra, ikke der den flyttes til.
3. **Gammel taksonomi migreres ikke.** De gamle kategoriene (Blogg 33, Informasjon 11, Guider 5, Anmeldelser 5, Verktøy 4, Annonse 3, Oppskrifter 1) og 141 tags brukes bare som research.
4. **410 er aldri endelig her.** Alle er merket «410-kandidat – må valideres» og krever GSC-kontroll av visninger, klikk og backlinks først.
5. **MERGE → 301 fjerner også en URL** og bør kontrolleres på samme måte som 410-kandidatene, om enn med lavere risiko, siden trafikken føres til en tematisk nær side.

## Sluttregnskap: alle 39 gamle offentlige URL-er (09.10.2026)

Generert fra oversiktstabellen under, `content/artikler/` og `lib/legacy-redirects.ts`. Hver URL står i nøyaktig én kategori.

| Behandling | Antall |
|---|---|
| Migrert, svarer 200 på samme URL | 22 |
| Ny side / rebygget på samme URL | 3 |
| Permanent 301 til endelig mål | 8 |
| Utsatt, KEEP/REWRITE | 2 |
| 410 candidate – backlink validation required | 4 |
| **Sum** | **39** |

### Migrert, svarer 200 (22)

- `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/`
- `/norske-affiliate-programmer/`
- `/hva-er-affiliate-markedsforing/`
- `/hva-er-seo/`
- `/regnskap-og-skatt-pa-affiliate-inntekter/`
- `/merverdiavgift-og-affiliate-markedsforing/`
- `/seriose-mater-a-tjene-penger-pa-nettet/`
- `/hvordan-lage-nettside-na-til-dags/`
- `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`
- `/affiliate-markedsforing-i-norge-er-det-enklere/`
- `/gode-verktoy-for-sokeordsanalyse/`
- `/morningscore-anmeldelse-for-norsk-seo/`
- `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/`
- `/de-beste-norske-seo-bloggene/`
- `/gratis-bilder/`
- `/min-forste-sjekk-pa-over-1000/`
- `/introduksjon-drommen-om-a-bli-sin-egen-sjef/`
- `/suksess-motbakke-status-og-nye-mal-for-2017/`
- `/har-jeg-gitt-opp/`
- `/verdifulle-tips-fra-simon/`
- `/amazon-julehandel-over-alle-stovelskaft/`
- `/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/`

### Ny side / rebygget (3)

- `/`: Forside
- `/kontakt/`: Kontakt
- `/ansvarsfraskrivelse/`: Ansvarsfraskrivelse

### Permanent 301 (8)

Én direkte 301 til et mål som svarer 200, uten kjede. Ingen av de gamle URL-ene ligger i sitemapen.

| Gammel URL | Mål |
|---|---|
| `/privacy-policy/` | `/personvern/` |
| `/om-meg/` | `/om/` |
| `/blogg/` | `/artikler/` |
| `/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/` | `/hva-er-seo/` |
| `/wealthy-affiliate-black-friday-salg/` | `/wealthy-affiliate/` |
| `/hvordan-heve-sjekk-fra-utlandet-i-norge/` | `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` |
| `/er-det-umulig-a-tjene-penger-pa-nett/` | `/seriose-mater-a-tjene-penger-pa-nettet/` |
| `/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/` | `/seriose-mater-a-tjene-penger-pa-nettet/` |

### Utsatt, KEEP/REWRITE (2)

Skal verken 301-es eller få 410. Til de er migrert, gir de 404 i den nye løsningen, så de må være ferdige før domenet flyttes.

- `/chatgpt-og-affiliate-markedsforing/`: Venter på at Andreas har gått gjennom nye Wealthy Affiliate/Ace, så 2023-artikkelen kan settes inn i den faktiske AI-utviklingen
- `/mine-erfaringer-med-affiliatenettverket-tradetracker/`: Har historisk GSC-verdi. Venter på kontrollert eller ny TradeTracker-partnerlenke fra Andreas

### 410 candidate – backlink validation required (4)

Ingen 410 er implementert. Kontroller lenker inn for hver URL før beslutningen tas. Har en URL verdifulle lenker inn, er 301 til nærmeste relevante side et alternativ. Til beslutningen er tatt, gir de 404 i den nye løsningen.

- `/ifttt-er-et-nyttig-verktoy-for-a-automatisere-sma-oppgaver/`: Lite historisk trafikk og nesten ingen fersk aktivitet. Utenfor tema
- `/anmeldelse_seo-that-works-2/`: Mange visninger, men nesten ingen klikk. Kurs fra 2016 med utdatert pris
- `/betalt-annonsering-med-google-adwords/`: Mange visninger, men nesten ingen klikk. Utenfor kjernetemaet
- `/tanker-rundt-inspirasjon/`: Har trafikk, men nesten all søketrafikken gjelder Dyar Al-Ashtari, ikke Min Egen Sjefs temaer

Den gamle sluggen `/hva-syns-jeg-om-kurset-seo-that-works-2/` peker til `/anmeldelse_seo-that-works-2/` og skal få samme behandling som den. Den er ikke en av de 39, fordi den ikke er en egen publisert side.

## Historiske slugger som må videresendes

WordPress har `_wp_old_slug` for disse. De fungerer i dag, men det må bygges eksplisitte 301-er i den nye løsningen, ellers dør de ved domeneovergangen.

| Gammel URL | 301 til |
|---|---|
| `/hva-er-egentlig-affiliate-markedsforing/` | `/hva-er-affiliate-markedsforing/` |
| `/hvordan-lage-nettside-na-til-dags-det-er-enkelt/` | `/hvordan-lage-nettside-na-til-dags/` |
| `/hva-er-sokemotoroptimalisering-seo/` | `/hva-er-seo/` (verifisert 301 på live) |
| `/hva-syns-jeg-om-kurset-seo-that-works-2/` | `/anmeldelse_seo-that-works-2/` |
| `/det-arlige-wealthy-affiliate-black-friday-salget/` | `/wealthy-affiliate/` (direkte, uten kjede) |
| `/hvordan-motta-inntekter-fra-amazon-pa-enklest-mulig-vis/` | `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` |

`/hva-er-sokemotoroptimalisering-seo/` er internlenket fra fire publiserte sider, så den er i aktiv bruk.

**Status i 2.0 (08.10.2026):** Alle seks er bygget som 301 i `lib/legacy-redirects.ts`. Fem går nå til en side som svarer 200: affiliate, nettside, SEO og Amazon-utbetaling, og Black Friday-sluggen går rett til `/wealthy-affiliate/` (09.10.2026). Bare SEO That Works gir fortsatt 404, fordi målet er en 410-kandidat.

## Viktig om `/go/`-ruter på dagens side

`/go/<noe>/` gir i dag 301 til artikler, for eksempel `/go/wealthy-affiliate/` → WA-anmeldelsen. Dette er **ikke konfigurerte ruter**, men WordPress' innebygde gjetting på 404 (`redirect_guess_404_permalink`), som også gjør at `/wealthy-affil/` og `/regnskap/` treffer. `/go/tulletull-xyz/` gir 404.

**Konsekvens:** Den planlagte `/go/[slug]/`-strukturen for affiliatelenker kolliderer ikke med noen reell gammel rute, men `/go/wealthy-affiliate/` oppfører seg i dag som en lenke til anmeldelsen. Se `affiliate-redirects.md`.

## Oversikt

Kolonnen «Aff-ruter» viser interne affiliate-ruter som brukes i artikkelen.

| Gammel URL | Dato | Type | Tema | WA | Aff-ruter | Beslutning | Mål-URL | Prio |
|---|---|---|---|---|---|---|---|---|
| `/` | 2015-11-09 | side | Forside | nei | – | KEEP | – | P0 |
| `/kontakt/` | 2015-11-03 | side | Kontakt | nei | – | REWRITE | – | P0 |
| `/ansvarsfraskrivelse/` | 2015-11-04 | side | Juridisk | nei | – | REWRITE | – | P0 |
| `/privacy-policy/` | 2015-11-03 | side | Juridisk | nei | – | 301, **implementert** | `/personvern/` | P0 |
| `/om-meg/` | 2015-11-03 | side | Om | ja | – | 301, **implementert** | `/om/` | P1 |
| `/blogg/` | 2015-11-10 | side | Innholdsoversikt | nei | – | 301, **implementert** | `/artikler/` | P1 |
| `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/` | 2016-01-04 | innlegg | Wealthy Affiliate | ja (19) | `/wealthyaffiliate`, `/namecheap`, `/one` | REWRITE, **migrert** | beholdes | P0 |
| `/norske-affiliate-programmer/` | 2024-05-05 | innlegg | Affiliate-nettverk | nei | 9 ruter | REWRITE, **migrert** | beholdes | P0 |
| `/hva-er-affiliate-markedsforing/` | 2015-11-15 | innlegg | Affiliate | nei | – | REWRITE, **migrert** | beholdes | P0 |
| `/hva-er-seo/` | 2016-03-15 | innlegg | SEO | ja (1) | `/kwfinder` | REWRITE, **migrert** | beholdes | P0 |
| `/regnskap-og-skatt-pa-affiliate-inntekter/` | 2018-10-03 | innlegg | Skatt/regnskap | nei | – | REWRITE, **migrert** | beholdes | P0 |
| `/merverdiavgift-og-affiliate-markedsforing/` | 2019-04-06 | innlegg | MVA | nei | – | REWRITE, **migrert** | beholdes | P0 |
| `/seriose-mater-a-tjene-penger-pa-nettet/` | 2025-03-13 | innlegg | Tjene penger på nett | ja (1) | 7 ruter | REWRITE, **migrert** | beholdes | P1 |
| `/chatgpt-og-affiliate-markedsforing/` | 2023-01-07 | innlegg | AI | nei | – | KEEP/REWRITE, utsatt | beholdes | P1 |
| `/hvordan-lage-nettside-na-til-dags/` | 2015-11-27 | innlegg | Nettsider | ja (2) | `/namecheap`, `/one`, `/wealthyaffiliate` | REWRITE, **migrert** | beholdes | P1 |
| `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/` | 2020-04-17 | innlegg | Amazon/nettverk | ja (2) | 8 ruter | REWRITE, **migrert** | beholdes | P1 |
| `/mine-erfaringer-med-affiliatenettverket-tradetracker/` | 2020-10-17 | innlegg | Affiliate-nettverk | nei | `/tradetracker`, `/adtraction`, `/adservice` | KEEP/REWRITE, utsatt | beholdes | P1 |
| `/affiliate-markedsforing-i-norge-er-det-enklere/` | 2018-10-07 | innlegg | Affiliate i Norge | ja (1) | 5 ruter | REWRITE, **migrert** | beholdes | P1 |
| `/gode-verktoy-for-sokeordsanalyse/` | 2019-08-08 | innlegg | SEO-verktøy | ja (1) | `/kwfinder`, `/morningscore`, `/jaaxy` | REWRITE, **migrert** | beholdes | P1 |
| `/morningscore-anmeldelse-for-norsk-seo/` | 2023-01-04 | innlegg | SEO-verktøy | nei | `/morningscore` | REWRITE, **migrert** | beholdes | P1 |
| `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` | 2018-09-22 | innlegg | Amazon/utbetaling | nei | `/payoneer` | REWRITE, **migrert** | beholdes | P1 |
| `/de-beste-norske-seo-bloggene/` | 2016-11-01 | innlegg | SEO/norsk bransje | nei | – | REWRITE, **migrert** | beholdes | P1 |
| `/gratis-bilder/` | 2020-11-22 | innlegg | Nettsider/bilder | nei | `/depositphotos` | REWRITE, **migrert** | beholdes | P2 |
| `/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/` | 2015-12-03 | innlegg | SEO/kvalitet | nei | – | MERGE → 301, **implementert** | `/hva-er-seo/` | P2 |
| `/min-forste-sjekk-pa-over-1000/` | 2016-01-05 | innlegg | Amazon/historie | nei | – | KEEP, **migrert** med redaksjonell merknad | – | P1 |
| `/introduksjon-drommen-om-a-bli-sin-egen-sjef/` | 2015-11-09 | innlegg | Historie | nei | – | KEEP, **migrert** med redaksjonell merknad | – | P2 |
| `/suksess-motbakke-status-og-nye-mal-for-2017/` | 2017-01-14 | innlegg | Statusrapport | ja (2) | – | KEEP, **migrert** med redaksjonell merknad | – | P2 |
| `/har-jeg-gitt-opp/` | 2017-11-08 | innlegg | Historie | ja (1) | – | KEEP, **migrert** med redaksjonell merknad | – | P2 |
| `/verdifulle-tips-fra-simon/` | 2017-03-18 | innlegg | Gjestepost | nei | – | KEEP, **migrert** som historisk gjestepost | – | P2 |
| `/wealthy-affiliate-black-friday-salg/` | 2017-11-16 | innlegg | WA-kampanje | ja (6) | – | 301, **implementert** | `/wealthy-affiliate/` | P1 |
| `/hvordan-heve-sjekk-fra-utlandet-i-norge/` | 2016-01-08 | innlegg | Utbetaling | nei | `/tradedoubler`, `/tradetracker`, `/payoneer` | MERGE → 301, **implementert** | `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` | P2 |
| `/amazon-julehandel-over-alle-stovelskaft/` | 2015-12-18 | innlegg | Amazon/sesong | ja (1) | – | KEEP, **migrert** med redaksjonell merknad | – | P2 |
| `/er-det-umulig-a-tjene-penger-pa-nett/` | 2015-12-08 | innlegg | Tjene penger på nett | ja (1) | – | MERGE → 301, **implementert** | `/seriose-mater-a-tjene-penger-pa-nettet/` | P2 |
| `/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/` | 2020-11-24 | innlegg | Tjene penger på nett | ja (4) | `/wealthyaffiliate` | MERGE → 301, **implementert** | `/seriose-mater-a-tjene-penger-pa-nettet/` | P2 |
| `/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/` | 2023-01-10 | innlegg | Skatt/forventninger | ja (1) | `/wealthyaffiliate` | ~~MERGE → 301~~ KEEP, **migrert** (GSC viste trafikk) | beholdes | P1 |
| `/ifttt-er-et-nyttig-verktoy-for-a-automatisere-sma-oppgaver/` | 2016-01-12 | innlegg | Verktøy (utenfor tema) | nei | – | 410 candidate – backlink validation required | – | P2 |
| `/anmeldelse_seo-that-works-2/` | 2016-06-13 | innlegg | Kursanmeldelse | ja (1) | – | 410 candidate – backlink validation required | – | P2 |
| `/betalt-annonsering-med-google-adwords/` | 2016-10-05 | innlegg | Betalt annonsering | nei | – | 410 candidate – backlink validation required | – | P2 |
| `/tanker-rundt-inspirasjon/` | 2016-08-25 | innlegg | Personlig refleksjon | nei | – | 410 candidate – backlink validation required | – | P2 |

## Detaljer per URL

### Sider

**`/` – «Hjem»** (2015-11-09, endret 2025-03-14, 605 ord)
Gammel forside som forklarer hva Min Egen Sjef er. Erstattet av den nye forsiden.
**KEEP** · Hub: – · P0 · *Allerede bygget på nytt.*

**`/kontakt/` – «Kontakt»** (2015-11-03, 32 ord)
Svært tynn side. Kontaktskjemaet ble fjernet på grunn av spam, og det står kun en e-postadresse skrevet ut i tekst.
**REWRITE** · P0 · *URL-en er identisk i ny IA. Ifølge PRD §18 skal e-postadressen kun stå her. Vurder skjema eller obfuskering, siden dagens løsning er spamutsatt.*

**`/ansvarsfraskrivelse/` – «Ansvarsfraskrivelse»** (2015-11-04, 147 ord)
Kort ansvarsfraskrivelse om inntekt og affiliatelenker. `noindex` i dag.
**REWRITE** · P0 · *URL beholdes. Innholdet må skrives nytt og dekke inntektsforbehold og affiliate-merking (PRD §18).*

**`/privacy-policy/` – «Personvernerklæring»** (2015-11-03, endret 2018-05-24, 2283 ord)
Omfattende, men fra 2018 og på engelsk URL. `noindex` i dag.
**301 → `/personvern/`** · P0 · *Engelsk slug passer ikke i norsk IA, og siden er noindex uten SEO-verdi. Nytt innhold må uansett skrives.*

**`/om-meg/` – «Om Meg»** (2015-11-03, endret 2020-09-05, 517 ord)
Personlig presentasjon med lenker til eButikker og WA.
**301 → `/om/`** · P1 · *PRD §7 har `/om/`, og header/footer lenker allerede dit. Sjekk backlinks først. Alternativet er å beholde `/om-meg/` og heller la `/om/` være redirecten.*

**`/blogg/` – «Blogg»** (2015-11-10, 99 ord)
Arkivside med ingress og lenke til alle innlegg.
**301 → `/artikler/`** · P1 · *Løser den åpne beslutningen i PRD §20 om `/blogg/` mot `/artikler/`. Sjekk backlinks før valget låses.*

### Innlegg med REWRITE

**`/wealthy-affiliate-anmeldelse-en-gylden-mulighet/`** (2016-01-04, endret 2020-11-13, 2855 ord, 10 bilder)
Se eget kapittel lenger ned. **REWRITE, URL beholdes** · Hub: `/wealthy-affiliate/` · P0

**`/norske-affiliate-programmer/` – «11 Affiliate-nettverk med norske affiliate programmer du må bli medlem av»** (2024-05-05, endret 2024-08-05, 1908 ord)
Den nyeste kommersielle hovedsiden. Lister nettverk med norske programmer, alle via interne affiliate-ruter. Lenker til affiliateprogrammer.no og ebutikker.no.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P0 · *Mest kommersielt verdifulle URL på siden. Krever avklaring av den åpne PRD-beslutningen om forholdet til AffiliateProgrammer.no, så vi ikke konkurrerer med oss selv. Tittelen lover «11», men teksten sier «de fem nettstedene» – må ryddes.*

**`/hva-er-affiliate-markedsforing/`** (2015-11-15, endret 2019-08-08, 2018 ord)
Grunnleggende forklaring av affiliate-markedsføring, med Amazon som gjennomgangseksempel.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P0 · *Klassisk evergreen med sterk søkeintensjon. Har allerede én gammel slug som må videresendes.*

**`/hva-er-seo/` – «Hva er søkemotoroptimalisering (SEO)?»** (2016-03-15, endret 2019-08-08, 1607 ord)
Stor SEO-guide. Indekserbar, men mangler i sitemapen.
**REWRITE, URL beholdes** · Hub: `/seo/` · P0 · *Må dekke AI-søk i 2026-versjonen. Undersøk hvorfor den ikke ligger i sitemapen.*

**`/regnskap-og-skatt-pa-affiliate-inntekter/`** (2018-10-03, endret 2019-04-06, 1954 ord)
Praktisk gjennomgang av regnskap og skatt for affiliate-inntekter, med kilder til Skatteetaten, Altinn og Brønnøysund.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P0 · *Høy og varig søkeverdi på norsk, få konkurrenter. Alle satser, grenser og regler må verifiseres mot primærkilder før publisering.*

**`/merverdiavgift-og-affiliate-markedsforing/`** (2019-04-06, endret 2019-08-08, 2443 ord)
MVA-reglene for affiliate-inntekter, med lenker til Skatteetaten, Lovdata og Toll.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P0 · *Samme som over: må kontrolleres mot gjeldende regelverk. Dette er den typen side der feil informasjon får konsekvenser for leseren.*

**`/seriose-mater-a-tjene-penger-pa-nettet/` – «150 Seriøse måter å tjene penger på nettet»** (2025-03-13, 2232 ord)
Nyeste innlegg. Stor liste, med affiliate-ruter til spørreundersøkelser, Shopify og Nordnet.
**REWRITE, URL beholdes** · Hub: `/artikler/` · P1 · *Redaksjonell risiko: lenker til spørreundersøkelses-sider passer dårlig med «uten hype»-posisjoneringen. Vurder hvilke av de 150 punktene som skal bli med videre. Teksten sier «min erfaring siden 2018», mens resten av siden sier 2014 – må avklares.*

**`/chatgpt-og-affiliate-markedsforing/` – «ChatGPT og affiliate markedsføring – 20 bruksområder»** (2023-01-07, 1250 ord)
Skrevet rett etter at ChatGPT kom. Nå teknologisk utdatert, men temaet er kjernen i `/ai/`-huben.
**REWRITE, URL beholdes** · Hub: `/ai/` · P1 · *Må skrives helt om til 2026-virkelighet. Poenget fra forsiden hører hjemme her: AI gjør byggingen raskere, men skaper ikke trafikk.*

**`/hvordan-lage-nettside-na-til-dags/`** (2015-11-27, endret 2023-11-08, 1967 ord)
Hvordan sette opp nettside, med domene og hosting. Affiliatelenker til One.com og Namecheap.
**REWRITE, URL beholdes** · Hub: `/nettsider/` · P1 · *Passer guiden `/guider/bygge-nettside/` på forsiden. Avklar forholdet mellom den nye guiden og denne gamle URL-en, så vi ikke lager to sider om samme tema.*

**`/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`** (2020-04-17, 886 ord)
Om Amazons provisjonskutt og overgangen til norske nettverk. Bruker åtte affiliate-ruter.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P1

**`/mine-erfaringer-med-affiliatenettverket-tradetracker/`** (2020-10-17, 1619 ord)
Anmeldelse av TradeTracker.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P1 · *Kommersiell verdi. Påstander om nettverket må kontrolleres på nytt.*

**`/affiliate-markedsforing-i-norge-er-det-enklere/`** (2018-10-07, endret 2020-11-24, 1197 ord)
Sammenligner det norske og det amerikanske markedet. Bruker fem affiliate-ruter.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P1 · *Passer godt med WA-historien på forsiden, siden første prosjekt var rettet mot USA.*

**`/gode-verktoy-for-sokeordsanalyse/` – «5 gode verktøy for norsk søkeordsanalyse»** (2019-08-08, endret 2023-01-04, 1853 ord)
Verktøyoversikt med affiliatelenker til KWFinder, Morningscore og Jaaxy.
**REWRITE, URL beholdes** · Hub: `/seo/` · P1 · *Priser og funksjoner må verifiseres. Jaaxy er WA-eid, noe som bør opplyses.*

**`/morningscore-anmeldelse-for-norsk-seo/`** (2023-01-04, 2277 ord, 18 bilder)
Grundig verktøyanmeldelse med affiliatelenke.
**REWRITE, URL beholdes** · Hub: `/seo/` · P1 · *Skjermbildene er fra 2023 og må tas på nytt.*

**`/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/`** (2018-09-22, endret 2019-02-14, 934 ord)
Praktisk guide om utbetaling fra Amazon Associates. Har allerede en oppdateringsnote om at innholdet er delvis utdatert.
**REWRITE, URL beholdes** · Hub: `/affiliate-markedsforing/` · P1 · *Konkret søkeintensjon med lite norsk konkurranse. Én gammel slug må videresendes.*

**`/de-beste-norske-seo-bloggene/` – «De 10 Beste Norske SEO Bloggene!»** (2016-11-01, endret 2022-12-31, 1351 ord)
Liste over norske SEO-blogger, med lenker til 10 navngitte bransjefolk.
**REWRITE, URL beholdes** · Hub: `/seo/` · P1 · *Denne typen liste får ofte backlinks fra dem som er omtalt. Sjekk backlinks i GSC først – det avgjør hvor viktig den er. Mange av bloggene kan være nedlagte.*

**`/gratis-bilder/`** (2020-11-22, 1039 ord)
Oversikt over tjenester med gratis bilder, med affiliatelenke til Depositphotos.
**REWRITE, URL beholdes** · Hub: `/nettsider/` · P2 · *Tema er relevant, men generisk og konkurranseutsatt. AI-bilder bør nevnes i 2026-versjonen.*

**`/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/`** (2015-12-03, 1396 ord)
Om Googles Search Quality Rating Guidelines.
**REWRITE, URL beholdes** · Hub: `/seo/` · P2 · *Detaljene er utdaterte, men temaet er blitt viktigere med E-E-A-T og AI-søk. Lav prioritet fordi URL-en er lang og tungvint. Vurder MERGE inn i `/hva-er-seo/` hvis GSC viser at den er død.*

### Innlegg med KEEP

Disse står som tidsdokumenter. De skal ikke skrives om, men bør få en synlig datering om at de beskriver situasjonen den gangen.

**`/min-forste-sjekk-pa-over-1000/`** (2016-01-05, 545 ord) · P1
Den første sjekken på over 1000 dollar fra Amazon Associates. **Dette er primærkilden til historien som nå står på forsiden om sjekker i posten.** Høy historisk verdi, lav SEO-verdi.

**`/introduksjon-drommen-om-a-bli-sin-egen-sjef/`** (2015-11-09, 1284 ord) · P2
Sidens aller første innlegg. Drømmen om å bli sin egen sjef.

**`/suksess-motbakke-status-og-nye-mal-for-2017/`** (2017-01-14, 1351 ord) · P2
Statusrapport med provisjonsrekord og mål. Dokumenterer utviklingen, og nevner eButikk-prosjektet.

**`/har-jeg-gitt-opp/`** (2017-11-08, 674 ord) · P2
Svar til lesere om hvorfor det ble stille. Forklarer pausen som WA-seksjonen på forsiden viser til.

**`/verdifulle-tips-fra-simon/`** (2017-03-18, 835 ord) · P2
Gjestepost fra en dansk affiliate, oversatt til norsk. **Skal ikke skrives om** – teksten er en annens. Enten beholdes som den er, eller fjernes etter avtale.

### Innlegg med 301 og MERGE → 301

**`/wealthy-affiliate-black-friday-salg/`** (2017-11-16, 347 ord) · **301 → `/wealthy-affiliate/`** · P1
Kampanjeside for Black Friday 2017. Ingen verdi som stående side, men URL-en kan ha WA-relaterte signaler. En ny, datert kampanjeside kan lages senere ved behov. Har én gammel slug som også må videresendes.

**`/hvordan-heve-sjekk-fra-utlandet-i-norge/`** (2016-01-08, 994 ord) · **MERGE → 301 → `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/`** · P2
Hvordan heve utenlandske sjekker i norsk bank. Nær utdødd praksis, men innholdet er historisk interessant og bør bevares som et avsnitt i målartikkelen.

**`/amazon-julehandel-over-alle-stovelskaft/`** (2015-12-18, 630 ord) · **MERGE → 301 → `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`** · P2
Sesongartikkel om amerikansk julehandel med Amazon-tall fra 2015.

**`/er-det-umulig-a-tjene-penger-pa-nett/`** (2015-12-08, 1348 ord) · **MERGE → 301 → `/seriose-mater-a-tjene-penger-pa-nettet/`** · P2
Motsvar til skepsisen mot å tjene penger på nett. Tematisk overlapp med målartikkelen.

**`/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/`** (2020-11-24, 1148 ord) · **MERGE → 301 → `/seriose-mater-a-tjene-penger-pa-nettet/`** · P2
Skrevet under pandemien, med «mistet jobben»-vinkling. Tidsbundet ramme som ikke passer i dag.

**`/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/`** (2023-01-10, 875 ord) · **MERGE → 301 → `/regnskap-og-skatt-pa-affiliate-inntekter/`** · P2
Personlig advarsel om det man glemmer når inntektene kommer. Poengene hører hjemme i skatteartikkelen.

### 410-kandidater – må valideres

Ingen av disse slettes før GSC og backlinks er sjekket. Har de trafikk eller lenker, går de til 301 i stedet.

**`/ifttt-er-et-nyttig-verktoy-for-a-automatisere-sma-oppgaver/`** (2016-01-12, 1608 ord, 15 bilder) · P2
Om automatiseringsverktøyet IFTTT. Faller utenfor det nye temauniverset, og skjermbildene er ti år gamle. *Alternativ hvis den har trafikk: 301 → `/ai/`.*

**`/anmeldelse_seo-that-works-2/`** (2016-06-13, 1497 ord) · P2
Anmeldelse av et amerikansk backlink-kurs som ikke lenger selges. Slug-en har understrek, som bryter med alt annet. Har én gammel slug i tillegg. *Alternativ: 301 → `/seo/`.*

**`/betalt-annonsering-med-google-adwords/`** (2016-10-05, 1294 ord) · P2
Første forsøk med Google AdWords. Produktet heter nå Google Ads, og grensesnittet er et annet. Betalt annonsering er ikke et satsingsområde. *Alternativ: 301 → `/seo/`.*

**`/tanker-rundt-inspirasjon/`** (2016-08-25, 889 ord) · P2
Personlig refleksjon om å la seg inspirere av andre. Ingen søkeintensjon. *Alternativ: KEEP som tidsdokument.*

## Wealthy Affiliate-anmeldelsen

**URL:** `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/`
**Beslutning:** REWRITE. **URL-en beholdes.** Bekreftet i eksporten som den gamle anmeldelsen (publisert 04.01.2016, sist endret 13.11.2020, 2855 ord, 10 bilder, kategorier Anmeldelser/Annonse/Blogg).
**Ny retning:** «Wealthy Affiliate anmeldelse 2026 – mine erfaringer etter 12 år»

### Hva den gamle artikkelen inneholder

- Et faktaoppsett øverst: produktnavn, hva det er, pris, eiere, språk og en score på 4,7 av 5.
- Pris oppgitt som gratis Starter-medlemskap og 47 dollar per måned for Premium, 29 dollar ved årlig betaling.
- Gjennomgang av hva plattformen er, hvordan opplæringen er bygget opp og hva man får tilgang til.
- Lenker til `my.wealthyaffiliate.com`, `siterubix.com` og `wordpress.org`, samt de interne rutene `/wealthyaffiliate`, `/namecheap` og `/one`.
- Merket som annonse, med kategorien «Annonse».

### Deler med historisk verdi

- Prisene og medlemsnivåene fra 2016 og 2020. Godt utgangspunkt for å vise hva som faktisk har endret seg.
- Beskrivelsen av SiteRubix og hvordan nettsider ble bygget den gangen.
- Vurderingen slik den var, inkludert scoren. Egnet som «slik så jeg på WA den gangen».
- At artikkelen ble skrevet like etter at Andreas selv begynte, og oppdatert fire år senere.

### Åpenbart utdatert

- Alle priser og medlemsnivåer.
- Beskrivelsen av verktøy og plattform, siden WA nå moderniseres.
- Scoren på 4,7 av 5, som uansett bør vurderes på nytt i en 2026-versjon.
- Alt som beskriver SEO-metodikk fra 2016, før AI-søk.

### Bør dokumenteres som «slik så jeg på WA den gangen»

- Faktaboksen fra 2016 med pris og score, tydelig datert.
- Forventningene fra den gangen, holdt opp mot hva som faktisk skjedde de 12 årene etterpå.
- Koblingen til det første prosjektet, Amazon Associates-siden om sportsgadgets.

### Krav til ny versjon

- Tydelig annonse- og affiliate-merking, som i dag (PRD §9 og §16).
- Alle påstander om pris, medlemsnivåer og funksjoner verifiseres mot WA før publisering.
- Ikke gjengi proprietært kursinnhold.
- Skille tydelig mellom egen erfaring og WAs egne påstander.
- Affiliatelenken går gjennom `/go/wealthy-affiliate/`, ikke direkte.

## Ny informasjonsarkitektur: URL mot hub

Artiklene beholder sine URL-er. Hubene er inngangene som lenker til dem.

| Hub | Artikler som bør lenkes herfra |
|---|---|
| `/wealthy-affiliate/` | WA-anmeldelsen, `/min-forste-sjekk-pa-over-1000/`, `/har-jeg-gitt-opp/`, `/suksess-motbakke-status-og-nye-mal-for-2017/` |
| `/affiliate-markedsforing/` | `/hva-er-affiliate-markedsforing/`, `/norske-affiliate-programmer/`, `/affiliate-markedsforing-i-norge-er-det-enklere/`, `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`, `/mine-erfaringer-med-affiliatenettverket-tradetracker/`, `/regnskap-og-skatt-pa-affiliate-inntekter/`, `/merverdiavgift-og-affiliate-markedsforing/`, `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` |
| `/seo/` | `/hva-er-seo/`, `/gode-verktoy-for-sokeordsanalyse/`, `/morningscore-anmeldelse-for-norsk-seo/`, `/de-beste-norske-seo-bloggene/`, `/slik-vurderer-google-kvalitet-9-ting-du-ma-vaere-klar-over/` |
| `/nettsider/` | `/hvordan-lage-nettside-na-til-dags/`, `/gratis-bilder/` |
| `/ai/` | `/chatgpt-og-affiliate-markedsforing/` |
| `/nisje/` | Ingen gamle artikler dekker nisjevalg. **Innholdshull som må fylles med nytt innhold.** |
| `/artikler/` | Alle publiserte artikler, inkludert KEEP-tidsdokumentene |
| `/start/` | Ingen gammel artikkel. Nytt innhold. |

**Innholdshull i det gamle materialet:** nisjevalg, innholdsproduksjon, analyse og forbedring, og AI utover den ene ChatGPT-artikkelen.

## Må hentes fra live WordPress før den stenges

1. **Google Search Console:** visninger, klikk og posisjoner per URL siste 12–16 måneder. Uten dette kan verken 410-kandidatene eller merge-forslagene godkjennes.
2. **Backlinks per URL.** Særlig for `/de-beste-norske-seo-bloggene/`, `/om-meg/`, `/blogg/` og de fire 410-kandidatene.
3. ~~Komplett liste over affiliate-ruter fra lenke-pluginen.~~ **Hentet 28.09.2026.** Pretty Links-eksporten ga alle 30 ruter med destinasjoner, hvorav 7 ikke er lenket fra noe publisert innhold. Det som fortsatt mangler, er **klikktall per rute**, som ikke er med i CSV-eksporten. Se `affiliate-redirects.md`.
4. **`wp-content/uploads`.** Delvis sikret: backupmappen har en uploads-mappe med årsmapper fra 2015 og framover. Kontroller at den er komplett mot de 202 vedleggene i eksporten.
5. **Eventuelle redirects som allerede er satt opp i WordPress eller på hosting**, utover WordPress' egen 404-gjetting.
6. **Kommentarene**, hvis noen skal bevares. PRD §12 nevner 172 kommentarobjekter. Dette er persondata og skal ikke inn i repoet.
7. **Hvorfor `/hva-er-seo/` ikke ligger i sitemapen.**
