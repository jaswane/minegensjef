import Image from "next/image";
import Link from "next/link";
import minegensjefSymbol from "@/assets/minegensjef-symbol.png";
import { footerNav, legalNav, type NavItem } from "@/lib/navigation";

function FooterLinks({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <nav aria-label={label}>
      <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">
        {label}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted transition-colors duration-(--duration-fast) hover:text-text"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Kontakt-e-post skal kun vises på /kontakt/ (PRD §18), ikke her.
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="container-page pt-14 pb-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[1.0625rem] font-bold tracking-[-0.02em] text-text"
            >
              {/* Dekorativt: navnet står som tekst ved siden av. */}
              <Image
                src={minegensjefSymbol}
                alt=""
                width={35}
                height={24}
                className="h-6 w-auto opacity-80"
              />
              Min Egen Sjef
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-subtle">
              Enkelte lenker på siden er annonselenker (affiliatelenker). Kjøper
              du noe eller registrerer deg via en slik lenke, kan Min Egen Sjef
              få provisjon. Det koster deg ikke noe ekstra.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <FooterLinks label="Sider" items={footerNav} />
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <FooterLinks label="Juridisk" items={legalNav} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p>© 2026 Min Egen Sjef</p>
          <p>
            Et prosjekt fra{" "}
            <a
              href="https://swanecreative.no"
              className="transition-colors duration-(--duration-fast) hover:text-text"
            >
              Swane Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
