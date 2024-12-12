import PropTypes from "prop-types";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaWithCaption from "../MediaWithCaption"; // Adjust the import path if needed

gsap.registerPlugin(ScrollTrigger);

const ChallengeSection = ({ t }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector("[data-animate-item]");

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const barriersContent = t(
    "caseStudies.livroDigital.challenge.techbarr.content",
    {
      returnObjects: true,
    },
  );

  return (
    <section ref={sectionRef} className="py-16 px-8 flex flex-col gap-8 w-full">
      <h2
        data-animate-item
        className="text-4xl text-center font-semibold font-whyteinktrap"
      >
        {t("caseStudies.livroDigital.challenge.title")}
      </h2>

      <p
        data-animate-item
        className="text-zinc-300 font-light text-lg text-center max-w-[700px] mx-auto"
      >
        {t("caseStudies.livroDigital.challenge.description")}
      </p>

      <div className="flex flex-col gap-8" data-animate-item>
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_02.mp4"
          alt={t("caseStudies.livroDigital.gallery.02.alt")}
          caption={t("caseStudies.livroDigital.gallery.02.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_03.webp"
          alt={t("caseStudies.livroDigital.gallery.03.alt")}
          caption={t("caseStudies.livroDigital.gallery.03.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_04.webp"
          alt={t("caseStudies.livroDigital.gallery.04.alt")}
          caption={t("caseStudies.livroDigital.gallery.04.caption")}
        />
      </div>

      <div data-animate-item className="flex flex-col gap-4">
        <h3
          data-animate-item
          className="text-lg font-semibold font-whyteinktrap text-center"
        >
          {t("caseStudies.livroDigital.challenge.techbarr.title")}
        </h3>
        <div
          data-animate-item
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {barriersContent.map((barrier, index) => (
            <div
              key={index}
              data-animate-item
              className="p-4 bg-zinc-900 rounded-md flex gap-3 font-light text-zinc-300 items-center"
            >
              <span className="material-symbols-rounded text-[#FF2B60]">
                error
              </span>
              <span>{barrier}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ChallengeSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ChallengeSection;
