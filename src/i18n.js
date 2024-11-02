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
    fallbackLng: "pt",
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0, // Detect language from the URL path
      caches: ["localStorage"], // Cache the detected language
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
