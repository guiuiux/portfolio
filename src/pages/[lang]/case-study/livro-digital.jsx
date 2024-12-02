import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import MediaWithCaption from "../../../components/case-study/MediaWithCaption";
import HeroSection from "../../../components/case-study/HeroSection";

const LivroDigital = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  const colors = [
    "bg-purple-500 text-zinc-50 font-medium", // Accessibility
    "bg-pink-500 text-zinc-950 font-bold", // Motion
    "bg-yellow-500 text-zinc-950 font-bold", // UI Design
    "bg-green-200 text-zinc-950 font-bold", // Programming
    "bg-pink-200 text-zinc-950 font-bold", // Editorial Design
    "bg-green-500 text-zinc-950 font-bold", // Interactive Prototyping
    "bg-purple-500 text-zinc-50 font-medium", // UX Design
  ];

  const randomizeColor = (index) => {
    return colors[index % colors.length]; // Ensures consistent coloring based on index
  };

  {
    /* Features Component */
  }

  const features = t("caseStudies.livroDigital.solutions.features", {
    returnObjects: true,
  });

  const Features = ({ features }) => {
    const [activeIndex, setActiveIndex] = useState(1); // Index of the glowing item
    const [isHovering, setIsHovering] = useState(false); // Whether the user is hovering
    const [shuffledColors, setShuffledColors] = useState([]); // Shuffled playlist of colors
    const [shuffledIndices, setShuffledIndices] = useState([]); // Shuffled playlist of feature indices

    const colors = useMemo(
      () => [
        "bg-pink-500",
        "bg-yellow-500",
        "bg-green-400",
        "bg-blue-500",
        "bg-purple-500",
      ],
      [],
    );

    // Helper function to shuffle an array
    const shuffleArray = (array) => {
      return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
      // Initialize shuffled playlists for features and colors
      setShuffledIndices(shuffleArray([...Array(features.length).keys()]));
      setShuffledColors(shuffleArray(colors));
    }, [features, colors]);

    useEffect(() => {
      if (isHovering) return; // Stop random lighting when hovering

      let currentIndex = 0;

      const interval = setInterval(() => {
        // Highlight the next item from the shuffled index playlist
        setActiveIndex(shuffledIndices[currentIndex]);

        console.log(
          `Feature "${features[shuffledIndices[currentIndex]]}" is now highlighted with color "${shuffledColors[currentIndex % shuffledColors.length]}"`,
        );

        // Move to the next index or reshuffle when the cycle completes
        currentIndex++;
        if (currentIndex >= shuffledIndices.length) {
          currentIndex = 0;
          setShuffledIndices(shuffleArray([...Array(features.length).keys()]));
          setShuffledColors(shuffleArray(colors));
          console.log("Reshuffling features and colors...");
        }
      }, 750); // Change the glowing item every second

      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [
      shuffledIndices,
      shuffledColors,
      isHovering,
      features.length,
      colors,
      features,
    ]);

    return (
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => {
          const isActive = index === activeIndex && !isHovering; // Highlight if active and not hovering
          // Determine the background color based on active state

          return (
            <span
              key={index}
              className={`text-sm font-whyteinktrap font-medium py-1 px-[10px] rounded-full transition-all duration-200  ${
                isHovering && activeIndex === index
                  ? `${shuffledColors[index % shuffledColors.length]} ${
                      shuffledColors[index % shuffledColors.length] ===
                      "bg-purple-500"
                        ? "text-zinc-50 scale-125"
                        : "text-zinc-950 scale-125"
                    }`
                  : isActive
                    ? `${shuffledColors[activeIndex % shuffledColors.length]} ${
                        shuffledColors[activeIndex % shuffledColors.length] ===
                        "bg-purple-500"
                          ? "text-zinc-50 scale-125"
                          : "text-zinc-950 scale-125"
                      }`
                    : "bg-zinc-500 text-zinc-950"
              }`}
              onMouseEnter={() => {
                setIsHovering(true);
                setActiveIndex(index); // Highlight only the hovered item
                console.log(`Hovered on "${feature}"`);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setActiveIndex(null); // Resume random lighting
                console.log("Hover ended");
              }}
            >
              {feature}
            </span>
          );
        })}
      </div>
    );
  };

  Features.propTypes = {
    features: PropTypes.array.isRequired,
  };

  return (
    <div className="case-study flex flex-col gap-32 w-full items-center ">
      {/* Header */}
      <div className="max-w-[900px] w-full z-20">
        <Header
          textColor="text-zinc-50 font-light"
          uxColor="text-pink-400 text-zinc-400"
        />
      </div>

      {/* Hero Section */}
      <div>
        <HeroSection />
        {/* Overview Section */}
        <section className="flex flex-col gap-16 px-6 max-w-[900px]">
          <h2 className="text-2xl font-semibold font-whyteinktrap">
            {t("caseStudies.livroDigital.overview.title")}
          </h2>
          <MediaWithCaption
            src="/images/livro-digital/livro-digital_01.webp"
            alt={t("gallery.01.alt")}
            caption={t("gallery.01.caption")}
          />
          <div className="flex flex-col gap-4 p-8 border-zinc-600 border rounded-xl">
            <div className="flex flex-col pb-4 border-b border-zinc-800">
              <p className="font-whyteinktrap font-medium">
                {t("caseStudies.livroDigital.overview.client.title")}
              </p>
              <a href="https://www.mackenzie.br/">
                <p className="text-linkblue-500 font-light underline">
                  {t("caseStudies.livroDigital.overview.client.name")}
                </p>
              </a>
            </div>
            <div className="flex flex-col pb-4 border-b border-zinc-800">
              <p className="font-whyteinktrap font-medium ">
                {t("caseStudies.livroDigital.overview.role.title")}
              </p>
              <p className="text-zinc-300 font-light">
                {t("caseStudies.livroDigital.overview.role.content")}
              </p>
            </div>
            <div className="flex flex-col pb-4 border-b border-zinc-800">
              <p className="font-whyteinktrap font-medium">
                {t("caseStudies.livroDigital.overview.team.title")}
              </p>
              <p className="text-zinc-300 font-light">
                {t("caseStudies.livroDigital.overview.team.content")}
              </p>
            </div>
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
                    alt="Apple and iOS Icon"
                    className="w-4 h-fit-content"
                  />
                  iOS
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src="/images/livro-digital/icon-web.png"
                    alt="Android OS Icon"
                    className="w-4 h-fit-content"
                  />
                  Android
                </div>
              </div>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="flex flex-col gap-2">
            <p className="font-whyteinktrap font-medium">
              {t("caseStudies.livroDigital.overview.techStack.title")}
            </p>
            <div className="flex flex-wrap gap-x-3 font-light">
              <a
                href="https://www.adobe.com/br/products/aftereffects.html"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                After Effects
              </a>
              <a
                href="https://react.dev/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                ReactJS
              </a>
              <a
                href="https://www.figma.com/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Figma
              </a>
              <a
                href="https://airbnb.io/lottie/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Lottie
              </a>
              <a
                href="https://www.protopie.io/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                ProtoPie
              </a>
              <a
                href="https://www.adobe.com/br/products/indesign.html"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                InDesign
              </a>
              <a
                href="https://www.adobe.com/br/products/illustrator.html"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Illustrator
              </a>
              <a
                href="https://www.adobe.com/br/products/photoshop.html"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Photoshop
              </a>
              <a
                href="https://sass-lang.com/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Saas
              </a>
              <a
                href="https://notion.so/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Notion
              </a>
              <a
                href="https://github.com/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                Github
              </a>
              <a
                href="https://code.visualstudio.com/"
                className="text-linkblue-500 underline hover:text-linkblue-300"
              >
                VS Code
              </a>
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="material-symbols-rounded">auto_awesome</span>
              <p className="font-whyteinktrap font-medium text-xl">
                {t("caseStudies.livroDigital.overview.skills.title")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t("caseStudies.livroDigital.overview.skills.content", {
                returnObjects: true,
              }).map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-1 rounded-full font-whyteinktrap ${randomizeColor(index)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Objective Section */}
      <section className="max-w-[900px]  py-32 mx-8 flex flex-col gap-16 border-t border-b border-zinc-700">
        <h2 className="text-4xl font-semibold font-whyteinktrap w-full text-center">
          {t("caseStudies.livroDigital.objective.title")}
        </h2>
        <p className="text-xl text-zinc-300 font-light text-center">
          {t("caseStudies.livroDigital.objective.description")}
        </p>
      </section>

      {/* Challenge Section */}
      <section className="flex flex-col gap-16 challenge-section py-8 px-8 max-w-[900px]">
        <h2 className="text-4xl text-center font-semibold font-whyteinktrap">
          {t("caseStudies.livroDigital.challenge.title")}
        </h2>
        <p className="text-zinc-300 font-light text-lg">
          {t("caseStudies.livroDigital.challenge.description")}
        </p>
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_02.mp4"
          alt={t("gallery.02.alt")}
          caption={t("gallery.02.caption")}
        />
        {/* Tech barriers */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold font-whyteinktrap">
            {t("caseStudies.livroDigital.challenge.techbarr.title")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {t("caseStudies.livroDigital.challenge.techbarr.content", {
              returnObjects: true,
            }).map((skill, index) => (
              <span
                key={index}
                className="p-4 bg-zinc-900 rounded-md flex gap-3 font-light text-zinc-300 items-center md:w-[calc(50%-8px)] w-full"
              >
                <span className="material-symbols-rounded text-[#FF2B60]">
                  error
                </span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <MediaWithCaption
            src="/images/livro-digital/livro-digital_03.webp"
            alt={t("gallery.03.alt")}
            caption={t("gallery.03.caption")}
          />
          <MediaWithCaption
            src="/images/livro-digital/livro-digital_04.webp"
            alt={t("gallery.04.alt")}
            caption={t("gallery.04.caption")}
          />
        </div>
      </section>

      {/* Research Section */}
      <section className=" max-w-[900px] p-6 flex flex-col gap-16">
        <h2 className="text-2xl font-semibold font-whyteinktrap">
          {t("caseStudies.livroDigital.research.title")}
        </h2>
        <div className="flex flex-col gap-8">
          <MediaWithCaption
            src="/images/livro-digital/livro-digital_05.webp"
            alt={t("gallery.05.alt")}
            caption={t("gallery.05.caption")}
          />
          <MediaWithCaption
            src="/images/livro-digital/livro-digital_06.webp"
            alt={t("gallery.06.alt")}
            caption={t("gallery.06.caption")}
          />
        </div>
        <p className="flex font-light text-zinc-300">
          {t("caseStudies.livroDigital.research.content")}
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          {t("caseStudies.livroDigital.research.insights", {
            returnObjects: true,
          }).map((insight, index) => (
            <div
              key={index}
              className="p-8 border gap-3 border-zinc-600 rounded-lg flex flex-col w-full font-light text-zinc-300"
            >
              {/* Dynamic Icon Rendering */}
              <div className="flex items-center w-6 h-6 rounded-full ">
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
                    className={`material-symbols-outlined text-lg ${
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
              <div>
                <h3 className="font-whyteinktrap font-medium text-zinc-50">
                  {insight.title}
                </h3>
                {/* Insight Content */}
                <p className="text-zinc-300">{insight.content}</p>
              </div>
            </div>
          ))}
        </div>
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_07.webp"
          alt={t("gallery.07.alt")}
          caption={t("gallery.07.caption")}
        />
      </section>

      {/* Solutions Section */}
      <section className="solutions-section flex flex-col gap-16 p-6 max-w-[900px]">
        <h2 className="text-2xl font-semibold">
          {t("caseStudies.livroDigital.solutions.title")}
        </h2>
        <p className="flex font-light text-zinc-300">
          {t("caseStudies.livroDigital.solutions.content")}
        </p>

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_08.webp"
          alt={t("gallery.08.alt")}
          caption={t("gallery.08.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_08m.webm"
          alt={t("gallery.08m.alt")}
          caption={t("gallery.08m.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_09.webp"
          alt={t("gallery.09.alt")}
          caption={t("gallery.09.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_10.webp"
          alt={t("gallery.10.alt")}
          caption={t("gallery.10.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_11.webp"
          alt={t("gallery.11.alt")}
          caption={t("gallery.11.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15m2.webm"
          alt={t("gallery.15m2.alt")}
          caption={t("gallery.15m2.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_12.webp"
          alt={t("gallery.12.alt")}
          caption={t("gallery.12.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_13.webp"
          alt={t("gallery.13.alt")}
          caption={t("gallery.13.caption")}
        />

        <div className="flex flex-col gap-4">
          <h3 className="font-whyteinktrap">Features and solutions</h3>
          <div className="flex flex-wrap gap-2">
            <Features features={features} />
          </div>
        </div>

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_14.webp"
          alt={t("gallery.14.alt")}
          caption={t("gallery.14.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15.webp"
          alt={t("gallery.15.alt")}
          caption={t("gallery.15.caption")}
        />

        {/* Splash and loading animations crafted in After Effects and optimized for use with Lottie. */}

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_16.webp"
          alt={t("gallery.16.alt")}
          caption={t("gallery.16.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_18.webp"
          alt={t("gallery.18.alt")}
          caption={t("gallery.18.caption")}
        />
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_19.webp"
          alt={t("gallery.19.alt")}
          caption={t("gallery.19.caption")}
        />

        <MediaWithCaption
          src="/images/livro-digital/livro-digital_15m.mp4"
          alt={t("gallery.15m.alt")}
          caption={t("gallery.15m.caption")}
        />
      </section>

      {/* Results Section */}
      <section className="flex flex-col gap-16 p-6 max-w-[900px]">
        <h2 className="text-2xl font-semibold">
          {t("caseStudies.livroDigital.results.title")}
        </h2>
        <MediaWithCaption
          src="/images/livro-digital/livro-digital_20.webp"
          alt={t("gallery.20.alt")}
          caption={t("gallery.20.caption")}
        />
        <div className="flex flex-wrap gap-4">
          {t("caseStudies.livroDigital.results.content", {
            returnObjects: true,
          }).map((result, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900 rounded-lg shadow-md flex flex-col gap-2 md:w-[calc(50%-8px)] w-full"
            >
              <span className="material-symbols-rounded text-green-500">
                check_circle
              </span>
              <div>
                <h3 className="text-xl font-whyteinktrap font-medium text-zinc-50">
                  {result.title}
                </h3>
                <p className="font-light text-zinc-300">{result.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="flex flex-col gap-8 mx-6 py-32 border-y max-w-[900px]">
        <h2 className="text-3xl font-semibold font-whyteinktrap">
          {t("caseStudies.livroDigital.lessonsLearned.title")}
        </h2>
        <div className="flex flex-wrap gap-8 md:gap-4">
          {t("caseStudies.livroDigital.lessonsLearned.content", {
            returnObjects: true,
          }).map((result, index) => {
            // Define the colors array in order
            const colors = [
              "-pink-500",
              "-yellow-500",
              "-green-300",
              "-purple-500",
            ];

            // Determine the border color based on the index
            const colorResult = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`p-6 border rounded-lg shadow-md flex flex-col gap-2 border${colorResult} md:w-[calc(50%-16px)] w-full`}
              >
                <div>
                  <div className="flex w-full justify-between items-center text-center">
                    <h3 className="text-xl font-whyteinktrap font-medium text-center text-zinc-50">
                      {result.title}
                    </h3>
                    <span
                      className={`material-symbols-rounded text${colorResult}`}
                    >
                      {result.icon}
                    </span>
                  </div>
                  <p className="font-light text-zinc-300">{result.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LivroDigital;
