import Header from "@/components/Header";
import Stripe from "@/components/Stripe";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  // Hook to get translated messages based on the current locale
  const t = useTranslations();

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        {/* HEADER AND MENU */}
        <Header />
        <div className="flex flex-col gap-10 max-w-gui w-full">
          {/* Profile Picture */}
          <Image
            src="/img/home-photo.png"
            width={480}
            height={400}
            quality={100}
            alt={t("imageAltText")}
          />
          {/* Name and Details */}
          <div className="flex flex-col text-xl gap-2">
            <div className="text-zinc-100">{t("name")}</div>
            <div className="text-zinc-600 text-sm font-supplymono font-light">
              <span className="hover:text-zinc-100 transition-colors duration-300">{t("identity")}</span>{" "}
              {"//"}{" "}
              <span className="hover:text-zinc-100 transition-colors duration-300">{t("profession")}</span>{" "}
              {"//"}{" "}
              <span className="hover:text-zinc-100 transition-colors duration-300">{t("year")}</span>{" "}
              {"//"}{" "}
              <span className="hover:text-zinc-100 transition-colors duration-300">{t("locations")}</span>
            </div>
          </div>

          {/* Scrolling Text */}
          <Stripe />

          {/* Bio Section */}
          <div className="flex flex-col gap-2 text-zinc-400 text-sm font-light">
            <p className="text-xl text-zinc-50 font-supplysans">{t("bioTitle")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription1")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription2")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription3")}</p>
          </div>
          <Image
            src="/img/home-photo.png"
            width={480}
            height={400}
            quality={100}
            alt={t("imageAltText")}
          /> 
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
