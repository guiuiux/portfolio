import { Card, CardContent, CardHeader } from "./ui/card";
import StarIcon from "../assets/icons/star-icon.svg";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function ProjectCard({
  color = "pink",
  size = "lg",
  variant = "filled", // 'filled' or 'outline'
  projectData = null, // Data to load project or null for empty state
  template = "default", // Special template for unique projects
}) {
  // Define color styles with separate background and border styles
  const colorStyles = {
    pink: {
      filled: "bg-pink-500 text-zinc-950",
      outline: "border-pink-500 text-pink-500",
    },
    yellow: {
      filled: "bg-yellow-500 text-zinc-950",
      outline: "border-yellow-500 text-yellow-500",
    },
    lightgreen: {
      filled: "bg-green-300 text-zinc-950",
      outline: "border-green-300 text-green-300",
    },
    green: {
      filled: "bg-green-500 text-zinc-950",
      outline: "border-green-500 text-green-500",
    },
    lightpink: {
      filled: "bg-pink-200 text-zinc-950",
      outline: "border-pink-200 text-pink-200",
    },
    purple: {
      filled: "bg-purple-500 text-zinc-100",
      outline: "border-purple-500 text-purple-500",
    },
    outline: "bg-zinc-950 text-zinc-50 border border-zinc-700",
  };

  const sizeStyles = {
    sm: "text-base",
    lg: "text-2xl",
  };

  const isOutline = variant === "outline";
  const selectedColorStyle = colorStyles[color][variant];
  const selectedSizeStyle = sizeStyles[size];
  const videoRef = useRef(null);

  // Reset video on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const tinyIcon = "/images/tiny-icon/mobile--pink.png";

  return (
    <Card
      className={`relative rounded-2xl group h-full w-full aspect-square flex flex-col justify-between overflow-hidden ${
        isOutline ? `border ${selectedColorStyle}` : selectedColorStyle
      }`}
      onMouseEnter={handleMouseEnter}
    >
      {/* Video element for projects with data */}
      {projectData && (
        <>
          <video
            ref={videoRef}
            src={projectData.videoSrc}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            autoPlay
            muted
            loop
          />

          <CardHeader className="space-y-1 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">
                {projectData.title || "CASE STUDY"}
              </span>
              <div className="relative w-8 h-8">
                <StarIcon
                  className={`w-8 h-8 group-hover:animate-spin-90 ${
                    isOutline ? selectedColorStyle : ""
                  }`}
                />
                <img
                  src={tinyIcon} // Replace with your actual image path
                  alt="overlay"
                  className="absolute inset-0 m-auto "
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col relative group-hover:translate-y-[220px] ease-[cubic-bezier(0.83, 0, 0.17, 1)] transition-all duration-500 z-10">
            {/* Custom template for "Creative Lab" */}
            {template === "creativeLab" ? (
              <div className="flex gap-1">
                <h2
                  className={`font-whyteinktrap leading-[1.3] ${selectedSizeStyle}`}
                >
                  CREATIVE
                </h2>
                <span className="text-pink-500 font-whyteinktrap font-[950] text-xs">
                  LAB
                </span>
              </div>
            ) : (
              <div>
                <p className="font-supplysans -space-y-2 font-normal opacity-80">
                  {projectData.year}
                </p>
                <h2
                  className={`font-whyteinktrap font-bold tracking-tight ${selectedSizeStyle}`}
                >
                  {projectData.projectName}
                </h2>
                {size === "lg" && projectData.description && (
                  <p className="text-sm/relaxed font-normal">
                    {projectData.description}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </>
      )}

      {/* Empty placeholder state to retain full size */}
      {!projectData && (
        <CardContent className="flex-grow">
          <div className="h-full w-full flex justify-center items-center opacity-20">
            {/* Optional: add a subtle background or icon */}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

ProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "pink",
    "yellow",
    "lightgreen",
    "green",
    "lightpink",
    "purple",
    "outline",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["filled", "outline"]),
  projectData: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    projectName: PropTypes.string,
    description: PropTypes.string,
    videoSrc: PropTypes.string,
  }),
  template: PropTypes.oneOf(["default", "creativeLab"]),
};
