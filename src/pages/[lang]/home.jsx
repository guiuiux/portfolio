import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lottie/loader.json";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";
import heroVid from "../../assets/videos/home.webm";

const Home = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if the page has already been loaded
    return !localStorage.getItem("hasLoadedOnce");
  });
  const [progress, setProgress] = useState(0);
  const [triggerHero, setTriggerHero] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // If not loading, trigger the hero immediately
      setTriggerHero(true);
      return;
    }

    // Simulate a 3-second minimum loading time with progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30); // Adjust speed to fit 3 seconds for full bar (100%)

    const halfwayTimeout = setTimeout(() => {
      setTriggerHero(true); // Trigger hero animation at halfway
    }, 1500); // Halfway through the 3-second loader

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // End loading
      localStorage.setItem("hasLoadedOnce", "true"); // Mark the page as loaded
    }, 3000); // 3 seconds minimum

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(halfwayTimeout);
      clearInterval(progressInterval);
    };
  }, [isLoading]);

  return (
    <div className="text-start">
      {isLoading && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-zinc-950 text-white z-50 transition-opacity duration-500 ${
            !isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
            <div
              className="h-full bg-pink-500 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Lottie Loader */}
          <Lottie animationData={loaderAnimation} loop autoPlay />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <section className="w-full flex flex-col items-center">
          <video
            src={heroVid}
            className="absolute inset-0 w-full h-full sm:object-top object-fill -z-10"
            autoPlay
            muted
            loop
          />
          <div className="max-w-[900px] w-full z-20">
            <Header />
          </div>
          {/* Pass triggerHero to Hero */}
          <Hero transitioning={!triggerHero} hasLoadedOnce={!isLoading} />
        </section>
        <section className="flex flex-col h-full -translate-y-[152px] items-center gap-6 sm:translate-y-0 w-full sm:px-6 px-4">
          <ProjectSection />
        </section>
        <section className="h-full w-full flex flex-col gap-12 items-center p-4 mt-12 sm:mt-32 mb-16">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
