'use client'



interface ProjectButtonProps {
  name: string;
  year: string; // Make year optional
  isActive: boolean; // Indicate if it's the currently hovered project
  onHover: () => void;
  onLeave: () => void;
}

function ProjectButton({ name, year, isActive, onHover, onLeave }: ProjectButtonProps) {
  return (
    <div
      className={`flex items-center font-light text-base flex-row gap-2 ${
        isActive ? "text-zinc-50" : "text-zinc-700"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="text-zinc-400 font-supplysans pt-1">{year}</div>
      <div className="border-b-[1px] transition-colors duration-300 border-zinc-700">{name}</div>
    </div>
  );
}

export default ProjectButton;
