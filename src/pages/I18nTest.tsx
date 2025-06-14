import { Button } from "@/components/ui/button";
import { useTranslation, Trans } from "react-i18next";

export default function I18nTest() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-16">
      <h1 className="text-5xl font-regular tracking-tighter font-sf text-zinc-500">
        <Trans
          i18nKey="welcome.title"
          components={{ bold: <span className="font-bold  text-zinc-800" /> }}
        />
      </h1>
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
      <p>{i18n.t("change_language")}</p>
    </div>
  );
}
