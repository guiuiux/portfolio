import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import heroVid from "../../assets/videos/livrodigital--card.webm";

const HeroSection = () => {
  const { t } = useTranslation();
  const arrowRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the arrow
    gsap.to(arrowRef.current, {
      opacity: 0.2,
      yoyo: true,
      repeat: -1,
      y: 20,
      duration: 0.618,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="w-full flex flex-col gap-1 p-6 text-center max-w-[900px] h-dvh "
      data-view-transition="hero-background"
    >
      <video
        src={heroVid}
        className="absolute inset-0 w-full h-dvh transition-all duration-200 object-cover -z-10 opacity-30 "
        autoPlay
        muted
        loop
      />
      <div className="flex flex-col gap-4 h-full justify-center -translate-y-36">
        <h1 className="text-5xl mb-0 font-bold font-whyteinktrap">
          {t("caseStudies.livroDigital.heroTitle")}
        </h1>
        <p className="text-2xl mt-0 font-light text-zinc-300">
          {t("caseStudies.livroDigital.heroSubtitle")}
        </p>
        {/* Animated Arrow */}
        <div className="flex flex-col justify-center mt-8 ">
          <p className="text-zinc-400 text-sm">
            {t("caseStudies.livroDigital.scroll")}
          </p>
          <span
            ref={arrowRef}
            className="material-symbols-rounded text-zinc-300 "
          >
            <span className="text-5xl">keyboard_arrow_down</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
