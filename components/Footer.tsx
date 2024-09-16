import TypingEffect from "@/components/TypingEffect";
import InstagramIcon from "../icons/instagram.svg";
import IconWrapper from "./IconWrapper";
import GithubIcon from "../icons/github.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import DribbleIcon from "../icons/dribble.svg";
import MessageIcon from "../icons/message.svg";
import EmailIcon from "../icons/email.svg";
import { useTranslations } from "next-intl";
import LastUpdated from "./LastUpdated";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 items-center">
        {/* Add the .webm video */}
       

        {/* CTA */}
        <Button variant={"outline"}>
          <div className="w-fit flex flex-row gap-2 items-center">
            <MessageIcon />
            <span className="font-light">{t("cta")}</span>
          </div>
        </Button>
      </div>
      <TypingEffect />
      {/* Social and Contact Section */}
      <div className="flex flex-col gap-4 w-full text-center text-zinc-500 font-light text-sm">
        {t("connect")}
        <div className="flex flex-row gap-4 justify-center">
          <Link href={"https://dribbble.com/eyeliketomoveit"}> 
            <IconWrapper Icon={DribbleIcon} size={24} />
          </Link>

          <Link href={"http://instagram.com/eyeliketomoveit"}>
            <IconWrapper Icon={InstagramIcon} size={24} />
          </Link>
          <Link href={"https://github.com/guiuiux/"}>
            <IconWrapper Icon={GithubIcon} size={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/guilherme-pinheiro-ferreira-82568b57/"}>
            <IconWrapper Icon={LinkedinIcon} size={24} />
          </Link>
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="flex gap-1 flex-row items-center border-b-[1px] hover:text-indigo-300 transition-colors duration-300 text-indigo-500 border-indigo-600">
            <EmailIcon /> gferreira.uiux@gmail.com
          </div>
        </div>

        <LastUpdated />
        <div className="text-xs font-medium">2024 All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
