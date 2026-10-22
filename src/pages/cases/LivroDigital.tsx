import { Trans, useTranslation } from "react-i18next";


import { useEffect } from "react";
import { logEvent } from "@/utils/gaEvents";

import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import CaseBreadcrumb from "@/components/case-study/CaseBreadcrumb";
import NextCase from "@/components/case-study/NextCase";
import { usePageMeta } from "@/lib/usePageMeta";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Contributions from "@/components/case-study/Contributions";
import InfoTable from "@/components/case-study/InfoTable";
import { MediaTooltip } from "@/components/case-study/MediaToolTip";

import { Quote } from "lucide-react";

export default function CaseLivroDigital() {
  const { t } = useTranslation();
  usePageMeta("SME Digital: Livro");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.25)
        logEvent("scroll_depth", { percent: 25, page: "livro-digital" });
      if (scrolled > 0.5)
        logEvent("scroll_depth", { percent: 50, page: "livro-digital" });
      if (scrolled > 0.75)
        logEvent("scroll_depth", { percent: 75, page: "livro-digital" });
      if (scrolled > 0.95)
        logEvent("scroll_depth", { percent: 100, page: "livro-digital" });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-surface flex flex-col items-center overflow-x-clip">
      <SkipLink />
      <CookieConsentBanner />
      <SiteHeader>
        <CaseBreadcrumb current="livro-digital" />
      </SiteHeader>
      <main
        id="main"
        tabIndex={-1}
        className="flex max-w-[1080px] lg:px-4 flex-col w-full items-center pb-16 gap-8 px-4 md:px-10 outline-none"
      >
        {/* Title */}
        <h1 className="type-headline text-on-surface font-var-wide">
          {t("case-study.livro-digital.content.title")}
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
            src="/assets/case-study/livro-digital/livrodigital.webm"
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
                "case-study.livro-digital.content.problem_action_result.a.challenge.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.livro-digital.content.problem_action_result.a.challenge.text"
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
                "case-study.livro-digital.content.problem_action_result.a.action.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.livro-digital.content.problem_action_result.a.action.text"
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
                "case-study.livro-digital.content.problem_action_result.a.impact.title"
              )}
            </h3>
            <p className="text-on-surface-variant text-center">
              <Trans
                i18nKey={
                  "case-study.livro-digital.content.problem_action_result.a.impact.text"
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
            {t("case-study.livro-digital.content.sections.1_context.title")}
          </h2>
          <p className="text-on-surface-variant text-lg">
            <Trans
              i18nKey={
                "case-study.livro-digital.content.sections.1_context.a.text"
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
        <MediaTooltip
          className="border border-secondary-fixed w-full h-auto rounded-3xl"
          variant="video"
          src="/assets/case-study/livro-digital/livrodigital-v1.webm"
          tooltip="Interface do aplicativo v1.0"
        />
        <MediaTooltip
          className="border border-secondary-fixed w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/mockup.webp"
          width={1600}
          height={886}
          tooltip="Interface do app v2.0 em mockup com novos componentes"
        />

        {/* Usuários e dores */}
        <h2 className="font-var-wide w-full">
          {t("case-study.livro-digital.content.sections.2_users_pains.title")}
        </h2>
        <div className="w-full">
          {/* SCROLLER responsivo */}

          <InfoTable i18nKeyBase="case-study.livro-digital.content.sections.2_users_pains" />

          {/* NOTE alinhada ao início da tabela (mobile) e centralizada no lg */}
          <p className="mt-2 text-sm text-on-surface-variant w-[636px] md:mx-auto px-4 md:px-0">
            {t(
              "case-study.livro-digital.content.sections.2_users_pains.note.text"
            )}
          </p>
        </div>
        <MediaTooltip
          className="border border-secondary-fixed w-full h-auto rounded-3xl"
          variant="video"
          src="/assets/case-study/livro-digital/prototipo-v1.webm"
          tooltip="Protótipo de apresentação do app v1.0. Uma réplica dos livros físicos não otimizado para leitura digital"
        />
        <MediaTooltip
          className="border border-secondary-fixed w-full h-auto rounded-3xl"
          variant="video"
          src="/assets/case-study/livro-digital/prototipo-v2.webm"
          tooltip="Protótipo rápido feito utilizando ProtoPie para apresentação do conceito do app v2.0"
        />
        {/* DUO */}
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <MediaTooltip
              className="border border-secondary-fixed w-full h-auto rounded-3xl"
              variant="image"
              src="/assets/case-study/livro-digital/color.webp"
          width={877}
          height={1028}
              tooltip="Color swatch do app"
            />
          </div>

          <div className="flex-1 min-w-0  ">
            <MediaTooltip
              className="border border-secondary-fixed w-full h-auto rounded-3xl"
              variant="video"
              src="/assets/case-study/livro-digital/loading.webm"
              tooltip="Animação de loading com os logos dos selos do SME"
            />
          </div>
        </div>
        <MediaTooltip
          className="border border-secondary-fixed w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/feature-map.webp"
          width={1600}
          height={883}
          tooltip="Mapa de features do app v2.0"
        />

        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/mini-ds.webp"
          width={1600}
          height={883}
          tooltip="Style guide para guiar decisões de design e uso de tipografia"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/figma-components.webp"
          width={1600}
          height={882}
          tooltip="Componentes do app feitos no Figma"
        />

        {/* Contributions */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-var-wide">
            {t(
              "case-study.livro-digital.content.sections.3_role_contributions.title"
            )}
          </h2>
          <p className="text-on-surface-variant text-lg">
            <Trans
              i18nKey={
                "case-study.livro-digital.content.sections.3_role_contributions.description.text"
              }
              components={{
                bold: <span className="font-semibold text-on-surface" />,
                visbadge: <span className="font-semibold text-on-surface" />,
              }}
            />
          </p>
          <Contributions i18nKeyBase="case-study.livro-digital.content.sections.3_role_contributions" />
        </div>

        {/* Contributions */}
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/userflow.webp"
          width={1600}
          height={882}
          tooltip="Esse fluxo mostra os passos que a pessoa faz no app até conseguir abrir e ler um livro"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/wireframe.webp"
          width={1600}
          height={878}
          tooltip="Wireframes de tela de login e design final"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/mobile.webp"
          width={1600}
          height={882}
          tooltip="Telas em formato mobile: login, livro de inglês baixando e tela da mochila (o nome que demos pro gerenciador de arquivos)"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/app-navbar.webp"
          width={1600}
          height={884}
          tooltip="Navbar do app"
        />
        {/* DUO */}
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <MediaTooltip
              className=" w-full h-auto rounded-3xl"
              variant="image"
              src="/assets/case-study/livro-digital/tablet-ui.webp"
          width={882}
          height={882}
              tooltip="Imagem de interface do leitor de livros digitais na capa do livro de Biologia no breakpoint de tablets"
            />
          </div>

          <div className="flex-1 min-w-0  ">
            <MediaTooltip
              className=" w-full h-auto rounded-3xl"
              variant="image"
              src="/assets/case-study/livro-digital/presentation.webp"
          width={882}
          height={882}
              tooltip="Apresentando do livro digital, com tablet e livro fisíco abertos na mesma página"
            />
          </div>
        </div>
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="video"
          src="/assets/case-study/livro-digital/screens.webm"
          tooltip="Algumas das telas produzidas para o app do livro digital"
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
              {t(
                "case-study.livro-digital.content.sections.5_impact.quote.text"
              )}
            </blockquote>
            <cite className=" not-italic text-xl text-on-surface-variant">
              {t(
                "case-study.livro-digital.content.sections.5_impact.quote.author"
              )}
            </cite>
          </div>
        </div>
        {/* TABELA RESULTADOS */}
        <h2 className="font-var-wide w-full">
          {t("case-study.livro-digital.content.sections.5_impact.title")}
        </h2>
        {/* Impact */}
        <InfoTable
          i18nKeyBase="case-study.livro-digital.content.sections.5_impact"
          variant="results"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/book-manager.webp"
          width={1600}
          height={880}
          tooltip="Tela de admin: Ferramenta de gerenciamento dos livros por selo"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/mochila-desktop.webp"
          width={1600}
          height={884}
          tooltip="Tela da mochila em versão Desktop"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/desktop-ui.webp"
          width={1600}
          height={900}
          tooltip="Tela do livro digital em versão Desktop"
        />

        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/tablet-closeup.webp"
          width={1600}
          height={882}
          tooltip="Imagem de usuário testando a leitura de um livro digital em um tablet"
        />
        <MediaTooltip
          className=" w-full h-auto rounded-3xl"
          variant="image"
          src="/assets/case-study/livro-digital/final.webp"
          width={1600}
          height={836}
          tooltip=""
        />
        <NextCase current="livro-digital" />
      </main>
      <Footer />
    </div>
  );
}
