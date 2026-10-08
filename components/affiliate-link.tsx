import type { ReactNode } from "react";
import { getAffiliateLink } from "@/lib/affiliate-links";

/**
 * Kommersiell lenke via /go/<slug>/. Alltid rel="sponsored nofollow".
 * data-aff-* leses av klikksporingen (affiliate_click) – ingen mål-URL sendes.
 * Vanlig <a>, ikke next/link, så /go/-ruten aldri forhåndslastes.
 */
export function AffiliateLink({
  slug,
  placement,
  className,
  children,
}: {
  slug: string;
  placement: string;
  className?: string;
  children: ReactNode;
}) {
  const link = getAffiliateLink(slug);
  if (!link) {
    throw new Error(`Ukjent affiliatelenke: ${slug}. Legg den inn i lib/affiliate-links.ts.`);
  }

  return (
    <a
      href={`/go/${link.slug}/`}
      rel="sponsored nofollow"
      data-aff-slug={link.slug}
      data-aff-partner={link.partner}
      data-aff-placement={placement}
      className={className}
    >
      {children}
    </a>
  );
}
