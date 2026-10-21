const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string;
let trackingEnabled = false;

export function initGA(): void {
  if (!GA_ID) return console.warn("GA_ID não definido");

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]): void {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID);

  trackingEnabled = true;
}

export function initClarity(): void {
  if (!CLARITY_ID) return console.warn("CLARITY_ID não definido");

  type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
  const clarity: ClarityFn =
    (window.clarity as ClarityFn | undefined) ??
    function (...args: unknown[]) {
      (clarity.q = clarity.q || []).push(args);
    };
  window.clarity = clarity;

  const t = document.createElement("script");
  t.async = true;
  t.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  const y = document.getElementsByTagName("script")[0];
  y?.parentNode?.insertBefore(t, y);
}

export const sendEvent = (
  name: string,
  params?: Record<string, unknown>
): void => {
  if (!trackingEnabled || typeof window.gtag !== "function") return;
  window.gtag("event", name, params || {});
};
