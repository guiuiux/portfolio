import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import gsap from "gsap";

// Motion tokens - Expressive, fast (Material 3)
// Você pode customizar esses valores para outras velocidades ou personalidades.
const motion = {
  expressive: {
    spatial: {
      // Para movimento: transform (translate, scale, rotate, etc.)
      ease: "elastic.out(1, 0.7)", // Overshoot/bounce Material
      duration: 0.35, // 350ms (fast spatial)
    },
    effects: {
      // Para efeitos: opacity, color, shadow, etc. (sem overshoot!)
      ease: "power2.out", // Suave, sem bounce (Material effects)
      duration: 0.15, // 150ms (fast effects)
    },
  },
} as const;

export default function BackToTop() {
  // Controla se o botão está visível (scrolou mais de 300px)
  const [visible, setVisible] = useState(false);
  // Controla se o botão está "ativo" (clicado/pressionado)
  const [isActive, setIsActive] = useState(false);
  // Referência do botão para animar com GSAP
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Atualiza a visibilidade do botão ao rolar a página
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animação de entrada/saída usando spatial (spring, com bounce)
  useEffect(() => {
    if (!buttonRef.current) return;
    if (visible) {
      // Aparecer: animar de baixo para cima, com escala e opacidade
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: "auto",
        duration: motion.expressive.spatial.duration,
        ease: motion.expressive.spatial.ease,
      });
    } else {
      // Sumir: descer, reduzir escala e opacidade, sem bounce (mais seco)
      gsap.to(buttonRef.current, {
        opacity: 0,
        y: 64, // equivale a translate-y-16 (~64px)
        scale: 0.75,
        pointerEvents: "none",
        duration: motion.expressive.spatial.duration * 0.7, // um pouco mais rápido para sair
        ease: "power1.in",
      });
    }
  }, [visible]);

  // Feedback visual rápido ao clicar (efeito de "toque" Material)
  useEffect(() => {
    if (!buttonRef.current) return;
    if (isActive) {
      // Ativo: cresce rapidamente (efeito spring, spatial)
      gsap.to(buttonRef.current, {
        scale: 1.13,
        duration: motion.expressive.spatial.duration * 0.5,
        ease: motion.expressive.spatial.ease,
      });
      setTimeout(() => {
        // Volta para escala 1, com bounce menor
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: motion.expressive.spatial.duration * 0.7,
          ease: motion.expressive.spatial.ease,
        });
      }, motion.expressive.effects.duration * 900); // quase igual ao efeito de toque (timing ajustável)
    }
  }, [isActive]);

  // Função de clique para subir ao topo
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      buttonRef.current?.blur();
    }, 800); // tempo para "desativar" o feedback do toque
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      type="button"
      tabIndex={0}
      // Importante: inicia escondido fora da tela
      style={{
        opacity: 0,
        transform: "translateY(64px) scale(0.75)",
        pointerEvents: "none",
      }}
      className={`
        group fixed bottom-8 right-8 z-50
        rounded-full bg-zinc-900/80 hover:bg-zinc-800
        text-white shadow-lg p-3 backdrop-blur-md
        focus:outline-none focus:ring-2 focus:ring-amber-400
        transition-shadow
        ring-amber-400
      `}
    >
      <ChevronUp
        className={`
          w-6 h-6 group-hover:scale-110
          transition-transform duration-[${
            motion.expressive.effects.duration * 1000
          }ms] ease-[${motion.expressive.effects.ease}]
        `}
      />
    </button>
  );
}
