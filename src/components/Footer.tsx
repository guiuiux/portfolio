// Utils
import { useTranslation, Trans } from "react-i18next";

// Componentes
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/Footer/BackToTop";

// Imagens
import avatar from "/assets/img/avatar.png";

// Ícones
import EmailCopy from "@/components/home/EmailCopy";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-16 max-w-[960px] w-full">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between">
        {/* CTA */}
        <div className="flex flex-col gap-6">
          <div>
            <Trans
              i18nKey="home.footer.cta"
              components={{
                highlight: (
                  <span className="text-[32px] font-bold tracking-tighter" />
                ),
              }}
            />
          </div>
          <div className="flex w-fit flex-col gap-2">
            <Button
              size="expressive"
              className="w-fit p-6 text-lg bg-primary text-on-primary"
            >
              Agende uma call
              <ArrowOutwardIcon className="ml-2" />
            </Button>
            <Button
              size="expressive-sm"
              className="w-fit p-6 text-lg bg-secondary text-on-secondary"
            >
              Deixe uma mensagem
              <ArrowOutwardIcon className="ml-2" />
            </Button>
          </div>
        </div>

        {/* site-map */}
        <div className="flex flex-row justify-between md:justify-start md:gap-16">
          {/* coluna explore */}
          <div className="flex flex-col font-medium tracking-tight gap-2">
            <span className="uppercase font-supply px-3 w-fit text-center rounded-full bg-surface text-on-surface">
              {t("home.footer.sitemap.title")}
            </span>
            <nav className="flex flex-col px-3 space-y-1">
              <a href="/" className="hover:text-primary">
                {t("home.footer.sitemap.home")}
              </a>
              <a href="/services" className="hover:text-primary">
                {t("home.footer.sitemap.services")}
              </a>
              <a href="/" className="hover:text-primary">
                {t("home.footer.sitemap.work")}
              </a>
              <a href="/" className="hover:text-primary">
                {t("home.footer.sitemap.about")}
              </a>
              <a href="/" className="hover:text-primary">
                {t("home.footer.sitemap.contact")}
              </a>
            </nav>
          </div>

          {/* coluna socials */}
          <div className="flex flex-col font-medium tracking-tight gap-2">
            <span className="uppercase font-supply px-3 w-fit rounded-full bg-surface text-on-surface">
              SOCIALS
            </span>
            <nav className="flex flex-col px-3 space-y-1">
              <a href="/" className="hover:text-secondary">
                Behance
              </a>
              <a href="/services" className="hover:text-secondary">
                Dribbble
              </a>
              <a href="/" className="hover:text-secondary">
                Instagram
              </a>
              <a href="/" className="hover:text-secondary">
                LinkedIn
              </a>
            </nav>
          </div>

          {/* coluna terceira */}
          <div className="flex flex-col font-medium tracking-tight gap-2">
            <span className="uppercase font-supply opacity-0">{":)"}</span>
            <nav className="flex flex-col space-y-1">
              <a href="/" className="hover:text-primary">
                Read.cv
              </a>
              <a href="/services" className="hover:text-primary">
                Contra
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:justify-between">
        {/* contact-card */}
        <div className="w-fit flex flex-col p-6 gap-4 rounded-xl transition-all duration-300 bg-surface-container-low text-on-surface">
          {/* título e foto */}
          <div className="flex flex-col gap-2">
            <img
              className="h-12 w-12 rounded-lg"
              src={avatar}
              alt="Foto de perfil"
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
  );
}
