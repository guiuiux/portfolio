import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
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
    <header className="flex gap-4 px-6 items-center justify-between mt-6 bg-transparent">
      <div className="font-supplysans group text-zinc-950 text-xl">
        g. ui
        <span className="group-hover:text-zinc-50 transition-colors duration-100">
          /ux
        </span>
      </div>
      <Button
        className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-zinc-950/50 hover:bg-zinc-950/20 border-0 rounded-md"
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
        <span className="text-xs">
          {currentLang === "en" ? "Pt-BR" : "En-US"}
        </span>
      </Button>
    </header>
  );
}
