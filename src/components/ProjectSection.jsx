import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { PROJECT_DATA } from "../data/projectData";

const ProjectSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-whyteinktrap mb-4 text-center w-full font-medium">
        {t("Homepage.projects.title")}
      </h1>

      <div className="flex flex-col sm:flex-row w-full sm:max-w-[720px] gap-2">
        <div className="flex flex-col w-full gap-2">
          {/* Main project card with data */}
          <ProjectCard projectData={PROJECT_DATA[0]} />

          {/* Row of smaller, outlined project cards */}
          <div className="flex w-full gap-2">
            <ProjectCard color="lightpink" size="sm" variant="outline" />
            <ProjectCard color="lightgreen" size="sm" variant="outline" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          {/* Another row of smaller, outlined project cards */}
          <div className="flex gap-2">
            <ProjectCard color="purple" size="sm" variant="outline" />
            <ProjectCard color="zinc" size="sm" variant="outline" />
          </div>

          {/* Larger card with a different color */}
          <ProjectCard color="yellow" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
