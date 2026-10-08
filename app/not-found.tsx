import type { Metadata } from "next";
import Link from "next/link";

// Next.js legger selv inn noindex på 404-svar.
export const metadata: Metadata = {
  title: "Fant ikke siden",
};

const links = [
  { href: "/", label: "Forsiden" },
  { href: "/start/", label: "Start her" },
  { href: "/artikler/", label: "Artikler" },
];

export default function NotFound() {
  return (
    <main id="innhold">
      <div className="container-page py-20 lg:py-32">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 max-w-3xl text-chapter font-bold text-balance">Fant ikke siden</h1>
        <p className="mt-6 max-w-lead text-lead text-muted">
          Siden finnes ikke, eller den er flyttet. Min Egen Sjef er bygget på nytt, og noen eldre artikler er
          ennå ikke flyttet over.
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 border-b border-accent-soft/40 pb-1 text-base font-semibold text-accent-soft transition-colors duration-(--duration-fast) hover:border-accent-soft hover:text-text"
              >
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
