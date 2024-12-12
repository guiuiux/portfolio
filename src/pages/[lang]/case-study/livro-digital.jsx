import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/case-study/livro-digital/HeroSection";
import OverviewSection from "../../../components/case-study/livro-digital/Overview";
import ObjectiveSection from "../../../components/case-study/livro-digital/ObjectiveSection.jsx";
import ChallengeSection from "../../../components/case-study/livro-digital/ChallengeSection.jsx";

gsap.registerPlugin(ScrollTrigger);

const LivroDigital = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const mainRef = useRef(null);

  const colors = useMemo(
    () => [
      "bg-purple-500 text-zinc-50 font-medium",
      "bg-pink-500 text-zinc-950 font-bold",
      "bg-yellow-500 text-zinc-950 font-bold",
      "bg-green-200 text-zinc-950 font-bold",
      "bg-pink-200 text-zinc-950 font-bold",
      "bg-green-500 text-zinc-950 font-bold",
      "bg-purple-500 text-zinc-50 font-medium",
    ],
    [],
  );

  const randomizeColor = useCallback(
    (index) => colors[index % colors.length],
    [colors],
  );

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation setup goes here if needed
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="case-study flex flex-col items-center w-full overflow-x-hidden"
    >
      {/* Header Container */}
      <div className="w-full">
        <div className="max-w-[900px] w-full mx-auto  z-20">
          <Header
            textColor="text-zinc-50 font-light"
            uxColor="text-pink-400 text-zinc-400"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full overflow-x-hidden">
        <HeroSection />
      </div>

      {/* Main Content */}
      <main className="max-w-[900px] w-full mx-auto flex flex-col gap-32 overflow-hidden">
        <OverviewSection t={t} randomizeColor={randomizeColor} />
        <ObjectiveSection t={t} />
        <ChallengeSection t={t} />
      </main>

      {/* Footer */}
      <div className="w-full mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default LivroDigital;
