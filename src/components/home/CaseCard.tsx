import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { useViewNavigate } from "@/lib/useViewNavigate";
import { logEvent } from "@/utils/gaEvents";

interface CaseCardProps {
  caseKey: string;
}

export default function CaseCard({ caseKey }: CaseCardProps) {
  const { t } = useTranslation();
  const go = useViewNavigate();

  const vtName = `case-image-${caseKey}`;
  const skills =
    (t(`case-study.${caseKey}.card.skills`, {
      returnObjects: true,
      defaultValue: [],
    }) as string[]) ?? [];

  const handleClick = () => {
    logEvent("case_view", { case_id: caseKey }); // 👈 adicione aqui
    go(`/case/${caseKey}`);
  };

  const img = (
    <img
      src={`/assets/case-study/${caseKey}/main.png`}
      alt={`${caseKey} preview`}
      loading="lazy"
      className="rounded-2xl object-cover w-full h-full"
      style={{
        viewTransitionName: vtName,
        contain: "layout",
        WebkitMaskImage: "url(/assets/shapes/slanted.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: "url(/assets/shapes/slanted.svg)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );

  return (
    <div className="w-full cursor-pointer" onClick={handleClick}>
      {/* SM Layout */}
      <div
        className="
          flex flex-col gap-6 p-6 rounded-3xl
          bg-surface-container-low
          transition-all duration-200
          hover:bg-surface-container
          hover:scale-[1.01]
          md:hidden
        "
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="px-3 py-1 bg-primary-container rounded-full">
            <p className="text-2xl font-var-bold text-on-primary-container">
              {t(`case-study.${caseKey}.card.title`)}
            </p>
          </div>
          <p className="text-on-surface-variant text-lg">
            {t(`case-study.${caseKey}.card.description`)}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1 items-center">
            <p className="text-5xl font-var-bold text-on-surface">
              {t(`case-study.${caseKey}.card.value.number`)}
            </p>
            <div className="p-2 bg-tertiary-container rounded-full">
              <MoveUpRight className="h-4 text-on-tertiary-container" />
            </div>
          </div>
          <p className="text-on-surface-variant">
            {t(`case-study.${caseKey}.card.value.text`)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="caseCard">
              {skill}
            </Badge>
          ))}
        </div>

        {img}
      </div>

      {/* MD Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 py-8 px-4 rounded-3xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container hover:scale-[1.01] w-full">
        <div className="flex flex-col items-center text-center gap-6 h-full align-center">
          <div>
            <div className="px-3 py-1 bg-primary-container rounded-full w-fit mx-auto">
              <p className="text-2xl font-var-bold text-on-primary-container">
                {t(`case-study.${caseKey}.card.title`)}
              </p>
            </div>
            <p className="text-on-surface-variant mt-2">
              {t(`case-study.${caseKey}.card.description`)}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-5xl font-var-bold text-on-surface">
                {t(`case-study.${caseKey}.card.value.number`)}
              </p>
              <div className="p-2 bg-tertiary-container rounded-full">
                <MoveUpRight className="h-4 text-on-tertiary-container" />
              </div>
            </div>
            <p className="text-on-surface-variant">
              {t(`case-study.${caseKey}.card.value.text`)}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="caseCard">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">{img}</div>
      </div>

      {/* LG Layout */}
      <div className="hidden lg:flex bg-surface-container-low hover:bg-surface-container duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:scale-[1.02] flex-row justify-between items-center w-full gap-6 py-8 px-4 lg:px-8 rounded-3xl">
        <div className="flex flex-col items-center lg:items-start gap-2 max-w-72 w-full">
          <div className="px-3 py-1 bg-primary-container rounded-full">
            <p className="text-2xl font-var-bold-white text-on-primary-container">
              {t(`case-study.${caseKey}.card.title`)}
            </p>
          </div>
          <p className="text-on-surface-variant text-center lg:text-start">
            {t(`case-study.${caseKey}.card.description`)}
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-row gap-1">
            <p className="text-6xl font-var-bold text-on-surface">
              {t(`case-study.${caseKey}.card.value.number`)}
            </p>
            <div className="p-2 bg-tertiary-container h-fit rounded-full">
              <MoveUpRight className="h-4 text-on-tertiary-container" />
            </div>
          </div>
          <p className="text-on-surface-variant text-center lg:text-start">
            {t(`case-study.${caseKey}.card.value.text`)}
          </p>
        </div>

        <div className="w-full lg:h-48 lg:w-48 rounded-3xl">{img}</div>

        <div className="hidden lg:flex flex-wrap max-w-40 gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="caseCard">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
