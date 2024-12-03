export const initializeAnalytics = () => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true") {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-023QHSV59T";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-023QHSV59T");
    console.log("Google Analytics initialized.");
  } else {
    console.warn("Analytics is disabled in this environment");
  }
};
