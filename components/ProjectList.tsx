'use client'

import { useState, useEffect } from "react";
import Link from 'next/link'; // Import Link from Next.js
import { usePathname } from 'next/navigation'; // Import usePathname to get the current path

// Define the props for the ProjectButton component
interface ProjectButtonProps {
  name: string;
  year: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  link?: string; // Add the link property
  locale: string; // Add locale property
}

interface Project {
  name: string;
  year: string;
  thumbnail: string; // Path to the thumbnail image
  link?: string; // Make link optional
}

const projects: Project[] = [
  { name: "// E o Pix?", year: "2024", thumbnail: "/img/project-1.png", link: "/eopix" },
  { name: "// Plataforma MackEnsina", year: "2023", thumbnail: "/path/to/mack-thumbnail.jpg", link: "/mackensina" },
  { name: "// SME Digital: Livro", year: "2022", thumbnail: "/path/to/livro-thumbnail.jpg", link: "/livrodigital" },
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

  // If a link is provided, wrap the content in a Link component
  return link ? <Link href={`/${locale}${link}`}>{content}</Link> : content;
}

function ProjectList() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredThumbnail, setHoveredThumbnail] = useState<string | null>(null);
  
  const pathname = usePathname(); // Get the current pathname

  // Extract the current locale from the pathname
  const currentLocale = pathname.split('/')[1] === 'en' || pathname.split('/')[1] === 'pt' ? pathname.split('/')[1] : 'en';

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

  const thumbnailWidth = 200; // Thumbnail width (200px)
  const thumbnailHeight = 112; // Thumbnail height (112px)
  const padding = 16; // Padding for the main content

  // Calculate the left position with boundary checks
  const calculateLeftPosition = (x: number) => {
    const windowWidth = window.innerWidth;
    const halfThumbnail = thumbnailWidth / 2;

    // Calculate potential left position
    let left = x - halfThumbnail;

    // Check boundaries (padding included)
    if (left < padding) {
      left = padding; // Prevent going too far left
    } else if (left + thumbnailWidth > windowWidth - padding) {
      left = windowWidth - thumbnailWidth - padding; // Prevent going too far right
    }

    return left;
  };

  // Calculate the bottom position (above the cursor)
  const calculateBottomPosition = (y: number) => {
    return window.innerHeight - y + 24; // 16px above the pointer
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
            link={project.link} // Pass the link to ProjectButton
            locale={currentLocale} // Pass the current locale to ProjectButton
          />
        ))}
      </div>

      {/* Display the thumbnail */}
      {hoveredThumbnail && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: `${calculateLeftPosition(mousePos.x)}px`, // Center and keep within bounds
            bottom: `${calculateBottomPosition(mousePos.y)}px`, // 16px above the pointer
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
            className="rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

export default ProjectList;
