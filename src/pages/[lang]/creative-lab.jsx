import { useState } from "react";
import Hero from "../../components/creative-lab/Hero";
import ProjectsGrid from "../../components/creative-lab/ProjectGrid";
import Header from "../../components/Header";

function CreativeLab() {
  const [selectedProject, setSelectedProject] = useState(null); // store project data or ID

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-50 overflow-x-hidden">
      <div className=" w-full flex flex-col items-center">
        <Header />
        <Hero />
        <ProjectsGrid onProjectClick={setSelectedProject} />
      </div>

      {/* <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      /> */}
    </div>
  );
}

export default CreativeLab;
