import Image from "next/image";
import Link from "next/link";
import ebutikkerHomepage from "@/assets/ebutikker-homepage.png";

export function EbutikkerCase() {
  return (
    <section aria-labelledby="case-tittel" className="py-section">
      {/* Mobil: overskrift, ingress, bilde, utdyping, lenke. Fra lg ligger bildet til venstre. */}
      <div className="container-page grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-y-6">
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <p className="eyebrow">Et ekte eksempel</p>
          <h2 id="case-tittel" className="mt-6 text-h2 font-bold text-balance">
            eButikker.no begynte mye mindre enn dette.
          </h2>
          <p className="mt-7 max-w-lead text-lead text-muted">
            Det som i dag er en stor nettside startet som et lite prosjekt.
            Poenget er ikke at du skal bygge det samme – men at noe nyttig kan
            få vokse over tid.
          </p>
        </div>

        <figure className="max-w-2xl lg:max-w-none lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          {/* Ekte skjermbilde, egne farger. Kun en tynn kant så den lyse flaten sitter på mørk bakgrunn. */}
          <div className="overflow-hidden rounded-md ring-1 ring-line-strong">
            <Image
              src={ebutikkerHomepage}
              alt="Forsiden til eButikker.no med logo, overskriften «Din venn for trygg og smart netthandel i 2026», søkefelt og kategorier som Topp 10 klesbutikker og Topp 10 elektronikk."
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) 42rem, 100vw"
              className="aspect-[5/4] h-auto w-full object-cover object-top sm:aspect-[16/10]"
            />
          </div>
          <figcaption className="mt-5 flex items-center gap-4 text-sm text-subtle">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
            Et eksempel, ikke en oppskrift
          </figcaption>
        </figure>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <p className="max-w-lead text-base leading-relaxed text-muted">
            Siden har eksistert i mange år, og det er der jeg har lært mest om
            innhold, søk og hva folk faktisk leter etter. Den har gitt reelle
            inntekter, men ingenting av det kom på plass på én gang.
          </p>

          <Link
            href="/case/ebutikker/"
            className="group mt-9 inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
          >
            Les historien
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
    </section>
  );
}
