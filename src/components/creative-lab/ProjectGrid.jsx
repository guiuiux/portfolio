import PropTypes from "prop-types";
import CREATIVE_LAB from "../../data/creativeLab";

export default function ProjectsGrid({ onProjectClick }) {
  // Sample project data (You will replace with real data)

  return (
    <div className="mt-16 px-4 w-full columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {CREATIVE_LAB.map((project) => (
        <div
          key={project.id}
          className="mb-4 break-inside-avoid cursor-pointer transform-gpu"
          onClick={() => onProjectClick(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

ProjectsGrid.propTypes = {
  onProjectClick: PropTypes.func.isRequired,
};
