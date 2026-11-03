/** Felles merknad for historiske innlegg (`historical: true` i artikkelens metadata). */
export function HistoricalNote({ year }: { year: string }) {
  return (
    <aside
      aria-label="Historisk innlegg"
      className="mb-10 max-w-reading rounded-sm border border-line px-4 py-3 text-sm leading-relaxed text-subtle"
    >
      <span className="font-semibold text-muted">Historisk innlegg.</span> Opprinnelig publisert i {year} og bevart
      som en del av historien til Min Egen Sjef. Enkelte tjenester, priser og metoder kan ha endret seg siden den
      gang.
    </aside>
  );
}

/** Lite merke for historiske innlegg i artikkellister. */
export function HistoricalBadge() {
  return (
    <span className="ml-2 inline-block rounded-sm border border-line px-1.5 py-px align-[0.1em] text-[0.7rem] font-semibold tracking-[0.08em] text-subtle uppercase">
      Historisk
    </span>
  );
}
