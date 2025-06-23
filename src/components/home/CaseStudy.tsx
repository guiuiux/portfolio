import { useTranslation, Trans } from "react-i18next";
import { Button } from "../ui/button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface CaseStudyProps {
  project: string;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 text-zinc-600">
      {/* titulo do card */}

      <div className="font-medium text-4xl tracking-tighter ">
        <Trans
          i18nKey={"case-study." + project + ".home-card.title"}
          components={{
            what: <span className=" text-zinc-900 px-1  font-bold" />,
            result: (
              <span className=" text-zinc-900 px-1 bg-amber-200 font-bold" />
            ),
          }}
        />
      </div>

      {/* conteudo container */}
      <div className="flex flex-col gap-4 ">
        {/* who */}
        <div className="flex pb-4 gap-6 border-b-zinc-200 border-b">
          <div className="w-[90px] font-bold tracking-tight uppercase">
            {t("home.case-study.who")}
          </div>
          <div className="font-normal">
            {t("case-study." + project + ".home-card.who")}
          </div>
        </div>
        {/* what */}
        <div className="flex pb-4 gap-6 border-b-zinc-200 border-b">
          <div className="min-w-[90px] font-bold tracking-tight uppercase ">
            {t("home.case-study.what")}
          </div>
          <div className="font-normal ">
            {t("case-study." + project + ".home-card.what")}
          </div>
        </div>
        {/* 
        <div className="flex gap-6">
          <div className="min-w-[90px] font-bold tracking-tighter uppercase ">
            {t("home.case-study.outcome")}
          </div>
          <div className="font-normal ">
            <Trans
              i18nKey={"case-study." + project + ".home-card.outcome"}
              components={{
                highlight: (
                  <span className=" bg-amber-200 text-zinc-900 font-bold " />
                ),
              }}
            />
          </div>
        </div> */}
      </div>

      {/* imagem */}
      <div className="w-full aspect-video bg-zinc-200 rounded-2xl"></div>

      {/* CTA */}
      <Button className="flex justify-between py-3 h-fit rounded-2xl">
        <div className="uppercase text-base px-1">
          {t("home.case-study.cta-text")}
        </div>
        <ArrowOutwardIcon />
      </Button>
    </div>
  );
}
