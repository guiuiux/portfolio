import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";
import headAnimationData from "../assets/lottie/head_sm.json";
import { trackEvent } from "../utils/analytics"; // Import the utility

const HeroCard = () => {
  const { t } = useTranslation();

  // Event tracking handlers
  const handlePrimaryCTA = () => {
    trackEvent({
      action: "Click",
      category: "Hero",
      label: "Schedule Meeting", // Adjust to the action's meaning
    });
  };

  const handleSecondaryCTA = () => {
    trackEvent({
      action: "Click",
      category: "Hero",
      label: "View Projects",
    });
  };

  const handleHover = (buttonName) => {
    trackEvent({
      action: "hover",
      category: "HeroCardButton",
      label: `${buttonName}`, // Ensure this is a string
    });
  };

  return (
    <div className="p-8 sm:p-12 border flex flex-col gap-2 items-start rounded-3xl max-w-[640px] w-full border-zinc-700 font-light bg-zinc-800 ">
      <Lottie className="h-16 pr-2" animationData={headAnimationData} />

      <h1 className="flex flex-col text-2xl sm:text-4xl font-bold font-whyteinktrap">
        <span>{t("Homepage.hero.title")}</span>
      </h1>
      <p className="text-zinc-300 text-base sm:text-lg">
        {t("Homepage.hero.subtitle")}
      </p>

      <div className="mt-2 flex gap-3">
        {/* Primary CTA button */}
        <Button
          href="https://cal.com/g.uiux/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 bg-pink-500 hover:bg-pink-400 text-zinc-950 rounded-full h-fit flex gap-1 align-middle"
          onClick={handlePrimaryCTA} // Add click handler
          onMouseEnter={() => handleHover("BookCall")} // Add hover handler
        >
          <span className="text-sm sm:text-[16px]">
            {t("Homepage.hero.cta-primary")}
          </span>
          <span className="material-symbols-rounded">calendar_add_on</span>
        </Button>

        {/* Secondary CTA button */}
        <Button
          href="#projects"
          className="py-3 rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 group gap-1 h-fit flex align-middle text-sm sm:text-[16px] group"
          variant="outline"
          onClick={handleSecondaryCTA} // Add click handler
          onMouseEnter={() => handleHover("ViewProjects")} // Add hover handler
        >
          <span className="group-hover:text-pink-50">
            {t("Homepage.hero.cta-secondary")}
          </span>
          <span className="material-symbols-rounded">arrow_downward</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroCard;
