import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const useHotjar = () => {
  useEffect(() => {
    const siteId = 5255913; // ID direto
    const hotjarVersion = 6; // Versão direta
    const environment = import.meta.env.MODE; // Verifica o modo do Vite

    if (environment === "production" && siteId && hotjarVersion) {
      if (!Hotjar.initialized()) {
        Hotjar.init(siteId, hotjarVersion);
        console.log("✅ Hotjar inicializado em produção");
      }
    } else {
      console.warn("⚠️ Hotjar não foi inicializado. Ambiente:", environment);
    }
  }, []);
};

export default useHotjar;
