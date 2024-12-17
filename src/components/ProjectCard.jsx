import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader } from "./ui/card";
import StarIcon from "../assets/icons/star-icon.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

export default function ProjectCard({
  color = "pink",
  size = "lg",
  variant = "filled",
  projectData = null,
  template = "default",
}) {
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
    zinc: {
      filled: "bg-zinc-950 text-zinc-50",
      outline: "bg-zinc-950 text-zinc-50 border border-zinc-700",
    },
  };

  const sizeStyles = {
    sm: "text-base",
    lg: "text-2xl",
  };

  const isOutline = variant === "outline";
  const selectedColorStyle = colorStyles[color][variant] || "";
  const selectedSizeStyle = sizeStyles[size];

  const { lang } = useParams();
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (size === "lg" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      trackEvent({
        action: "hover",
        category: "Projects",
        label: `Project: ${projectData.projectName}`,
      });
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    trackEvent({
      action: "click",
      category: "Projects",
      label: `Project: ${projectData.projectName}`,
    });
  };

  useEffect(() => {
    if (size === "lg" && projectData?.video && videoRef.current) {
      videoRef.current.play();
    }
  }, [size, projectData?.video]);

  const isClickable = Boolean(projectData?.link);

  const Wrapper =
    isClickable || template === "creativeLab"
      ? ({ children }) => (
          <Link
            to={
              template === "creativeLab"
                ? `/${lang}/creative-lab`
                : `/${lang}/case-study/${projectData.link}`
            }
            className="block h-full w-full"
            data-view-transition="project-card"
            onClick={template !== "creativeLab" ? handleClick : undefined}
          >
            {children}
          </Link>
        )
      : ({ children }) => <>{children}</>;

  return (
    <Wrapper>
      <Card
        className={`relative rounded-2xl group h-full w-full aspect-square flex flex-col justify-between overflow-hidden ${
          isOutline ? `border ${selectedColorStyle}` : selectedColorStyle
        } ${template === "creativeLab" ? "opacity-100 translate-y-0" : ""}`}
        onMouseEnter={template !== "creativeLab" ? handleMouseEnter : undefined}
        data-view-transition="project-card"
      >
        {/* Background media handling */}
        {projectData && size === "lg" && projectData.video && (
          <video
            ref={videoRef}
            src={projectData.video}
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
            autoPlay
            muted
            loop
          />
        )}
        {projectData && size === "sm" && projectData.imageSrc && (
          <img
            src={projectData.imageSrc}
            alt={projectData.projectName}
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />
        )}

        {/* Header Content */}
        {(projectData || template === "creativeLab") && (
          <CardHeader
            className={`space-y-1 relative z-10 ${
              template === "creativeLab"
                ? "opacity-100 translate-y-0"
                : "group-hover:opacity-100 group-hover:translate-y-0 translate-y-5"
            } transition-all duration-500 ${size === "lg" ? "p-4" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-bold ${
                  size === "lg" && template !== "creativeLab"
                    ? "rounded-full backdrop-blur-[2px] bg-zinc-300/50 py-2 px-3 transition-all duration-300"
                    : "tracking-wide opacity-90"
                }`}
              >
                {template === "creativeLab"
                  ? "FOR FUN"
                  : projectData?.title || "CASE STUDY"}
              </span>

              <div className="relative w-8 h-8">
                <StarIcon
                  className={`w-8 h-8 ${
                    template === "creativeLab"
                      ? "text-pink-500 group-hover:animate-spin-90"
                      : "group-hover:animate-spin-90"
                  }`}
                />
                {projectData?.icon && (
                  <img
                    src={projectData.icon}
                    alt={`${projectData.projectName} icon`}
                    className="absolute inset-0 m-auto z-10"
                  />
                )}
              </div>
            </div>
          </CardHeader>
        )}

        {/* Content Section */}
        <CardContent
          className={`flex flex-col relative z-10 ${
            template === "creativeLab"
              ? "opacity-100 translate-y-0"
              : "opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0"
          } transition-all duration-500`}
        >
          {template === "creativeLab" ? (
            <div className="font-whyteinktrap uppercase flex gap-1">
              <h2
                className={`font-whyteinktrap text-zinc-50 font-bold tracking-wide ${selectedSizeStyle} transition-all duration-700 ease-out`}
              >
                Creative
              </h2>
              <span className="font-extrabold text-xs text-pink-500">LAB</span>
            </div>
          ) : (
            projectData && (
              <div>
                <p className="font-supplysans -space-y-2 font-normal opacity-80">
                  {projectData.year}
                </p>
                <h2
                  className={`font-whyteinktrap font-bold tracking-tight ${selectedSizeStyle} transition-all duration-700 ease-out`}
                >
                  {projectData.projectName}
                </h2>
                {size === "lg" && projectData.description && (
                  <p className="text-sm/relaxed font-normal transition-all duration-700 ease-out">
                    {projectData.description}
                  </p>
                )}
              </div>
            )
          )}
        </CardContent>
      </Card>
    </Wrapper>
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
    "zinc",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["filled", "outline"]),
  projectData: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    projectName: PropTypes.string,
    description: PropTypes.string,
    video: PropTypes.string,
    imageSrc: PropTypes.string,
    link: PropTypes.string,
  }),
  template: PropTypes.oneOf(["default", "creativeLab"]),
};
