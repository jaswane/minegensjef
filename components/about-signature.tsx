import Link from "next/link";

// Kort signatur før footer – bevisst mindre enn en hovedseksjon.
export function AboutSignature() {
  return (
    <section aria-labelledby="om-tittel" className="pb-section">
      <div className="container-page">
        <div className="border-t border-line pt-14 lg:grid lg:grid-cols-12 lg:gap-10 lg:pt-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">Bak Min Egen Sjef</p>
            <h2
              id="om-tittel"
              className="mt-4 text-2xl font-semibold tracking-[-0.02em] lg:text-3xl"
            >
              Hei, jeg heter Andreas.
            </h2>
          </div>

          <div className="mt-6 lg:col-span-6 lg:col-start-6 lg:mt-0 lg:pt-8">
            <p className="max-w-lead text-base leading-relaxed text-muted">
              Jeg har bygget nettsider og jobbet med affiliate marketing siden
              2014. Her deler jeg det jeg lærer underveis: det som fungerer, det
              som ikke gjør det, og det jeg ville gjort annerledes i dag.
            </p>
            <Link
              href="/om/"
              className="group mt-6 inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
            >
              Mer om meg
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
