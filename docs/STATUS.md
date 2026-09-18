# Status – Minegensjef 2.0

**Sist oppdatert:** 18.09.2026
**Status:** På pause. Forsidens struktur er ferdig og godkjent.
**Siste commit:** «Complete Minegensjef homepage structure» (commit-hashen finner du med `git log -1`)

Alt arbeid er lokalt. Den eksisterende WordPress-siden på minegensjef.no er live og skal ikke røres. Ingen DNS-, hosting- eller produksjonsendringer er gjort.

## Ferdig

- Next.js 16 (App Router), TypeScript, Tailwind 4, ESLint. Ingen ekstra dependencies.
- Design tokens i `app/globals.css`: farger, typografi, layout, radius og motion. Kun mørk modus.
- Forsiden (`/`), i denne rekkefølgen:
  1. Header med mobilmeny (`components/site-header.tsx`, `mobile-nav.tsx`)
  2. Hero med én CTA og troverdighetsrad (`hero.tsx`)
  3. Fire steg (`steps.tsx`)
  4. Wealthy Affiliate-reisen 2014 → 2026 (`wa-journey.tsx`)
  5. eButikker-case med ekte skjermbilde (`ebutikker-case.tsx`)
  6. Guide-indeks med tre innganger (`guides-index.tsx`)
  7. Om Andreas-signatur (`about-signature.tsx`)
  8. Minimal footer (`site-footer.tsx`, ligger i layouten)
- Navigasjon samlet i `lib/navigation.ts`.
- Bilder i `assets/`, importert statisk via `next/image`.
- Metadata har `robots: noindex, nofollow`, siden dette er en prototype.
- Lint, `tsc --noEmit` og build var grønne ved siste commit.

Designbeslutninger for forsiden står i `docs/PRD.md` §8 («Beslutninger om forsidens struktur»).

## Regel for forsiden

**Ingen nye hovedseksjoner skal legges til forsiden uten en eksplisitt beslutning.** Strukturen over er låst.

## Ikke implementert

- Alle undersider. Bare `/` finnes.
- `/go/[slug]` og affiliate-redirects, inkludert `/go/wealthy-affiliate/`. Den er planlagt med destinasjon `https://www.wealthyaffiliate.com?a_aid=fe112df7` (PRD §16), men ikke implementert.
- Migrering fra WordPress: redirects, 301/410 og kartlegging av gamle URL-er.
- Sitemap, robots.txt, canonical, schema og Open Graph-bilder.
- GA4, samtykke og sporing av affiliate-klikk.
- Innholdsmodell (MDX/Markdown).
- Personvern, ansvarsfraskrivelse og kontaktside.
- Vercel-oppsett og domeneovergang.

## Ruter som gir 404 lokalt

Alle er lenket fra forsiden, header eller footer, men ingen er bygget:

- `/start/`
- `/guider/`
- `/guider/finne-nisje/`
- `/guider/bygge-nettside/`
- `/guider/trafikk-fra-google-og-ai-sok/`
- `/artikler/`
- `/om/`
- `/kontakt/`
- `/wealthy-affiliate/`
- `/case/ebutikker/`
- `/personvern/`
- `/ansvarsfraskrivelse/`
- `/go/wealthy-affiliate/` (ikke lenket ennå)

Den historiske ruten `/wealthyaffiliate` gir 308 til `/wealthyaffiliate/` (på grunn av `trailingSlash: true`), som deretter gir 404. Den må håndteres ved migreringen (PRD §12).

## Åpne beslutninger

Fra PRD §20 (fortsatt åpne):

- Endelig logo. Foreløpig er logoen bare navnet i tekst.
- Dark-only i MVP eller også light mode.
- MDX/Markdown eller annet CMS.
- Hvilke gamle artikler som skal skrives om før lansering, og hvordan kommentarer håndteres.
- Endelig WA-understruktur.
- `/blogg/` mot `/artikler/`.
- Hvor mye av regnskapstallene som vises offentlig.
- Nyhetsbrev nå eller senere.

Fra forsidearbeidet:

- Ordlyd og URL for Swane Creative-lenken i footeren. Foreløpig står det «Et prosjekt fra Swane Creative», lenket til `https://swanecreative.no`.
- Hvem som formelt mottar provisjon: Min Egen Sjef eller Swane Creative. Det avgjør ordlyden i affiliate-teksten i footeren.
- Om «bygget nettsider og jobbet med affiliate marketing siden 2014» i Om-signaturen stemmer. Det dokumenterte er WA-medlemskap fra 2014 og regnskap fra 2016.
- WA-påstandene på forsiden er ikke kontrollert mot WA. Det gjelder de fire egenskapene og at plattformen bygges på nytt.
- Fjellbildet er bare 750×562 px. En original i høyere oppløsning ville gjort heroen skarpere.

## Neste fase

Neste fase skal bygge på Andreas' gjennomgang av Wealthy Affiliates nye kurs. Det er den som skal gi innholdet til WA-huben, WA-anmeldelsen og guidene. Ikke skriv WA-innhold eller påstander om plattformen før gjennomgangen finnes.

## Praktisk

- Dev-server: `npm run dev` (port 3000). `.claude/launch.json` er ignorert i git.
- Kontroller før commit: `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- `AGENTS.md`: Next.js 16 avviker fra eldre versjoner. Les dokumentasjonen i `node_modules/next/dist/docs/` før du skriver ny kode.
