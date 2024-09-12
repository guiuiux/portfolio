interface ProjectButtonProps {
    name: string;
    year: string; // Make year optional
  }
  
  function ProjectButton({ name, year}: ProjectButtonProps) {
    return (
      <div className="flex text-base flex-row p-2 gap-2">
        <div className="text-zinc-500">{year}</div>
        <div className="text-zinc-50 underline">{name}</div>
      </div>
    );
  }
  
  export default ProjectButton;