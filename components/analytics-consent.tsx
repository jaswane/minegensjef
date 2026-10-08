"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  disableAnalytics,
  installAffiliateClickTracking,
  isAnalyticsConfigured,
  loadAnalytics,
  readConsent,
  trackPageView,
  writeConsent,
  type AnalyticsConsent as Consent,
} from "@/lib/analytics";

const OPEN_EVENT = "minegensjef:open-consent";
const CHANGE_EVENT = "minegensjef:consent-change";

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

const noSubscription = () => () => {};

/**
 * Samtykkebanner og lasting av GA4. Vises bare når en måle-ID er satt.
 * Avslå og Godta er like store, så det er like lett å si nei som ja.
 */
export function AnalyticsConsent() {
  const consent = useSyncExternalStore<Consent | null>(subscribe, readConsent, () => null);
  const hydrated = useSyncExternalStore(
    noSubscription,
    () => true,
    () => false,
  );
  const [reopened, setReopened] = useState(false);
  const pathname = usePathname();
  const trackedPath = useRef<string | null>(null);

  useEffect(() => installAffiliateClickTracking(), []);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  // Én page_view per sidevisning, også ved navigasjon i appen.
  useEffect(() => {
    if (consent !== "accepted") return;
    loadAnalytics();
    if (trackedPath.current === pathname) return;
    trackedPath.current = pathname;
    trackPageView();
  }, [consent, pathname]);

  if (!isAnalyticsConfigured()) return null;
  const open = reopened || (hydrated && consent === null);
  if (!open) return null;

  function choose(next: Consent) {
    if (next === "rejected" && consent === "accepted") disableAnalytics();
    writeConsent(next);
    setReopened(false);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <div
      role="region"
      aria-labelledby="samtykke-tekst"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-md border border-line-strong bg-surface p-5 shadow-[0_20px_60px_-20px_rgb(0_0_0/0.8)] sm:p-6"
    >
      <p id="samtykke-tekst" className="text-sm leading-relaxed text-muted">
        Vi bruker Google Analytics for å se hvilke sider som blir lest. Analyse slås bare på hvis du sier ja.{" "}
        <Link href="/personvern/" className="text-accent-soft underline underline-offset-2 hover:text-text">
          Les om personvern
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:justify-end">
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="h-11 rounded-sm border border-line-strong px-5 text-sm font-semibold text-text transition-colors duration-(--duration-fast) hover:border-accent-soft"
        >
          Avslå
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="h-11 rounded-sm bg-accent px-5 text-sm font-semibold text-white transition-colors duration-(--duration-fast) hover:bg-accent-hover"
        >
          Godta analyse
        </button>
      </div>
    </div>
  );
}

/** Footer-knapp som åpner samtykkevalget igjen. Knapp, fordi den åpner UI og ikke navigerer. */
export function ConsentSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Endre analysevalg
    </button>
  );
}
