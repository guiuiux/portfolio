import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import pt from "./locales/pt-br/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-br",
    debug: import.meta.env.MODE === "development",
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
  });

export default i18n;
