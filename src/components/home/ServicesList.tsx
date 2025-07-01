import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const spatial = { duration: 0.35, ease: "elastic.out(1,0.7)" };
const effects = { duration: 0.15, ease: "power2.out" };

interface Props {
  services: string[];
}

export function ServicesList({ services }: Props) {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    itemRefs.current.forEach((li, idx) => {
      if (!li) return;
      if (idx === highlightIndex) {
        gsap.to(li, {
          fontSize: "1.333rem",
          color: "#18181b",
          fontWeight: 600,
          duration: spatial.duration,
          ease: spatial.ease,
        });
      } else {
        gsap.to(li, {
          fontSize: "1rem",
          color: "#a1a1aa",
          fontWeight: 350,
          duration: effects.duration,
          ease: effects.ease,
        });
      }
    });
  }, [highlightIndex, services.length]);

  return (
    <ul className="font-medium md:text-2xl items-baseline flex flex-wrap gap-x-1">
      {services.map((question, index) => (
        <li
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          style={{
            fontSize: "1.25rem", // valor inicial (todos começam pequeno)
            color: "#a1a1aa", // valor inicial
            fontWeight: 500, // valor inicial
            display: "inline",
            transition: "none", // garante que só GSAP controla
          }}
        >
          {question}
        </li>
      ))}
    </ul>
  );
}
