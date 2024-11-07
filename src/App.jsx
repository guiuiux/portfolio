import "./App.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import i18n from "./i18n";
import Home from "./pages/[lang]/home"; // Correct path if using a language folder

function App() {
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <Home />;
}

export default App;
