import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import HeroCard from "./HeroCard"; // Previously "Hero" content now wrapped in HeroCard

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger GSAP animation on component mount
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: `1`,
        y: 0,
        duration: 1,
        ease: "power3.out",
        onStart: () => {
          // Ensure visibility is set at the start of the animation
          heroRef.current.style.visibility = "visible";
        },
      },
    );
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        visibility: "hidden", // Prevent flash before animation starts
        opacity: 0, // Ensure starting opacity is 0
      }}
      className="relative h-[100vh] flex flex-col justify-center items-center gap-4 sm:px-6 px-4 overflow-hidden bg-transparent"
    >
      {/* Hero Card Content */}
      <HeroCard />

      {/* Hidden anchor for internal links */}
      <span id="projects"></span>
    </section>
  );
};

export default Hero;
