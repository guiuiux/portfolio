import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    language: "pt-br",
    fallbackLng: "pt-br",
    debug: import.meta.env.MODE === "development",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/pt-BR/{{ns}}.json", // caminho HTTP para os arquivos JSON no public
    },
    react: { useSuspense: true },
  });

export default i18n;
