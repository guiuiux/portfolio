// src/routes/LinkScroller.tsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

type Props = {
  /** Se você usa um container de scroll custom (ex.: <main> com overflow), passe o seletor CSS aqui */
  containerSelector?: string;
  /** Comportamento do scroll; "auto" evita animação durante transições de rota */
  behavior?: ScrollBehavior; // "auto" | "smooth" | "instant" (TS aceita "auto" | "smooth")
  /** Se true, mudanças só no hash (#ancora) não disparam scroll-to-top */
  ignoreHash?: boolean;
};

export default function LinkScroller({
  containerSelector,
  behavior = "auto",
  ignoreHash = true,
}: Props) {
  const { pathname, search, hash } = useLocation();
  const prevKeyRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLElement | Window>(window);
  const prevScrollRestoration = useRef<ScrollRestoration | undefined>(
    undefined
  );

  // Resolve container alvo do scroll (window ou um scroller custom)
  useEffect(() => {
    if (containerSelector) {
      const el = document.querySelector(
        containerSelector
      ) as HTMLElement | null;
      containerRef.current = el ?? window;
    } else {
      containerRef.current = window;
    }
  }, [containerSelector]);

  // Desativa a restauração automática de scroll do navegador (evita “manter posição”)
  useEffect(() => {
    if ("scrollRestoration" in history) {
      prevScrollRestoration.current = history.scrollRestoration;

      history.scrollRestoration = "manual";
      return () => {
        // restaura o valor anterior ao desmontar (opcional)
        if (prevScrollRestoration.current) {
          history.scrollRestoration = prevScrollRestoration.current;
        }
      };
    }
  }, []);

  // Faz o scroll ao topo DEPOIS que a nova rota montar/pintar
  useEffect(() => {
    const key = pathname + search + (ignoreHash ? "" : hash);

    // evita rodar no primeiro render ou quando a “rota lógica” não mudou
    if (prevKeyRef.current === key) return;

    const target = containerRef.current;

    const scrollNow = () => {
      if (target === window) {
        window.scrollTo({ top: 0, left: 0, behavior });
      } else {
        (target as HTMLElement).scrollTo({
          top: 0,
          left: 0,
          behavior: behavior as ScrollBehavior,
        });
      }
      prevKeyRef.current = key;
    };

    // Espera o commit de layout/pintura da nova página para evitar “jank” na tela anterior
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollNow);
    });
  }, [pathname, search, hash, behavior, ignoreHash]);

  return null;
}
