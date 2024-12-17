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
import ResearchSection from "../../../components/case-study/livro-digital/ResearchSection.jsx";
import SolutionsSection from "../../../components/case-study/livro-digital/SolutionsSection.jsx";
import ResultsSection from "../../../components/case-study/livro-digital/ResultsSection.jsx";
import LessonsLearnedSection from "../../../components/case-study/livro-digital/LessonsLearnedSection.jsx";

import { trackEvent } from "../../../utils/analytics"; // Import your analytics function

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

  // Track user progress with analytics
  const trackScrollProgress = useCallback(() => {
    const sections = [
      { id: "hero", label: "Hero Section" },
      { id: "overview", label: "Overview Section" },
      { id: "objective", label: "Objective Section" },
      { id: "challenge", label: "Challenge Section" },
      { id: "research", label: "Research Section" },
      { id: "solutions", label: "Solutions Section" },
      { id: "results", label: "Results Section" },
      { id: "lessons", label: "Lessons Learned Section" },
    ];

    sections.forEach(({ id, label }) => {
      ScrollTrigger.create({
        trigger: `#${id}`, // Ensure each section has a unique `id`
        start: "top 80%",
        onEnter: () => {
          trackEvent({
            action: "scroll",
            category: "Livro Digital Scroll Progress",
            label, // Log the section's label
          });
          console.log(`User entered: ${label}`); // Optional: Debug log
        },
      });
    });
  }, []);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      trackScrollProgress();
    }, mainRef);

    return () => ctx.revert();
  }, [trackScrollProgress]);

  return (
    <div
      ref={mainRef}
      className="case-study flex flex-col items-center w-full overflow-x-hidden"
    >
      {/* Header Container */}
      <div className="w-full">
        <div className="max-w-[900px] w-full mx-auto z-20">
          <Header
            textColor="text-zinc-50 font-light"
            uxColor="text-pink-400 text-zinc-400"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="w-full overflow-x-hidden">
        <HeroSection />
      </div>

      {/* Main Content */}
      <main className="max-w-[900px] w-full mx-auto flex flex-col gap-32 overflow-hidden">
        <section id="overview">
          <OverviewSection t={t} randomizeColor={randomizeColor} />
        </section>
        <section id="objective">
          <ObjectiveSection t={t} />
        </section>
        <section id="challenge">
          <ChallengeSection t={t} />
        </section>
        <section id="research">
          <ResearchSection t={t} />
        </section>
        <section id="solutions">
          <SolutionsSection t={t} />
        </section>
        <section id="results">
          <ResultsSection t={t} />
        </section>
        <section id="lessons">
          <LessonsLearnedSection t={t} />
        </section>
      </main>

      {/* Footer */}
      <div className="w-full mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default LivroDigital;
