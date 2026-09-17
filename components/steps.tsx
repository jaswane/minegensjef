const steps = [
  {
    title: "Finn en nisje",
    text: "Velg et tema du synes er interessant nok til å jobbe med i flere år, og der andre faktisk leter etter svar.",
  },
  {
    title: "Bygg noe nyttig",
    text: "Lag en side som løser et konkret problem for leseren. AI gjør selve byggingen raskere, men gjør ikke innholdet nyttig av seg selv.",
  },
  {
    title: "Få trafikk",
    text: "Besøk fra Google og AI-søk kommer gradvis, når sidene dine svarer bedre enn alternativene. Regn med måneder, ikke uker.",
  },
  {
    title: "Tjen penger",
    text: "Med jevn trafikk kan affiliatelenker og andre inntektskilder begynne å gi noe. Det er ingen garanti, og beløpene er ofte små i starten.",
  },
];

export function Steps() {
  return (
    <section aria-labelledby="steg-tittel" className="py-section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow">Slik fungerer det</p>
            <h2
              id="steg-tittel"
              className="mt-5 text-h2 font-bold text-balance"
            >
              Fra interesse til inntekt, i fire steg
            </h2>
          </div>
          <p className="max-w-lead text-lead text-muted lg:col-span-5">
            De tre første stegene er der det meste av arbeidet ligger. Inntekt
            kommer sist, og som regel senere enn man håper.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-line pt-7">
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-12 bg-accent"
              />
              <span className="block text-sm font-semibold tabular-nums text-accent-soft">
                <span className="sr-only">Steg </span>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
