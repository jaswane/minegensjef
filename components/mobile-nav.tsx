"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { NavItem } from "@/lib/navigation";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex size-11 items-center justify-center rounded-sm text-text"
      >
        <span className="sr-only">{open ? "Lukk meny" : "Åpne meny"}</span>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M5 5l12 12M17 5L5 17" />
          ) : (
            <path d="M3 7h16M3 15h16" />
          )}
        </svg>
      </button>

      <nav
        id={panelId}
        aria-label="Hovedmeny"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <ul className="container-page flex flex-col py-3">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-text"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
