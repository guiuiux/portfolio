import { useTranslation, Trans } from "react-i18next";

// Componentes
import LogoCarousel from "@/components/home/LogoCarousel";
import CaseCard from "@/components/home/CaseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import { usePageMeta } from "@/lib/usePageMeta";
import { scrollBehavior } from "@/lib/motion";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { Link } from "react-router";

// GA4
import { logEvent } from "@/utils/gaEvents";
import { useEffect } from "react";

//Ícones
import { BriefcaseBusiness, Quote, Star, ArrowUpRight } from "lucide-react";

const PageName: React.FC = () => {
  const { t } = useTranslation();
  usePageMeta(
    "Product Designer (UX/UI)",
    "Product Designer em São Paulo. Deixo seu site ou aplicativo fácil de usar: mais gente usa, menos abandono, mais vendas e menos suporte."
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.25) logEvent("scroll_depth", { percent: 25 });
      if (scrolled > 0.5) logEvent("scroll_depth", { percent: 50 });
      if (scrolled > 0.75) logEvent("scroll_depth", { percent: 75 });
      if (scrolled > 0.95) logEvent("scroll_depth", { percent: 100 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillsOne = t("home.services.service-1.skills", {
    returnObjects: true,
    defaultValue: [],
  }) as string[];
  const skillsTwo = t("home.services.service-2.skills", {
    returnObjects: true,
    defaultValue: [],
  }) as string[];
  return (
    <div className="bg-surface flex flex-col items-center overflow-x-hidden">
      <SkipLink />
      <CookieConsentBanner />
      <SiteHeader wide />
      <main
        id="main"
        tabIndex={-1}
        className="flex max-w-[1240px] lg:px-4 flex-col w-full items-center lg:gap-12 gap-12 outline-none"
      >
        {/* Hero */}
        <div className="px-4 md:px-10 lg:px-0 flex flex-col items-center lg:items-start w-full  gap-6 lg:gap-6 ">
          <h1 className="type-headline flex flex-wrap w-full gap-2 items-center text-on-surface">
            <span>{t("home.hero.intro.name")}</span>
            <span className="flex gap-2 flex-row items-center">
              <img
                src="/assets/img/avatar.png"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 md:w-12 md:h-12 rounded-full"
              />
              <span className="text-primary font-var-bold">Guilherme</span>
            </span>
          </h1>
          <p className="type-title text-on-surface-variant">
            <Trans
              i18nKey={"home.hero.description"}
              components={{
                bold: <span className="font-semibold" />,
              }}
            />
          </p>
          <div className="w-full flex flex-row gap-1">
            <Button
              size="hero"
              className="h-fit text-xl md:w-fit w-full rounded-l-[90px] round tracking-normal "
              onClick={() => {
                logEvent("home_cta_click", { destination: "portfolio" });
                document
                  .getElementById("cases")
                  ?.scrollIntoView({ behavior: scrollBehavior() });
              }}
            >
              {t("home.hero.buttons.portfolio")}
              <BriefcaseBusiness />
            </Button>
            <Button
              asChild
              variant={"secondary"}
              className=" px-6 py-4 h-fit md:w-fit w-full text-xl rounded-l-4 rounded-r-[90px] tracking-normal"
            >
              <Link
                to={"/about"}
                onClick={() => {
                  logEvent("home_cta_click", { destination: "about" });
                }}
              >
                {t("home.hero.buttons.about")}
              </Link>
            </Button>
          </div>
        </div>
        {/* Logo Caroussel */}
        <div className="flex flex-col w-full gap-6">
          <p className="text-on-surface-variant font-normal  lg:text-start text-center ">
            {t("home.hero.social-proof")}
          </p>
          <LogoCarousel />
        </div>
        {/* Projects */}
        <div
          id="cases"
          className="px-4 md:px-10 lg:px-0 flex flex-col w-full gap-4"
        >
          <h2 className="font-var-bold text-primary w-full text-center">
            Case Studies
          </h2>
          <CaseCard caseKey="mackensina" />
          <CaseCard caseKey="livro-digital" />
        </div>
        {/* Testimonials */}
        <div className="mx-4 md:mx-16 lg:mx-0 p-8 flex flex-col lg:max-w-160 gap-8 border-outline-variant border rounded-3xl">
          <span className="text-secondary-container">
            <Quote
              className="h-8 w-8"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          </span>
          <div
            role="img"
            aria-label={t("home.testimonials.rating", {
              defaultValue: "Avaliação: 5 de 5 estrelas",
            })}
            className="flex flex-row gap-1 text-primary-container"
          >
            <Star
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <Star
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <Star
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <Star
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <Star
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          </div>
          <p className="text-on-surface-variant text-xl lg:text-2xl font-var-wide">
            {t("home.testimonials.text")}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <img
                src="/assets/img/avatar-paulo.png"
                alt=""
                className="w-8 h-8 rounded-full"
              />

              <p className="font-medium text-xl text-on-surface">
                {t("home.testimonials.author")}
              </p>
            </div>
            <p className="text-on-surface-variant">
              {t("home.testimonials.author-role")}
            </p>
          </div>
          <Button
            asChild
            variant={"default"}
            className="rounded-full w-full h-fit py-3 "
          >
            <Link
              to={"/case/mackensina"}
              onClick={() =>
                logEvent("home_cta_click", {
                  destination: "mackensina_testimonial",
                })
              }
            >
              <span className="font-semibold text-xl">
                {t("home.testimonials.cta")}
              </span>
              <ArrowUpRight className="h-8 w-8 " />
            </Link>
          </Button>
        </div>

        {/* Services */}
        <div
          id="services"
          className=" px-4 md:px-10 lg:px-0 py-16 flex flex-col w-full  gap-8 "
        >
          <h2 className="font-var-bold text-on-surface w-full md:text-center">
            <Trans
              i18nKey="home.services.title"
              components={{
                light: <span className="text-on-surface-variant" />,
              }}
            />
          </h2>
          <div className="flex w-full h-fit lg:flex-row flex-col justify-between gap-4">
            <div className="border lg:max-w-1/3 p-8 rounded-3xl align-center border-secondary">
              <p className="text-on-surface-variant text-2xl flex h-full items-center align-middle">
                {t("home.services.description")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
              {/* Card PRODUCT */}
              <div className="flex flex-col md:w-1/2 items-center gap-1 p-2 border border-outline-variant rounded-3xl">
                {/* inner card */}
                <div className="flex flex-col w-full gap-4 p-4 bg-surface-container-low rounded-2xl">
                  <img
                    src="/assets/icons/product-icon.png"
                    alt=""
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-24 h-24 "
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-on-surface text-2xl font-semibold">
                      {t("home.services.service-1.title")}
                    </p>
                    <p className="text-on-surface-variant text-xl">
                      {t("home.services.service-1.description")}
                    </p>
                  </div>
                  <div className="flex flex-wrap w-full gap-2">
                    {skillsOne.map((skill) => (
                      <Badge key={skill} variant="caseCard">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              {/* Card VISUAL */}
              <div className="flex flex-col md:w-1/2 items-center gap-1 p-2 border border-outline-variant rounded-3xl">
                {/* inner card */}
                <div className="flex flex-col gap-4 p-4 w-full bg-surface-container-low rounded-2xl">
                  <img
                    src="/assets/icons/visual-icon.png"
                    alt=""
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-24 h-24 "
                  />
                  <p className="text-on-surface w-full text-2xl font-semibold">
                    {t("home.services.service-2.title")}
                  </p>
                  <p className="text-on-surface-variant text-xl">
                    {t("home.services.service-2.description")}
                  </p>
                  <div className="flex flex-wrap  gap-2">
                    {skillsTwo.map((skill) => (
                      <Badge key={skill} variant="visualCard">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </main>
      <Footer />
    </div>
  );
};

export default PageName;
