import { Trans } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type ContributionsProps = {
  i18nKeyBase: string;
  count?: number;
  classes?: string[];
};

export default function Contributions({
  i18nKeyBase,
  count = 5,
  classes = [
    "bg-secondary-container/20 border border-outline-variant/30 p-4 rounded-2xl ",
    "bg-secondary-container/40 p-4 rounded-2xl ",
    "bg-secondary-container/60 p-4 rounded-2xl ",
    "bg-secondary-container/80 p-4 rounded-2xl ",
    "bg-secondary-container p-4 rounded-2xl ",
  ],
}: ContributionsProps) {
  const easeWave = [0.05, 0, 0.25, 1] as const;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2 pb-4 h-fit w-full items-center text-on-surface text-lg lg:text-xl">
      {Array.from({ length: count }).map((_, index) => {
        const isAfterOrEqual = hoveredIndex !== null && index >= hoveredIndex;

        return (
          <div
            key={index}
            className="flex flex-col w-full items-center gap-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              animate={{
                y: isAfterOrEqual ? -4 : 0,
                scale: isAfterOrEqual ? 1.02 : 1,
              }}
              transition={{
                delay: isAfterOrEqual
                  ? (index - (hoveredIndex ?? 0)) * 0.03
                  : 0,
                type: "spring",
                stiffness: 800,
                damping: 20,
                ease: easeWave,
                duration: 0.01,
              }}
              className={` w-full text-center px-4 border-1 transition-colors rounded-2xl ${
                classes[index] ?? ""
              } ${
                isAfterOrEqual
                  ? "border-primary-container"
                  : "border-primary-container/0"
              }`}
            >
              <Trans
                i18nKey={`${i18nKeyBase}.bullets.${index}.text`}
                components={{
                  bold: <span className="font-semibold" />,
                  sup: <sup className="text-sm" />,
                }}
              />
            </motion.div>

            {/* Chevron fixo */}
            {index < count - 1 && <ChevronDown />}
          </div>
        );
      })}
      <div className="text-sm  text-on-surface-variant">
        <div>
          <Trans
            i18nKey={`${i18nKeyBase}.disclaimer`}
            components={{ sup: <sup /> }}
          />
        </div>
      </div>
    </div>
  );
}
