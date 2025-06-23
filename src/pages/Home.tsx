// Utils
import { useTranslation, Trans } from "react-i18next";

// Componentes
import { Button } from "@/components/ui/button";
import { ServicesList } from "@/components/home/ServicesList";
import LogoCarousel from "@/components/home/LogoCarousel";
import CaseStudy from "@/components/home/CaseStudy";
import EmailCopy from "@/components/home/EmailCopy";

// Imagens
import heroImg from "../assets/imgs/home-hero-placeholder.png";
import avatar from "/assets/img/avatar.png";

//MUI Ícones

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  const { t } = useTranslation();
  const services = t("home.services.list", {
    returnObjects: true,
  }) as string[];
  console.log("services", services);
  console.log("É array?", Array.isArray(services));
  return (
    <>
      {/* container */}
      <div className=" flex flex-col gap-16 font-sf ">
        {/* hero-container */}
        <section>
          {/*nav-bar component*/}
          <div></div>

          {/*hero*/}
          <div className="flex flex-col pt-8 gap-10">
            {/*hero-text*/}
            <div className="flex flex-col gap-4 px-8">
              <div className="flex flex-row gap-2 items-center font-supply text-xl text-brand-blue">
                <div>{t("home.hero.my-name")}</div>
                <div className="flex flex-row items-center gap-2 px-3 py-2 rounded-full shadow-nametag border border-zinc-100">
                  <img
                    src="/assets/img/nametag-avatar.png"
                    alt=""
                    className="h-6 w-6 rounded-full"
                  />
                  Guilherme.
                </div>
              </div>

              <div className="text-[32px] font-regular tracking-tighter leading-9 font-sf text-zinc-500">
                <Trans
                  i18nKey="home.hero.title"
                  components={{
                    bold: <span className="font-bold text-zinc-900" />,
                  }}
                />
              </div>
            </div>
            {/*image-container*/}
            <div className="px-8">
              <img
                className="rounded-2xl "
                src={heroImg}
                alt="Hero placeholder"
              />
            </div>
            {/*logo-caroussel*/}
            <div className=" flex flex-col gap-8">
              <div className="flex flex-row gap-3 mx-8">
                <img src="/assets/img/client-avatars.png" alt="" />
                <div className="flex flex-col font-supply justify-between h-8 text-sm text-zinc-500">
                  <img
                    src="assets/img/rating-stars-black.png"
                    alt=""
                    className="w-fit h-2"
                  />
                  {t("home.hero.trust")}
                </div>
              </div>
              <LogoCarousel />
            </div>
          </div>
        </section>

        {/* case-study-container */}
        <section>
          <div className="flex flex-col gap-16 px-8">
            {/*titulo*/}
            <h3 className="font-supply text-xl text-zinc-600">
              {t("home.case-study.section-title")}
            </h3>
            {/*case-study-component*/}
            <CaseStudy project="mackensina" />

            <div className="flex h-0.5 w-full justify-center">
              <div className="w-[135px] border-b-2 border-zinc-200"></div>
            </div>
            {/*case-study-component*/}
            <CaseStudy project="livro-digital" />
            <div className="flex h-0.5 w-full justify-center">
              <div className="w-[135px] border-b-2 border-zinc-200"></div>
            </div>
            {/*case-study-component*/}
            <CaseStudy project="guiopapai-twitch" />
          </div>
        </section>

        {/*testimonial-container*/}
        <section>
          <div className="px-8 flex">
            <div className="p-6 flex flex-col border border-zinc-200 rounded-3xl w-full gap-6">
              {/* aspas */}
              <div>
                <img src="/assets/svg/aspas.svg" alt="" />
              </div>
              {/* estrelas */}
              <div>
                <img src="/assets/svg/five-stars.svg" alt="" />
              </div>
              {/* texto */}
              <div className="font-sf text-xl ">
                {t("home.hero.testimonial.text")}
              </div>
              <div className="flex flex-col gap-2">
                {/* autor */}
                <div className="flex flex-row gap-3 items-center">
                  <img
                    src="assets/img/paulo-avatar.png"
                    alt=""
                    className="h-fit w-8 rounded-full"
                  />
                  <span className="font-sf font-medium text-xl">
                    {t("home.hero.testimonial.author")}
                  </span>
                </div>
                {/* autor-role */}
                <span className="font-sf text-base text-zinc-600">
                  {t("home.hero.testimonial.author-role")}
                </span>
              </div>
              {/* cta */}
              <Button className="text-base py-3 rounded-xl h-fit uppercase">
                {t("home.hero.testimonial.cta-text")} <ArrowOutwardIcon />
              </Button>
            </div>
          </div>
        </section>

        {/* services-container */}
        <section className="px-8">
          <div className="flex flex-col gap-12 text-xl tracking-tight text-zinc-600">
            {/*titulo*/}
            <h3 className="font-supply text-xl ">{t("home.services.title")}</h3>
            <div className="flex flex-col gap-6">
              {/* pergunta */}
              <div className="text-4xl text-zinc-600">
                <Trans
                  i18nKey={"home.services.question"}
                  components={{
                    highlight: (
                      <span className="font-medium text-brand-blue text-zinc-900 border-amber-300 border-b-3" />
                    ),
                  }}
                ></Trans>
              </div>

              {/*lista deserviços*/}
              <ServicesList services={services} />
            </div>

            {/*CTA*/}
            <div className="">
              <div className="flex flex-row text-xl items-center gap-2 text-brand-blue uppercase font-semibold">
                {" "}
                {t("home.services.cta")}
                <ArrowOutwardIcon />
              </div>
            </div>
          </div>
        </section>

        {/*footer*/}
        <section className="flex flex-col gap-16 p-8 bg-[#F5F5F5]">
          {/* CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <Trans
                i18nKey={"home.footer.cta"}
                components={{
                  highlight: (
                    <span className="text-[32px] font-medium border-b-2 border-amber-300 " />
                  ),
                }}
              ></Trans>
            </div>
            <div className="flex w-fit flex-col gap-2">
              <Button className="w-fit p-6 text-lg">
                Agende uma call
                <ArrowOutwardIcon />
              </Button>
              <Button variant={"outline"} className="w-fit p-6 text-lg">
                Deixe uma mensagem
                <ArrowOutwardIcon />
              </Button>
            </div>
          </div>

          {/*contact-card*/}
          <div className="flex flex-col p-6 gap-4 rounded-xl bg-zinc-50 shadow-card">
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
            <div className="tracking-tight text-zinc-600">
              {t("home.footer.contact-card.micro-bio")}
            </div>

            {/* email */}
            <EmailCopy />
          </div>

          {/*site-map*/}
          <div className="flex flex-row justify-between">
            {/* coluna explore */}
            <div className="flex flex-col font-medium tracking-tight gap-1">
              <span className="uppercase font-supply text-zinc-500">
                {t("home.footer.sitemap.title")}
              </span>
              <a href="/">{t("home.footer.sitemap.home")}</a>
              <a href="/services">{t("home.footer.sitemap.services")}</a>
              <a href="/">{t("home.footer.sitemap.work")}</a>
              <a href="/">{t("home.footer.sitemap.about")}</a>
              <a href="/">{t("home.footer.sitemap.contact")}</a>
            </div>
            {/* coluna socials */}
            <div className="flex flex-col font-medium tracking-tight gap-1">
              <span className="uppercase font-supply text-zinc-500">
                SOCIALS
              </span>
              <a href="/">Behance</a>
              <a href="/services">Dribbble</a>
              <a href="/">Instagram</a>
              <a href="/">LinkedIn</a>
            </div>
            {/* coluna terceira */}
            <div>
              <div className="flex flex-col font-medium tracking-tight gap-1">
                <span className="uppercase font-supply opacity-0">
                  coluna 3
                </span>
                <a href="/">Read.cv</a>
                <a href="/services">Contra</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
