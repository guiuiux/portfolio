// Utils
import { useTranslation } from "react-i18next";

// import Triangle from "@/assets/svg/shapes/Triangle.svg";
// import Gem from "@/assets/svg/shapes/Gem.svg";

import Bun from "@/assets/svg/shapes/Bun.svg?react";
import Slanted from "@/assets/svg/shapes/Slanted.svg?react";

import { color } from "@/lib/design-tokens";

import { Badge } from "@/components/ui/badge";

// Icons
import { ArrowRight } from "lucide-react";

export default function ServiceCardProduct() {
  const { t } = useTranslation();
  const productList = t("home.services.product.list", {
    returnObjects: true,
  }) as string[];
  // const visualList = t("home.services.visual.list", {
  //   returnObjects: true,
  // }) as string[];
  return (
    <>
      {/* Card */}
      <div
        className="flex flex-col gap-4 p-6 rounded-3xl "
        style={{
          backgroundColor: color.light.surfaceBright,
        }}
      >
        {/* inner card */}
        <div
          className="flex flex-col gap-2 p-4 rounded-xl "
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
          <div className="flex flex-col gap-1 tracking-tighter">
            <div
              className="text-2xl flex flex-row align-top gap-1 font-bold tracking-tight"
              style={{
                color: color.light.onSurface,
              }}
            >
              <span
                className="text-sm flex flex-col items-center justify-center w-6 h-fit rounded-full"
                style={{
                  color: color.light.primary,
                  background: color.light.primaryContainer,
                }}
              >
                1
              </span>{" "}
              {t("home.services.product.title")}
            </div>
            <div
              className="text-xl"
              style={{
                color: color.light.onSurfaceVariant,
              }}
            >
              {t("home.services.product.description")}
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
        {/* CTA */}
        <div className="flex flex-row justify-between items-center text-xl font-semibold tracking-tighter">
          {t("home.services.cta")}
          <div
            className="p-1 rounded-sm hover:rounded-md transition-all"
            style={{
              backgroundColor: color.light.primary,
              color: color.light.onPrimary, // ou primaryContainer
            }}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
