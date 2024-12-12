import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaWithCaption from "../MediaWithCaption";
import Lottie from "lottie-react";
import autoAwesome from "../../../assets/lottie/auto_awesome.json";

gsap.registerPlugin(ScrollTrigger);

const OverviewSection = ({ t, randomizeColor }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const infoCardRef = useRef(null);
  const techStackRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation (trigger when title is in view)
      gsap.from("[data-animate-title]", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-animate-title]",
          start: "top 85%",
        },
      });

      // Media animation
      gsap.from(mediaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: mediaRef.current,
          start: "top 85%",
        },
      });

      // Info Card animation
      // Animate entire card first
      gsap.from(infoCardRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: infoCardRef.current,
          start: "top 85%",
        },
      });

      // Tech Stack animation
      const techItems =
        techStackRef.current.querySelectorAll("[data-tech-item]");
      gsap.from(techItems, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 85%",
        },
      });

      // Skills animation
      gsap.from(skillsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const techStackLinks = [
    ["https://www.adobe.com/br/products/aftereffects.html", "After Effects"],
    ["https://react.dev/", "ReactJS"],
    ["https://www.figma.com/", "Figma"],
    ["https://airbnb.io/lottie/", "Lottie"],
    ["https://www.protopie.io/", "ProtoPie"],
    ["https://www.adobe.com/br/products/indesign.html", "InDesign"],
    ["https://www.adobe.com/br/products/illustrator.html", "Illustrator"],
    ["https://www.adobe.com/br/products/photoshop.html", "Photoshop"],
    ["https://sass-lang.com/", "Sass"],
    ["https://notion.so/", "Notion"],
    ["https://github.com/", "Github"],
    ["https://code.visualstudio.com/", "VS Code"],
  ];

  const skills = t("caseStudies.livroDigital.overview.skills.content", {
    returnObjects: true,
  });

  return (
    <section
      className="flex flex-col gap-16 px-6 max-w-[900px] w-full mx-auto"
      ref={sectionRef}
    >
      {/* Title */}
      <h2
        className="text-2xl font-semibold font-whyteinktrap"
        data-animate-title
      >
        {t("caseStudies.livroDigital.overview.title")}
      </h2>

      {/* Media */}
      <div ref={mediaRef}>
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_01.webp"
          alt={t("caseStudies.livroDigital.gallery.01.alt")}
          caption={t("caseStudies.livroDigital.gallery.01.caption")}
        />
      </div>

      {/* Info Card */}
      <div
        className="flex flex-col gap-4 p-8 border-zinc-600 border rounded-xl"
        ref={infoCardRef}
      >
        {/* Client */}
        <div className="flex flex-col pb-4 border-b border-zinc-800">
          <p className="font-whyteinktrap font-medium">
            {t("caseStudies.livroDigital.overview.client.title")}
          </p>
          <a href="https://www.mackenzie.br/">
            <p className="text-linkblue-500 font-light underline hover:text-linkblue-300 transition-colors duration-150">
              {t("caseStudies.livroDigital.overview.client.name")}
            </p>
          </a>
        </div>

        {/* Role */}
        <div className="flex flex-col pb-4 border-b border-zinc-800">
          <p className="font-whyteinktrap font-medium">
            {t("caseStudies.livroDigital.overview.role.title")}
          </p>
          <p className="text-zinc-300 font-light">
            {t("caseStudies.livroDigital.overview.role.content")}
          </p>
        </div>

        {/* Team */}
        <div className="flex flex-col pb-4 border-b border-zinc-800">
          <p className="font-whyteinktrap font-medium">
            {t("caseStudies.livroDigital.overview.team.title")}
          </p>
          <p className="text-zinc-300 font-light">
            {t("caseStudies.livroDigital.overview.team.content")}
          </p>
        </div>

        {/* Platforms */}
        <div className="flex flex-col">
          <p className="font-whyteinktrap font-medium">
            {t("caseStudies.livroDigital.overview.platforms.title")}
          </p>
          <div className="flex gap-4 font-light text-zinc-300">
            <div className="flex gap-2 items-center">
              <img
                src="/images/livro-digital/icon-android.png"
                alt="Android OS Icon"
                className="w-4 h-4"
              />
              Android
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/images/livro-digital/icon-apple.png"
                alt="Apple iOS Icon"
                className="w-4 h-auto"
              />
              iOS
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/images/livro-digital/icon-web.png"
                alt="Web Icon"
                className="w-4 h-auto"
              />
              Web
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col gap-2" ref={techStackRef}>
        <p className="font-whyteinktrap font-medium">
          {t("caseStudies.livroDigital.overview.techStack.title")}
        </p>
        <div className="flex flex-wrap gap-x-3 font-light">
          {techStackLinks.map(([link, label]) => (
            <a
              key={label}
              href={link}
              className="text-linkblue-500 underline hover:text-linkblue-300 transition-colors duration-150"
              data-tech-item
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2" ref={skillsRef}>
        <div className="flex gap-2 items-center">
          <Lottie animationData={autoAwesome} loop autoPlay />
          <p className="font-whyteinktrap font-medium text-xl">
            {t("caseStudies.livroDigital.overview.skills.title")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-1 rounded-full font-whyteinktrap ${randomizeColor(
                index,
              )} transition-transform duration-150 hover:scale-105`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

OverviewSection.propTypes = {
  t: PropTypes.func.isRequired,
  randomizeColor: PropTypes.func.isRequired,
};

export default OverviewSection;
