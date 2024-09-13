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

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="text-zinc-500 font-light items-center w-fit flex flex-row gap-2 hover:text-zinc-50 transition-colors duration-300">
          <MessageIcon />
          {t("cta")}{" "}
        </div>
        <TypingEffect />
      </div>
      <div className="flex flex-col gap-4 w-full text-center text-zinc-500 font-light text-sm">
        {t('connect')}
        <div className="flex flex-row gap-4 justify-center">
          <IconWrapper Icon={DribbleIcon} size={24} />
          <IconWrapper Icon={InstagramIcon} size={24} />
          <IconWrapper Icon={GithubIcon} size={24} />
          <IconWrapper Icon={LinkedinIcon} size={24} />
        </div>
        <div className="flex flex-row w-full   justify-center">
            
            <div className="flex gap-1  flex-row items-center border-b-[1px] hover:text-indigo-300 transition-colors duration-300 text-indigo-500 border-indigo-600"> <EmailIcon /> gferreira.uiux@gmail.com</div>
        </div>

        <LastUpdated />
        <div className="text-xs font-medium">2024 All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
