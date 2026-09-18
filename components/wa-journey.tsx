import Link from "next/link";

const platformParts = [
  "Steg-for-steg-opplæring",
  "Verktøy for research og innhold",
  "Internasjonalt fellesskap",
  "Videre læring",
];

export function WaJourney() {
  return (
    <section
      aria-labelledby="wa-tittel"
      className="border-y border-line bg-bg-alt py-section"
    >
      <div className="container-page">
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Wealthy Affiliate · siden 2014</p>
            <h2
              id="wa-tittel"
              className="mt-6 text-chapter font-bold text-balance"
            >
              <span className="sm:block">12 år senere </span>
              <span className="sm:block">begynner jeg på nytt.</span>
            </h2>
            <p className="mt-8 max-w-lead text-lead text-muted">
              Jeg ble medlem av Wealthy Affiliate i 2014. Nå bygger de
              plattformen og opplæringen på nytt for en ny tid. Derfor går jeg
              gjennom hele reisen igjen – og oppdaterer Min Egen Sjef underveis.
            </p>
          </div>

          {/* Tidsreisen: vannrett under lg, loddrett fra lg. Ingen ramme eller flate. */}
          <ol
            aria-label="Min tid i Wealthy Affiliate"
            className="flex items-start lg:col-span-5 lg:col-start-9 lg:block lg:pt-4"
          >
            <li className="flex min-w-0 flex-1 flex-col lg:block">
              <div className="flex items-center gap-4 sm:gap-6 lg:block">
                <time
                  dateTime="2014"
                  className="block text-numeral font-bold text-subtle"
                >
                  2014
                </time>
                <span
                  aria-hidden="true"
                  className="flex min-w-6 flex-1 items-center lg:hidden"
                >
                  <span className="h-px flex-1 bg-linear-to-r from-line-strong to-accent" />
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-ml-px shrink-0 text-accent"
                  >
                    <path d="M1.5 1.5 6 6l-4.5 4.5" />
                  </svg>
                </span>
              </div>
              <span className="mt-2 block text-sm text-subtle">Ble medlem</span>
            </li>
            <li aria-hidden="true" className="hidden py-8 lg:flex">
              <span className="flex flex-col items-center">
                <span className="h-24 w-px bg-linear-to-b from-line-strong to-accent" />
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-mt-px text-accent"
                >
                  <path d="M1.5 1.5 6 6l4.5-4.5" />
                </svg>
              </span>
            </li>
            <li className="flex flex-col items-end pl-4 text-right sm:pl-6 lg:block lg:pl-0 lg:text-left">
              <time
                dateTime="2026"
                className="block text-numeral font-bold text-accent-soft"
              >
                2026
              </time>
              <span className="mt-2 block text-sm text-muted">
                Begynner på nytt
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-line pt-10 lg:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-lead text-base leading-relaxed text-muted">
              For meg har Wealthy Affiliate vært et strukturert sted å lære
              affiliate marketing og bygge nettsider.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-subtle">
              {platformParts.map((part, index) => (
                <li key={part} className="flex gap-x-3">
                  {part}
                  {index < platformParts.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lead text-base leading-relaxed text-muted">
              Det er ingen snarvei til inntekt. Plattformen gir struktur, men
              arbeidet, testingen og tålmodigheten må du stå for selv.
            </p>
            <Link
              href="/wealthy-affiliate/"
              className="group mt-7 inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
            >
              Følg WA-reisen
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
                className="transition-transform duration-(--duration-fast) ease-out-soft group-hover:translate-x-0.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
