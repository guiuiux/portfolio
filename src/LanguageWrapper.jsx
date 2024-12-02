import { Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import i18n from "./i18n";

const LanguageWrapper = () => {
  const location = useLocation();
  const { lang } = useParams();

  const supportedLangs = ["en", "pt"];
  const defaultLang = i18n.language.startsWith("pt") ? "pt" : "en";

  // Check if `lang` is valid
  if (!supportedLangs.includes(lang)) {
    const cleanPath = location.pathname.replace(/^(\/[^/]+)?/, ""); // Remove the first segment
    return <Navigate to={`/${defaultLang}${cleanPath}`} replace />;
  }

  // Sync i18n language
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  return <Outlet />;
};

export default LanguageWrapper;
