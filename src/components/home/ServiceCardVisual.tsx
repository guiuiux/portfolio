/// <reference types="vite-plugin-svgr/client" />

// Utils
import { useTranslation } from "react-i18next";

// Importando SVGs como string/URL
import Bun from "@/assets/svg/shapes/Bun.svg?react";
import Slanted from "@/assets/svg/shapes/Slanted.svg?react";

import { color } from "@/lib/design-tokens";
import { Badge } from "@/components/ui/badge";

export default function ServiceCardProduct() {
  const { t } = useTranslation();
  const productList = t("home.services.visual.list", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      {/* Card */}
      <div
        className="flex flex-col gap-4 p-6 rounded-3xl"
        style={{
          backgroundColor: color.light.surface,
        }}
      >
        {/* inner card */}
        <div
          className="flex flex-col gap-2 p-4 rounded-xl tracking-tighter"
          style={{
            backgroundColor: color.light.surfaceContainerLow,
          }}
        >
          {/* SHAPES */}
          <div className="relative w-[96px] h-[96px]">
            <Bun
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                color: color.light.primary,
                width: 56,
                height: 56,
                zIndex: 999,
              }}
            />
            <Slanted
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                color: color.light.primaryContainer,
                width: 96,
                height: 96,
              }}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-1">
            <div
              className="text-2xl font-bold"
              style={{
                color: color.light.onSurface,
              }}
            >
              {t("home.services.visual.title")}
            </div>
            <div
              className="text-xl font-normal"
              style={{
                color: color.light.onSurfaceVariant,
              }}
            >
              {t("home.services.visual.description")}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {productList.map((item, idx) => (
              <Badge
                key={idx}
                className="text-sm font-medium tracking-tight px-2 rounded-full"
                style={{
                  color: color.light.onSecondary,
                  backgroundColor: color.light.secondary,
                }}
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
