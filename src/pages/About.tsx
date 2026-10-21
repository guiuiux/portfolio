// src/pages/SobreMim.tsx
import { useEffect } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import { usePageMeta } from "@/lib/usePageMeta";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { logEvent } from "@/utils/gaEvents";

export default function AboutMe() {
  usePageMeta("Sobre mim");
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.25)
        logEvent("scroll_depth", { percent: 25, page: "sobre" });
      if (scrolled > 0.5)
        logEvent("scroll_depth", { percent: 50, page: "sobre" });
      if (scrolled > 0.75)
        logEvent("scroll_depth", { percent: 75, page: "sobre" });
      if (scrolled > 0.95)
        logEvent("scroll_depth", { percent: 100, page: "sobre" });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-surface flex flex-col items-center overflow-x-clip">
      <SkipLink />
      <CookieConsentBanner />
      <SiteHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="underline">
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-var-chub">
                  Sobre mim
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </SiteHeader>
      <main
        id="main"
        tabIndex={-1}
        className="flex max-w-[1080px] lg:px-4 flex-col w-full items-center pb-16 gap-8 px-4 md:px-10 outline-none"
      >
        {/* SOBRE MIM */}
        <section className="w-full flex flex-col gap-4">
          <h1 className="font-var-wide text-on-surface text-2xl md:text-3xl">
            Quem eu sou
          </h1>
          <div className="flex flex-row w-full items-center bg-surface-container rounded-3xl pt-4 justify-center">
            <img
              src="/assets/video/framed-rage.gif"
              alt=""
              className="rounded-2xl object-cover max-h-[200px] -translate-x-[8px]"
            />
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed w-11/12">
            Na adolescência eu andava todos os dias de skate por São Paulo.
            Antes e depois das sessões, eu e meus amigos assistíamos vídeos de
            skate para nos inspirarmos. Mas o que me deixava perplexo era:{" "}
            <span className="font-semibold text-on-surface">
              como eram feitas as animações das intros desses vídeos?
            </span>
          </p>
          <div className="flex flex-row w-full items-center justify-center">
            <video
              className="rounded-2xl object-cover max-h-[240px]"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              aria-label="Vídeo em loop de uma sessão de skate"
            >
              <source src="/assets/video/skate.webm" type="video/webm" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Essa curiosidade iniciou minha jornada profissional, me
            proporcionando a oportunidade de trabalhar em animações para a TV
            aberta, de conhecer o{" "}
            <a
              className="text-primary font-medium underline"
              href="https://wikicasteloratimbum.fandom.com/pt-br/wiki/Dr._Abobrinha"
            >
              Doutor Abobrinha
            </a>{" "}
            e de viajar o mundo para estudar artes visuais, design e animação em
            Vancouver, no Canadá.
          </p>

          <p className="text-on-surface-variant text-lg leading-relaxed">
            Sou casado com minha melhor amiga, pai de uma criança que parece que
            toma Red Bull em vez de Toddy, e filho de pais que me ensinaram
            sobre fé, generosidade e trabalho. Tenho certeza de que Jesus é quem
            disse ser e que está vivo — e isso guia a forma como penso e como
            sirvo as pessoas.
          </p>

          <hr className="border-surface-container my-2" />
          <video
            className=" object-contain max-h-[140px] rounded-3xl "
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            aria-label="Animação em loop de mãos digitando em um teclado"
          >
            <source src="/assets/video/teclando.webm" type="video/webm" />
            Seu navegador não suporta vídeo HTML5.
          </video>
          <p className="text-on-surface text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">Hoje sou Product Designer</span> —
            direto, dev-friendly e focado em resultado. Se o que você precisa é{" "}
            <span className="font-semibold">
              transformar complexidade em clareza
            </span>
            , <span className="font-semibold">reduzir fricção digital</span> e{" "}
            <span className="font-semibold">gerar retorno real</span>, então é
            simples:{" "}
            <span className="font-var-chub text-primary">
              me contratar custa menos do que continuar com o problema.
            </span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
