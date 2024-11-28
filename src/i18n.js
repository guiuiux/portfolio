import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: "en", // Default to English if no language is detected
    supportedLngs: ["en", "pt"], // Restrict to supported languages
    detection: {
      order: ["path", "localStorage", "navigator"], // Path has priority
      caches: ["localStorage"], // Cache language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
