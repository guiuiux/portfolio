import "./App.css";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Lottie from "lottie-react";
import head from "../public/lottie/head.json";
import { Button } from "./components/ui/Button";

function App() {
  const { t } = useTranslation();

  // Scoped translation function for "Homepage"
  // const tr = (key, options = {}) => t(`Homepage.${key}`, options);

  // create a function that will change the path to /en or /pt (depending on which one is current)

  return (
    // Render your main app content here <div>Your App Content
    <>
      <div className="text-start flex flex-col gap-4 p-4">
        {/* create button component with onClick that will change path to /en or /pt (depending on which one is current) */}

        <Header />

        {/*This will become BussinessCard component */}
        <div className="p-6 border flex flex-col gap-2 rounded-xl max-w-[580px] w-fit items-start border-zinc-700 font-light">
          <h1 className=" flex flex-col text-3xl font-bold font-whyteinktrap">
            <span>{t("Homepage.bussinessCard.title.a")}</span>
            <span className="inline-flex items-baseline">
              <Lottie className=" h-10  align-baseline" animationData={head} />
              <span className="item">
                {t("Homepage.bussinessCard.title.b")}
              </span>
            </span>
          </h1>
          <p className="text-zinc-300">
            {t("Homepage.bussinessCard.subtitle")}
          </p>
          <div className="mt-2 flex gap-2">
            <Button className="py-3 rounded-full h-fit flex align-middle">
              <span>Book a call </span>
              <div className="flex material-symbols-rounded">
                calendar_today
              </div>
            </Button>
          </div>
        </div>

        {/*This will become BussinessCard component */}
      </div>
    </>
  );
}

export default App;
