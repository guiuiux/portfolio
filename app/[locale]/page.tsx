import Header from "@/components/Header";
import Stripe from "@/components/Stripe";
import { useTranslations } from "next-intl";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";
import BusinessCard from "@/components/BussinessCard";
import Slideshow from "@/components/Slideshow";

// import Image from "next/image";



export default function Home() {
  // Hook to get translated messages based on the current locale
  const t = useTranslations();

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        {/* HEADER AND MENU */}
        <Header />
        
        <div className="flex flex-col gap-10 max-w-gui items-center w-full pb-10">
        <BusinessCard />

          {/* Scrolling Text */}
          <Stripe />

          {/* Bio Section */}
          <div className="flex flex-col gap-2 text-zinc-400 font-light">
            <p className="text-xl text-zinc-50 font-supplysans">
              {t("bioTitle")}
            </p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              {t("bioDescription1")}
            </p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              {t("bioDescription2")}
            </p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              {t("bioDescription3")}
            </p>
          </div>
          <Slideshow totalImages={9} interval={650} />
          <ProjectList />
          {/* <div className="flex flex-col w-full gap-1">
            {[
              { content: t("cv"), isNew: false },
              { content: "// Creative Lab", isNew: true },

            ].map((item, index) => (
              <div
                key={index}
                className="max-w-fit flex flex-col font-light text-base gap-2 transition-colors duration-300 pl-[42.34px] text-zinc-50"
              >
                <div className="border-b-[1px] border-zinc-700">
                  {item.content}
                  {item.isNew && <sup className="text-rose-500 animate-pulse font-bold duration-300"> new</sup>}{" "}
                  {item.isNew && " →"}
                </div>
              </div>
            ))}
          </div> */}
          
        </div>
      </main>
      <footer className='flex flex-col items-center min-w-full p-4'>
        <div className="flex flex-col gap-10 max-w-gui w-full">
          <Footer /> 
        </div>
      </footer>
    </div>
  );
}
