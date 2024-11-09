import { Button } from "@/components/ui/button";

export default function Header() {
  const changeLanguage = () => {
    // Get the current pathname and split by `/` to extract the language code
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");

    // Get the current language from the URL path (e.g., 'en-US' or 'pt-BR')
    const currentLang = pathSegments[1];

    // Toggle between `en-US` and `pt-BR`
    const newLang = currentLang === "en-US" ? "pt-BR" : "en-US";

    // Construct the new path by replacing the language segment
    const newPath = `/${newLang}${currentPath.substring(currentLang.length + 1)}`;

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
        className="w-10 h-10 backdrop-blur-md bg-zinc-950/50 hover:bg-zinc-950/20 border-0"
        variant="outline"
        onClick={changeLanguage}
      >
        <span className="material-symbols-rounded">
          <span className="flex text-[18px]">translate</span>
        </span>
      </Button>
    </header>
  );
}
