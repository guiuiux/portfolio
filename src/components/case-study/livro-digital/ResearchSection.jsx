import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaWithCaption from "../MediaWithCaption"; // Adjust the import path if needed

gsap.registerPlugin(ScrollTrigger);

const ResearchSection = ({ t }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select all research items for animation
      const items = sectionRef.current.querySelectorAll(".research-item");

      // Apply ScrollTrigger animation to each item individually
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // Trigger animation when item is 80% in the viewport
              toggleActions: "play none none none", // Play only when entering
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-16 px-6 py-16 max-w-[900px] mx-auto"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-zinc-50 font-whyteinktrap research-item">
        {t("caseStudies.livroDigital.research.title")}
      </h2>

      {/* Description */}
      <p className="text-lg font-light research-item text-zinc-300">
        {t("caseStudies.livroDigital.research.content")}
      </p>

      {/* Insights Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {t("caseStudies.livroDigital.research.insights", {
          returnObjects: true,
        }).map((insight, index) => (
          <div
            key={index}
            className="p-8 border border-zinc-600 rounded-lg flex flex-col w-full md:w-[calc(50%-16px)] research-item"
          >
            {/* Dynamic Icon */}
            <div className="flex items-center justify-start mb-4">
              {Array.isArray(insight.icon) ? (
                <div className="flex items-center gap-1">
                  {insight.icon.map((icon, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-rounded text-lg text-yellow-500"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              ) : (
                <span
                  className={`material-symbols-rounded text-lg ${
                    index === 0
                      ? "text-yellow-400"
                      : index === 1
                        ? "text-pink-500"
                        : "text-green-300"
                  }`}
                >
                  {insight.icon}
                </span>
              )}
            </div>
            {/* Insight Title */}
            <h3 className="font-whyteinktrap text-zinc-50 font-medium text-xl">
              {insight.title}
            </h3>
            {/* Insight Content */}
            <p className="text-zinc-300 font-light">{insight.content}</p>
          </div>
        ))}
      </div>

      {/* Media with Captions */}
      <div className="flex flex-col gap-8">
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_05.webp"
          className="research-item"
          alt={t("caseStudies.livroDigital.gallery.05.alt")}
          caption={t("caseStudies.livroDigital.gallery.05.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_06.webp"
          className="research-item"
          alt={t("caseStudies.livroDigital.gallery.06.alt")}
          caption={t("caseStudies.livroDigital.gallery.06.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_07.webp"
          className="research-item"
          alt={t("caseStudies.livroDigital.gallery.07.alt")}
          caption={t("caseStudies.livroDigital.gallery.07.caption")}
        />
      </div>
    </section>
  );
};

ResearchSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ResearchSection;
