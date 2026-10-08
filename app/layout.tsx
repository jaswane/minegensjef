import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { robotsFor } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const HOME_TITLE = "Min Egen Sjef – bygg en digital ekstrainntekt uten hype";
const HOME_DESCRIPTION =
  "Lær å finne en nisje, bygge noe nyttig, få trafikk og tjene penger på nett over tid – ved siden av jobb og vanlig liv.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s – ${SITE_NAME}` },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  // noindex på hele nettstedet til SITE_INDEXABLE=true settes ved lansering.
  robots: robotsFor(true),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: SITE_NAME,
    url: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#060a14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-dvh">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Hopp til innhold
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
