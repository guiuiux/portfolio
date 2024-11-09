import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";
import SocialLink from "./SocialLink";
import LastUpdated from "./LastUpdated";
import { Button } from "./ui/Button";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full w-full flex flex-col gap-12 items-center p-4 mt-12 sm:mt-32 mb-16">
      <div className="text-lg font-light text-zinc-300">
        {t("Homepage.footer.social.connect")}
      </div>

      <div className="flex sm:flex-row gap-2 flex-col">
        {/* Contact Card */}
        <div className="p-8 border flex flex-col gap-4 items-start max-w-[480px] rounded-2xl border-zinc-800">
          <div className="flex flex-col gap-2">
            <img
              src="/images/avatar_gui.webp"
              alt=""
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full"
            />
            <h1 className="flex flex-col text-3xl sm:text-4xl font-bold font-whyteinktrap">
              <span>{t("Homepage.footer.social.name")}</span>
            </h1>
          </div>
          <p className="text-[16px] font-light text-zinc-300">
            {t("Homepage.footer.social.about")}
          </p>
          <ContactInfo />
        </div>

        {/* Social Links */}
        <div className="flex sm:flex-col gap-2 justify-between">
          <SocialLink
            src="/images/instagram.png"
            alt="Instagram"
            href="https://www.instagram.com/eyeliketomoveit"
            color="bg-yellow-500"
          />
          <SocialLink
            src="/images/linkedin.png"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/guilherme-pinheiro-ferreira-82568b57/"
            color="bg-indigo-500"
          />
          <SocialLink
            src="/images/dribbble.png"
            alt="Dribbble"
            href="https://dribbble.com/eyeliketomoveit"
            color="bg-pink-500"
          />
          <SocialLink
            src="/images/github.png"
            alt="GitHub"
            href="https://github.com/guiuiux"
            color="bg-zinc-50"
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-2 flex gap-3">
        <Button
          href="https://cal.com/g.uiux/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 bg-green-500 hover:bg-green-400 text-zinc-950 rounded-full h-fit flex align-middle"
        >
          <span className="text-sm sm:text-[16px]">
            {t("Homepage.hero.cta-primary")}
          </span>
          <span className="material-symbols-rounded">calendar_today</span>
        </Button>
        <Button
          href="#projects"
          className="py-3 rounded-full h-fit flex align-middle text-sm sm:text-[16px] group"
          variant="outline"
        >
          <span>{t("Homepage.hero.cta-secondary")}</span>
          <span className="material-symbols-rounded">arrow_upward</span>
        </Button>
      </div>

      {/* Footer Text and Last Updated */}
      <div className="flex flex-col w-full items-center">
        <div className="text-zinc-600 text-xs">
          <LastUpdated />
        </div>
        <div className="text-center font-light">
          <span>© 2024 g. ui/ux — Licensed under the MIT License.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
