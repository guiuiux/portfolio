import { useTranslation, Trans } from "react-i18next";
import heroImg from "../assets/imgs/home-hero-placeholder.png";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Button } from "@/components/ui/button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* container */}
      <div className=" flex flex-col gap-32 font-sf ">
        {/* hero-container */}
        <div>
          {/*nav-bar component*/}
          <div></div>

          {/*hero*/}
          <div className="flex flex-col pt-8 gap-16">
            {/*hero-text*/}
            <div className="flex flex-col gap-2 px-8">
              <div className="font-supply text-xl text-brand-blue">
                {t("home.hero.my-name")}
              </div>

              <div className="text-[32px] font-regular tracking-tighter leading-9 font-sf text-zinc-500">
                <Trans
                  i18nKey="home.hero.title"
                  components={{
                    bold: <span className="font-bold text-zinc-900" />,
                  }}
                />
              </div>
            </div>
            {/*image-container*/}
            <div className="px-8">
              <img
                className="rounded-2xl "
                src={heroImg}
                alt="Hero placeholder"
              />
            </div>
            {/*logo-caroussel*/}
            <LogoCarousel />
            {/*testimonial-container*/}
            <div className="px-8 flex">
              <div className="p-6 flex flex-col border border-zinc-200 rounded-3xl w-full gap-6">
                {/* aspas */}
                <div>
                  <img src="/assets/svg/aspas.svg" alt="" />
                </div>
                {/* estrelas */}
                <div>
                  <img src="/assets/svg/five-stars.svg" alt="" />
                </div>
                {/* texto */}
                <div className="font-sf text-xl ">
                  {t("home.hero.testimonial.text")}
                </div>
                <div className="flex flex-col">
                  {/* autor */}
                  <span className="font-sf font-medium text-xl">
                    {t("home.hero.testimonial.author")}
                  </span>
                  {/* autor-role */}
                  <span className="font-sf text-base text-zinc-700">
                    {t("home.hero.testimonial.author-role")}
                  </span>
                </div>
                {/* cta */}
                <Button
                  variant="brand"
                  className="text-base py-3 rounded-xl h-fit uppercase"
                >
                  {t("home.hero.testimonial.cta-text")} <ArrowOutwardIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* case-study-container */}
        <div>
          {/*titulo*/}
          <h3 className="font-supply text-xl text-zinc-600">
            {t("home.case-study.section-title")}
          </h3>
          {/*case-study-component*/}
          <div></div>

          {/*case-study-component*/}
          <div></div>

          {/*case-study-component*/}
          <div></div>
        </div>

        {/* services-container */}
        <div>
          {/*titulo*/}
          <h3 className="font-supply text-xl text-zinc-600">
            {t("home.services.section-title")}
          </h3>
          {/*lista deserviços*/}
          <div></div>
          {/*CTA*/}
          <div></div>
        </div>

        {/*footer*/}
        <div>
          {/*contact-card*/}
          <div></div>
          {/*site-map*/}
          <div></div>
          {/*short-about*/}
          <div></div>
        </div>
      </div>
    </>
  );
}
