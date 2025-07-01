// Utils
import { useTranslation, Trans } from "react-i18next";

// Componentes
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/Footer/BackToTop";

// Imagens
import avatar from "/assets/img/avatar.png";

//Ícones
import EmailCopy from "@/components/home/EmailCopy";

import { color } from "@/lib/design-tokens";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-16 max-w-[960px] w-full">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between">
          {/* CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <Trans
                i18nKey={"home.footer.cta"}
                components={{
                  highlight: (
                    <span className="text-[32px] font-bold tracking-tighter" />
                  ),
                }}
              ></Trans>
            </div>
            <div className="flex w-fit flex-col gap-2">
              <Button
                size={"expressive"}
                className="w-fit p-6 text-lg "
                style={{
                  background: color.light.primary, // Ex: #ffd3ae
                  color: color.light.onPrimary, // Ex: #3a1900
                }}
              >
                Agende uma call
                <ArrowOutwardIcon />
              </Button>
              <Button
                size={"expressive-sm"}
                className="w-fit p-6 text-lg"
                style={{
                  background: color.light.secondary, // Ex: #ffd3ae
                  color: color.light.onSecondary, // Ex: #3a1900
                }}
              >
                Deixe uma mensagem
                <ArrowOutwardIcon />
              </Button>
            </div>
          </div>

          {/*site-map*/}
          <div className="flex flex-row justify-between md:justify-start md:gap-16">
            {/* coluna explore */}
            <div className="flex flex-col font-medium tracking-tight gap-2">
              <span
                className="uppercase font-supply px-3 w-fit text-center rounded-full"
                style={{
                  backgroundColor: color.light.surface,
                  color: color.light.onSurface,
                }}
              >
                {t("home.footer.sitemap.title")}
              </span>
              <span className="flex flex-col px-3 ">
                <a href="/">{t("home.footer.sitemap.home")}</a>
                <a href="/services">{t("home.footer.sitemap.services")}</a>
                <a href="/">{t("home.footer.sitemap.work")}</a>
                <a href="/">{t("home.footer.sitemap.about")}</a>
                <a href="/">{t("home.footer.sitemap.contact")}</a>
              </span>
            </div>
            {/* coluna socials */}
            <div className="flex flex-col font-medium tracking-tight gap-2">
              <span
                className="uppercase font-supply px-3 w-fit rounded-full"
                style={{
                  backgroundColor: color.light.surface,
                  color: color.light.onSurface,
                }}
              >
                SOCIALS
              </span>
              <span className="flex flex-col px-3">
                <a href="/">Behance</a>
                <a href="/services">Dribbble</a>
                <a href="/">Instagram</a>
                <a href="/">LinkedIn</a>
              </span>
            </div>
            {/* coluna terceira */}
            <div>
              <div className="flex flex-col font-medium tracking-tight gap-2">
                <span className="uppercase font-supply opacity-0">{":)"}</span>
                <span className="flex flex-col">
                  <a href="/">Read.cv</a>
                  <a href="/services">Contra</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:justify-between">
          {/*contact-card*/}
          <div
            className=" w-fit flex flex-col p-6 gap-4  rounded-xl duration-300 transition-all"
            style={{
              background: color.light.surfaceContainerLow, // Card resting, elevado mas discreto
              color: color.light.onSurface,
            }}
          >
            {/* tifulo e foto */}
            <div className="flex flex-col gap-2 ">
              <img
                className="rounded-lg h-12 w-12 "
                src={avatar}
                alt="Hero placeholder"
              />
              <span className="text-xl font-bold tracking-tight">
                {t("home.footer.contact-card.name")}
              </span>
            </div>

            {/* texto */}
            <div className="tracking-tight">
              {t("home.footer.contact-card.micro-bio")}
            </div>

            {/* email */}
            <EmailCopy />
          </div>
        </div>
        <BackToTop />
      </div>
    </>
  );
}
