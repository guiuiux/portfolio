import { useTranslation } from "react-i18next";
import React, { useState } from "react";

type Variant = "userpain" | "results";

type InfoTableProps = {
  i18nKeyBase: string;
  variant?: Variant;
};

export default function InfoTable({
  i18nKeyBase,
  variant = "userpain",
}: InfoTableProps) {
  const { t } = useTranslation();
  const columns = t(`${i18nKeyBase}.columns`, {
    returnObjects: true,
  }) as string[];
  const rows = t(`${i18nKeyBase}.rows`, { returnObjects: true }) as {
    [key: string]: { text: string };
  }[];

  const variants = {
    userpain: {
      th: "border border-secondary-container p-4 rounded-full font-semibold text-center",
      tdBg: ["bg-surface-container-lowest", "bg-surface-container-low"],
      tdHoverBg: "bg-surface-container-high",
      grid: "grid-cols-[140px_240px_240px]",
    },
    results: {
      th: "bg-secondary-container p-4 rounded-full font-semibold text-center text-on-primary-container",
      tdBg: ["bg-surface-container-high", "bg-surface-container-low"],
      tdHoverBg: "bg-surface-container-highest",
      grid: "grid-cols-[190px_96px_115px_175px]",
    },
  };

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] md:w-full md:ml-0 md:mr-0 md:flex md:justify-center">
      <div className="overflow-x-auto md:overflow-visible px-4 pr-10 md:px-0 md:pr-0">
        {/* Conteúdo fixo: 636px. Peek no mobile, centralizado no md */}
        <div className="w-[636px] -mr-8 md:mr-0">
          <div className={`w-[636px] grid gap-0.5 ${variants[variant].grid}`}>
            {/* Cabeçalho */}
            {columns.map((col, idx) => (
              <div key={idx} className={variants[variant].th}>
                {col}
              </div>
            ))}

            {/* Linhas (cores por LINHA, não por coluna) */}
            {rows.map((row, rowIndex) => {
              const isHover = rowIndex === hoveredRow;
              const rowBgClass = isHover
                ? variants[variant].tdHoverBg
                : variants[variant].tdBg[rowIndex % 2]; // alterna por linha

              return (
                <React.Fragment key={rowIndex}>
                  {Object.values(row).map((cell, colIdx) => (
                    <div
                      key={colIdx}
                      onMouseEnter={() => setHoveredRow(rowIndex)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`p-4 rounded-2xl transition
                        ${colIdx === 0 ? "font-medium" : "font-normal"}
                        ${rowBgClass}
                        ${
                          hoveredRow !== null && !isHover
                            ? "opacity-50"
                            : "opacity-100"
                        }`}
                    >
                      {cell.text}
                    </div>
                  ))}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
