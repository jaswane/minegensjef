import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { AffiliateLink } from "@/components/affiliate-link";

/**
 * Lenker i Markdown håndteres automatisk:
 * - /go/<slug>/ blir en merket affiliatelenke med rel="sponsored nofollow"
 * - interne lenker bruker next/link
 * - eksterne lenker blir vanlige lenker
 */
function SmartLink({ href = "", children, ...rest }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/go/")) {
    const slug = href.replace(/^\/go\//, "").replace(/\/$/, "");
    return (
      <AffiliateLink slug={slug} placement="article_body">
        {children}
      </AffiliateLink>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

/** Kort merknad i teksten, f.eks. «Slik så jeg på dette i 2016». */
function Note({ children }: { children: ReactNode }) {
  return <aside className="border-l-2 border-accent pl-5 text-text">{children}</aside>;
}

const components: MDXComponents = {
  a: SmartLink,
  AffiliateLink,
  Note,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
