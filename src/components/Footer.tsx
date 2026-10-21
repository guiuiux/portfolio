import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router";

import avatar from "/assets/img/avatar-lg.png";
import EmailCopy from "@/components/EmailCopy";
import SoftBarrierModal from "@/components/SoftBarrierModal";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

//GA 4
import { logEvent } from "@/utils/gaEvents";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary-container text-on-primary-container pt-16 w-full pb-6">
      {/* Container principal */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 grid gap-16">
        {/* Linha superior */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand + CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-var-wide tracking-tight leading-snug">
              <Trans
                i18nKey="footer.cta"
                components={{
                  highlight: (
                    <span className="text-[32px] font-bold tracking-tighter" />
                  ),
                }}
              />
            </h2>
            <div className=" flex flex-col  gap-1">
              <SoftBarrierModal variant={"footer"} />
              <Link
                to={"https://www.linkedin.com/in/guilhermepferreira/"}
                onClick={() => {
                  logEvent("contact_click", {
                    method: "linkedin",
                    variant: "footer",
                  });
                  logEvent("contact_initiated", {
                    method: "linkedin",
                    variant: "footer",
                  });
                }}
              >
                <Button
                  size={"hero"}
                  variant={"secondary"}
                  className=" text-lg gap-2"
                >
                  {t("footer.cta-message")}
                  <ArrowUpRight className="size-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Links rápidos */}

          {/* <div className="flex flex-col gap-2">
              <span className="uppercase text-xs font-supply px-2 py-1 w-fit rounded-full bg-surface text-on-surface">
                {t("footer.sitemap.title")}
              </span>
              <ul className="flex flex-col gap-1 text-sm">
                <li>
                  <a href="/">{t("footer.sitemap.home")}</a>
                </li>
                <li>
                  <a href="/">{t("footer.sitemap.services")}</a>
                </li>
                <li>
                  <a href="/">{t("footer.sitemap.work")}</a>
                </li>
                <li>
                  <a href="/about">{t("footer.sitemap.about")}</a>
                </li>
                <li>
                  <a href="/contact">{t("footer.sitemap.contact")}</a>
                </li>
              </ul>
            </div> */}

          <div className="flex flex-col gap-2">
            <span className="uppercase text-xs font-supply px-2 py-1 w-fit rounded-full bg-surface text-on-surface">
              Socials
            </span>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <a
                  href="https://behance.net/guipinheeiro"
                  onClick={() =>
                    logEvent("social_click", { network: "behance" })
                  }
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/eyeliketomoveit"
                  onClick={() =>
                    logEvent("social_click", { network: "dribbble" })
                  }
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/eyeliketomoveit"
                  onClick={() =>
                    logEvent("social_click", { network: "instagram" })
                  }
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guilhermepferreira/"
                  onClick={() =>
                    logEvent("social_click", { network: "linkedin" })
                  }
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Cartão de contato */}
          <div className="flex flex-col p-6 sm:w-full md:max-w-[360px] gap-6 rounded-xl bg-surface-container text-on-surface shadow-sm">
            <img
              src={avatar}
              alt={t("footer.contact-card.name")}
              className="rounded-lg h-12 w-12"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">
                {t("footer.contact-card.name")}
              </p>
              <p className="text-base text-on-surface-variant">
                {t("footer.contact-card.micro-bio")}
              </p>
            </div>

            <EmailCopy />
          </div>
        </div>

        {/* Linha inferior */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-secondary/20 pt-4 text-sm text-on-primary-container/80">
          <span>{t("last-update")}</span>
          <span>{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
