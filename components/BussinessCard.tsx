import { useTranslations } from "next-intl";

const BusinessCard = () => {
  const t = useTranslations();
  
  return (
    <div className="border-[1px] flex flex-col rounded-2xl gap-4 border-zinc-900 p-8 hover:bg-[#050505] hover:border-[#000000] hover:-translate-y-0.5 transition-all duration-300 ">
      {/* Animated Profile Video */}
      <video
  className="w-16 rounded-lg transform scale-x-[-1]"
  src="/vids/head.webm"
  autoPlay
  loop
  muted
  playsInline
/>

      
      {/* Name and Details */}
      <div className="flex flex-col text-xl gap-2">
        <div className="text-zinc-100 font-semibold ">{t("name")}</div>
        <div className="text-zinc-400 text-sm font-supplymono font-light">
          <span className="hover:text-zinc-100 transition-colors duration-300 ">
            {t("identity")}
          </span>{" "}
          {"//"}{" "}
          <span className="hover:text-zinc-100 transition-colors duration-300">
            {t("profession")}
          </span>{" "}
          {"//"}{" "}
          <span className="hover:text-zinc-100 transition-colors duration-300">
            {t("year")}
          </span>{" "}
          {"//"}{" "}
          <span className="hover:text-zinc-100 transition-colors duration-300">
            {t("locations")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
