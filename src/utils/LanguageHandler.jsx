import { useEffect } from "react";
import { useLocation, useParams, Navigate } from "react-router-dom";
import { trackPageView } from "./analytics"; // Adjusted path
import i18n from "i18next";
import App from "../App";

const LanguageHandler = () => {
  const { lang } = useParams();
  const location = useLocation();

  // Ensure lang matches supported languages
  const supportedLangs = ["en", "pt"];
  const fallbackLang = i18n.language.startsWith("pt") ? "pt" : "en";
  const isLangSupported = supportedLangs.includes(lang);

  // Update i18n language
  useEffect(() => {
    if (isLangSupported && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, isLangSupported]);

  // Track page views on location change
  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location]);

  // Pass lang to the app
  return isLangSupported ? (
    <App lang={lang} />
  ) : (
    <Navigate to={`/${fallbackLang}/home`} replace />
  );
};

export default LanguageHandler;
