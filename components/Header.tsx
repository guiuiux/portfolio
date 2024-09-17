'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageIcon from "../icons/language.svg";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";

const Header = () => {
  const t = useTranslations();
  const router = useRouter(); // useRouter from next/navigation
  const pathname = usePathname(); // usePathname from next/navigation

  // Define the locales you support
  const supportedLocales = ['en', 'pt'];

  // Function to change the language
  const handleChangeLanguage = (locale: string) => {
    // Extract the current locale from the pathname
    const currentLocale = pathname.split('/')[1];

    // Check if the current locale is in the supported locales list
    const isLocaleInPath = supportedLocales.includes(currentLocale);

    // Construct the new path, removing the current locale if present
    const newPath = isLocaleInPath
      ? pathname.replace(`/${currentLocale}`, `/${locale}`)
      : `/${locale}${pathname}`;

    router.push(newPath); // Push the new path with the selected locale
  };

  return (
    <div className="max-w-gui w-full flex flex-row gap-2 pb-4">
      <div className="w-full flex items-center self-center h-full justify-between gap-2">
        {/* Left section: Logo and Text */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-supplysans font-light text-zinc-500 logo-text">
            <span className="text-zinc-200">g. ui</span>/ux
          </Link>
        </div>
      </div>
      {/* Right section: Icon */}
      <div>
        <DropdownMenu>
          <div className="flex items-center justify-center border-[1px] hover:border-zinc-500 transition-colors duration-300 rounded-md border-zinc-800 h-8 w-8">
            <DropdownMenuTrigger>
              <div className="p-[7px]">
                <LanguageIcon
                  style={{ color: "#FFFFFF", width: 18, height: 18 }}
                />
              </div>
            </DropdownMenuTrigger>
          </div>
          <div className="mr-4">
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <span className="font-light">{t("language")}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Call handleChangeLanguage function on click */}
              <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
                <span className="font-light">{t("langEn")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleChangeLanguage('pt')}>
                <span className="font-light">{t("langPt")}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
