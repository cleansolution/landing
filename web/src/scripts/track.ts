declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Sends a GA4 event when gtag is loaded; otherwise queues it on dataLayer (harmless no-op). */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
  else (window.dataLayer ||= []).push({ event, ...params });
}
