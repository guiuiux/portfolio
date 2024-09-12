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
import Link from "next/link";

const Header = () => {
  const t = useTranslations();
  return (
    <div className="max-w-gui w-full flex flex-row gap-2 pb-4">
      <div className="w-full flex items-center self-center h-full justify-between  gap-2">
        {/* Left section: Logo and Text */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-supplysans text-zinc-500 logo-text">
            <span className="text-zinc-200">g. ui</span>/ux
          </div>
        </div>
      </div>
      {/* Right section: Icon */}
      <div >
        <DropdownMenu>
          <div className="flex items-center justify-center border-2 rounded-md border-zinc-800 h-8 w-8">
            <DropdownMenuTrigger>
              <LanguageIcon
                style={{ color: "#FFFFFF", width: 18, height: 18 }}
              />
            </DropdownMenuTrigger>
          </div>
          <div className="mr-4">
          <DropdownMenuContent>
            <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/en"><DropdownMenuItem>{t("langEn")}</DropdownMenuItem></Link>
            <Link href="/pt"><DropdownMenuItem>{t("langPt")}</DropdownMenuItem></Link>
          </DropdownMenuContent>
          </div>
        </DropdownMenu>
        
      </div>
    </div>
  );
};

export default Header;
