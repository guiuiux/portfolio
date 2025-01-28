import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "./hooks/use-toast";
import { ToastAction } from "../components/ui/toast";

export default function Header({
  textColor = "text-zinc-950",
  uxColor = "text-zinc-50",
}) {
  const [currentLang, setCurrentLang] = useState(() => {
    const pathSegments = window.location.pathname.split("/");
    return pathSegments[1] || "en";
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Check if toast should be shown after navigation
  useEffect(() => {
    if (location.state?.showToast) {
      const { newLang } = location.state;
      console.log("Triggering toast for:", location.state?.newLang);
      console.log("Location state:", location.state);
      toast({
        title: "Debug Test",
        description: "Toast is working!",
      });
      toast({
        title: newLang === "en" ? "Language changed" : "Idioma alterado",
        description:
          newLang === "en"
            ? "You are now viewing this site in English."
            : "Você está visualizando este site em Português.",
        action: (
          <ToastAction
            altText={
              newLang === "en"
                ? "Voltar para o português"
                : "Switch back to English"
            }
            onClick={() => {
              const revertLang = newLang === "en" ? "pt" : "en";
              const currentPath = window.location.pathname;
              const revertPath = `/${revertLang}${currentPath.substring(
                newLang.length + 1,
              )}`;

              navigate(revertPath, {
                state: { showToast: true, newLang: revertLang },
              });
            }}
          >
            {newLang === "en" ? "Voltar para Português" : "Back to English"}
          </ToastAction>
        ),
      });
    }
  }, [location.state, toast, navigate]);

  const changeLanguage = () => {
    const newLang = currentLang === "en" ? "pt" : "en";

    // Construct the new path
    const currentPath = window.location.pathname;
    const newPath = `/${newLang}${currentPath.substring(currentLang.length + 1)}`;

    // Trigger navigation with state
    navigate(newPath, {
      state: { showToast: true, newLang },
    });

    // Update the current language state
    setCurrentLang(newLang);
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
            className={` ${uxColor} font-medium transition-all duration-300`}
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

Header.propTypes = {
  textColor: PropTypes.string,
  uxColor: PropTypes.string,
};
