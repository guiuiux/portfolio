interface ProjectButtonProps {
    name: string;
    year: string; // Make year optional
  }
  
  function ProjectButton({ name, year}: ProjectButtonProps) {
    return (
      <div className=" flex items-center font-light text-base flex-row gap-2">
        <div className="text-zinc-400 font-supplysans pt-1">{year}</div>
        <div className="text-zinc-50 border-b-[1px]  transition-colors duration-300 border-zinc-700">{name}</div>
      </div>
    );
  }
  
  export default ProjectButton;