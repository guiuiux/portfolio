import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center gap-4 pt-20 px-4">
      <div>
        <h1 className="text-6xl w-full font-whyteinktrap flex  text-center">
          <span className="text-zinc-50 font-extrabold sm:text-8xl text-4xl">
            CREATIVE
          </span>
          <span className="text-pink-500 font-black text-5xl">LAB</span>
        </h1>
        <p className="text-zinc-400">{t("creativeLab.hero.subtitle")}</p>
      </div>
    </section>
  );
}
