import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaWithCaption from "../MediaWithCaption";

gsap.registerPlugin(ScrollTrigger);

const ResultsSection = ({ t }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".result-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // Trigger animation when the item is 80% in view
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-16 px-6 py-16 max-w-[900px] w-full"
    >
      {/* Title */}
      <h2 className="text-4xl font-semibold font-whyteinktrap text-zinc-50 text-center">
        {t("caseStudies.livroDigital.results.title")}
      </h2>

      {/* Results List */}
      <div className="flex flex-wrap gap-8">
        {t("caseStudies.livroDigital.results.content", {
          returnObjects: true,
        }).map((result, index) => (
          <div
            key={index}
            className="result-item flex flex-col gap-4 p-6 bg-zinc-900 rounded-lg shadow-md md:w-[calc(50%-16px)] w-full"
          >
            {/* Icon */}
            <div className="flex items-center justify-between">
              <span className="material-symbols-rounded text-green-500">
                check_circle
              </span>
            </div>

            {/* Title and Content */}
            <div>
              <h3 className="text-xl font-whyteinktrap font-medium text-zinc-50">
                {result.title}
              </h3>
              <p className="font-light text-zinc-300">{result.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Media Section */}
      <div className="flex flex-col gap-8">
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_20.webp"
          className="result-item"
          alt={t("gallery.20.alt")}
          caption={t("caseStudies.livroDigital.gallery.20.caption")}
        />
      </div>
    </section>
  );
};

ResultsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ResultsSection;
