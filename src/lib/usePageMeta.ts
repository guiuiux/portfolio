import { useEffect } from "react";

const SITE_NAME = "Guilherme Pinheiro";

/** Título (e descrição opcional) por rota, já que o app é uma SPA com um único index.html. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
    }
  }, [title, description]);
}
