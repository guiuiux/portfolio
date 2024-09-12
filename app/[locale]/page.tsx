import Header from "@/components/Header";
import Stripe from "@/components/Stripe";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ProjectButton from "@/components/ProjectButton";

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
            alt={t("profileImage")}
          />
          {/* Name and Details */}
          <div className="flex flex-col text-xl gap-2">
            <div className="text-zinc-100">{t("name")}</div>
            <div className="text-zinc-500 text-base font-supplymono font-light">
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
          <div className="flex flex-col gap-2 text-zinc-500 font-light">
            <p className="text-xl text-zinc-50 font-supplysans">{t("bioTitle")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription1")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription2")}</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">{t("bioDescription3")}</p>
          </div>
        <ProjectButton 
        name="dsadsa" 
        year="2023" />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
