# 00 / Bruk denne standarden

**Formål.** Dette er en arbeidsstandard for å finne og forebygge nettsider som fremstår masseproduserte, generiske eller uferdige. Den skal brukes både i **audit før endringer**, under **design og innholdsproduksjon**, og i **QA før publisering**. Den handler om kvalitet, ikke om å bevise hvem eller hva som har laget en side.

> **Hovedregel:** Lag ikke «det motsatte av AI-design» som en ny stilmal. Lag det som er riktig for akkurat den siden, den brukeroppgaven og det innholdet. Avvik fra en klisjé skal ha en funksjon.

### Tre bruksmoduser

1. **AUDIT (skrivebeskyttet).** Kartlegg ruter og maler, inspiser kode og faktisk rendret visning, dokumenter funn med bevis, og gi poeng. Ingen kodeendringer.
2. **DESIGN / SKRIVING.** Bruk alternativene og prinsippene i denne standarden før nye sider bygges. Still spørsmål om brukeroppgave og unik verdi før layout velges.
3. **GODKJENNING.** Kontroller P0-stoppunkter, poengsum og regresjonstester. Ingen endring skal ut i produksjon bare fordi den ser mer særpreget ut.

### Praktisk oppsett i hvert prosjekt

Legg gjerne **`ANTI_AI_SLOP_STANDARD.md`** i `docs/quality/` i det aktuelle repoet. PDF-en er lesedokumentet; Markdown-filen er en tilsvarende, maskinlesbar arbeidsinstruks. Be Claude Code lese standarden **i samme prosjekt** før audit eller implementering. Kopier ikke hele prosjektporteføljen inn i én prompt.

**Start med et representativt utvalg:** forsiden, én hub/oversikt, én artikkel/guide, én detaljside, én søke-/verktøyside og én feil-/tomtilstand dersom disse finnes. Test både mobil og desktop. Deretter kan funnene generaliseres til delte komponenter og maler, men ikke uten å sjekke avvik.

**Utdata fra en god audit:** en kort sammendragsvurdering, P0–P3-funn med fil/rute og konkret dokumentasjon, score per dimensjon, 3–5 anbefalte tiltak og regresjonsrisikoer. Hvis noe ikke er verifisert: skriv **«ikke undersøkt»**, ikke gjett.

---

# 01 / Prinsippene som bryter AI-preget

Det typiske AI-preget skyldes ofte **gjennomsnittsløsninger**: modellen velger det mest sannsynlige mønsteret for en nettside, ikke nødvendigvis det beste for akkurat produktet, målgruppen og innholdet. Målet er å bryte denne autopiloten.

### Åtte styrende prinsipper

**01. Brukeroppgaven før komposisjonen.** På en kalkulator skal beregningen synes før markedsføringsordene. På en guide skal svaret komme før introduksjonen. På en katalog skal søk, filtrering og sammenligning være synlig.

**02. Informasjon før dekorasjon.** Et diagram, en tabell eller et eksempel som forklarer noe, er bedre enn et generisk hero-bilde som bare fyller plass.

**03. Reell variasjon mellom sidetyper.** Bruk ikke samme hero, tre kort, testimonials og FAQ på hver URL. La strukturen speile innhold og handling.

**04. Tydelige prioriteringer.** Ikke gi alle elementer lik visuelt tyngde. La ett primært behov styre hierarkiet. Sekundært innhold kan være roligere, kortere eller ligge lenger ned.

**05. Særpreg gjennom system, ikke tilfeldigheter.** Velg typografi, rytme, farger, kantlinjer og illustrasjonsprinsipper fra en gjennomtenkt identitet. Unngå stadig nye «lekre» effekter.

**06. Skrive for leseren, ikke for lengde.** Hver setning skal tilføre et svar, et skille, en instruksjon, et forbehold eller dokumentasjon. Slett resten.

**07. Egenverdi på hver indekserbar side.** Unik URL er ikke det samme som unikt bidrag. Hvis siden ikke kan begrunne sin plass, vurder forbedring eller sammenslåing – aldri massetiltak uten vurdering.

**08. Kontroller påstander og konsekvenser.** Ingen oppdiktede tester, anmeldelser, kunder, ekspertprofiler, produktspesifikasjoner, priser eller illustrasjoner som utgir seg for ekte produktfoto.

### Ikke bli dogmatisk

En sentrert overskrift, tre kort, en gradient eller Inter kan fungere godt. De er **observasjonssignaler**, ikke feil i seg selv. Feilen oppstår når mønsteret brukes uten begrunnelse, i feil situasjon eller gjennomgående på tvers av sidetyper. Ikke erstatt en konvensjon med asymmetri, nostalgi eller eksperimentering hvis resultatet blir vanskeligere å bruke.

---

# 02 / Visuell slop: signal → bedre beslutning

Dette er **heuristikker**, ikke en AI-detektor. Et funn krever et konkret eksempel og en konsekvens for oppgaven, identiteten eller lesbarheten.

| Se etter | Hvorfor det kan være svakt | Velg heller når det passer |
|---|---|---|
| Lite overlinje-ord, enorm sentrert hero, generisk ingress og to CTA-er på alle sider | Gir samme åpning uansett intensjon; hovedfunksjon skyves ned | Første skjermbilde med svaret, søket, beregningen eller tydelig produktvalg |
| Tre eller seks like «feature-kort» med standardikon | Kunstig symmetri; alle punkter får lik verdi | Prioritert liste, redaksjonell tekst, sammenligningstabell eller én illustrert hovedfordel |
| Et kort rundt absolutt alle avsnitt og lister | Ekstra rammer gir støy og mindre tekstbredde | Åpent dokumentoppsett; bokser kun der de viser interaksjon, status eller advarsel |
| Store avrundede hjørner og skygger overalt | Standard SaaS-estetikk som ikke sier noe om temaet | Egen rad-/kantlinjerytme, flatere flater og gjennomtenkt inndeling |
| Lilla/blå/oransje gradienter og lyseffekter | Dekorasjon kan dominere og svekke egenart | En begrenset fargepalett valgt fra merke, fagområde og funksjon |
| Pilleetiketter på hvert avsnitt | Gjør vanlig metadata til støy | Vanlige seksjonsoverskrifter og mindre, men informative etiketter |
| Emoji-/Lucide-ikon for hvert punkt | Dobler ofte samme informasjon som tittelen | Ikoner bare når de hjelper orientering, gjenkjenning eller handling |
| Samme «zig-zag»-seksjon gjentatt nedover | Markedsføringsmal i stedet for informasjonshierarki | Komponer etter dokument, oppgave eller data – ikke etter fast seksjonsoppskrift |
| Hover-glød, scroll-reveal og animasjoner uten funksjon | Forstyrrer, øker bevegelse og skjuler innhold | Statisk og raskt; animasjon kun for tilbakemelding eller tilstandsendring |
| «10 000+ brukere», stjerner og testimonials uten kilde | Misvisende sosial bekreftelse | Ekte tall med kilde og definisjon, eller fjern elementet |
| Samme generiske stock-/AI-person i hero | Lite informasjonsverdi, mulig rettighets- og tillitsproblem | Dokumentert produktfoto, stedsspesifikt bilde eller faktisk forklaringsgrafikk |

### «Førsteskjermtesten» – fem spørsmål

- Vet jeg på fem sekunder **hva siden hjelper meg med**?
- Ser jeg neste nyttige handling, **uten å lete etter den**?
- Har overskriften konkret informasjon, ikke bare et løfte?
- Får den viktigste informasjonen mest plass, fremfor pynten?
- Ville samme komposisjon passet på fem helt forskjellige nettsteder? Hvis ja: hvorfor?

**Designregel:** Gi aldri ordre om å «fjerne alle runde hjørner». Be om en bedre begrunnelse for hvert designvalg.

---

# 03 / Alternative layout-prinsipper for sidetyper

Målet er ikke å være rar. Målet er at hver sidetype får sin egen **informasjonsarkitektur**. Bruk mønstrene som utgangspunkt, ikke som obligatoriske maler.

### A. Verktøy, kalkulator eller velger

**Vanlig generisk løsning:** hero med slagord → tre fordelskort → forklaring → verktøy langt nede.

**Bedre prinsipp:** tydelig oppgavetittel → **selve verktøyet** → umiddelbart resultat → forklaring av antakelser → relevante neste steg. Vis input og output uten markedsføringsstøy. Tomtilstand og valideringsfeil skal være gjennomtenkt.

### B. Register, lokaloversikt eller katalog

**Vanlig generisk løsning:** gigantisk hero → «populære kategorier» → kortgrid → lang SEO-introduksjon.

**Bedre prinsipp:** søk/filter og geografi øverst → oversikt i tett, skannbar liste eller tabell → kilde- og oppdateringsstatus → bare den veiledningen som faktisk hjelper med å tolke resultatene.

### C. Kunnskapsguide eller spilleregler

**Vanlig generisk løsning:** 200 ord om hvorfor temaet er viktig → definisjon → fordelskort → FAQ.

**Bedre prinsipp:** kort svar eller nødvendige forutsetninger → steg i logisk rekkefølge → konkrete eksempler → unntak og feilsituasjoner → relaterte spørsmål bare når de gir noe nytt.

### D. Produktsammenligning / affiliate-guide

**Vanlig generisk løsning:** «Topp 10», nesten identiske produktkort, generiske fordeler/ulemper og knapper.

**Bedre prinsipp:** hvem skal velge hva → transparent utvalgskriterium → faktiske skillelinjer i en sammenligning → begrensninger og usikkerhet → kildegrunnlag → tydelig, men nøktern kjøpslenke. Skill produsentdata fra egen vurdering.

### E. Forside / inngangsside

**Vanlig generisk løsning:** universelt slagord → tre tjenestekort → statistikk → kundesitat → gigantisk CTA.

**Bedre prinsipp:** vis den viktigste brukeroppgaven først, prioriter 2–4 faktiske innganger, og la nettstedets informasjon og funksjoner demonstrere nytten. Ingen oppdiktede «bevis» på popularitet.

### F. Detaljside med data, dato eller status

**Vanlig generisk løsning:** helsides introduksjon og generiske forklaringer rundt ett enkelt faktum.

**Bedre prinsipp:** fakta først, tydelig tids- og kildeangivelse, deretter relevante forbehold, relasjoner og handlinger. Ryddig informasjonshierarki er viktigere enn imponerende design.

---

# 04 / Norsk tekst uten robotstemme

En tekst er ikke dårlig fordi den er generert med AI. Den blir dårlig når den er **forutsigbar, langdryg, upresis, kildeløs eller unaturlig formulert**. Språkrådet anbefaler at både innhold, formuleringer, tegnsetting og grammatikk kontrolleres.

### Typiske uttrykk å undersøke

| Svakt standarduttrykk | Konkret, mindre generisk alternativ |
|---|---|
| «I dagens hektiske hverdag …» | Gå rett på situasjonen, spørsmålet eller tallet |
| «Å velge riktig X kan være en utfordring» | Si hvilken forskjell som faktisk er avgjørende |
| «Enten du er nybegynner eller erfaren …» | Beskriv to reelle behov, hvis de faktisk krever ulike valg |
| «Ta X til neste nivå» | Fortell konkret hva produktet eller funksjonen gjør |
| «En sømløs og intuitiv opplevelse» | Beskriv en observerbar egenskap, eller slett |
| «Det er viktig å merke seg at …» | Skriv forbeholdet direkte, uten innledningen |
| «Når det kommer til …» | Bruk normalt norsk: «For», «Ved», «Om» eller skriv om |
| «La oss dykke ned i …» | Start med innholdet |
| «Det handler ikke bare om X, men om Y» | Beskriv sammenhengen uten retorisk formel |
| «Her er alt du trenger å vite» | Vis presist hva teksten dekker – og hva den ikke dekker |
| «Avslutningsvis kan vi konkludere med …» | Oppsummer bare hvis det gir en beslutning eller ny oversikt |
| «Perfekt for alle» / «den ultimate guiden» | Avgrens målgruppen, tilfellet og dokumentert nytte |

### Eksempel 1 – produktguide

**Før:** «Å velge riktig kaffekvern kan være en utfordring. Enten du er nybegynner eller erfaren barista, hjelper vi deg å finne den perfekte løsningen.»

**Etter:** «Til espresso er trinnstørrelsen på justeringen viktigere enn antall forhåndsprogrammer. Sammenlign også hvor lett kvernen er å rengjøre, og hvor mye kaffe som blir liggende igjen.»

*Merknad:* Faglige råd som dette skal faktasjekkes mot dokumentasjon før publisering.

### Eksempel 2 – dataverktøy

**Før:** «Oppdag vår innovative og brukervennlige kalender som gjør planlegging enklere enn noensinne.»

**Etter:** «Velg år og fylke for å se datoene. Vi viser også hvilke ferier som varierer mellom fylkene.»

### Eksempel 3 – kjøpshjelp

**Før:** «Denne fantastiske massasjepistolen gir en luksuriøs opplevelse som tar restitusjonen til nye høyder.»

**Etter:** «Se først på vekt, støynivå, grep og tilgjengelige hastigheter. Vi viser hvilke opplysninger produsenten dokumenterer, og hva vi ikke har testet.»

### Regler for språk og rytme

- Skriv **svaret før forhistorien**. Det er lov med en kort ingress, men den må tilføre noe.
- Varier setningslengden naturlig; unngå mekanisk trepunktsrytme i hvert avsnitt.
- Unngå overdreven bruk av tankestrek, kolon, emojier og utropstegn. Bruk dem når de hjelper.
- Bruk norsk ordstilling og naturlige uttrykk; oppdag direkte oversettelser fra engelsk.
- Velg konsekvent bokmålsform og terminologi innenfor nettstedet. Ikke rett korrekte varianter bare av smak.
- Ikke gjenta H1, metabeskrivelse og ingress i tre nesten like formuleringer.
- La nødvendig fagterminologi stå; forklar den kort fremfor å vanne den ut.
- Slett selvfølgeligheter: «Det finnes mange alternativer på markedet» sier ingenting.
- Ingen automatiske konklusjoner eller FAQ-er bare fordi en SEO-mal forventer det.

**Redaksjonell test:** Kan du stryke hele setningen uten at leseren mister informasjon, et relevant forbehold eller en god overgang? Da bør den sannsynligvis bort.

### Slik tar du en stikkprøve på norsk tekst

1. Velg fem URL-er fra ulike sidetyper. Les bare overskrift, ingress og de to første avsnittene høyt. Merk passasjer som kunne stått på en hvilken som helst annen nettside.
2. Sammenlign tre artikler i samme mal: er formuleringene, argumentasjonen og avsnittsrekkefølgen nesten lik selv om spørsmålene er forskjellige?
3. Kontroller minst fem faktapåstander og fem faguttrykk mot kilder. Marker idiomer, tegnsetting, store bokstaver og direkteoversatt engelsk.
4. Skriv om bare de passasjene som mangler presisjon eller egenverdi. Behold gode setninger og korrekt fagterminologi, selv når de ikke er spesielt «kreative».

**Godkjent språk betyr ikke at teksten høres ut som en personlig blogg.** Et nøkternt faglig oppslag kan være både naturlig og særpreget gjennom tydelige definisjoner, prioriteringer og eksempler.

---

# 05 / Innhold som fortjener en egen URL

Google skiller mellom nyttig bruk av generativ AI og masseproduksjon av sider uten merverdi. Dette gjelder innholdet, uansett om teksten er laget av mennesker eller verktøy. Originalitet må dokumenteres i selve siden – ikke bare i en intern prompt.

### Hver ny side må kunne svare på fire spørsmål

1. **Brukerbehov:** Hvilket konkret spørsmål, valg eller problem løser denne URL-en?
2. **Egenverdi:** Hvilken informasjon, funksjon, data eller analyse får leseren som ikke bare er en omskriving?
3. **Kilder:** Hvor kommer de sentrale påstandene fra? Når ble de kontrollert?
4. **Grense:** Hva vet vi ikke, og hva ville være misvisende å hevde?

### Egenverdi som kan bygges systematisk

- Verktøy som regner, sammenligner, filtrerer eller organiserer reelle data.
- Egenutviklede og forklarte beslutningskriterier.
- Kildesporbare faktaoversikter med dato, avvik og tydelige forbehold.
- Originale diagrammer og eksempler som gjør et vanskelig valg enklere.
- Verifiserte produktforskjeller, kompatibilitet, dimensjoner og begrensninger.
- Gode beskrivelser av hva som **ikke** passer, og hvorfor.

### Stoppsignaler for massepublisering

**Ikke publiser automatisk** når sidene bare varierer i sted, dato, produktnavn eller søkeord, mens avsnittene er nesten identiske og ikke tilfører reell lokal eller tematisk verdi. Det er heller ikke nok å synonymisere konkurrenters tekst eller endre metadata.

**Tillatt høy produksjonstakt:** Mange nyttige URL-er er fullt mulig dersom hver har selvstendig brukerintensjon, kontrollert datagrunnlag, riktig internlenking og en struktur som er testet mot duplikater og feil.

**Ved overlapp:** foreslå styrking, sammenslåing, kanonisering eller i enkelte tilfeller avindeksering – men endre aldri kanoniske URL-er, 301/308, `noindex`, sitemap eller internlenker automatisk uten uttrykkelig godkjenning og konsekvensanalyse.

---

# 06 / Tillit, produktpåstander og bilder

### Bevisstatus for alle viktige påstander

Bruk minst én av disse statusene i audit-rapporten og kildegrunnlaget:

| Status | Betydning | Hva nettstedet kan skrive |
|---|---|---|
| **VERIFISERT** | Støttet av kontrollert primærkilde eller egne etterprøvbare data | Oppgi fakta, kilde og relevant dato |
| **VURDERT** | Egen redaksjonell vurdering med åpen metode og premisser | «Vi vurderer ... fordi ...» |
| **IKKE TESTET** | Produktet, funksjonen eller egenskapen er ikke testet i praksis | «Basert på spesifikasjoner ...», ikke «Vi har testet» |
| **UKJENT** | Dokumentasjon mangler eller motstrider andre kilder | Ikke presenter dette som fakta; finn kilde eller fjern |

**Ufravikelige regler:** Ingen oppdiktede vurderinger, forfatterprofiler, stjerner, kundetall, faglige kvalifikasjoner eller «best i test»-påstander. Ingen eksakte priser eller lagerstatuser uten kilde og tidsmessig kontekst. Ingen medisinske eller helserelaterte påstander uten særlig grundig dokumentasjon. Merk affiliate-forhold tydelig der det er relevant.

### Bilder og illustrasjoner

- Et **ekte produktfoto** må vise rett produkt/variant, med godkjent bruksrett.
- En **AI-illustrasjon** kan brukes for å forklare en kategori eller idé, men den må ikke utgi seg for å være et ekte produktfoto, en virkelig test eller dokumentasjon.
- Diagrammer som viser data, må bygge på korrekt datagrunnlag og riktig skala.
- Stockbilder uten informasjonsverdi fjernes heller enn å erstattes med en annen generisk illustrasjon.
- Alt-tekst skal beskrive faktisk informasjonsverdi; ikke repetere søkeord eller pynte på bildet.
- Kontroller lys-/mørkversjoner, mobilbeskjæring og at tekst aldri ligger som nødvendig informasjon kun i bildet.

### Kommersiell troverdighet

Bruk ikke salgs-CTA som eneste svar på et informasjonsbehov. Hjelp leseren med å sammenligne, velge bort og forstå begrensninger før kjøpslenken. Kjøpslenken kan være synlig, men den skal ikke kamuflere usikkerhet eller erstatte råd.

---

# 07 / UX, teknikk og tilgjengelighet

Generisk AI-design er ofte lett å kjenne igjen på at det ser ferdig ut, mens tilstandene rundt den ideelle skjermen mangler. Test derfor **bruk, ikke bare screenshots**.

### Funksjonelle kontroller

- Fungerer søk, filtrering, sortering, kalkulasjon, lenker og CTA-er som lovet?
- Finnes tydelig tilbakemelding ved venting, feil, tomt resultat, manglende data og ugyldig input?
- Kan brukeren fullføre oppgaven med tastatur, og ser man hvor fokus er?
- Er fargekontrast, tekststørrelse, trykkflater og semantikk tilstrekkelige?
- Skjules ikke viktig innhold bak sticky elementer, popuper, cookie-lag eller animasjoner?
- Fungerer siden med lange norske ord, store tekstinnstillinger og smale skjermer?
- Laster hovedinnholdet raskt nok, uten unødvendige effekter som blokkerer bruk?
- Finnes ingen falske knapper, døde lenker eller hovereffekter på ikke-klikkbare flater?

### Designregler som hindrer en ny standardmal

**Typografi:** Velg et fontsystem som passer rollen. Synlig hierarki, konsekvent linjelengde og god lesbarhet er viktigere enn en «trendfont».

**Spatiering:** Bygg rytme etter innholdets logikk. Ikke bruk gigantiske mellomrom bare for å se eksklusiv ut.

**Komponenter:** Gjenbruk knapper, input og mønstre; varier sidens informasjonshierarki. Målet er sammenhengende identitet, ikke kopierte layoutseksjoner.

**Farger:** Bruk farger til hierarki, handling og status. Unngå både overdekorasjon og kunstig «anti-AI»-minimalisme.

**Bevegelse:** Animasjon skal forklare overgang, status eller interaksjon. Respekter brukeres preferanse for redusert bevegelse.

### Anbefalt praktisk gjennomgang

For hver mal: ta desktop- og mobilvisning; naviger med tastatur; test ett normalt input, ett ugyldig og ett tomt resultat; inspiser synlig tekst; sammenhold med kode og datakilder; sjekk kritiske navigasjonslenker. Hvis nettleser ikke er tilgjengelig, skriv at visuell/atferdsmessig kontroll **ikke er gjennomført**.

---

# 08 / Målesystemet: 100 poeng, med stoppregler

Dette er en **intern kvalitetsrubrikk**, ikke en dokumentert algoritme for å måle AI-andel eller Googles rangering. Bruk den likt over tid og knytt hvert fratrekk til et konkret funn. En side kan ha god score og fortsatt ha en kritisk feil.

### Poeng per dimensjon

| Dimensjon | Vekt | Kontroller |
|---|---:|---|
| A. Oppgave og originalverdi | **25** | Får brukeren verdi raskt? Har URL-en et eget bidrag? |
| B. Layout og visuell identitet | **20** | Innholdsstyrt struktur, hierarki, konsistent særpreg, lite pynt |
| C. Norsk språk og redaksjon | **15** | Direkte, naturlig, presist, fritt for maltekst og repetisjon |
| D. UX og tilgjengelighet | **15** | Fungerende oppgave, mobil, tilstander, tastatur, lesbarhet |
| E. Kilder og troverdighet | **15** | Verifiserbare påstander, reell metode, ærlig usikkerhet |
| F. SEO og vedlikeholdbarhet | **10** | Riktig intensjon, metadata, internlenker, unngå duplikat-URL-er |
| **Sum** | **100** | **Skår hver dimensjon fra 0 til 4** |

**Regnestykke:** dimensjonspoeng = (nivå / 4) × vekt. Totalen er summen av de seks dimensjonene. Ikke gi poeng for aspekter som ikke er undersøkt; merk dem **UAVKLART** og oppgi at sluttscore er foreløpig.

**Nivåskala:** `0 = alvorlig svikt`, `1 = svakt`, `2 = blandet`, `3 = godt`, `4 = svært godt og dokumentert`.

**Anbefalte interne terskler:** `85–100 = klar når stoppregler er passert`; `70–84 = målrettet forbedring`; `50–69 = vesentlig omarbeiding`; `under 50 = ikke publiser som planlagt`. Tersklene er redaksjonelle og ikke statistisk validerte.

### P0 – publiseringsstopp uansett poengsum

1. Oppdiktet test, forfatter, kunde, anmeldelse, statistikk, produktdata eller kilde.
2. Kritisk faktisk feil, særlig om helse, økonomi, datoer, sikkerhet eller juridiske forhold.
3. Sidens lovede hovedfunksjon er ødelagt eller bevisst villedende.
4. Feil produkt/variant i bilde, pris-/kjøpspåstand eller affiliate-flyt som kan føre til feil kjøp.
5. Endringer som ødelegger eksisterende kanoniske URL-er, indeksering, sporing eller andre kritiske flyter uten kontroll.


---

# 09 / Auditprosessen – fra signal til bevis

### 1. Avgrens prosjektet

Noter domene, repo/mappe, branch, tidspunkt, datakilder og hvilke sider som inngår. **Les aldri andre prosjekter** uten egen oppgave.

### 2. Kartlegg sidetyper og risiko

Finn maler/komponenter som driver mange URL-er. Velg representativt utvalg. Skill generiske mønstre i en delt komponent fra ett enkelt avvik på en side.

### 3. Gjør en statisk indikatorskann

Søk etter gjentatte formuleringer, malstrukturer og CSS-klasser, for eksempel:

```bash
# Kun indikatorer: treff er ikke automatisk feil
rg -ni "i dagens|enten du|ta .*til neste nivå|la oss dykke|det er viktig å merke seg|sømløs|ultimate" app src content
rg -n "rounded-(2xl|3xl)|bg-gradient|backdrop-blur|shadow-(xl|2xl)|animate-" app src components
```

Tilpass mappene til repoet; ikke anta at katalogene finnes. Søk også etter komponentbruk, like ingresser, produktpåstander, genererte FAQ-er, kildeløse «best»-utsagn og unike URL-er med nesten samme innhold.

### 4. Se faktisk på siden

Kontroller desktop/mobil, typografisk hierarki, innhold over bretten, kontrast, interaksjoner og innlastning. Kodefunn skal ikke forveksles med verifisert visuell effekt.

### 5. Kontroller redaksjon og data

Velg representative sider og vurder faktisk informasjon, kildegrunnlag, norsk språk, intern repetisjon, søkeintensjon og begrunnelse for egen URL. Sjekk påstander mot kilder når mulig.

### 6. Registrer hvert funn med evidens

Hvert funn må ha: **rute/fil + observasjon + bevis + konsekvens + konkret alternativ + prioritet + risiko**. Klassifiser evidens: `V = visuelt verifisert`, `K = kilde-/kodeverifisert`, `S = språklig skjønn`, `U = uavklart`. Prioritet: `P0 = stopp`, `P1 = før lansering`, `P2 = viktig`, `P3 = kosmetisk`.

### 7. Velg få, gode grep

Ranger tiltak etter forventet verdi, risiko og rekkevidde. Prioriter shared components når endringen hjelper mange sider – men valider dem på minst to ulike sidetyper.

### 8. Test før og etter

Bevar SEO, datakilder, GA4/samtykke, affiliate-attribusjon, lenker, ruter, skjemaer og responsiv oppførsel. Test visuelt og funksjonelt. Rapporter endringer og eventuelle avvik eksplisitt.

---

# 10 / God endring vs. «anti-AI for enhver pris»

| Dårlig reaksjon på AI-preget | God, oppgavebasert forbedring |
|---|---|
| Fjern alle kort og avrundinger | Fjern bare rammer som ikke formidler gruppering eller interaksjon |
| Flytt alt til venstre for å unngå sentrerte heroer | Velg plassering ut fra informasjonsformål og leseflyt |
| Bruk en sær font på alle sider for å se unik ut | Velg typografi etter identitet, innhold og lesbarhet |
| Lag skjeve seksjoner, brutt grid og voldsom asymmetri | Bruk tydelig, variert hierarki med forutsigbar navigasjon |
| Fjern all forklarende tekst | Flytt kortsvaret frem, behold nødvendige forklaringer og forbehold |
| Skriv alt «personlig» og muntlig | Skriv presist og naturlig; tone følger målgruppe og faglighet |
| Bytt alle bilder med AI-kunst | Bruk ekte dokumentasjon og funksjonelle illustrasjoner |
| Lag nye URL-er for hvert søkeord | Lag bare sider som løser en selvstendig oppgave |
| Bruk bare én global mal for effektivitet | Del designsystem, men la ulike sidetyper ha ulik komposisjon |
| Endre alt på en gang | Start med 3–5 dokumenterte tiltak og mål regresjon |

### Prosjektorienterte eksempler

**Baristautstyr / produktvelger:** Ut med «den perfekte maskinen for alle». Inn med konkret sortering etter arbeidsflyt, plass, budsjett, vedlikehold og dokumenterte produktegenskaper.

**Velno / lokaloversikt:** Ut med generisk SEO-tekst foran listen. Inn med søk, konkret lokal informasjon, datokontekst og tydelig datakilde.

**Fridagene / datoinformasjon:** Ut med lang forklaring før svaret. Inn med dato, antall dager, lokale variasjoner og presise kilder øverst.

**Spilleregler / instruksjon:** Ut med «hvorfor spillet er populært»-innledning. Inn med utstyr, oppsett, turgang, seiersvilkår og avklarte spesialregler.

**Massasjeutstyr / affiliate:** Ut med diffuse helseløfter og like produktkort. Inn med forståelige kriterier, dokumenterte spesifikasjoner og eksplisitte begrensninger.

Dette er forslag til **struktur**, ikke påstander om at nettstedene har disse feilene nå.

---

# 11 / Klar til bruk: Claude Code – skrivebeskyttet audit

**Anbefalt modell: Claude Opus 5.5.** Kjør kommandoen i det aktuelle prosjektets rotmappe. PDF og Markdown beskriver samme standard; la modellen lese Markdown først når den finnes. Denne fasen skal **ikke** endre noen filer.

```text
Modell: Claude Opus 5.5

Oppgave: Gjennomfør en SKRIVEBESKYTTET anti-AI-slop-audit av
DETTE repoet. Ikke les andre prosjekter, mapper eller repos.

1) Les docs/quality/ANTI_AI_SLOP_STANDARD.md hvis den finnes.
   Hvis bare PDF-en er tilgjengelig, les den i samme prosjekt.
   Bruk standardens prinsipper, rubrikk og P0-stoppregler.
2) Kartlegg sidetyper, delte maler og viktigste brukeroppgaver.
3) Velg representative ruter (forside, hub, artikkel,
   detaljside, verktøy og feilsituasjon der de finnes).
4) Gjennomfør kode-/tekstkontroll. Inspiser rendret mobil- og
   desktopversjon hvis nettleser er tilgjengelig.
5) Finn generisk AI-layout, unaturlig norsk, fylltekst,
   duplikatinnhold, udokumenterte påstander, dårlig UX
   og manglende originalverdi.
6) For hvert funn: rute/fil/linje, konkret eksempel,
   dokumentasjon (V/K/S/U), konsekvens, bedre alternativ,
   prioritet P0-P3 og regresjonsrisiko.
7) Gi 0-4 per dimensjon og veid score /100. Merk alle
   ikke-undersøkte dimensjoner som UAVKLART.
8) Prioriter maksimalt fem tiltak med størst effekt,
   lav risiko og tydelig verifisering.

Ikke kall en vanlig konvensjon en feil uten begrunnelse.
Ikke anbefal å være 'motsatt av AI' på bekostning av UX.
Ikke dikt opp GSC/GA4-data eller testing.
Ikke endre kode, innhold, filer, metadata eller tracking.
Ingen commit, push eller deploy.

Lever først en kort beslutningsrapport, deretter funnene.
```

---

# 12 / Klar til bruk: Claude Code – målrettet utbedring

**Kjør først etter at audit-funn er vurdert og tiltak godkjent.** Be om liten, kontrollert endring fremfor generell redesignet nettside.

```text
Modell: Claude Opus 5.5

Oppgave: Utbedre kun de GODKJENTE anti-AI-slop-funnene
fra forrige audit i DETTE repository.

Les docs/quality/ANTI_AI_SLOP_STANDARD.md først.

For hvert godkjent tiltak:
- Oppgi den konkrete brukeroppgaven og hvorfor endringen
  forbedrer akkurat denne siden.
- Bevar designsystem og eksisterende informasjonsverdi.
- Velg innholdsstyrt layout i stedet for generisk seksjonsmal.
- Gjør norsk tekst direkte, presis og kildebasert.
- Ikke fjern nødvendig faglig informasjon for å få kortere tekst.
- Ikke oppfinn tester, produktpåstander, kunder eller tall.
- Ikke endre ruter, canonicals, metadata, noindex,
  schema, sitemap, consent, GA4 eller affiliate-flyt
  med mindre det er uttrykkelig godkjent.
- Gjennomfør mobil/desktop, relevante tester, lint,
  typecheck og build hvis prosjektet støtter dette.
- Verifiser faktisk funksjon og synlig resultat.

Lever en endringslogg med før/etter, filer, tester,
regresjonsrisiko og gjenstående arbeid.
Stopp og rapporter dersom noe ikke kan verifiseres.
Ikke push/deploy uten uttrykkelig beskjed.
```

### Ekstra skriveinstruks – bruk ved nye artikler

```text
Før du skriver: definer søkeintensjon, leserens beslutning,
unik verdi, primærkilder og påstander som ikke er bekreftet.
Skriv svaret først; fjern generiske innledninger, reklamespråk,
mekaniske trepunktslister, gjentakelser og automatisk FAQ.
Bruk naturlig bokmål og presis fagterminologi. Angi usikkerhet.
Ikke oppfinn erfaring eller testresultater. Gjennomfør
redaksjonell egenkontroll mot ANTI_AI_SLOP_STANDARD.md.
```

---

# 13 / Utskrivbart auditskjema

**Prosjekt:** ___________________________________  **Dato:** ___________________

**Repo / branch / commit:** ____________________________________________________

**Kontrollerte ruter / sidetyper:** _______________________________________________

**Visuelt inspisert:**  [  ] Desktop   [  ] Mobil   [  ] Ikke tilgjengelig

**Kilder / data kontrollert:** __________________________________________________

### Score

| Dimensjon | Nivå 0–4 | Veid poeng |
|---|---:|---:|
| A. Oppgave og originalverdi (25) | ______ | ______ |
| B. Layout og identitet (20) | ______ | ______ |
| C. Norsk språk (15) | ______ | ______ |
| D. UX og tilgjengelighet (15) | ______ | ______ |
| E. Troverdighet og kilder (15) | ______ | ______ |
| F. SEO og vedlikehold (10) | ______ | ______ |
| **Sum / 100** | | **______** |

**P0-stopp funnet?** [  ] Nei  [  ] Ja (beskriv)  [  ] Ikke tilstrekkelig undersøkt

**Funn 1 / evidens / rute:** __________________________________________________

**Funn 2 / evidens / rute:** __________________________________________________

**Funn 3 / evidens / rute:** __________________________________________________

**Tiltak 1 / effekt / risiko:** _________________________________________________

**Tiltak 2 / effekt / risiko:** _________________________________________________

**Tiltak 3 / effekt / risiko:** _________________________________________________

**Konklusjon:** [  ] Klar  [  ] Målrettet forbedring  [  ] Omfattende omarbeiding

**Verifisert av / dato:** ______________________________________________________

---

# 14 / Kilder, avgrensning og vedlikehold

Dette er en **intern standard med redaksjonelle vurderinger og heuristikker**, ikke en vitenskapelig validert AI-detektor. Det er ikke dokumentert at bestemte farger, fonter, hjørneradier eller layoutmønstre alene identifiserer AI-laget arbeid. Poengene er laget for konsekvent intern prioritering, ikke for å forutsi søkeplasseringer.

### Primærkilder og faglige referanser

1. **Google Search Central: Guidance on generative AI content.** AI er et verktøy; masseproduksjon uten brukermerverdi kan bryte søkespamreglene. https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
2. **Google Search Central: Creating helpful, reliable, people-first content.** Original verdi, tillit, faktagrunnlag, forfatter og formål. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
3. **Google Search Central: Spam policies.** Definisjon og eksempler på scaled content abuse. https://developers.google.com/search/docs/essentials/spam-policies
4. **Google Search Central: Reviews system.** Verdien av grundig produktanalyse og original forskning. https://developers.google.com/search/docs/appearance/reviews-system
5. **Språkrådet: Råd om bruk av KI og annen språkteknologi.** Etterkontroll av innhold og språk, inkl. tegnsetting og grammatikk. https://sprakradet.no/sprakteknologi/rad-om-bruk-av-ki-og-annen-sprakteknologi/
6. **Språkrådet: KI-språkets fallgruver (2025).** Dokumenterte svakheter i generert norsk. https://sprakradet.no/aktuelt/ki-sprakets-fallgruver/
7. **Nielsen Norman Group: UX-Context Design (2026).** God AI-støttet design krever domene-, bruker- og designkontekst. https://www.nngroup.com/articles/ux-context-design/
8. **W3C: WCAG 2.2.** Tilgjengelighet som testbart kvalitetskrav. https://www.w3.org/TR/WCAG22/

### Vedlikeholdsregel

Revider standarden når nye mønstre faktisk dukker opp i prosjektene, når kvalitetskontroller viser blindsoner, eller når vesentlige offisielle retningslinjer endres. **Ikke oppdater listen bare fordi en ny designtrend har blitt populær.** For hver revisjon: loggfør dato, endring, begrunnelse og versjon.

**Versjon 1.0 · 6. november 2026**  
**Kjerneidé:** Originalt arbeid er ikke det samme som eksentrisk design. Bygg nettsider som er tydelige, forskjellige når oppgaven krever det, nyttige og etterprøvbare.
