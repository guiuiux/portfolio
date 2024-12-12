export const trackPageView = (url) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true" && window.gtag) {
    window.gtag("config", "G-023QHSV59T", {
      page_path: url,
    });
  } else {
    console.warn("Analytics is disabled in this environment");
  }
};

export const trackEvent = ({ action, category, label }) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  } else {
    console.warn(
      `Analytics is disabled. Event: ${action}, Category: ${category}, Label: ${label}`,
    );
  }
};
