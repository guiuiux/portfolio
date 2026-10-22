import { Trans, useTranslation } from "react-i18next";


import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import CaseBreadcrumb from "@/components/case-study/CaseBreadcrumb";
import NextCase from "@/components/case-study/NextCase";
import { usePageMeta } from "@/lib/usePageMeta";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Contributions from "@/components/case-study/Contributions";
import InfoTable from "@/components/case-study/InfoTable";
import { useEffect } from "react";
import { logEvent } from "@/utils/gaEvents";

import { Quote } from "lucide-react";

export default function CaseMackensina() {
  const { t } = useTranslation();
  usePageMeta("Hub MackEnsina");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.25)
        logEvent("scroll_depth", { percent: 25, page: "mackensina" });
      if (scrolled > 0.5)
        logEvent("scroll_depth", { percent: 50, page: "mackensina" });
      if (scrolled > 0.75)
        logEvent("scroll_depth", { percent: 75, page: "mackensina" });
      if (scrolled > 0.95)
        logEvent("scroll_depth", { percent: 100, page: "mackensina" });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-surface flex flex-col items-center overflow-x-clip">
      <SkipLink />
      <CookieConsentBanner />
      <SiteHeader>
        <CaseBreadcrumb current="mackensina" />
      </SiteHeader>
      <main
        id="main"
        tabIndex={-1}
        className="flex max-w-[1080px] lg:px-4 flex-col w-full items-center pb-16 gap-8 px-4 md:px-10 outline-none"
      >
        {/* Title */}
        <h1 className="type-headline text-on-surface font-var-wide">
          {t("case-study.mackensina.content.title")}
        </h1>
        {/* Image */}
        <video
          className=" object-cover w-full rounded-3xl max-h-[335px]"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          aria-label="Prévia do case em vídeo"
        >
          <source
            src="/assets/case-study/mackensina/mackensina.webm"
            type="video/webm"
          />
          Seu navegador não suporta vídeo HTML5.
        </video>
        {/* Challenge Action Impact */}
        <div className="flex flex-col md:flex-row gap-1">
          {/* Challenge */}
          <div className="w-full bg-surface-container hover:-translate-y-1 hover:bg-surface-container-highest flex flex-col p-6 gap-2 rounded-2xl  transition-all items-center justify-center">
            <h3 className="type-title-sm text-on-surface uppercase font-var-bold">
              {t(
                "case-study.mackensina.content.problem_action_result.a.challenge.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.mackensina.content.problem_action_result.a.challenge.text"
                }
                components={{
                  bold: <span className="font-bold text-on-surface" />,
                }}
              />
            </p>
          </div>
          {/* Action */}
          <div className="w-full bg-surface-container hover:-translate-y-1 hover:bg-surface-container-highest flex flex-col p-6 gap-2 rounded-2xl  transition-all items-center justify-center">
            <h3 className="type-title-sm text-on-surface uppercase font-var-bold">
              {t(
                "case-study.mackensina.content.problem_action_result.a.action.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.mackensina.content.problem_action_result.a.action.text"
                }
                components={{
                  bold: <span className="font-bold text-on-surface" />,
                }}
              />
            </p>
          </div>
          {/* Impact */}
          <div className="w-full bg-surface-container hover:-translate-y-1 hover:bg-surface-container-highest flex flex-col p-6 gap-2 rounded-2xl  transition-all items-center justify-center">
            <h3 className="type-title-sm text-on-surface uppercase font-var-bold">
              {t(
                "case-study.mackensina.content.problem_action_result.a.impact.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.mackensina.content.problem_action_result.a.impact.text"
                }
                components={{
                  bold: <span className="font-bold text-on-surface" />,
                }}
              />
            </p>
          </div>
        </div>
        {/* Context */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-var-wide">
            {t("case-study.mackensina.content.sections.1_context.title")}
          </h2>
          <p className="text-on-surface-variant text-lg">
            <Trans
              i18nKey={
                "case-study.mackensina.content.sections.1_context.a.text"
              }
              components={{
                bold: <span className="font-bold text-on-surface" />,
                br: <br />,
                result: <span className="font-bold text-primary" />,
              }}
            />
          </p>
        </div>
        {/* Image */}
        <img
          src={`/assets/case-study/mackensina/case-onboarding.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Telas do novo fluxo de onboarding do Hub MackEnsina`}
          className=" object-cover rounded-3xl "
        />
        {/* Usuários e dores */}
        <h2 className="font-var-wide w-full">
          {t("case-study.mackensina.content.sections.2_users_pains.title")}
        </h2>
        <div className="w-full">
          {/* SCROLLER responsivo */}

          <InfoTable i18nKeyBase="case-study.mackensina.content.sections.2_users_pains" />

          {/* NOTE alinhada ao início da tabela (mobile) e centralizada no lg */}
          <p className="mt-2 text-sm text-on-surface-variant w-[636px] md:mx-auto px-4 md:px-0">
            {t(
              "case-study.mackensina.content.sections.2_users_pains.note.text"
            )}
          </p>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <img
              src="/assets/case-study/mackensina/case-colorpalette.webp"
              alt="Paleta de cores do case"
              className="border border-secondary-fixed w-full h-auto rounded-3xl object-cover"
              loading="eager"
            />
          </div>

          <div className="flex-1 min-w-0">
            <video
              className="w-full h-auto rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              aria-label="Prévia do case em vídeo"
            >
              <source
                src="/assets/case-study/mackensina/logo.webm"
                type="video/webm"
              />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
        <img
          src={`/assets/case-study/mackensina/case-designsystem.webp`}
          width={1600}
          height={882}
          loading="lazy"
          decoding="async"
          alt={`Design system do Hub MackEnsina com cores, tipografia e componentes`}
          className=" object-cover rounded-3xl "
        />
        {/* DUO */}
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <video
              className="w-full h-auto rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              aria-label="Prévia do case em vídeo"
            >
              <source
                src="/assets/case-study/mackensina/medalha_timelapse.webm"
                type="video/webm"
              />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
          <div className="flex-1 min-w-0">
            <img
              src={`/assets/case-study/mackensina/case-gamification.webp`}
              width={1080}
              height={1080}
              loading="lazy"
              decoding="async"
              alt={`Telas de gamificação do Hub MackEnsina`}
              className=" object-cover rounded-3xl "
            />
          </div>
        </div>
        <img
          src={`/assets/case-study/mackensina/case-components.webp`}
          width={1600}
          height={882}
          loading="lazy"
          decoding="async"
          alt={`Biblioteca de componentes do Hub MackEnsina no Figma`}
          className=" h-full rounded-3xl "
        />
        {/* DUO */}
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <img
              src={`/assets/case-study/mackensina/case-sketches.webp`}
              width={1400}
              height={1640}
              loading="lazy"
              decoding="async"
              alt={`Rascunhos de baixa fidelidade das telas do Hub`}
              className=" object-cover rounded-3xl "
            />
          </div>
          <div className="flex-1 min-w-0">
            <img
              src={`/assets/case-study/mackensina/case-screenaudit.webp`}
              width={1400}
              height={1640}
              loading="lazy"
              decoding="async"
              alt={`Auditoria das telas das seis plataformas anteriores`}
              className=" object-cover rounded-3xl "
            />
          </div>
        </div>
        {/* Contributions */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-var-wide">
            {t(
              "case-study.mackensina.content.sections.3_role_contributions.title"
            )}
          </h2>
          <p className="text-on-surface-variant text-lg">
            <Trans
              i18nKey={
                "case-study.mackensina.content.sections.3_role_contributions.description.text"
              }
              components={{
                bold: <span className="font-semibold text-on-surface" />,
                visbadge: <span className="font-semibold text-on-surface" />,
              }}
            />
          </p>
          <Contributions i18nKeyBase="case-study.mackensina.content.sections.3_role_contributions" />
        </div>
        <video
          className="w-full h-auto rounded-3xl object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          aria-label="Prévia do case em vídeo"
        >
          <source
            src="/assets/case-study/mackensina/screen.webm"
            type="video/webm"
          />
          Seu navegador não suporta vídeo HTML5.
        </video>
        {/* Contributions */}
        <img
          src={`/assets/case-study/mackensina/case-signup.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Telas do cadastro unificado`}
          className=" object-cover rounded-3xl "
        />
        <img
          src={`/assets/case-study/mackensina/case-userflow.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Fluxo de usuário do login único`}
          className=" object-cover rounded-3xl "
        />
        <img
          src={`/assets/case-study/mackensina/case-exportardocumento.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Telas de exportação de documento`}
          className=" object-cover rounded-3xl "
        />
        <div className="flex flex-col gap-4 bg-surface-container-low p-6 rounded-xl w-full">
          <Quote
            className="h-7 w-7 text-secondary-container"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1.5}
          />
          <div className="flex flex-col gap-1">
            <blockquote className="text-2xl text-on-surface">
              {t("case-study.mackensina.content.sections.5_impact.quote.text")}
            </blockquote>
            <cite className=" not-italic text-xl text-on-surface-variant">
              {t(
                "case-study.mackensina.content.sections.5_impact.quote.author"
              )}
            </cite>
          </div>
        </div>
        {/* TABELA RESULTADOS */}
        <h2 className="font-var-wide w-full">
          {t("case-study.mackensina.content.sections.5_impact.title")}
        </h2>
        <InfoTable
          i18nKeyBase="case-study.mackensina.content.sections.5_impact"
          variant="results"
        />
        <img
          src={`/assets/case-study/mackensina/case-recursosdidaticos.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Tela de recursos didáticos no desktop`}
          className=" object-cover rounded-3xl "
        />
        <img
          src={`/assets/case-study/mackensina/case-recursosmobile.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Tela de recursos didáticos no celular`}
          className=" object-cover rounded-3xl "
        />
        {/* Impact */}
        {/* Key learnings */}
        <img
          src={`/assets/case-study/mackensina/case-aplicado.webp`}
          width={1600}
          height={880}
          loading="lazy"
          decoding="async"
          alt={`Telas finais do Hub MackEnsina com o design aplicado`}
          className=" object-cover rounded-3xl "
        />
        <NextCase current="mackensina" />
      </main>

      <Footer />
    </div>
  );
}
