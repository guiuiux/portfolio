import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import HeroCard from "./HeroCard"; // Previously "Hero" content now wrapped in HeroCard

const Hero = ({ transitioning }) => {
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
          delay: 0.5, // Slight delay for smoother effect
        },
      );
    }
  }, [transitioning]);

  return (
    <section
      ref={heroRef}
      className="relative h-[100vh] flex flex-col justify-center items-center gap-4 sm:px-6 px-4 overflow-hidden bg-transparent"
    >
      {/* Background Video */}

      {/* Hero Card Content */}
      <HeroCard />

      {/* Hidden anchor for internal links */}
      <span id="projects"></span>
    </section>
  );
};

Hero.propTypes = {
  transitioning: PropTypes.bool.isRequired,
};

export default Hero;
