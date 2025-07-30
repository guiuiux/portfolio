import { useRef, useState, useLayoutEffect } from "react";
import { color } from "@/lib/design-tokens";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

type StackItemProps = {
  name: string;
  img: string;
  func: boolean;
};

const StackItem = ({ name, img, func }: StackItemProps) => (
  <div
    className={`flex flex-row text-sm items-center gap-2 border rounded-full transition-all  ${
      func ? "px-4 py-3 " : "px-6 py-4 "
    }`}
    style={{
      backgroundColor: color.light.surface,
      color: color.light.onSurface,
      borderColor: color.light.outlineVariant,
      willChange: "transform, opacity",
    }}
  >
    <img
      src={`/assets/img/stack/${img}`}
      alt={name}
      className="h-5"
      style={{ height: 20, width: "auto" }}
    />
    {name}
  </div>
);

type TechStackProps = {
  items: { name: string; img: string }[];
  sectionId?: string;
};

export default function TechStack({ items, sectionId }: TechStackProps) {
  const [showAll, setShowAll] = useState(false);
  const extrasRef = useRef<Array<HTMLDivElement | null>>([]);

  const featuredNames = ["Figma", "GA 4", "Jira", "After Effects", "ReactJS"];
  const featured = featuredNames
    .map((name) => items.find((i) => i.name === name))
    .filter(Boolean) as StackItemProps[];
  const rest = items.filter((i) => !featuredNames.includes(i.name));

  // Animação pop-in só nos extras ao expandir
  useLayoutEffect(() => {
    if (showAll && rest.length > 0) {
      gsap.fromTo(
        extrasRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.44,
          ease: "elastic.out(1, 0.5)",
        }
      );
    }
  }, [showAll, rest.length]);

  // Scroll para o topo da section ao recolher
  function handleToggle() {
    if (showAll && sectionId) {
      setShowAll(false);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      setShowAll(true);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`flex flex-wrap gap-1.5 
          ${"justify-center"}`}
      >
        {/* Principais sempre visíveis */}
        {featured.map((item) => (
          <StackItem key={item.name} {...item} func={showAll} />
        ))}

        {/* Extras só aparecem se showAll=true */}
        {showAll &&
          rest.map((item, idx) => (
            <div
              key={item.name}
              ref={(el) => {
                extrasRef.current[idx] = el;
              }}
              style={{ opacity: 0, transform: "scale(0.8)" }}
            >
              <StackItem {...item} func={showAll} />
            </div>
          ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="mt-4 rounded-full border-none shadow-none text-base font-medium gap-1 flex flex-row items-center"
        style={{
          background: color.light.surfaceContainerLow,
          color: color.light.primary,
        }}
        onClick={handleToggle}
      >
        {showAll ? "Ver menos" : "Ver todos"}
        <ChevronDown
          className={`transition-transform duration-300 ${
            showAll ? "rotate-180" : ""
          }`}
          size={18}
        />
      </Button>
    </div>
  );
}
