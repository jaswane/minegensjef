/**
 * Google Analytics 4 med Consent Mode v2 (basic): taggen lastes først etter at
 * brukeren har godtatt analyse, og consent-standarden settes til «denied» før
 * skriptet lastes. Uten samtykke sendes ingen forespørsler til Google.
 *
 * Måle-ID-en hentes fra NEXT_PUBLIC_GA_ID. Er den ikke satt, er hele
 * analyselaget av, og samtykkebanneret vises ikke. ID-en for GA4-propertyen
 * «Min egen sjef - GA4» er ikke dokumentert ennå (se docs/STATUS.md).
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CONSENT_STORAGE_KEY = "minegensjef_analytics_consent_v1";

export type AnalyticsConsent = "accepted" | "rejected";

type GtagFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}

export function isAnalyticsConfigured(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}

export function readConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(consent: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Lagring kan være blokkert. Da spør vi igjen neste gang.
  }
}

function canSend(): boolean {
  return (
    typeof window !== "undefined" &&
    isAnalyticsConfigured() &&
    readConsent() === "accepted" &&
    typeof window.gtag === "function"
  );
}

function pushArguments(): void {
  window.dataLayer = window.dataLayer ?? [];
  // gtag.js leser bare `arguments`-objekter fra dataLayer, som i Googles egen snutt.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}
const gtag = pushArguments as GtagFunction;

function setOptOut(disabled: boolean): void {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

/** Laster gtag.js etter samtykke. Gjør ingenting andre gang. */
export function loadAnalytics(): void {
  if (typeof window === "undefined" || !isAnalyticsConfigured()) return;
  setOptOut(false);
  if (document.getElementById("ga-gtag")) {
    gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.id = "ga-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/** Stopper analyse etter avslag: opt-out-flagg, samtykke trekkes, GA-cookies slettes. */
export function disableAnalytics(): void {
  if (typeof window === "undefined" || !isAnalyticsConfigured()) return;
  setOptOut(true);
  if (typeof window.gtag === "function") {
    try {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    } catch {
      // Ignoreres.
    }
  }
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid");
  const host = window.location.hostname;
  const domains = [undefined, host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export function trackPageView(): void {
  if (!canSend()) return;
  try {
    window.gtag!("event", "page_view", { page_location: window.location.href, page_title: document.title });
  } catch {
    // Analyse skal aldri stoppe siden.
  }
}

/**
 * affiliate_click: partner, plassering og /go/-slug. Mål-URL-en sendes bevisst
 * ikke, bare offentlige verdier fra lenkens data-aff-*-attributter.
 */
export function trackAffiliateClick(params: { partner: string; placement: string; link_slug: string }): void {
  if (!canSend()) return;
  try {
    window.gtag!("event", "affiliate_click", params);
  } catch {
    // Se trackPageView.
  }
}

/** Én delegert lytter for alle /go/-lenker. Gjør aldri preventDefault. */
export function installAffiliateClickTracking(): () => void {
  function onClick(event: MouseEvent) {
    if (event.type === "click" && event.button !== 0) return;
    if (event.type === "auxclick" && event.button !== 1) return;
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href^="/go/"]');
    if (!link) return;
    trackAffiliateClick({
      partner: link.dataset.affPartner ?? "unknown",
      placement: link.dataset.affPlacement ?? "unknown",
      link_slug: link.dataset.affSlug ?? "unknown",
    });
  }
  document.addEventListener("click", onClick, true);
  document.addEventListener("auxclick", onClick, true);
  return () => {
    document.removeEventListener("click", onClick, true);
    document.removeEventListener("auxclick", onClick, true);
  };
}
