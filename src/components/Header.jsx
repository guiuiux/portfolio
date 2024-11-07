import { Button } from "@/components/ui/button";

export default function Header() {
  const changeLanguage = () => {
    // Get the current pathname
    const currentPath = window.location.pathname;

    // Extract the current language code from the pathname (e.g., 'en' or 'pt')
    const currentLang = currentPath.split("/")[1];

    // Determine the new language based on the current language
    const newLang = currentLang === "en" ? "pt" : "en";

    // Replace the current language in the path with the new language
    const newPath = currentPath.replace(`/${currentLang}`, `/${newLang}`);

    // Redirect to the new path
    window.location.pathname = newPath;
  };

  return (
    <header className="flex gap-4 px-6 items-center justify-between mt-6">
      <div className="font-supplysans group text-zinc-200 font-light text-xl">
        g. ui
        <span className="group-hover:text-pink-500 transition-colors duration-100">
          /ux
        </span>
      </div>
      <Button
        className="w-10 h-10"
        variant={"outline"}
        onClick={changeLanguage}
      >
        <span className="material-symbols-rounded">
          <span className="flex text-[18px]">translate</span>
        </span>
      </Button>
    </header>
  );
}
