import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Min Egen Sjef – bygg en digital sideinntekt uten hype",
  description:
    "Lær å finne en nisje, bygge noe nyttig, få trafikk og tjene penger på nett over tid – ved siden av jobb og vanlig liv.",
  // Lokal prototype: skal ikke indekseres før domeneovergangen.
  robots: { index: false, follow: false },
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
      </body>
    </html>
  );
}
