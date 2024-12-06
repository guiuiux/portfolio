import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { useProjectData } from "../data/projectData";

const ProjectSection = () => {
  const { t } = useTranslation();
  const projectData = useProjectData(); // Get the translated project data

  console.log(projectData[0]); // Debug: Should log the first project object with translations

  return (
    <div>
      <h1 className="text-2xl font-whyteinktrap mb-4 text-center w-full font-medium">
        {t("Homepage.projects.title")}
      </h1>

      <div className="flex flex-col sm:flex-row w-full sm:max-w-[720px] gap-2">
        <div className="flex flex-col w-full gap-2">
          {/* Main project card with data */}
          <ProjectCard projectData={projectData[0]} />

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
          <ProjectCard color="yellow" projectData={projectData[1]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
