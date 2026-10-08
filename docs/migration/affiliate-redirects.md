# Affiliate-ruter – minegensjef.no

**Dato:** 28.09.2026
**Status:** Komplett kartlegging av alle 30 Pretty Links. Ingen redirects er implementert, og ingenting i WordPress er endret.

## Datagrunnlag

| Kilde | Hva den ga |
|---|---|
| Pretty Links-eksport (`260928155715_pretty_links.csv`, rå fil utenfor repoet) | Alle 30 ruter med destinasjon, tittel, opprettelsesdato, sist endret og sporingsflagg |
| WordPress-eksport (WXR) | Ingenting. **Destinasjonene finnes ikke i WXR** – plugin-data følger ikke med i en vanlig eksport |
| Lenkeanalyse av publisert innhold og utkast | Hvilke ruter som faktisk brukes, og hvor |
| Live minegensjef.no, 28.09.2026 | Bekreftelse av at rutene svarer, lest via `Location`-header uten å følge videre |

Ingen partnerlenker ble fulgt, så ingen klikk er registrert hos nettverkene.

**Eksporten inneholder ikke klikktall.** Pretty Links lagrer klikk i en egen tabell som ikke er med i denne CSV-en. Historiske klikk per lenke må hentes fra Pretty Links-oversikten i WordPress før den stenges. Merk at historiske klikk er et migreringssignal, ikke bevis på dagens trafikk.

## Sammendrag

| | Antall |
|---|---|
| Pretty Links totalt i eksporten | 30 |
| Allerede kjent fra innholdsanalysen | 23 |
| **Nye ruter funnet i eksporten** | **7** |
| Ruter funnet i innhold, men ikke i eksporten | 0 |
| Duplikate destinasjoner | 2 par |
| Destinasjoner uten sporingsparametre | 3 |

Alle 30 har `redirect_type 307`, `track_me 1` og `nofollow 1`. **Ingen av dem har `sponsored`-flagget satt.**

De sju nye rutene er alle bekreftet aktive på live-siden med samme destinasjon som i eksporten.

## Alle 30 ruter

«Brukt i innhold» teller publiserte sider som lenker til ruten i dag.

| # | Rute | Pretty Links-tittel | Partner | Opprettet | Sist endret | Brukt i innhold | Foreslått ny rute | Behold gammel |
|---|---|---|---|---|---|---|---|---|
| 1 | `/wealthyaffiliate` | Wealthy Affiliate | Wealthy Affiliate | 2018-09-21 | 2020-11-03 | 6 sider | `/go/wealthy-affiliate/` | Ja, 301 |
| 2 | `/tradetracker` | Tradetracker | TradeTracker | 2018-09-21 | 2018-09-21 | 5 sider | `/go/tradetracker/` | Ja, 301 |
| 3 | `/adtraction` | Adtraction (aff) | Adtraction | 2018-09-21 | 2023-06-14 | 4 sider | `/go/adtraction/` | Ja, 301 |
| 4 | `/tradedoubler` | Tradedoubler | Tradedoubler | 2018-09-21 | 2022-09-07 | 3 sider | `/go/tradedoubler/` | Ja, 301 |
| 5 | `/awin` | Awin (aff) | Awin | 2018-09-21 | 2024-05-22 | 2 sider | `/go/awin/` | Ja, 301 |
| 6 | `/adrecord` | Adrecord (afF) | Adrecord | 2018-09-21 | 2022-09-01 | 2 sider | `/go/adrecord/` | Ja, 301 |
| 7 | `/partnerads` | Partner Ads (aff) | Partner-ads | 2018-09-21 | 2022-09-01 | 2 sider | `/go/partner-ads/` | Ja, 301 |
| 8 | `/one` | One.com (aff) | One.com | 2018-09-21 | 2023-05-23 | 3 sider | `/go/one-com/` | Ja, 301 |
| 9 | `/jaaxy` | Jaaxy | Jaaxy (eid av WA) | 2018-09-21 | 2019-08-08 | 2 sider | `/go/jaaxy/` | Ja, 301 |
| 10 | `/kwfinder` | KWFinder | KWFinder / Mangools | 2018-09-21 | 2019-08-08 | 3 sider | `/go/kwfinder/` | Ja, 301 |
| 11 | `/payoneer` | Payoneer | Payoneer | 2018-09-21 | 2018-09-21 | 2 sider | `/go/payoneer/` | Ja, 301 |
| 12 | `/one_rabatt` | One.com Rabatt | One.com | 2018-11-20 | 2018-11-20 | **0** | – | Ja, 301 → `/go/one-com/` |
| 13 | `/daisycon` | Daisycon | Daisycon | 2019-08-07 | 2022-10-16 | 2 sider | `/go/daisycon/` | Ja, 301 |
| 14 | `/adsninja` | Adsninja (aff) | Adsninja | 2019-08-13 | 2023-05-31 | **0** | Vurderes | Vurderes |
| 15 | `/proisp` | ProISP | ProISP | 2019-10-17 | 2022-08-28 | **0** | Vurderes | Vurderes |
| 16 | `/adservice` | Adservice (aff) | Adservice / Adtraction | 2020-04-17 | 2024-05-06 | 2 sider | `/go/adservice/` | Ja, 301 |
| 17 | `/linkwhisper` | Link Whisper | Link Whisper | 2020-11-13 | 2020-11-13 | **0** | `/go/link-whisper/` | Ja, 301 |
| 18 | `/namecheap` | Namecheap | Namecheap (Impact) | 2020-11-13 | 2020-11-13 | 2 sider | `/go/namecheap/` | Ja, 301 |
| 19 | `/depositphotos` | Depositphotos | Depositphotos | 2020-11-22 | 2022-10-19 | 1 side | `/go/depositphotos/` | Ja, 301 |
| 20 | `/orionmedia` | Orion Media | Orion Media | 2021-04-13 | 2024-05-20 | **0** | Vurderes | Vurderes |
| 21 | `/apotera` | Apotera | Apotera | 2022-06-08 | 2022-11-01 | **0** | Vurderes | Vurderes |
| 22 | `/prettylinks` | Prettylinks (Aff) | Pretty Links | 2022-08-29 | 2022-08-29 | **0** | Vurderes | Vurderes |
| 23 | `/morningscore` | Morningscore (afF) | Morningscore | 2022-10-25 | 2024-05-20 | 2 sider | `/go/morningscore/` | Ja, 301 |
| 24 | `/addrevenue` | Addrevenue (aff) | Addrevenue | 2023-11-21 | 2023-11-21 | 1 side | `/go/addrevenue/` | Ja, 301 |
| 25 | `/shopify` | Shopify (aff) | Shopify (Impact) | 2025-03-13 | 2025-03-14 | 1 side | `/go/shopify/` | Ja, 301 |
| 26 | `/yougov` | YouGov (aff) | YouGov | 2025-03-13 | 2025-03-19 | 1 side | Vurderes | Vurderes |
| 27 | `/nordnet` | Nordnet (aff) | Nordnet (Adtraction) | 2025-03-13 | 2025-03-19 | 1 side | Vurderes | Vurderes |
| 28 | `/topsurveys` | TopSurveys (aff) | TopSurveys (Daisycon) | 2025-03-19 | 2025-03-19 | 1 side | Vurderes | Vurderes |
| 29 | `/PrimeOpinion` | Prime Opinion (aff) | Prime Opinion (Daisycon) | 2025-03-19 | 2025-03-19 | 1 side | Vurderes | Vurderes |
| 30 | `/heycash` | HeyCash (aff) | HeyCash (Daisycon) | 2025-03-19 | 2025-03-19 | 1 side | Vurderes | Vurderes |

## Destinasjoner

| Rute | Destinasjon | Merknad |
|---|---|---|
| `/wealthyaffiliate` | `https://www.wealthyaffiliate.com?a_aid=fe112df7` | Matcher destinasjonen i PRD §16 |
| `/tradetracker` | `http://tc.tradetracker.net/?c=5187&m=12&a=233877` | HTTP, ikke HTTPS |
| `/adtraction` | `https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1` | Duplikat med `/adservice` |
| `/tradedoubler` | `https://www.tradedoubler.com/` | **Ingen sporing. Manuell vurdering.** |
| `/awin` | `https://www.awin1.com/cread.php?awinmid=4030&awinaffid=340337` | Peker til én bestemt annonsør, ikke Awin generelt |
| `/adrecord` | `https://click.adrecord.com/?c=23765&p=120` | |
| `/partnerads` | `https://www.partner-ads.com/no/klikbanner.php?partnerid=27345&bannerid=54626` | Peker til ett bestemt banner |
| `/one` | `http://one.me/noadtijc` | HTTP. Duplikat med `/one_rabatt` |
| `/jaaxy` | `https://www.jaaxy.com/?a_aid=fc8cf5cc` | WA-eid verktøy. Bør opplyses i teksten |
| `/kwfinder` | `https://app.kwfinder.com#a573d835c285f735d9b85f00c` | Affiliate-ID i fragment |
| `/payoneer` | `https://share.payoneer.com/nav/ie-6IouEo70XkF_ZNOZO16LSJdVcOpBvsMvE3CTFrXjeZQcRPbBPigXUXT3CiYgz-RbJ0xDllXNe08P17YxhUg2` | |
| `/one_rabatt` | `http://one.me/noadtijc` | Identisk med `/one`. HTTP |
| `/daisycon` | `https://ds1.nl/c/?si=1400&li=84664&wi=320283&ws=&dl=` | Tom `dl`-parameter |
| `/adsninja` | `https://trk.an3trk8.tech/t/MjE4NV8zNDc/` | **Ukjent `.tech`-sporingsdomene. Manuell vurdering.** |
| `/proisp` | `https://www.proisp.no/` | **Ingen sporing. Manuell vurdering.** |
| `/adservice` | `https://track.adtraction.com/t/t?a=923786618&as=1156469187&t=2&tk=1` | Identisk med `/adtraction` |
| `/linkwhisper` | `https://linkwhisper.com/ref/614/` | |
| `/namecheap` | `http://namecheap.pxf.io/692ZV` | HTTP |
| `/depositphotos` | `https://no.depositphotos.com/?ref=26502056&utm_source=linkCopy&utm_medium=referral` | |
| `/orionmedia` | `https://orsearchlink.com/click.track?CID=438863&AFID=434772` | |
| `/apotera` | `https://www.apotera.no/` | **Ingen sporing. Manuell vurdering.** |
| `/prettylinks` | `https://prettylinks.com?aff=15500` | Affiliate for pluginen vi slutter å bruke |
| `/morningscore` | `https://morningscore.io?fpr=andreas-swane57` | |
| `/addrevenue` | `https://addrevenue.io/t?c=3455267&a=984405&m=DK` | `m=DK` – dansk marked? |
| `/shopify` | `https://shopify.pxf.io/BnyBVy` | |
| `/yougov` | `https://rkn3.net/c/?si=13663&li=1597128&wi=320283&ws=` | |
| `/nordnet` | `https://go.adt212.net/t/t?a=1585769153&as=1156469187&t=2&tk=1` | Adtraction-domene |
| `/topsurveys` | `https://jdt8.net/c/?si=20189&li=1861844&wi=320283&ws=` | |
| `/PrimeOpinion` | `https://jdt8.net/c/?si=19253&li=1826337&wi=320283&ws=` | Store bokstaver i slug |
| `/heycash` | `https://jdt8.net/c/?si=19639&li=1840453&wi=320283&ws=` | |

## De sju nye rutene

Disse står ikke i noen publisert artikkel eller noe utkast. De kan likevel ha vært brukt i e-post, sosiale medier, YouTube-beskrivelser, kommentarer, på andre nettsteder eller i innhold som senere er slettet. **De skal ikke fjernes uten at klikktallene er sjekket.**

**`/one_rabatt` (2018)** — One.com. Identisk destinasjon med `/one`, så den var trolig en kampanjevariant. Enkelt valg: 301 til samme `/go/one-com/`.

**`/adsninja` (2019, endret 2023)** — Destinasjonen går til `trk.an3trk8.tech`, et sporingsdomene vi ikke kjenner igjen. At den ble endret i 2023 tyder på at den var i bruk. **Må vurderes manuelt.** Ikke endre eller slett noe nå.

**`/proisp` (2019)** — Norsk webhotell, men destinasjonen er bare forsiden uten affiliate-parametre. Enten er sporingen mistet ved en oppdatering, eller så var det aldri en affiliatelenke. **Manuell vurdering.**

**`/linkwhisper` (2020)** — Interlenke-plugin for WordPress med gyldig ref-ID. Relevant for `/nettsider/`-huben hvis verktøyet fortsatt brukes.

**`/orionmedia` (2021, endret 2024)** — Norsk affiliatenettverk. Gyldig sporing, og oppdatert så sent som i 2024, så kontoen er sannsynligvis aktiv. Bør vurderes tatt inn i den omskrevne `/norske-affiliate-programmer/`, som i dag ikke nevner nettverket.

**`/apotera` (2022)** — Norsk apotek. Destinasjonen er forsiden uten sporing, og temaet ligger utenfor det nye innholdsuniverset. **Manuell vurdering.**

**`/prettylinks` (2022)** — Affiliatelenke til selve Pretty Links-pluginen. Siden den nye løsningen ikke bruker WordPress, mister denne sin naturlige sammenheng.

## Problemer og avvik

**Duplikate destinasjoner, to par:**

- `/adtraction` og `/adservice` peker til nøyaktig samme Adtraction-lenke, selv om artiklene omtaler dem som to forskjellige nettverk. `/adservice` ble sist endret i mai 2024, altså etter `/adtraction`. Én av dem er trolig oppdatert feil. **Må avklares før begge videreføres.**
- `/one` og `/one_rabatt` peker begge til `http://one.me/noadtijc`. Ufarlig, men begge bør ende samme sted.

**Tre destinasjoner uten sporingsparametre:** `/tradedoubler`, `/proisp` og `/apotera` peker rett til en forside. De kan ikke gi provisjon slik de står. Marker for manuell vurdering, ikke slett.

**Fire destinasjoner bruker HTTP:** `/tradetracker`, `/one`, `/one_rabatt` og `/namecheap`. Bør oppdateres til HTTPS-varianter fra partnerne.

**Ingen av de 30 har `sponsored`-flagget satt.** Alle har `nofollow`, som var praksis da de ble laget, men Google anbefaler nå `rel="sponsored"` for betalte lenker. **Den nye løsningen bør sette `rel="sponsored nofollow"`,** slik PRD §16 krever.

**`/kwfinder` legger affiliate-ID-en i et fragment** (`#a573d835c285f735d9b85f00c`). Fragmenter sendes ikke til serveren, så sporingen avhenger av JavaScript hos Mangools. Verifiser at det fortsatt virker.

**`/PrimeOpinion` har store bokstaver.** Bruk små bokstaver i den nye ruten, og gjør kompatibilitetsredirecten case-insensitiv.

**`/awin` og `/partnerads` peker til én bestemt annonsør eller ett banner,** ikke til nettverkets forside. I artikler som anbefaler nettverket som helhet, er det feil mål.

**Kontoenes status er ukjent.** Flere av disse er fra 2018–2019 og kan være deaktivert etter år med lav aktivitet. Må sjekkes hos hvert nettverk før lenkene brukes videre.

## Hvor rutene brukes i dag

| Rute | Publiserte sider |
|---|---|
| `/wealthyaffiliate` | `/hvordan-lage-nettside-na-til-dags/`, `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/`, `/affiliate-markedsforing-i-norge-er-det-enklere/`, `/til-deg-som-sitter-hjemme-og-vil-tjene-penger-pa-nett/`, `/viktig-husk-pa-dette-nar-du-begynner-a-tjene-penger-pa-nett/`, `/seriose-mater-a-tjene-penger-pa-nettet/` |
| `/tradetracker` | `/hvordan-heve-sjekk-fra-utlandet-i-norge/`, `/norske-affiliate-programmer/`, `/affiliate-markedsforing-i-norge-er-det-enklere/`, `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`, `/mine-erfaringer-med-affiliatenettverket-tradetracker/` |
| `/adtraction` | `/norske-affiliate-programmer/`, `/affiliate-markedsforing-i-norge-er-det-enklere/`, `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`, `/mine-erfaringer-med-affiliatenettverket-tradetracker/` |
| `/one` | `/hvordan-lage-nettside-na-til-dags/`, `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/`, `/norske-affiliate-programmer/` |
| `/tradedoubler` | `/hvordan-heve-sjekk-fra-utlandet-i-norge/`, `/norske-affiliate-programmer/`, `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/` |
| `/kwfinder` | `/hva-er-seo/`, `/gode-verktoy-for-sokeordsanalyse/`, `/affiliate-markedsforing-i-norge-er-det-enklere/` |
| `/adrecord`, `/daisycon`, `/partnerads`, `/awin` | `/norske-affiliate-programmer/`, `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/` |
| `/adservice` | `/er-amazon-sitt-affiliate-program-helt-ute-a-kjore/`, `/mine-erfaringer-med-affiliatenettverket-tradetracker/` |
| `/namecheap` | `/hvordan-lage-nettside-na-til-dags/`, `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/` |
| `/payoneer` | `/hvordan-heve-sjekk-fra-utlandet-i-norge/`, `/hvordan-fa-amazon-inntekter-utbetalt-til-norsk-bankkonto/` |
| `/jaaxy` | `/gode-verktoy-for-sokeordsanalyse/`, `/affiliate-markedsforing-i-norge-er-det-enklere/` |
| `/morningscore` | `/gode-verktoy-for-sokeordsanalyse/`, `/morningscore-anmeldelse-for-norsk-seo/` |
| `/addrevenue` | `/norske-affiliate-programmer/` |
| `/depositphotos` | `/gratis-bilder/` |
| `/shopify`, `/nordnet`, `/topsurveys`, `/heycash`, `/PrimeOpinion`, `/yougov` | `/seriose-mater-a-tjene-penger-pa-nettet/` |
| `/one_rabatt`, `/adsninja`, `/proisp`, `/linkwhisper`, `/orionmedia`, `/apotera`, `/prettylinks` | Ikke funnet i publisert innhold |

## Konflikt: `/go/`-ruter på dagens side

`/go/<noe>/` gir i dag 301 til artikler, for eksempel `/go/wealthy-affiliate/` → WA-anmeldelsen. Dette er **ikke konfigurerte ruter**, men WordPress' innebygde gjetting på 404 (`redirect_guess_404_permalink`), som også gjør at `/wealthy-affil/` og `/regnskap/` treffer. `/go/tulletull-xyz/` gir 404. Ingen av de 30 Pretty Links bruker `/go/`-prefikset.

**Konsekvens:** `/go/[slug]/` kan brukes som planlagt i PRD §16 uten å ødelegge noen ekte gammel rute. Men den som har delt `/go/wealthy-affiliate/` i den tro at det pekte til anmeldelsen, vil etter migreringen havne hos Wealthy Affiliate. Det bør besluttes bevisst. Den nye løsningen skal ikke gjenskape WordPress' gjetting – ukjente URL-er skal gi 404.

## Anbefalt oppsett i den nye løsningen

1. **`/go/[slug]/` er eneste struktur for affiliatelenker.** `noindex`, utenfor sitemap, og `rel="sponsored nofollow"` på lenkene som peker dit.
2. **Alle 30 gamle kortruter beholdes som redirect til riktig `/go/`-rute.** De er lenket fra 15 av 33 publiserte artikler, og de sju uten interne lenker kan være delt eksternt. Dette koster lite og bevarer bakoverkompatibilitet.
3. **Destinasjonene samles i én konfigurasjonsfil,** ikke spredt i innholdet, så en død partnerlenke kan byttes ett sted.
4. **Bruk 302 eller 307, ikke 301.** Destinasjonene endres når avtaler endres, og 301 caches hardt. Dagens 307 er riktig.
5. **Hver rute får et `affiliate_click`-kall** med partner, plassering og mål (PRD §17).
6. **Rutene merket «Vurderes» bygges ikke før de er besluttet redaksjonelt.** Det gjelder særlig spørreundersøkelses-lenkene, som passer dårlig med «uten hype»-posisjoneringen.

## Må fortsatt hentes fra WordPress

1. **Klikktall per Pretty Link.** Det eneste som kan avgjøre hvilke av de sju ubrukte rutene som faktisk har vært i bruk. Finnes i Pretty Links-oversikten, ikke i CSV-eksporten.
2. **Status på hver affiliatekonto** hos nettverkene.
3. **Avklaring av `/adsninja`-destinasjonen** og det ukjente sporingsdomenet.
4. **Er `goforwa.com` et eget videresendingsdomene for WA-lenker?** Det brukes i `/om-meg/` og på den gamle forsiden, og er ikke en Pretty Link.

## Eksterne affiliate-lenker uten intern rute

Noen artikler lenker direkte til partnernes sporingsdomener. Disse bør legges om til `/go/` i omskrivingen:

| Domene | Funnet i |
|---|---|
| `tc.tradetracker.net` | `/suksess-motbakke-status-og-nye-mal-for-2017/` |
| `track.adtraction.com` | `/verdifulle-tips-fra-simon/` |
| `clk.tradedoubler.com` | `/hva-er-affiliate-markedsforing/` |
| `affiliate-program.amazon.com` | flere artikler |
