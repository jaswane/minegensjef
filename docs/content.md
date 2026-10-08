# Innhold – slik er artiklene bygget

## Valgt løsning: MDX-filer i Git

Hver artikkel er én fil i `content/artikler/<slug>.mdx`. Filnavnet er URL-en: `hva-er-seo.mdx` blir `/hva-er-seo/`.

**Hvorfor MDX:**

- **Ingen CMS.** Innholdet redigeres og versjoneres i Git, som resten av prosjektet.
- **Markdown for teksten**, med mulighet for komponenter der vi trenger dem, for eksempel affiliatelenker med riktig merking.
- **Offisielt støttet i Next.js** (`@next/mdx`). Fire små pakker, ingen database eller byggesteg utenfor Next.
- **PRD §14** foreslo lokal Markdown/MDX for MVP.

**Hvorfor artikler på rotnivå:** De gamle WordPress-adressene ligger på `/<slug>/`. Ved å bruke samme mønster beholder migrerte artikler URL-en sin uten redirect. Huben en artikkel hører til, styres av metadata, ikke av URL-en (se `docs/migration/url-inventory.md`).

## Legge inn en artikkel

Lag `content/artikler/<slug>.mdx`:

```mdx
export const metadata = {
  title: "Hva er SEO?",
  description: "Én til to setninger som brukes i søkeresultater og lister.",
  published: "2016-03-15",
  updated: "2026-11-02",
  hub: "seo",
  related: ["gode-verktoy-for-sokeordsanalyse"],
  affiliate: false,
}

Ingressen er første avsnitt.

## Første mellomtittel
```

| Felt | Påkrevd | Betydning |
|---|---|---|
| `title` | ja | H1 og `<title>` |
| `description` | ja | Ingress, meta description og lister |
| `published` | ja | Opprinnelig publiseringsdato, ÅÅÅÅ-MM-DD. **Bevar WordPress-datoen ved migrering.** |
| `updated` | nei | Settes **bare** når artikkelen faktisk er skrevet om |
| `hub` | nei | `wealthy-affiliate`, `affiliate`, `seo`, `nettsider`, `ai` eller `nisje` |
| `related` | nei | Slugger til relaterte artikler. Upubliserte hoppes over |
| `affiliate` | nei | `true` viser annonsemerking øverst |
| `draft` | nei | `true` viser artikkelen bare i `npm run dev` |

Bygget stopper med en tydelig feilmelding hvis et påkrevd felt mangler eller en dato har feil format.

## Lenker

- **Affiliatelenker:** skriv `[Wealthy Affiliate](/go/wealthy-affiliate/)`. Lenken får automatisk `rel="sponsored nofollow"` og sporing. Slugen må finnes i `lib/affiliate-links.ts`, ellers stopper bygget.
- **Interne lenker:** vanlige Markdown-lenker til `/sti/`.
- **Merknad:** `<Note>Slik så jeg på dette i 2016.</Note>`

## Hva malen gir automatisk

Brødsmuler, publisert- og oppdatert-dato, annonsemerking, «Les videre» med relaterte artikler og hub, Article-, WebPage- og BreadcrumbList-schema, canonical, Open Graph og plass i sitemap og på `/artikler/`.

`content/artikler/eksempel-artikkelmal.mdx` er et utkast som viser formatet. Det vises bare lokalt.
