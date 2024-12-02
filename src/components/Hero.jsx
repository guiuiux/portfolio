import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import HeroCard from "./HeroCard"; // Previously "Hero" content now wrapped in HeroCard

const Hero = ({ transitioning, hasLoadedOnce }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!transitioning) {
      // Trigger GSAP animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: hasLoadedOnce ? 0 : 0.5, // Skip delay if loading has already happened
          onStart: () => {
            // Ensure visibility is set at the start of the animation
            heroRef.current.style.visibility = "visible";
          },
        },
      );
    } else {
      // Set initial visibility and styles while transitioning
      heroRef.current.style.visibility = "hidden";
      heroRef.current.style.opacity = 0;
      heroRef.current.style.transform = "translateY(50px)";
    }
  }, [transitioning, hasLoadedOnce]);

  return (
    <section
      ref={heroRef}
      style={{
        visibility: transitioning ? "hidden" : "visible", // Prevent flash during transition
        opacity: 0, // Ensure starting opacity is 0
        transform: "translateY(50px)", // Match GSAP initial state
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

Hero.propTypes = {
  transitioning: PropTypes.bool.isRequired,
  hasLoadedOnce: PropTypes.bool.isRequired, // Add the new prop
};

export default Hero;
