# WordPress-arkiver, feeder, vedlegg og media

**Dato:** 09.10.2026
**Kilder:** WXR-eksporten 28.09.2026 og uploads-backupen (begge utenfor repoet, i `C:\_Nettsider\_backups\minegensjef\`), live WordPress (bare lesing) og GSC-data for juni 2025 til 8. oktober 2026.

Dette dokumentet gjelder URL-typene som ikke er blant de 39 publiserte sidene og innleggene i `url-inventory.md`. Den gamle taksonomien bygges ikke opp igjen.

## Grunnlag

- **GSC:** Ingen registrert trafikk på kategori-, tag-, forfatter-, feed- eller paginerings-URL-er i perioden. Bare to mediafiler dukket opp: `/wp-content/uploads/2020/11/gratis_bilder.jpg` (0 klikk, 6 visninger) og `/wp-content/uploads/2020/11/pixabay_bilder-scaled.jpg` (0 klikk, 1 visning).
- **Live WordPress:** Kategori- og tag-arkivene er satt til `noindex`, og sitemapen inneholder bare innlegg og sider. Vedleggssider sendes allerede videre til parent-artikkelen (eller forsiden), og forfatterarkivet sendes til forsiden.

## Antall gamle URL-er

| Type | Antall | Mønster |
|---|---|---|
| Kategoriarkiver | 15 | 9 kategorier (`/category/<slug>/`), pluss paginering: `blogg` 5 sider, `informasjon` 1 side (6 innlegg per side) |
| Tag-arkiver | 148 | `/tag/<slug>/`. Ingen tag har mer enn 6 innlegg, så ingen paginering |
| Forfatterarkiv | 1 | `/author/andreas/` |
| Paginering av bloggen | 3 | `/blogg/page/2/` til `/blogg/page/4/` (33 innlegg, 10 per side) |
| Paginering på rot | – | `/page/<n>/` svarer 200 for alle tall på live, fordi forsiden er en statisk side. Ikke ekte arkivsider |
| **Sum arkiver** | **167** | |
| Feeder | 203 | `/feed/` med varianter (atom, rss2, rss, rdf), `/comments/feed/`, én kommentarfeed per publisert side og innlegg (39), per kategori (9), per tag (148) og for forfatteren (1) |
| Vedleggssider | 202 | 165 på formen `/<parent>/<vedlegg>/`, 20 på formen `/<vedlegg>/` og 17 som bare har `/?attachment_id=<id>` |

## Regler (implementert)

Reglene ligger i `next.config.ts`. 410-svarene kommer fra `app/gone/route.ts` via rewrites, så den gamle adressen beholdes i nettleseren. Svaret har `X-Robots-Tag: noindex` og lenker til artiklene og forsiden.

### 301, bare der det finnes et tydelig tematisk mål

| Gammelt mønster | Mål | Hvorfor |
|---|---|---|
| `/category/blogg/` og `/category/blogg/page/<n>/` | `/artikler/` | Kategorien «Blogg» inneholdt alle 33 innleggene, altså den samme listen som `/artikler/`. Samme mål som `/blogg/` |
| `/blogg/page/<n>/` | `/artikler/` | Paginering av bloggsiden, som allerede går til `/artikler/` |
| `/author/andreas/` | `/om/` | Eneste forfatter. `/om/` handler om ham |
| 137 vedleggssider med publisert parent | parent-artikkelens endelige URL | Generert fra WXR i `lib/legacy-attachments.ts`. Er parent selv sendt videre med 301, går vedlegget direkte til det endelige målet, uten kjede |

Av de 137 vedleggssidene går 116 til en migrert artikkel, 14 til målet for en parent som har fått 301, og 7 til forsiden, fordi parent var forsiden («hjem»).

### 410

| Gammelt mønster | Hvorfor |
|---|---|
| `/category/<alt annet>/` | Den gamle taksonomien bygges ikke opp igjen, og det finnes ikke et tydelig mål for «Informasjon», «Guider», «Verktøy» osv. Arkivene var `noindex` og hadde ingen trafikk |
| `/tag/<slug>/` | Samme som over |
| `/author/<alt annet>/`, også forfatterfeeden | Ingen funksjon |
| `/page/<n>/` | Paginering av en statisk forside. Ingen funksjon |
| `/feed/` med varianter, `/comments/feed/`, `/<slug>/feed/`, og `?feed=` på forsiden | Nettstedet har ingen RSS-feed og trenger ingen nå. Feeder sendes ikke til forsiden |
| 20 vedleggssider uten publisert parent (`goneAttachmentPaths`) | Logoer, knapper og bilder som ikke hørte til noe publisert innlegg |
| `/?attachment_id=<id>` | Dekker de 17 vedleggene som bare har denne adressen. Gjelder alle id-er |

### Ikke behandlet ennå (gir 404)

- **28 vedleggssider der parent venter på beslutning:** 23 hører til de fire 410-kandidatene, og 5 til de to utsatte artiklene. De skal følge parent-artikkelens beslutning, og legges inn i `lib/legacy-attachments.ts` når den er tatt.
- **Andre spørringsadresser fra WordPress** (`?p=`, `?page_id=`, `?cat=`, `?tag=`, `?author=`, `?s=`) viser i dag forsiden, fordi spørringen ignoreres. Ingen kjent trafikk.
- **WordPress-systemadresser** (`/wp-admin/`, `/wp-login.php`, `/xmlrpc.php`, `/wp-json/`) gir 404. Det er riktig.

## Media: måling

Uploads-backupen er ikke kopiert inn i repoet.

| | Antall | Størrelse |
|---|---|---|
| Filer totalt | 3 065 | 81,7 MB |
| JPG | 2 019 | 61,2 MB |
| WebP (kopier laget av en optimaliseringsplugin, `*.jpg.webp`) | 820 | 12,2 MB |
| PNG | 200 | 7,5 MB |
| Ikke-mediefiler fra plugins (php, txt, xml, json, config) | 26 | under 1 MB |
| Vedlegg registrert i WXR | 202 | |
| Miniatyrbilder (`-<b>x<h>.`) | 1 220 | |
| Backupfiler fra plugin (`*.bk.*`) | 790 | |
| Duplikatgrupper blant ikke-miniatyrer (lik filhash) | 30 | |

**Referanser:**

- **Fra publisert WordPress-innhold:** 98 unike filer (5,9 MB). 70 av dem står i innlegg som nå er migrert, og 28 bare i innlegg som har fått 301, er 410-kandidater eller er utsatt. Alle 98 finnes i backupen.
- **Fra de 22 migrerte artiklene i 2.0:** 0. Ingen av de nye MDX-artiklene bruker gamle bilder.
- **Fra resten av repoet:** Bare dokumentasjonen nevner `wp-content/uploads`.

**De to bildene i GSC:**

| Fil | Størrelse | Brukt i | Vedleggsside |
|---|---|---|---|
| `2020/11/gratis_bilder.jpg` | 107 kB | Ikke referert i teksten i originalen, men vedlegg til `/gratis-bilder/` | `/gratis-bilder/gratis_bilder/` → 301 `/gratis-bilder/` |
| `2020/11/pixabay_bilder-scaled.jpg` | 474 kB | Skjermbilde av Pixabay i originalen av `/gratis-bilder/` | `/gratis-bilder/pixabay_bilder/` → 301 `/gratis-bilder/` |

Begge har 0 klikk og til sammen 7 visninger. Den nye `/gratis-bilder/` bruker ingen av dem.

## Media: anbefaling (ikke implementert)

**Anbefalt: B, bevar bare filer som faktisk brukes. I dag er det ingen.**

- Ikke kopier uploads-mappen inn i repoet. 81,7 MB med miniatyrer, plugin-kopier og backupfiler gir ingen nytte for de nye artiklene, og ville gjort repoet mange ganger større.
- Gamle `/wp-content/uploads/...`-adresser gir 404 i dag. Anbefalingen er én regel som gir **410** for `/wp-content/uploads/:path*`, så det er tydelig at filene er fjernet med vilje. Det krever godkjenning først.
- **De to GSC-bildene:** Med 0 klikk er det ikke verdt en egen regel. De følger samme regel som resten. Alternativet er 301 til `/gratis-bilder/` (C), men det sender en bildeforespørsel til en HTML-side og gir lite.
- **Når et gammelt bilde skal brukes igjen** i en artikkel: kopier den ene originalfilen fra backupen, optimaliser den, og legg den under en ny, beskrivende sti i `public/`. Har den gamle adressen trafikk eller lenker inn, kan den få en egen 301 til den nye filen.
- Backupen beholdes uendret utenfor repoet.

A (bevare alle gamle stier) frarådes: Ingen av filene brukes, nesten ingen har trafikk, og det ville flyttet WordPress-strukturen inn i det nye prosjektet.
