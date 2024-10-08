'use client';

import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';

// Dynamically import the Lottie player, disabling SSR
const Player = dynamic(() => import('lottie-react').then(mod => mod.default), {
  ssr: false,
});
import animationData from "../public/lottie/head.json"; // Adjust the path as necessary

const BusinessCard = () => {
  const t = useTranslations("Homepage");

  return (
    <div className="border-[1px] flex flex-col rounded-2xl gap-4 border-zinc-700 p-8 hover:bg-zinc-900 hover:border-[#000000] w-full hover:-translate-y-[2.5px] transition-all duration-200 ">
      {/* Lottie Animation */}
      <Player
        autoplay
        loop
        animationData={animationData}  // Pass the imported animation data
        className="w-16 rounded-lg transform"
      />
      
      {/* Name and Details */}
      <div className="flex flex-col text-xl gap-2">
        <div className="text-zinc-100 text-4xl sm:text-5xl transition-all font-semibold duration-500 font-whyteinktrap">
          {t("name")}
        </div>
        <div className="text-zinc-400 text-sm font-supplymono font-light">
          <span className="hover:text-zinc-100 transition-colors duration-300">
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
