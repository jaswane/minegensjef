import Link from "next/link";
import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";

/** Felles topp for undersider: brødsmuler, eyebrow, H1 og ingress. */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="container-page pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
        <nav aria-label="Brødsmuler">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-subtle">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-x-2">
                  {last ? (
                    <span aria-current="page" className="text-muted">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.path} className="transition-colors duration-(--duration-fast) hover:text-text">
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {eyebrow ? <p className="eyebrow mt-10 sm:mt-12">{eyebrow}</p> : null}
        <h1
          className={`${eyebrow ? "mt-5" : "mt-10 sm:mt-12"} max-w-4xl text-chapter font-bold text-balance`}
        >
          {title}
        </h1>
        {lead ? <p className="mt-6 max-w-lead text-lead text-muted sm:mt-8">{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
