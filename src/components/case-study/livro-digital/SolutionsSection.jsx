import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaWithCaption from "../MediaWithCaption";

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = ({ t }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".solution-item");

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
      <h2 className="text-4xl font-semibold font-whyteinktrap text-zinc-50 text-center solution-item">
        {t("caseStudies.livroDigital.solutions.title")}
      </h2>

      {/* Description */}
      <p className="text-lg text-zinc-300 font-light text-center solution-item">
        {t("caseStudies.livroDigital.solutions.content")}
      </p>

      {/* Features Section */}
      <div className="flex flex-wrap gap-2">
        {t("caseStudies.livroDigital.solutions.features", {
          returnObjects: true,
        }).map((feature, index) => (
          <div
            key={index}
            className="solution-item px-4 py-2 bg-zinc-900 text-zinc-300 rounded-full text-sm font-medium shadow-md"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Media Section */}
      <div className="flex flex-col gap-8">
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_08.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.08.alt")}
          caption={t("caseStudies.livroDigital.gallery.08.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_08m.webm"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.08m.alt")}
          caption={t("caseStudies.livroDigital.gallery.08m.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_09.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.09.alt")}
          caption={t("caseStudies.livroDigital.gallery.09.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_10.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.10.alt")}
          caption={t("caseStudies.livroDigital.gallery.10.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_11.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.11.alt")}
          caption={t("caseStudies.livroDigital.gallery.11.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15m2.webm"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.15m2.alt")}
          caption={t("caseStudies.livroDigital.gallery.15m2.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_12.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.12.alt")}
          caption={t("caseStudies.livroDigital.gallery.12.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_23.webm"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.23.alt")}
          caption={t("caseStudies.livroDigital.gallery.13.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_13.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.13.alt")}
          caption={t("caseStudies.livroDigital.gallery.13.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_14.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.14.alt")}
          caption={t("caseStudies.livroDigital.gallery.14.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.15.alt")}
          caption={t("caseStudies.livroDigital.gallery.15.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_16.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.16.alt")}
          caption={t("caseStudies.livroDigital.gallery.16.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_17.webp"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.17.alt")}
          caption={t("caseStudies.livroDigital.gallery.17.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15m.mp4"
          className="solution-item"
          alt={t("caseStudies.livroDigital.gallery.15m.alt")}
          caption={t("caseStudies.livroDigital.gallery.15m.caption")}
        />
      </div>
    </section>
  );
};

SolutionsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default SolutionsSection;
