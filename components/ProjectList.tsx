'use client'

import { useState, useEffect } from "react";

// Define the props for the ProjectButton component
interface ProjectButtonProps {
  name: string;
  year: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

interface Project {
  name: string;
  year: string;
  thumbnail: string; // Path to the thumbnail image
}

const projects: Project[] = [
  { name: "// E o Pix?", year: "2024", thumbnail: "/img/project-1.png" },
  { name: "// Plataforma MackEnsina", year: "2023", thumbnail: "/img/project-1.png" },
  { name: "// SME Digital: Livro", year: "2022", thumbnail: "/img/project-1.png" },
  { name: "// Personal: Mexerica Mágica", year: "2020", thumbnail: "/img/project-1.png" }
];

function ProjectButton({ name, year, isActive, onHover, onLeave }: ProjectButtonProps) {
    return (
      <div
        className={`flex items-center font-light text-base flex-row gap-2 transition-colors duration-300 ${
          isActive ? "text-zinc-50" : "text-zinc-700"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="text-zinc-400 font-supplysans pt-1">{year}</div>
        <div className="border-b-[1px] border-zinc-700">{name}</div>
      </div>
    );
  }
  
  function ProjectList() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredThumbnail, setHoveredThumbnail] = useState<string | null>(null);
  
    // Update mouse position on hover
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div className="relative">
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectButton
              key={project.name}
              name={project.name}
              year={project.year}
              isActive={activeProject === project.name || activeProject === null}
              onHover={() => {
                setActiveProject(project.name);
                setHoveredThumbnail(project.thumbnail);
              }}
              onLeave={() => {
                setActiveProject(null);
                setHoveredThumbnail(null);
              }}
            />
          ))}
        </div>
  
        {/* Display the thumbnail */}
        {hoveredThumbnail && (
          <div
            className="fixed pointer-events-none"
            style={{
              left: `${mousePos.x - 224}px`, // Centering the image horizontally
              bottom: `${window.innerHeight - mousePos.y + 16}px`, // Positioning 16px above the pointer
              width: "448px",
              height: "252px", // Fixed size as per the requirement
              zIndex: 1000
            }}
          >
            <img src={hoveredThumbnail} alt="Project thumbnail" width="448" height="252" />
          </div>
        )}
      </div>
    );
  }
  
  export default ProjectList;
