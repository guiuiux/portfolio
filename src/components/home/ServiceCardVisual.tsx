// Utils
import { useTranslation } from "react-i18next";

// Importando SVGs como string/URL
import Clover from "@/assets/svg/shapes/4-leaf-clover.svg?react";
import Gem from "@/assets/svg/shapes/Gem.svg?react";

import { color } from "@/lib/design-tokens";
import { Badge } from "@/components/ui/badge";

// Icons
import { ArrowRight } from "lucide-react";

export default function ServiceCardVisual() {
  const { t } = useTranslation();
  const visualList = t("home.services.visual.list", {
    returnObjects: true,
  }) as string[];

  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-3xl"
      style={{
        backgroundColor: color.light.surfaceBright,
        color: color.light.onSurface,
      }}
    >
      <div
        className="flex flex-col gap-2 p-4 rounded-xl"
        style={{
          backgroundColor: color.light.surfaceContainerLow,
        }}
      >
        <div className="relative w-[96px] h-[96px] ">
          <Clover
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              color: color.light.tertiary, // ou primary, se quiser mais alinhado
              width: 56,
              height: 56,
              zIndex: 999,
              opacity: 1,
            }}
          />
          <Gem
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              borderColor: color.light.tertiary,
              color: color.light.primary, // ou primaryContainer
              width: 96,
              height: 96,
            }}
          />
        </div>
        <div className="flex flex-col gap-1 tracking-tighter">
          <div
            className="text-2xl flex flex-row align-center gap-1 font-bold"
            style={{
              color: color.light.onSurface,
            }}
          >
            <span
              className="text-sm flex flex-col items-center justify-center w-6 h-fit rounded-full"
              style={{
                color: color.light.primary,
                background: color.light.tertiary,
              }}
            >
              2
            </span>
            {t("home.services.visual.title")}
          </div>
          <div
            className="text-xl"
            style={{
              color: color.light.onSurfaceVariant,
            }}
          >
            {t("home.services.visual.description")}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {visualList.map((item, idx) => (
            <Badge
              key={idx}
              className="text-sm font-medium tracking-tight px-2 rounded-full"
              style={{
                color: color.light.onTertiary, // escuro (ou onTertiary, se quiser)
                backgroundColor: color.light.tertiary,
              }}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="flex flex-row justify-between items-center text-xl font-semibold tracking-tighter">
        {t("home.services.cta")}
        <div
          className="p-1 rounded-sm hover:rounded-md transition-all"
          style={{
            backgroundColor: color.light.tertiary, // ou primaryContainer
            color: color.light.onTertiary,
          }}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
