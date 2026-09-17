import Link from "next/link";
import { mainNav } from "@/lib/navigation";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-header items-center justify-between gap-6">
        <Link
          href="/"
          className="text-[1.0625rem] font-bold tracking-[-0.02em] text-text"
        >
          Min Egen Sjef
        </Link>

        <nav aria-label="Hovedmeny" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm px-4 py-2 text-[0.9375rem] text-muted transition-colors duration-(--duration-fast) hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={mainNav} />
      </div>
    </header>
  );
}
