# PRD - Minegensjef 2.0

**Versjon:** 0.1  
**Dato:** 17. september 2026  
**Status:** Arbeidsutkast - levende dokument  
**Byggemodell:** Claude Code / Next.js / TypeScript / Vercel  
**Implementasjon:** Opus 5  
**Audit/research:** Fable 5

> Dette dokumentet er bevisst et v0.1-utkast. Beslutninger merket **ÅPEN** skal kunne endres uten at resten av PRD-en behandles som låst.

## 1. Produktvisjon

Minegensjef.no skal relanseres som et moderne norsk kunnskapsunivers for mennesker som vil bygge **en digital sideinntekt ved siden av livet de allerede har**. Siden skal handle om å finne noe man synes er interessant, lage noe som faktisk hjelper andre, lære hvordan det kan få trafikk og over tid forstå hvordan det kan tjene penger.

Kjerneposisjon:

- Ikke «get rich quick».
- Ikke løfte om at brukeren skal slutte i jobben.
- Realistisk om at det tar tid, testing, feil og tålmodighet.
- Praktisk og konkret: vis hvordan ting faktisk gjøres.
- Egen erfaring brukes som bevis, ikke som skryt.
- Wealthy Affiliate er en sentral læringsplattform og affiliatepartner, men Minegensjef skal ha en selvstendig norsk stemme.

**Arbeidshypotese for hero:** `Bygg en digital sideinntekt. Uten hype.`

## 2. Bakgrunn og mulighet

Andreas har vært medlem av Wealthy Affiliate siden 2014. WA oppdaterer nå plattformen og opplæringen etter mange år, samtidig som SEO, affiliate marketing, AI-søk og nettstedbygging har endret seg betydelig. Det gir en naturlig grunn til å gå gjennom opplæringen på nytt og oppdatere Minegensjef parallelt.

Minegensjef skal ikke være en restaurering av en gammel WordPress-blogg. Relanseringen skal bruke den historiske troverdigheten, domenet og de gamle URL-ene til å bygge et nytt redaksjonelt produkt.

Dokumentert historikk kan brukes nøkternt:

- ca. 3,03 mill. kr samlet inntekt 2016-2025
- ca. 2,32 mill. kr samlet resultat 2016-2025
- toppår 2022
- tydelig nedgang etter toppen - relevant som del av historien om et endret marked

## 3. Målgruppe og brukerbehov

### Primær målgruppe

Norske voksne med jobb, familie eller annen hovedaktivitet som ønsker å bygge noe eget på nett og undersøke muligheten for en ekstra inntekt uten å gamble på «passiv inntekt»-løfter.

Typisk situasjon:

- har begrenset tid
- er nysgjerrig på affiliate, SEO, AI eller nettsider
- trenger en strukturert vei inn
- ønsker realistiske forventninger
- kan være teknisk nybegynner
- vil helst starte med et tema de faktisk liker

### Sekundær målgruppe

- tidligere affiliate-/SEO-utøvere som vil forstå AI-skiftet
- eksisterende WA-medlemmer som vil lese en norsk, uavhengig erfaring
- nettstedseiere som trenger konkrete guider om trafikk, monetisering og verktøy

## 4. Job-to-be-done

Når en bruker besøker Minegensjef, skal siden hjelpe vedkommende med å:

1. forstå hva en realistisk digital sideinntekt innebærer
2. finne et tema/nisje som er interessant og nyttig for andre
3. forstå de viktigste stegene fra idé til nettsted, trafikk og monetisering
4. vurdere om Wealthy Affiliate er en egnet strukturert læringsplattform
5. få konkrete guider og verktøy uten å bli møtt av hype

## 5. Produktprinsipper

1. **Nyttig før kommersielt.** Hver side skal hjelpe brukeren selv om vedkommende aldri klikker en affiliatelenke.
2. **Realistisk fremfor aspirerende.** Ekstrainntekt og ferdigheter er hovedfortellingen; «slutt i jobben» er ikke løftet.
3. **Bygg noe du liker.** Interessen og lysten til å jobbe videre er en forutsetning for å holde ut lenge nok.
4. **Hjelp noen konkret.** Et nettsted skal løse et problem, svare på spørsmål, samle data eller gjøre et valg enklere.
5. **Bevis, ikke staffasje.** Ingen oppdiktede trafikktall, inntektsgrafer eller «success metrics» i designet.
6. **Erfaring med forbehold.** Hva som fungerte historisk presenteres ikke automatisk som det som vil fungere i 2026.
7. **WA med selvstendig stemme.** Forklar, test og vurder. Ikke kopier proprietært kursinnhold.

## 6. MVP og ikke-mål

### MVP ved domeneovergang

- ny forside
- Start her
- Guider-hub
- Wealthy Affiliate-hub
- oppdatert WA-anmeldelse på historisk URL
- sentrale evergreen-huber: affiliate, nisje, nettsider, SEO, AI
- artikler/innholdsoversikt
- Om, Kontakt, Personvern, Ansvarsfraskrivelse, 404
- alle 33 publiserte WordPress-innlegg eksplisitt håndtert som KEEP / REWRITE / MERGE -> 301 / 301 / 410
- gamle kommersielle redirect-ruter kartlagt før WordPress slås av
- sitemap, robots, canonical, metadata, schema, GSC og GA4
- affiliate-klikksporing
- mobil QA og Core Web Vitals

### Ikke-mål i MVP

- ikke bygge et stort sosialt community
- ikke kopiere WA-kurset
- ikke bygge et kursbibliotek med video
- ikke lage AI-chat bare fordi det er mulig
- ikke vise alle egne nettsteder som «suksessprosjekter»
- ikke bruke tunge scroll-effekter, WebGL eller storytelling som gjør siden treg
- ikke lansere dark/light-toggle hvis bare mørk modus er gjennomarbeidet

## 7. Informasjonsarkitektur

Foreløpig route-kart:

| Rute | Formål | Status |
|---|---|---|
| `/` | Landing page / hovedinngang | MVP |
| `/start/` | Anbefalt læringsrekkefølge | MVP |
| `/guider/` | Guidehub | MVP |
| `/wealthy-affiliate/` | WA-hub | MVP |
| `/wealthy-affiliate-anmeldelse-en-gylden-mulighet/` | 2026-review, historisk URL | MVP |
| `/affiliate-markedsforing/` | Evergreen affiliate-hub | MVP |
| `/nisje/` | Nisje og idévalg | MVP |
| `/nettsider/` | Bygging og publisering | MVP |
| `/seo/` | SEO, trafikk og AI-søk | MVP |
| `/ai/` | AI i arbeidsflyten | MVP |
| `/case/` | Utvalgte case studies | Senere / light MVP |
| `/artikler/` | Redaksjonell oversikt | MVP |
| `/om/`, `/kontakt/` | Tillit og kontakt | MVP |
| `/go/[slug]` | Affiliate redirect | MVP, noindex |

Den gamle WordPress-taksonomien migreres ikke blindt.

## 8. Forsiden

Forsiden skal oppføre seg mer som en premium landing page enn en klassisk bloggportal.

### Hero

- mørk premium tech-startup-retning
- stor, tydelig sans serif
- lite tekst
- én primær CTA
- maks én sekundær tekstlenke hvis nødvendig
- visuell flate på høyre side som kan kombinere ekte data, UI og personlig fjellfoto
- ingen oppdiktede resultattall

Innholdsretning:

**Bygg en digital sideinntekt. Uten hype.**

Kort støttecopy: Dette tar tid. Finn noe du liker, lag noe som hjelper andre, lær hvordan det får trafikk og bygg videre derfra.

### Bevislinje

Bruk kun dokumenterte bevis, for eksempel:

- 12+ år med erfaring
- 2,3 mill.+ dokumentert resultat
- realistisk for folk med jobb og familie

### Læringsreisen

Fire rolige steg, ikke fire «SaaS-kort» hvis layouten kan løses mer redaksjonelt:

1. Finn en nisje
2. Bygg noe nyttig
3. Få trafikk
4. Tjen penger

### Wealthy Affiliate-seksjon

Forslag til redaksjonell vinkel:

**12 år senere tar jeg opplæringen på nytt.**

Andreas går gjennom den oppdaterte WA-opplæringen fra start for å se hva som fortsatt fungerer, hva som har endret seg og hva som er relevant i Norge i 2026.

CTA bør være innholdsorientert, for eksempel `Følg WA-reisen ->`, ikke en aggressiv kjøpsknapp.

**WA-historien (oppdatert 18.09.2026):**

- Første prosjekt gjennom WA-opplæringen (2014) var en enkel Amazon Associates-side om sportsgadgets for det amerikanske markedet. Domenenavnet skal ikke være sentralt i historien.
- De første affiliateinntektene kom via Amazon Associates. Provisjonen kom den gangen som fysiske sjekker i posten.
- 2026-planen er å gå gjennom WA-opplæringen på nytt og bygge et nytt nettsted parallelt med kurset.
- Nisje og prosjekt er ikke valgt ennå. Ikke finn på eller antyd et prosjekt før det er bestemt.
- eButikker.no er et separat, senere norsk case. Det var ikke det første WA-prosjektet og skal ikke fremstilles som fasit for WA-metoden.
- Historien skal ikke kommuniseres som get-rich-quick. Den handler om læring, testing og arbeid over tid.
- På forsiden vises WA som et eget panel innenfor innholdsbredden (svak blå kant og tone), med én intern lenke til `/wealthy-affiliate/`. Ingen direkte affiliatelenke fra forsiden.

### eButikker-case

eButikker.no presenteres som **ett ekte eksempel, ikke fasit**. Budskapet skal eksplisitt si at brukeren ikke trenger å starte med en stor eller avansert side. Siden ble stor over tid.

### Nederst

- 2-3 nyttige guider/artikler
- kort Om Andreas
- ingen repetisjon av «Kom i gang» i hver seksjon

### Beslutninger om forsidens struktur (18.09.2026)

- Rekkefølgen er låst: hero, fire steg, Wealthy Affiliate, eButikker-case, guider, Om Andreas-signatur, footer.
- Ingen flere hovedseksjoner på forsiden etter guidene.
- Om Andreas er en kort signatur før footer, ikke en hovedseksjon: ingen foto foreløpig, ingen nye tall, ingen CTA-knapp, én tekstlenke til `/om/`.
- Footer er minimal: navigasjon, juridiske lenker, kort affiliate-opplysning og copyright. Ingen CTA, ingen «Kom i gang», ingen nyhetsbrev.
- Heroens H1 har høyere visuell prioritet enn årstallene i WA-seksjonen. Årstallene i WA-panelet er maks ca. 52 px, godt under H1 på alle bredder.

## 9. Wealthy Affiliate-hub

WA skal være et sentralt kommersielt og redaksjonelt område, men ikke hele nettstedets identitet.

Foreløpige undersider:

- Hva er Wealthy Affiliate?
- Wealthy Affiliate anmeldelse 2026 - erfaring etter 12 år
- Wealthy Affiliate i Norge
- Pris og medlemsnivåer
- Premium vs Premium Plus
- Hva er nytt i 2026?
- AI og nye verktøy
- Hvordan opplæringen er bygget opp - på overordnet nivå
- Community og videre læring
- Fordeler, ulemper og hvem WA ikke passer for

Krav:

- affiliate-/annonsemerking skal være tydelig
- påstander om pris, medlemskap, funksjoner og lanseringer verifiseres mot WA før publisering
- proprietære kursleksjoner skal ikke kopieres eller gjengis detaljert
- egne erfaringer skilles tydelig fra WAs egne påstander

## 10. Innholdsstrategi og hubs

Minegensjef bør speile den praktiske reisen uten å være avhengig av WAs eksakte kursstruktur.

Hovedhuber:

- Nisje og idé
- Nettside og publisering
- Innhold
- SEO, Google og AI-søk
- Affiliate marketing og monetisering
- AI og verktøy
- Analyse og forbedring
- Wealthy Affiliate

Hver hub bør etter hvert ha:

- én sterk evergreen-hubside
- grunnleggende guider
- konkrete how-to-artikler
- «min erfaring»-artikler
- norsk vinkel der det gir verdi
- relevant WA-krysslenking uten at hver artikkel blir en salgsside

## 11. Redaksjonelle regler

- Skriv på norsk, konkret og jordnært.
- Unngå «guru»-språk og overdrevne løfter.
- Forklar at resultater varierer og tar tid.
- Skill fakta, egen erfaring, estimater og tredjepartspåstander.
- Bruk primærkilder når tall, priser, funksjoner, lovverk eller plattformopplysninger kan ha endret seg.
- Oppdateringsdato skal være synlig der ferskhet er viktig.
- Ingen automatisk «2026» i title uten reell oppdatering.
- AI kan hjelpe med research og produksjon, men publisert innhold skal ha tydelig menneskelig verdi.

## 12. Migrering fra WordPress

Utgangspunkt:

- 52 WordPress-innlegg totalt
- 19 utkast
- 33 publiserte innlegg
- 6 publiserte sider
- 172 kommentarobjekter

Hver publiserte URL får én beslutning:

- `KEEP`
- `REWRITE`
- `MERGE -> 301`
- `301`
- `410`

Særlig viktig:

- behold historisk WA-review-URL
- kartlegg `/wealthyaffiliate`, `/tradetracker`, `/adtraction`, `/tradedoubler`, `/adrecord`, `/daisycon`, `/partnerads`, `/awin` før gammel hosting skrus av
- sikre `wp-content/uploads`
- behold historiske screenshots/personlige bilder når de gir dokumentasjonsverdi
- bruk GSC, backlinks, internlenker og faktisk trafikk før gamle sider slettes

## 13. Designsystem

### Retning

- mørk, premium, moderne tech-startup
- landing-page-følelse, ikke blog-template
- tydelig sans serif
- store typografiske flater
- mye luft
- få knapper
- få bokser
- mørk navy/svart base med elektrisk blå som hovedaksent
- mulig lilla/cyan støttefarge brukt sparsomt
- subtil glow, tynne borders, lav visuell støy
- ingen generiske AI-gradienter overalt

### Motion

- mikrointeraksjoner 150-300 ms
- diskret hover/fade
- eventuelt enkel grafanimasjon
- ingen scroll-jacking, store 3D-sekvenser eller roterende storytelling
- `prefers-reduced-motion` respekteres

### Bildebruk

- personlig fjellfoto kan brukes som ekte brand-element
- eButikker-screenshots kan brukes i case
- stock/AI-bilder bare der de faktisk tilfører verdi
- ingen «digital nomad på strand»-estetikk

**Godkjent visuell referanse per v0.1:** mørk mockup `docs/design/homepage-reference.png` (tidligere omtalt som `min_egen_sjef_bygg_noe_som_varer.png`). Fjellfotoet som brukes i appen ligger i `assets/andreas-fjell.png`.

## 14. Teknisk arkitektur

- Next.js App Router
- TypeScript
- Tailwind CSS med egne design tokens, ikke standard Tailwind-look
- Vercel
- apex-domene som primær URL; www -> apex redirect
- Server Components / statisk rendering der det passer
- lokal Markdown/MDX foreslås for redaksjonelt innhold i MVP
- lokale WebP/AVIF-bilder
- sentral konfigurasjon for metadata, navigation og affiliate redirects
- `build`, `lint` og `typecheck` skal være grønne før release

## 15. SEO og AI-søk

- unik title, description, H1 og canonical på alle indekserbare sider
- sitemap inneholder kun offentlige indekserbare sider
- `/go/`, test, preview, admin og interne dashboards skal ikke i sitemap og skal noindex-es
- Organization, WebSite, WebPage, BreadcrumbList og Article der relevant
- FAQPage bare når FAQ faktisk vises
- innhold skal ha klare svar, god struktur, kilder og entiteter som også gjør det forståelig for generative søk
- viktige sider skal være tilgjengelige i server-rendered HTML

## 16. Affiliate og monetisering

Primær tidlig monetisering:

1. Wealthy Affiliate affiliateprogram
2. relevante verktøy og tjenester når de naturlig inngår i guider
3. andre inntektskilder vurderes senere

Regler:

- nytte før affiliatelenke
- `rel="sponsored nofollow"` der relevant
- sentral `/go/[slug]`-struktur
- tydelig annonse-/affiliate-merking
- ikke omtale egne ikke-inntektsgivende AI-sider som økonomiske suksesser
- resultatgraf og historiske tall brukes nøkternt og med forklaring

Besluttet, ikke implementert ennå:

- `/go/wealthy-affiliate/` -> `https://www.wealthyaffiliate.com?a_aid=fe112df7`
- den historiske ruten `/wealthyaffiliate` skal bevares ved migreringen (se §12)

## 17. Analyse og KPI-er

### Måling ved lansering

- GA4 med samtykke der det kreves
- page_view
- CTA-klikk
- affiliate_click med partner, location og mål-URL/slug
- interne søk hvis søk bygges senere

### Kvalitets-KPI-er

- 100 % av gamle publiserte URL-er har eksplisitt migreringsbeslutning
- ingen ukjente 404-er fra viktige historiske URL-er
- ingen test-/preview-sider indekseres
- sitemap og canonical er korrekte
- mobil og desktop QA passert
- gode Core Web Vitals

### Produkt-KPI-er etter lansering

- organisk trafikk til WA-hub og evergreen-huber
- CTR fra hub -> detaljguide
- affiliate click-through rate
- WA-registreringer/konverteringer når de kan måles
- artikler som får impressions men lav CTR
- sider som ikke får trafikk og bør forbedres/merges

MVP-en skal ikke få et kunstig inntektsmål. Første mål er å bygge en troverdig, indekserbar og målbar grunnmur.

## 18. Tillit, juridisk og tilgjengelighet

- kontakt@swanecreative.no vises kun på `/kontakt/`, aldri i footer eller andre steder. Footer lenker bare til `/kontakt/`.
- personvern og cookie-/samtykkevurdering
- ansvarsfraskrivelse om inntekt og resultater
- tydelig affiliate disclosure
- påstander om WA og andre tjenester kildebelegges når de kan endre seg
- god kontrast og tastaturnavigasjon
- semantisk HTML
- alt-tekst på meningsbærende bilder

## 19. Byggefaser

1. **Sikring:** backup av WordPress, uploads og redirect-destinasjoner.
2. **Audit:** gammel URL-liste + GSC/backlinks/innhold -> KEEP/REWRITE/MERGE/301/410.
3. **IA og PRD:** spikre routes, hubmodell, posisjonering og åpen beslutningsliste.
4. **Designsystem:** implementer bare header + hero + første vertikale brukerreise og kjør visuell QA.
5. **Teknisk grunnmur:** metadata, innholdsmodell, redirects, analytics, schema, sitemap/robots.
6. **Innhold:** WA-hub, review, evergreen-huber og prioriterte gamle artikler.
7. **Pre-launch QA:** Fable 5-audit + Opus 5-fix + browser/production-verifikasjon.
8. **Domeneovergang:** først når redirects, tracking og innhold er verifisert.
9. **Observasjon:** GSC, GA4, affiliateklikk, indeksering og feil første 30-90 dager.

## 20. Åpne beslutninger

- [ ] Endelig hero-copy og tagline
- [x] Logo: nytt Min Egen Sjef-symbol er foreløpig valgt og godkjent (18.09.2026). Brukes i header, footer og som favicon/app-ikon.
- [ ] Eksakt fargepalett og typografifamilie
- [ ] Dark-only i MVP eller også light mode
- [ ] MDX/Markdown vs annet CMS
- [ ] Hvilke historiske kommentarer som eventuelt skal bevares
- [ ] Hvilke gamle artikler som prioriteres til full rewrite før launch
- [ ] Endelig WA-understruktur etter at den nye plattformen/opplæringen er gått gjennom
- [ ] Om `/blogg/` skal beholdes/redirectes eller erstattes av `/artikler/`
- [ ] Hvordan `/norske-affiliate-programmer/` skal posisjoneres mot AffiliateProgrammer.no uten intern konkurranse
- [ ] Hvor mye av historiske regnskapstall som vises offentlig og i hvilken grafisk form
- [ ] E-postliste/newsletter: MVP eller senere

## 21. Akseptansekriterier for v1-lansering

Minegensjef 2.0 er klar for domenebytte når:

- alle gamle publiserte URL-er er kartlagt og testet
- kritiske redirects fungerer
- designet matcher den vedtatte mørke premium-retningen på desktop og mobil
- forside, Start, WA-hub, WA-review og sentrale evergreen-huber er publiseringsklare
- ingen falske/placeholder-data finnes i produksjon
- affiliate disclosure og juridiske sider er på plass
- GA4 og affiliate-klikk er verifisert i produksjon
- sitemap, robots, canonical og schema er kontrollert
- build/lint/typecheck er grønne
- browser QA og tilgjengelighetskontroll er bestått
- Vercel production er verifisert før DNS/domene flyttes

---

## Endringslogg

### 18.09.2026

Forsidens hovedstruktur låst (§8): ingen flere hovedseksjoner, Om Andreas som kort signatur, minimal footer uten CTA, H1 over WA-årstall. Kontakt-e-post presisert til kun `/kontakt/` (§18). `/go/wealthy-affiliate/` notert som besluttet, ikke implementert (§16). Nytt logo-symbol foreløpig valgt (§20). WA-historien oppdatert med første Amazon Associates-prosjekt og 2026-planen (§8).

### v0.1 - 17.09.2026

Første redigerbare PRD basert på prosjektoppsummeringen, designtråden, felles PRD-sjekkliste og lanseringsreglene. Fokus er posisjonering, WA-relaunch, migrering fra WordPress, mørk premium designretning og realistisk sideinntekt fremfor «get rich quick».
