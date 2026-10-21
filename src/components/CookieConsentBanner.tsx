// src/components/CookieConsentBanner.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation, Trans } from "react-i18next";
import { initGA, initClarity } from "@/utils/analytics";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (!saved) {
      const timer = setTimeout(() => setShow(true), 500); // delay de 2s para aparecer
      return () => clearTimeout(timer);
    } else if (saved === "granted") {
      initGA();
      initClarity();
    }
  }, []);

  const handleConsent = (consent: "granted" | "denied") => {
    localStorage.setItem("cookie_consent", consent);
    setShow(false);

    fetch("/api/log-consent.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ consent }),
    })
      .catch((err) => console.error("Erro ao logar consentimento:", err));

    if (consent === "granted") {
      initGA();
      initClarity();
    }
  };

  // Variants M3 Expressive
  const easeExpressive = [0.2, 0, 0, 1] as const; // still used for opacity fades

  const expressiveSpring = {
    type: "spring",
    stiffness: 700, // strong push
    damping: 24, // lets it bounce once
    mass: 0.9, // keeps it snappy
  };

  const bannerVariants = {
    initial: {
      y: prefersReduced ? 0 : 32,
      opacity: prefersReduced ? 1 : 0,
      scale: 0.96,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: prefersReduced
        ? { duration: 0 }
        : {
            y: expressiveSpring,
            scale: expressiveSpring,
            opacity: { duration: 0.35, ease: easeExpressive },
          },
    },
    exit: {
      y: prefersReduced ? 0 : 32,
      opacity: prefersReduced ? 0 : 0,
      scale: 0.96,
      transition: prefersReduced
        ? { duration: 0 }
        : {
            y: expressiveSpring,
            scale: expressiveSpring,
            opacity: { duration: 0.28, ease: easeExpressive },
          },
    },
  };

  const cookieVariants = {
    initial: { y: 8, opacity: 0, scale: 0.96 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: prefersReduced
        ? { duration: 0 }
        : {
            y: expressiveSpring,
            scale: expressiveSpring,
            opacity: { duration: 0.4, ease: easeExpressive },
          },
    },
    exit: {
      y: 8,
      opacity: 0,
      scale: 0.96,
      transition: prefersReduced
        ? { duration: 0 }
        : {
            y: expressiveSpring,
            scale: expressiveSpring,
            opacity: { duration: 0.2, ease: easeExpressive },
          },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label={t("cookies.dialog-aria")}
          className="
            fixed left-1/2 -translate-x-1/2 bottom-4 z-50
            w-[calc(100%-16px)] md:w-[min(920px,calc(100%-32px))] lg:w-fit
            bg-surface-container text-on-surface
            rounded-2xl shadow-lg
          "
          variants={bannerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 p-6 md:p-8">
            {/* GIF */}
            <motion.img
              src="/assets/gifs/cookie/cookie.gif"
              alt=""
              loading="lazy"
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
              variants={cookieVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            {/* Texto */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-base text-on-surface">
                <Trans
                  i18nKey="cookies.title"
                  components={{
                    highlight: <span className="font-semibold underline" />,
                  }}
                />
              </p>
              <p className="text-sm text-on-surface-variant">
                {t("cookies.description")}
              </p>
            </div>

            {/* Ações */}
            <div className="w-full md:w-fit ">
              <div className="flex gap-1">
                <Button
                  size="cookies"
                  variant="outline"
                  className="rounded-r-3xl rounded-l-[90px] w-full"
                  onClick={() => handleConsent("denied")}
                >
                  {t("cookies.decline-btn")}
                </Button>
                <Button
                  variant="default"
                  size="cookies"
                  className="rounded-l-3xl rounded-r-[90px] w-full "
                  onClick={() => handleConsent("granted")}
                >
                  {t("cookies.accept-btn")}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
