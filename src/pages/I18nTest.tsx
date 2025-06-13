import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function I18nTest() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <div className="flex gap-2">
        <Button
          variant={i18n.resolvedLanguage === "en" ? "default" : "outline"}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </Button>
        <Button
          variant={i18n.resolvedLanguage === "pt" ? "default" : "outline"}
          onClick={() => i18n.changeLanguage("pt")}
        >
          PT-BR
        </Button>
      </div>
      <p>{t("change_language")}</p>
    </div>
  );
}
