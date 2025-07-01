// Utils
import { useTranslation, Trans } from "react-i18next";

import ServiceCardProduct from "@/components/home/ServiceCardProduct";
import ServiceCardVisual from "@/components/home/ServiceCardVisual";

// Componentes
import { Button } from "@/components/ui/button";
import LogoCarousel from "@/components/home/LogoCarousel";
import CaseStudy from "@/components/home/CaseStudy";
import Footer from "@/components/Footer";
import { SpringTransition } from "@/components/motion/SpringTransition";
import { HeroAnimated } from "@/components/home/HeroAnimated";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Design Tokens
import { color } from "@/lib/design-tokens";

// Lottie
import { useRef } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import callAnimation from "@/assets/lottie/icon/call.json";

//MUI Ícones
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Material shapes

export default function Home() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { t } = useTranslation();

  return (
    <>
      {/* container */}

      <div className="flex flex-col gap-16 md:gap-24 lg:gap-24 font-sf mx-auto  ">
        {/* hero-container */}

        <section className="w-full bg-linear-(--hero-gradient) ">
          {/*nav-bar component*/}
          <div></div>

          {/*hero*/}
          <div className="flex flex-col pt-8 gap-12 md:gap-16 lg:gap-8 2xl:gap-16 px-4 sm:px-8 md:px-16">
            {/* Upper Hero - Nametag / Text / Animated Image / CTA / Social Proof */}
            <div className="flex flex-col gap-8 lg:gap-10 xl:gap-10 2xl:gap-16 sm:w-full md:items-center">
              {/* Nametag */}
              <div className="flex flex-row gap-2 items-center font-supply text-xl text-center">
                <SpringTransition
                  enter={["x", "fade"]}
                  direction="left"
                  delay={0.2}
                >
                  <div>{t("home.hero.my-name")}</div>
                </SpringTransition>
                <SpringTransition
                  enter={["x", "fade"]}
                  direction="right"
                  delay={0.3}
                >
                  <div
                    className="flex flex-row items-center gap-2 px-3 py-2 rounded-full "
                    style={{
                      backgroundColor: color.light.tertiary,
                      color: color.light.onTertiary,
                    }}
                  >
                    <img
                      src="/assets/img/nametag-avatar.png"
                      alt=""
                      className="h-6 w-6 rounded-full"
                    />
                    Guilherme.
                  </div>
                </SpringTransition>
              </div>

              {/* Text + Animated Image + CTA */}
              <div className="md:flex-row flex-col gap-8 flex max-w-[960px] items-center">
                {/* Text */}
                <div className="flex flex-col gap-8 md:max-w-[360px] lg:max-w-[960px]">
                  <SpringTransition
                    enter={["y", "fade"]}
                    direction="down"
                    delay={0.4}
                  >
                    <div className="text-[24px]  max-w-[960px] md:text-[32px] lg:text-[40px] font-regular tracking-tighter leading-9 lg:leading-12 md:leading-10 font-sf text-zinc-500 ">
                      <Trans
                        i18nKey="home.hero.title"
                        components={{
                          bold: <span className="font-bold text-zinc-900" />,
                        }}
                      />
                    </div>
                  </SpringTransition>

                  {/* CTA BUTTONS */}

                  <div className="flex flex-row  md:flex-row w-full justify-center md:justify-start gap-1 md:gap-2">
                    <SpringTransition
                      enter={["x", "fade"]}
                      direction="left"
                      delay={0.5}
                    >
                      <Button
                        size={"expressive-mobile-l"}
                        className="w-full text-xl"
                        style={{
                          backgroundColor: color.light.primary,
                          color: `${color.light.onPrimary}`,
                        }}
                        onMouseEnter={() => lottieRef.current?.play()}
                        onMouseLeave={() => lottieRef.current?.stop()}
                      >
                        <Lottie
                          lottieRef={lottieRef}
                          animationData={callAnimation}
                          loop
                          color="#ffffff"
                          autoplay={false}
                          className="w-[24px]"
                        />
                        Fale comigo
                      </Button>
                    </SpringTransition>
                    <SpringTransition
                      enter={["x", "fade"]}
                      direction="right"
                      delay={0.55}
                    >
                      <Button
                        size={"expressive-mobile-r"}
                        className="md:w-fit w-full text-xl"
                        style={{
                          backgroundColor: color.light.secondary,
                          color: `${color.light.onSecondary}`,
                        }}
                      >
                        Portfólio
                        <ArrowOutwardIcon />
                      </Button>
                    </SpringTransition>
                  </div>
                </div>

                {/* Animated Image */}
                <SpringTransition
                  className="w-full"
                  enter={["y", "fade"]}
                  direction="up"
                  delay={0.45}
                >
                  <HeroAnimated speed={16} />
                </SpringTransition>
              </div>

              {/* Social-proof */}

              <div className="flex flex-row gap-3 max-w-[960px]">
                <SpringTransition
                  enter={["y", "fade"]}
                  direction="up"
                  delay={0.55}
                >
                  <img src="/assets/img/client-avatars.png" alt="" />
                </SpringTransition>
                <div className="flex flex-col font-supply justify-between h-8 text-sm text-zinc-500">
                  <SpringTransition
                    enter={["y", "fade"]}
                    direction="up"
                    delay={0.6}
                  >
                    <img
                      src="assets/img/rating-stars-black.png"
                      alt=""
                      className="w-fit h-2"
                    />
                  </SpringTransition>
                  <SpringTransition
                    enter={["y", "fade"]}
                    direction="up"
                    delay={0.65}
                  >
                    {t("home.hero.trust")}
                  </SpringTransition>
                </div>
              </div>
            </div>

            {/*logo-caroussel*/}
            <SpringTransition enter={["y", "fade"]} direction="up" delay={0.6}>
              <div className="flex flex-col w-full items-center border-t border-b py-8 border-zinc-200">
                <div className=" flex flex-col gap-8 max-w-[960px] w-full">
                  <LogoCarousel />
                </div>
              </div>
            </SpringTransition>
          </div>
        </section>

        {/* case-study-container */}

        <section className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 transition-all duration-200">
          <div className="flex flex-col gap-6 max-w-[960px]">
            {/*titulo*/}
            <h3 className="font-supply text-xl text-zinc-400">
              {t("home.case-study.section-title")}
            </h3>
            <div className="flex w-full flex-col gap-16 md:gap-24 lg:gap-32">
              {/*case-study-component*/}
              <SpringTransition
                enter={["y", "fade"]}
                direction="up"
                speed="slow" // ou "default", "slow"
                scrollReveal
                threshold={0.25} // 25% do componente precisa aparecer para animar
              >
                <CaseStudy project="mackensina" imgPosition="left" />
              </SpringTransition>
              <Separator className="" />
              {/*case-study-component*/}
              <SpringTransition
                enter={["y", "fade"]}
                direction="up"
                speed="slow" // ou "default", "slow"
                scrollReveal
                threshold={0.25} // 25% do componente precisa aparecer para animar
              >
                <CaseStudy project="livro-digital" imgPosition="right" />
              </SpringTransition>
              <Separator />
              {/*case-study-component*/}{" "}
              <SpringTransition
                enter={["y", "fade"]}
                direction="up"
                speed="slow" // ou "default", "slow"
                scrollReveal
                threshold={0.25} // 25% do componente precisa aparecer para animarw
              >
                <CaseStudy project="guiopapai-twitch" imgPosition="left" />
              </SpringTransition>
            </div>
          </div>
        </section>

        {/* services-container */}
        <section
          className="flex flex-col gap-12 py-24 px-8"
          style={{
            backgroundColor: color.light.surfaceContainer,
            color: color.light.onSurface,
          }}
        >
          {/* Title */}
          <div
            className="w-full flex flex-col gap-6"
            style={{
              color: color.light.onSurfaceVariant,
            }}
          >
            <div className="text-5xl font-medium tracking-tighter">
              <Trans
                i18nKey="home.services.title"
                components={{
                  highlight: (
                    <span
                      className="font-bold"
                      style={{
                        color: color.light.onSurface,
                      }}
                    />
                  ),
                }}
              />
            </div>
            <div className="font-medium text-2xl tracking-tight">
              {t("home.services.description")}
            </div>
            <ServiceCardProduct />
            <ServiceCardVisual />
          </div>
        </section>

        {/*testimonial-container*/}

        <section className="flex-col flex items-center px-4 sm:px-8 md:px-16">
          <div className=" flex max-w-[960px] flex-col lg:flex-row gap-4 items-center lg:items-stretch ">
            <div className="hidden lg:block max-w-[61.8%]">
              <video
                src="/assets/vid/mackensina-square.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-fit h-full object-cover border border-zinc-300 rounded-2xl"
                poster="/assets/img/mackensina-poster.jpg" // opcional: thumbnail fallback
                aria-label="Demonstração do projeto Mackensina"
              />
            </div>
            <div className="flex flex-col gap-4 lg:max-w-6/12 max-w-[540px]">
              {/* card */}

              <Card
                className="p-6 md:p-8 flex flex-col border-1 rounded-2xl gap-6 lg:h-full lg:justify-between"
                style={{
                  borderColor: color.light.primaryContainer,
                }}
              >
                {/* aspas */}
                <div>
                  <img src="/assets/svg/aspas.svg" alt="" />
                </div>
                {/* estrelas */}
                <div>
                  <img src="/assets/svg/five-stars.svg" alt="" />
                </div>
                {/* texto */}
                <div className="font-sf text-xl sm:text-lg md:text-lg lg:text-2xl ">
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
                <Button
                  size={"expressive-sm"}
                  className="block sm:hidden text-base py-3 rounded-xl h-fit uppercase rounded-full"
                  style={{
                    background: color.light.primaryContainer, // Ex: #ffd3ae
                    color: color.light.onPrimaryContainer, // Ex: #3a1900
                  }}
                >
                  {t("home.hero.testimonial.cta-text")} <ArrowOutwardIcon />
                </Button>
              </Card>
              {/* CTA card */}
              <Button
                variant={"outline"}
                className="hidden sm:block text-base py-4  rounded-full  h-fit uppercase"
                style={{
                  background: color.light.primary, // Ex: #ffd3ae
                  color: color.light.onPrimary, // Ex: #3a1900
                }}
              >
                {t("home.hero.testimonial.cta-text")} <ArrowOutwardIcon />
              </Button>
            </div>
          </div>
        </section>

        {/*footer*/}
        <section
          className=" py-8 bg-[#F5F5F5] flex flex-col items-center px-4 sm:px-8 md:px-16 "
          style={{
            background: color.light.primaryContainer, // Ex: #ffd3ae
            color: color.light.onPrimaryContainer, // Ex: #3a1900
          }}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}
