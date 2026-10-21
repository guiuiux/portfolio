import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import pt from "./locales/pt-br/translation.json";

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt", // força PT sempre
    fallbackLng: "pt", // fallback coerente
    debug: import.meta.env.MODE === "development",
    interpolation: { escapeValue: false },
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
  });

export default i18n;
