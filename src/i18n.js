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
    fallbackLng: "en",
    whitelist: ["en", "pt"], // Only allow `en` or `pt` languages
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0, // Detect language from the URL path
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng", // Cache language in localStorage
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
