import Link from "next/link";

type Milestone = {
  key: string;
  heading: string;
  dateTime?: string;
  label: string;
  state: "past" | "now" | "next";
};

const milestones: Milestone[] = [
  {
    key: "2014",
    heading: "2014",
    dateTime: "2014",
    label: "Første prosjekt",
    state: "past",
  },
  {
    key: "2026",
    heading: "2026",
    dateTime: "2026",
    label: "Begynner på nytt",
    state: "now",
  },
  {
    key: "neste",
    heading: "Nytt prosjekt",
    label: "Bygges fra bunnen av",
    state: "next",
  },
];

const dotClass: Record<Milestone["state"], string> = {
  past: "bg-subtle",
  now: "bg-accent",
  next: "border border-accent-soft bg-bg-alt",
};

export function WaJourney() {
  return (
    <section aria-labelledby="wa-tittel" className="py-4 sm:py-8 lg:py-10">
      <div className="container-page">
        {/* Eget panel innenfor innholdsbredden: svak blå kant og tone, ingen glow eller SaaS-gradient. */}
        <div className="relative overflow-hidden rounded-lg border border-line-accent bg-bg-alt px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 -right-40 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_245/0.1),transparent)]"
          />

          {/* Mobil: tekst, tidslinje, så sekundærtekst og lenke. Fra lg ligger tidslinjen til høyre. */}
          <div className="relative grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:gap-y-8">
            <div className="lg:col-span-7 lg:row-start-1">
              <p className="eyebrow">Wealthy Affiliate · siden 2014</p>
              <h2
                id="wa-tittel"
                className="mt-6 text-chapter font-bold text-balance"
              >
                12 år senere tar jeg opplæringen på nytt.
              </h2>

              <p className="mt-8 max-w-lead text-lead text-muted">
                Jeg ble medlem av Wealthy Affiliate i 2014. Det første
                prosjektet jeg bygget gjennom opplæringen, var en enkel Amazon
                Associates-side om sportsgadgets for det amerikanske markedet.
                Der tjente jeg mine første affiliate-dollar. Den gangen kom
                provisjonen som sjekker i posten, og jeg måtte i banken for å
                løse dem inn.
              </p>
              <p className="mt-5 max-w-lead text-base leading-relaxed text-muted">
                Mye har endret seg siden. Nå moderniserer Wealthy Affiliate
                plattformen og opplæringen, og derfor går jeg gjennom hele
                løpet på nytt. Underveis dokumenterer jeg hva som fortsatt
                fungerer, hva som er nytt og hvordan jeg ville gjort det i Norge
                i 2026.
              </p>
              <p className="mt-5 max-w-lead text-base leading-relaxed text-muted">
                Denne gangen bygger jeg også et nytt nettsted fra bunnen av mens
                jeg følger opplæringen. Hvilket det blir, bestemmer jeg først
                når jeg kommer til nisjevalget.
              </p>
            </div>

            {/* Tidslinje: vannrett spor under lg, loddrett skinne fra lg. Punktene viser fortid, nå og neste. */}
            <ol
              aria-label="Min vei med Wealthy Affiliate"
              className="grid grid-cols-3 gap-4 sm:gap-8 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:gap-0 lg:self-center"
            >
              {milestones.map((m) => (
                <li
                  key={m.key}
                  className="relative border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pb-12 lg:pl-8 lg:last:border-l-transparent lg:last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -top-[5px] left-0 size-2.5 rounded-full lg:top-2 lg:-left-[5px] ${dotClass[m.state]}`}
                  />
                  {m.dateTime ? (
                    <time
                      dateTime={m.dateTime}
                      className={`block text-numeral font-bold ${m.state === "now" ? "text-accent-soft" : "text-subtle"}`}
                    >
                      {m.heading}
                    </time>
                  ) : (
                    <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase lg:pt-1">
                      {m.heading}
                    </p>
                  )}
                  <p
                    className={`mt-2 text-sm leading-snug ${m.state === "now" ? "text-muted" : "text-subtle"}`}
                  >
                    {m.label}
                  </p>
                </li>
              ))}
            </ol>

            <div className="lg:col-span-7 lg:row-start-2">
              <p className="max-w-lead text-sm leading-relaxed text-subtle">
                Ingen snarvei. Ingen løfter om raske penger. Bare læring,
                testing og arbeid over tid.
              </p>

              <Link
                href="/wealthy-affiliate/"
                className="group mt-8 inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
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
      </div>
    </section>
  );
}
