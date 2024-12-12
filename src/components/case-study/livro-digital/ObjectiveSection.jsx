import PropTypes from "prop-types";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ObjectiveSection = ({ t }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector("[data-animate='item']");
      gsap.from(items, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-32 px-8 flex flex-col sm:gap-16 gap-8 border-t border-b border-zinc-700 w-full transition-all duration-300"
    >
      <h2
        className="sm:text-6xl text-4xl font-semibold font-whyteinktrap w-full text-center"
        data-animate="item"
      >
        {t("caseStudies.livroDigital.objective.title")}
      </h2>
      <p
        className="sm:text-3xl text-xl text-zinc-300 font-light text-center"
        data-animate="item"
      >
        {t("caseStudies.livroDigital.objective.description")}
      </p>
    </section>
  );
};

ObjectiveSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ObjectiveSection;
