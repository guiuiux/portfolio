import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const useHotjar = () => {
  useEffect(() => {
    const siteId = 5255913;
    const hotjarVersion = 6;
    const environment = import.meta.env.MODE;

    if (environment === "production") {
      Hotjar.init(siteId, hotjarVersion);
      console.log("✅ Hotjar inicializado em produção.");
    }
  }, []);
};

export default useHotjar;
