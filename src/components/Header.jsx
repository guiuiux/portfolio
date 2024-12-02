import { Button } from "@/components/ui/button";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({
  textColor = "text-zinc-950",
  uxColor = "text-zinc-50",
}) {
  const [currentLang, setCurrentLang] = useState(() => {
    // Detect current language from URL (default to 'en' if not found)
    const pathSegments = window.location.pathname.split("/");
    return pathSegments[1] || "en";
  });

  const changeLanguage = () => {
    const newLang = currentLang === "en" ? "pt" : "en";

    // Construct the new path
    const currentPath = window.location.pathname;
    const newPath = `/${newLang}${currentPath.substring(currentLang.length + 1)}`;

    // Update the current language state
    setCurrentLang(newLang);

    // Redirect to the new path
    window.location.pathname = newPath;
  };

  return (
    <header className="flex gap-4 px-6 items-center justify-between mt-6 bg-transparent z-40 min-w-full ">
      <Link
        to={`/${currentLang}/home`}
        className="font-supplysans group text-xl"
      >
        <div className={`font-supplysans group ${textColor} text-xl`}>
          g. ui
          <span
            className={`group-hover:${uxColor} transition-all duration-300`}
          >
            /ux
          </span>
        </div>
      </Link>
      <Button
        className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-zinc-950/50 hover:bg-zinc-950/20 border border-zinc-800/60 rounded-md"
        variant="outline"
        onClick={changeLanguage}
        aria-label={
          currentLang === "en"
            ? "Change language to Portuguese (Mudar idioma para Português)"
            : "Change language to English (Mudar idioma para Inglês)"
        }
      >
        <span className="material-symbols-rounded">
          <span className="flex text-[18px]">translate</span>
        </span>
        <span className="text-xs">{currentLang === "en" ? "Pt" : "En"}</span>
      </Button>
    </header>
  );
}

// Define PropTypes
Header.propTypes = {
  textColor: PropTypes.string, // Accepts any valid TailwindCSS color class
  uxColor: PropTypes.string, // Accepts any valid TailwindCSS color class
};
