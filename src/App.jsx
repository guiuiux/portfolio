import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import i18n from "./i18n";
import Home from "./pages/[lang]/home";

function App() {
  const { lang } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Detect language from the URL and update i18next
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // Redirect to /en or /pt if the URL is "/"
    if (!lang) {
      const defaultLang = i18n.language.startsWith("pt") ? "pt" : "en";
      window.location.replace(`/${defaultLang}`);
    }
  }, [lang, location]);

  return (
    <Routes>
      {/* Language-specific routes */}
      <Route path="/:lang" element={<Home />} />

      {/* Catch-all for 404 */}
      <Route
        path="*"
        element={
          <div className="flex h-screen w-screen items-center gap-4 justify-center">
            <span className="text-5xl font-whyteinktrap font-bold">404</span>
            <span className="text-zinc-400">Page Not Found</span>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
