import Link from "next/link";

// `href` peker midlertidig til ankrene på /guider/ til guidene er publisert.
// `plannedHref` er den endelige ruten. Bytt `href` til den når guiden finnes.
const guides = [
  {
    category: "Nisje",
    title: "Slik finner du en nisje du faktisk orker å jobbe med",
    href: "/guider/#nisje",
    plannedHref: "/guider/finne-nisje/",
    context: "Del av nisje-huben",
  },
  {
    category: "Nettsider",
    title: "Slik bygger du en nettside i 2026",
    href: "/guider/#nettside",
    plannedHref: "/guider/bygge-nettside/",
    context: "Del av nettsider-huben",
  },
  {
    category: "SEO og trafikk",
    title: "Slik får en ny nettside trafikk fra Google og AI-søk",
    href: "/guider/#trafikk",
    plannedHref: "/guider/trafikk-fra-google-og-ai-sok/",
    context: "Del av SEO-huben",
  },
];

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function GuidesIndex() {
  return (
    <section
      aria-labelledby="guider-tittel"
      className="border-t border-line py-section"
    >
      <div className="container-page">
        <p className="eyebrow">Guider og artikler</p>
        <h2 id="guider-tittel" className="mt-5 text-h2 font-bold text-balance">
          Guider som tar deg et steg videre
        </h2>

        {/* Innholdsfortegnelse: hele raden er klikkbar via lenken i tittelen. */}
        <ul className="mt-12 border-b border-line lg:mt-16">
          {guides.map((guide) => (
            <li
              key={guide.href}
              className="group relative border-t border-line py-8 lg:py-12"
            >
              <div className="lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-10">
                <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase lg:col-span-3">
                  {guide.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-balance lg:col-span-6 lg:mt-0 lg:text-[2rem] xl:text-4xl">
                  <Link
                    href={guide.href}
                    className="transition-colors duration-(--duration-fast) after:absolute after:inset-0 group-hover:text-accent-soft"
                  >
                    {guide.title}
                  </Link>
                </h3>

                <p className="mt-4 flex items-center gap-3 text-sm text-subtle lg:col-span-3 lg:mt-0 lg:justify-end">
                  {guide.context}
                  <Arrow className="shrink-0 text-accent-soft opacity-50 transition-opacity duration-(--duration-fast) group-hover:opacity-100" />
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 lg:flex lg:justify-end">
          <Link
            href="/guider/"
            className="group inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
          >
            Alle guider
            <Arrow className="transition-transform duration-(--duration-fast) ease-out-soft group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
