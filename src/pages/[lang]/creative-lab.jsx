import { useState } from "react";
import Hero from "../../components/creative-lab/Hero";
import ProjectsGrid from "../../components/creative-lab/ProjectGrid";
import Header from "../../components/Header";
import { useEffect } from "react";

function CreativeLab() {
  const [selectedProject, setSelectedProject] = useState(null); // store project data or ID
  console.log(selectedProject);
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-50 overflow-x-hidden">
      <div className=" w-full flex flex-col items-center">
        <Header
          textColor="text-zinc-50 font-light"
          uxColor="text-pink-400 text-zinc-400"
        />
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
