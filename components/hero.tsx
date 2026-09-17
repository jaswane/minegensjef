import Image from "next/image";
import Link from "next/link";
import andreasFjell from "@/assets/andreas-fjell.png";

const proofPoints = [
  { value: "12+ år", label: "erfaring, siden 2014" },
  { value: "2,3 mill.+ kr", label: "dokumentert resultat 2016–2025" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-tittel"
      className="relative overflow-hidden border-b border-line"
    >
      {/* Én dempet lyskilde bak bildet – ingen annen glow i hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-20rem] size-[48rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_245/0.22),transparent)] lg:right-[-8rem]"
      />

      <div className="container-page relative grid items-center gap-14 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="eyebrow">Digital ekstrainntekt · Affiliate · SEO</p>

          <h1
            id="hero-tittel"
            className="mt-6 text-display font-bold text-balance sm:mt-7"
          >
            Bygg en digital ekstrainntekt.{" "}
            <span className="text-accent-soft">Uten hype.</span>
          </h1>

          <p className="mt-6 max-w-lead text-lead text-muted sm:mt-8">
            Dette handler ikke om raske penger. Lær å finne noe du liker, bygge
            noe som hjelper andre og utvikle det over tid – ved siden av jobb og
            vanlig liv.
          </p>

          <div className="mt-9 sm:mt-10">
            <Link
              href="/start/"
              className="group inline-flex h-13 items-center gap-3 rounded-sm bg-accent px-7 text-base font-semibold text-white transition-[background-color,box-shadow] duration-(--duration-fast) hover:bg-accent-hover hover:shadow-[0_0_0_4px_rgb(37_99_245/0.18)]"
            >
              Kom i gang
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

          <ul className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-7 sm:mt-14 sm:flex sm:gap-12">
            {proofPoints.map((point) => (
              <li key={point.value} className="flex flex-col gap-1">
                <span className="text-xl font-semibold tracking-[-0.02em] text-text">
                  {point.value}
                </span>
                <span className="text-sm text-subtle">{point.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative w-full max-w-2xl lg:col-span-5 lg:max-w-none">
          {/* Bildet tones mot navy og løses opp nederst i bakgrunnen i stedet for å stå som et kort. */}
          <div className="relative overflow-hidden rounded-md mask-b-from-62% mask-b-to-100%">
            <Image
              src={andreasFjell}
              alt="Andreas sitter på en fjellknaus og ser utover et vidt fjellandskap."
              placeholder="blur"
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 42rem, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/10] object-[70%_50%] brightness-[.92] saturate-[.85] lg:aspect-[5/6]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#0b1a3d]/25 mix-blend-multiply"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-bg/45 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-md ring-1 ring-white/[0.07] ring-inset"
            />
          </div>
          <figcaption className="absolute bottom-3 left-5 text-sm text-muted sm:bottom-4 sm:left-6">
            <span className="font-semibold text-text">Andreas</span>, som står
            bak Min Egen Sjef
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
