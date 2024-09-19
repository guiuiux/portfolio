'use client'

import { useState, useEffect } from "react";
import { Link } from 'next-view-transitions'; // Import from next-view-transitions
import { usePathname } from 'next/navigation';

interface ProjectButtonProps {
  name: string;
  year: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  link?: string;
  locale: string;
}

interface Project {
  name: string;
  year: string;
  thumbnail: string;
  link?: string;
}

const projects: Project[] = [
  { name: "// E o Pix?", year: "2024", thumbnail: "/img/project-1.png", link: "/eopix" },
  { name: "// Plataforma MackEnsina", year: "2023", thumbnail: "/path/to/mack-thumbnail.jpg", link: "/mackensina" },
  { name: "// SME Digital: Livro", year: "2022", thumbnail: "/img/projects/livrodigital/thumbnail.webp", link: "/livrodigital" },
  { name: "// Personal: Mexerica Mágica", year: "2020", thumbnail: "/path/to/mexerica-thumbnail.jpg", link: "/mexerica-magica" }
];

function ProjectButton({ name, year, isActive, onHover, onLeave, link, locale }: ProjectButtonProps) {
  const content = (
    <div
      className={`flex items-center font-light text-base flex-row gap-2 transition-colors duration-300 ${
        isActive ? "text-zinc-50" : "text-zinc-700"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`font-supplysans transition-colors duration-300 pt-1 ${
        isActive ? "text-zinc-400" : "text-zinc-700"
      }`}>{year}</div>
      <div className="border-b-[1px] border-zinc-700">{name}</div>
    </div>
  );

  return link ? <Link href={`/${locale}${link}`}>{content}</Link> : content;
}

function ProjectList() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredThumbnail, setHoveredThumbnail] = useState<string | null>(null);
  
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] === 'en' || pathname.split('/')[1] === 'pt' ? pathname.split('/')[1] : 'en';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const thumbnailWidth = 280;
  const thumbnailHeight = 154.4;
  const padding = 16;

  const calculateLeftPosition = (x: number) => {
    const windowWidth = window.innerWidth;
    const halfThumbnail = thumbnailWidth / 2;

    let left = x - halfThumbnail;

    if (left < padding) {
      left = padding;
    } else if (left + thumbnailWidth > windowWidth - padding) {
      left = windowWidth - thumbnailWidth - padding;
    }

    return left;
  };

  const calculateBottomPosition = (y: number) => {
    return window.innerHeight - y + 24;
  };

  return (
    <div className="relative w-full">
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
            link={project.link}
            locale={currentLocale}
          />
        ))}
      </div>

      {/* Display the thumbnail */}
      {hoveredThumbnail && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: `${calculateLeftPosition(mousePos.x)}px`,
            bottom: `${calculateBottomPosition(mousePos.y)}px`,
            width: `${thumbnailWidth}px`,
            height: `${thumbnailHeight}px`,
            zIndex: 1000,
          }}
        >
          <img
            src={hoveredThumbnail}
            alt="Project thumbnail"
            width={thumbnailWidth}
            height={thumbnailHeight}
            className="rounded-xl transition-image" // Apply view-transition-name here
          />
        </div>
      )}
    </div>
  );
}

export default ProjectList;
