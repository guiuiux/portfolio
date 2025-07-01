import { useTranslation, Trans } from "react-i18next";

// ShadCN Components
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Design Tokens
import { color } from "@/lib/design-tokens";

// Icons

import { ArrowRight } from "lucide-react";

interface CaseStudyProps {
  project: string;
  imgPosition?: "left" | "right";
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const { t } = useTranslation();

  // typescript + react;
  const whatArray = t(`case-study.${project}.home-card.what`, {
    returnObjects: true,
  }) as string[];
  console.log(whatArray);

  return (
    <div className="flex flex-col w-full gap-1">
      {/* Imagem */}
      <div className="w-full h-full aspect-video ">
        <img
          src={"/assets/img/case-study/" + project + "/case-cover.png"}
          alt="Case Study"
          className="h-full object-cover rounded-t-2xl rounded-b-sm w-full"
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-col gap-4 p-4 rounded-sm"
        style={{
          backgroundColor: color.light.surfaceContainer,
          color: color.light.onSurface,
        }}
      >
        <span className="text-2xl tracking-tighter">
          <Trans
            i18nKey={`case-study.${project}.home-card.title`}
            components={{
              what: (
                <span
                  className={`px-1 rounded-xs  font-bold`}
                  style={{
                    backgroundColor: color.light.secondary,
                    color: color.light.onSecondary,
                  }}
                />
              ),
              result: (
                <span
                  className={`px-1 rounded-xs  font-bold`}
                  style={{
                    backgroundColor: color.light.secondary,
                    color: color.light.onSecondary,
                  }}
                />
              ),
            }}
          />
        </span>
        <div className="flex flex-col gap-4">
          {/* Content - QUEM */}
          <div className="flex flex-row gap-6 text-sm">
            <div
              className="uppercase tracking-tighter font-bold w-14"
              style={{
                color: color.light.onSurfaceVariant,
              }}
            >
              {t(`home.case-study.who`)}
            </div>
            <span className="text-base">
              {t(`case-study.${project}.home-card.who`)}
            </span>
          </div>
          <Separator
            style={{
              backgroundColor: color.light.outlineVariant,
            }}
          />
          {/* Content - O QUE */}
          <div className="flex flex-row gap-8 text-sm h-fit">
            <div
              className="uppercase tracking-tighter font-bold w-14"
              style={{
                color: color.light.onSurfaceVariant,
              }}
            >
              {t(`home.case-study.what`)}
            </div>
            <div className="flex flex-wrap tracking gap-2 w-full h-fit">
              {whatArray.map((item, idx) => (
                <Badge
                  key={idx}
                  className="text-sm font-normal px-2 rounded-full"
                  style={{
                    color: color.light.onTertiary,
                    backgroundColor: color.light.tertiary,
                  }}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-row ">
        <Button
          className="w-full font-semibold tracking-tight uppercase justify-between rounded-b-2xl rounded-t-sm text-lg h-fit"
          style={{
            backgroundColor: color.light.primary,
            padding: 12,
            color: color.light.onPrimary,
          }}
        >
          <span>Case Study Completo</span>{" "}
          <ArrowRight style={{ width: "24px", height: "24px" }} />
        </Button>
      </div>
    </div>
  );
}
