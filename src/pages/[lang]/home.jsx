import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion"; // Import Framer Motion
import loaderAnimation from "../../assets/lottie/loader.json";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";
import { useTranslation } from "react-i18next";
import ContactInfo from "../../components/ContactInfo";

export default function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(true); // Add this to control post-load transition

  const livroDigital = {
    title: "CASE STUDY",
    year: "2022",
    projectName: "SME Digital: Livro",
    description:
      "Interactive, accessible, and designed to captivate—discover how textbooks became dynamic digital experiences.",
    videoSrc: "/videos/square--ld.webm",
  };

  const videos = [livroDigital.videoSrc]; // Array of video URLs to load

  // Function to wait for all videos to load
  const loadVideos = async () => {
    await Promise.all(
      videos.map(
        (videoSrc) =>
          new Promise((resolve) => {
            const video = document.createElement("video");
            video.src = videoSrc;
            video.onloadeddata = resolve;
            video.onerror = resolve; // Resolve on error to prevent blocking
          }),
      ),
    );
  };

  useEffect(() => {
    const handleLoad = () => {
      // Extra 1-second flair to display loader after content is ready
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setTransitioning(false), 1000); // Smooth transition delay
      }, 1000);
    };

    const loadResources = async () => {
      await document.fonts.ready; // Wait for fonts
      await loadVideos(); // Wait for all videos to load

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad); // Ensure all assets are loaded
      }
    };

    loadResources();

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Lottie animation options
  const lottieOptions = {
    animationData: loaderAnimation,
    loop: true,
    autoplay: true,
    style: { height: 200, width: 200 },
  };

  // Loader display
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 z-50 transition-opacity duration-1000">
        <Lottie {...lottieOptions} />
      </div>
    );
  }

  return (
    <div className="text-start">
      {/* Header */}
      <Header />

      {/* Hero with Framer Motion animation */}
      <motion.section
        className="h-[100vh] flex flex-col gap-4 sm:px-6 px-4"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below the viewport
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: transitioning ? 0.236 : 0,
        }} // Wait for transition delay if needed
      >
        <Hero />
        <span id="projects"></span>
      </motion.section>

      {/* Portfolio Preview */}
      <section className="flex flex-col h-full -translate-y-[152px] items-center gap-6 sm:translate-y-0 w-full sm:px-6 px-4">
        <h1 className="text-2xl font-whyteinktrap text-center w-full font-medium">
          {t("Homepage.projects.title")}
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:max-w-[720px] gap-2">
          <div className="flex flex-col w-full gap-2">
            <ProjectCard projectData={livroDigital} />
            <div className="flex w-full gap-2">
              <ProjectCard color="lightpink" size="sm" variant="outline" />
              <ProjectCard color="lightgreen" size="sm" variant="outline" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex gap-2">
              <ProjectCard color="purple" size="sm" variant="outline" />
              <ProjectCard color="outline" size="sm" />
            </div>
            <ProjectCard color="yellow" variant="outline" />
          </div>
        </div>
      </section>
      {/* Social proof
      <section className="h-full w-full flex mb-20">
        {/* Client logos / Ratings */}
      {/* Impact metrics */}
      {/* </section> */}

      {/* Footer */}
      <section className="h-full w-full flex flex-col gap-4 items-center p-4 mt-12 sm:mt-32 mb-16">
        {/* Footer content */}
        <div className="text-lg font-light text-zinc-300">
          {t("Homepage.footer.social.connect")}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="p-8 border flex flex-col gap-4 items-start max-w-[480px] w-full rounded-2xl border-zinc-800">
            <div className="flex flex-col gap-2">
              <img
                src="/images/avatar_gui.webp"
                alt=""
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full"
              />
              <h1 className="flex flex-col text-3xl sm:text-4xl font-bold font-whyteinktrap">
                <span>{t("Homepage.footer.social.name")}</span>
              </h1>
            </div>
            <p className="text-[16px] font-light text-zinc-300">
              {t("Homepage.footer.social.about")}
            </p>
            <ContactInfo />
          </div>
          <div className="flex flex-col w-[64.75px] gap-2 justify-between">
            <div className="aspect-square w-fit h-full flex items-center justify-center border border-zinc-800 rounded-lg">
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="aspect-square w-fit h-full  flex items-center justify-center border border-zinc-800 rounded-lg">
              <img src="/images/dribbble.png" alt="" />
            </div>
            <div className="aspect-square w-fit  h-full flex items-center justify-center border border-zinc-800 rounded-lg">
              <img src="/images/github.png" alt="" />
            </div>
            <div className="aspect-square w-fit h-full  flex items-center justify-center border border-zinc-800 rounded-lg">
              <img src="/images/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-zinc-600 text-xs">
          <span>© 2024 g. ui/ux </span>
          <span>Licensed under the MIT License.</span>
        </div>
      </section>
    </div>
  );
}
