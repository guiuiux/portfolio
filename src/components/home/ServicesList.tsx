import { useState, useEffect } from "react";

interface Props {
  services: string[];
}

export function ServicesList({ services }: Props) {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <ul className="font-medium text-lg tracking-tighter">
      {services.map((question, index) => (
        <li
          key={index}
          className={
            index === highlightIndex
              ? "text-zinc-900 text-xl transition-all duration-300 font-semibold "
              : "text-zinc-400 transition-all duration-300"
          }
        >
          {question}
        </li>
      ))}
    </ul>
  );
}
