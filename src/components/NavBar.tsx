import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import SoftBarrierModal from "@/components/SoftBarrierModal";
import { logEvent } from "@/utils/gaEvents";
import { scrollBehavior } from "@/lib/motion";

export default function NavbarM3() {
  const [isOpen, setIsOpen] = useState(false);

  // const location = useLocation();

  const navButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const wasOpen = useRef(false);

  // const navigation = [
  //   { name: "Portfólio", to: "/portfolio" },
  //   { name: "Sobre", to: "/about" },
  // ];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Foco: ao abrir vai para o primeiro item do menu; ao fechar volta ao botão,
  // mas nunca na montagem da página.
  useEffect(() => {
    if (isOpen) {
      wasOpen.current = true;
      const id = requestAnimationFrame(() =>
        menuRef.current
          ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
          ?.focus()
      );
      return () => cancelAnimationFrame(id);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      navButtonRef.current?.focus();
    }
  }, [isOpen]);

  // dentro do componente

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  };

  return (
    <nav
      aria-label="Principal"
      className="w-full bg-surface text-on-surface relative z-50"
    >
      <div className="flex h-16 items-center justify-between relative z-50 ">
        <Link
          to="/"
          className="flex items-center font-title-lg hover:opacity-80 motion-expressive-effects-fast"
        >
          <img src="/logo.png" alt="g. ui/ux, página inicial" className="h-8 w-auto" />
        </Link>

        {/* Links desktop/tablet */}
        <div className="hidden md:flex flex-1 justify-center gap-2">
          <Button
            variant="ghost"
            className="font-var-wide text-xl rounded-full"
            onClick={() => {
              logEvent("nav_click", { destination: "portfolio" });
              scrollToId("cases");
            }}
          >
            Portfólio
          </Button>
          <Button
            asChild
            variant="ghost"
            className="font-var-wide text-xl rounded-full"
          >
            <Link
              to="/about"
              onClick={() => logEvent("nav_click", { destination: "about" })}
            >
              Sobre
            </Link>
          </Button>
        </div>

        {/* CTA desktop/tablet */}
        <div className="hidden md:flex">
          <SoftBarrierModal />
        </div>

        {/* Botão menu/fechar mobile */}
        <div className="md:hidden flex items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button
                ref={navButtonRef}
                key="menu"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  logEvent("nav_menu_toggle", { action: "open" });
                  setIsOpen(true);
                }}
                className="flex items-center gap-1 motion-expressive-effects-default"
              >
                <span className="text-on-surface-variant uppercase">Menu</span>
                <Menu className="text-primary" size={28} />
              </motion.button>
            ) : (
              <motion.button
                key="fechar"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 motion-expressive-effects-default"
              >
                <span className="text-on-surface-variant uppercase">
                  Fechar
                </span>
                <X className="text-primary" size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Overlay menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-surface-container-low z-40 md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 26,
              mass: 0.9,
            }}
          />
        )}
      </AnimatePresence>

      {/* Conteúdo menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="fixed inset-0 pt-16 z-40 flex flex-col px-6 text-lg md:hidden"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 160,
                damping: 26,
                mass: 0.9,
              },
            }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
          >
            <div className="flex flex-col pt-8">
              {/* Item Portfólio */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  delay: 0,
                }}
              >
                <Button
                  variant="ghost"
                  size="hero"
                  className="text-4xl font-var-wide w-full justify-start"
                  onClick={() => {
                    logEvent("nav_click", { destination: "portfolio" });
                    scrollToId("cases");
                    setIsOpen(false);
                  }}
                >
                  Portfólio
                </Button>
              </motion.div>

              {/* Item Sobre */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  delay: 0.3,
                }}
              >
                <Button
                  asChild
                  variant="ghost"
                  size="hero"
                  className="text-4xl font-var-wide w-full justify-start"
                >
                  <Link
                    to="/about"
                    onClick={() => {
                      logEvent("nav_click", { destination: "about" });
                      setIsOpen(false);
                    }}
                  >
                    Sobre
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="mt-auto pb-6 "
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <SoftBarrierModal />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
