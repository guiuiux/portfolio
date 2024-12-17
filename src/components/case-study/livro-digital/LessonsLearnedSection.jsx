import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LessonsLearnedSection = ({ t }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".lesson-item");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1, // Slight delay between each item
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
        {t("caseStudies.livroDigital.lessonsLearned.title")}
      </h2>

      {/* Lessons List */}
      <div className="flex flex-wrap gap-8">
        {t("caseStudies.livroDigital.lessonsLearned.content", {
          returnObjects: true,
        }).map((lesson, index) => {
          // Define dynamic colors for the border and icon
          const colors = [
            "text-pink-500 border-pink-500",
            "text-yellow-500 border-yellow-500",
            "text-green-500 border-green-500",
            "text-purple-500 border-purple-500",
          ];
          const colorClass = colors[index % colors.length];

          return (
            <div
              key={index}
              className={`lesson-item p-6 border rounded-lg shadow-md flex flex-col gap-4 md:w-[calc(50%-16px)] w-full ${colorClass}`}
            >
              {/* Icon */}
              <span
                className={`material-symbols-rounded text-3xl ${colorClass}`}
              >
                {lesson.icon}
              </span>

              {/* Title and Content */}
              <div>
                <h3 className="text-xl font-whyteinktrap font-medium text-zinc-50">
                  {lesson.title}
                </h3>
                <p className="font-light text-zinc-300">{lesson.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing Statement */}
      <div className="text-center text-zinc-300 font-light">
        <p>{t("caseStudies.livroDigital.close")}</p>
      </div>
    </section>
  );
};

LessonsLearnedSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default LessonsLearnedSection;
