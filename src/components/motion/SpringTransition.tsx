import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

/**
 * Material 3 Expressive spring/effects tokens
 *
 * SPEED    | SPATIAL (transform, movimento, scale, pos)         | EFFECTS (opacity, cor, sombra)
 * ---------|-----------------------------------------------------|-------------------------------
 * fast     | 350ms, elastic.out(1,0.7)                           | 150ms, power2.out
 * default  | 500ms, elastic.out(1,0.7)                           | 200ms, power2.out
 * slow     | 650ms, elastic.out(1,0.7)                           | 300ms, power2.out
 */
const spatialTokens = {
  fast: { duration: 0.35, ease: "elastic.out(1,0.7)" },
  default: { duration: 0.5, ease: "elastic.out(1,0.7)" },
  slow: { duration: 0.65, ease: "elastic.out(1,0.7)" },
} as const;
const effectsTokens = {
  fast: { duration: 0.15, ease: "power2.out" },
  default: { duration: 0.2, ease: "power2.out" },
  slow: { duration: 0.3, ease: "power2.out" },
} as const;

type EffectKind = "y" | "x" | "scale" | "fade";
type AxisDirection = "up" | "down" | "left" | "right";
type SpeedToken = keyof typeof spatialTokens; // "fast" | "default" | "slow"

interface SpringTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  enter?: EffectKind | EffectKind[];
  direction?: AxisDirection;
  speed?: SpeedToken;
  delay?: number;
  spring?: boolean; // (mantém para futuro, mas sempre true se speed = spatial)
  scrollReveal?: boolean;
  threshold?: number; // entre 0 e 1
  className?: string;
}

export function SpringTransition({
  children,
  enter = ["y", "fade"],
  direction = "up",
  speed = "default",
  delay = 0,
  // spring = true,
  scrollReveal = false,
  threshold = 0.12,
  className = "",
  ...props
}: SpringTransitionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Normaliza enter para array
  const enterArr: EffectKind[] = Array.isArray(enter) ? enter : [enter];
  const axis = enterArr.includes("y")
    ? "y"
    : enterArr.includes("x")
    ? "x"
    : undefined;
  let from = 0;
  if (axis === "y") {
    from = direction === "down" ? -64 : 64;
  } else if (axis === "x") {
    from = direction === "right" ? -64 : 64;
  }

  // Decide tokens baseado no tipo de efeito
  // Se envolver transform/movimento (spatial): use spatialToken
  // Se envolver só "fade": use effectsToken
  const hasSpatial = enterArr.some(
    (k) => k === "y" || k === "x" || k === "scale"
  );
  const spatialToken = spatialTokens[speed];
  const effectsToken = effectsTokens[speed];

  useEffect(() => {
    if (!ref.current) return;

    const init: gsap.TweenVars = {};
    if (enterArr.includes("fade")) init.opacity = 0;
    if (axis) init[axis] = from;
    if (enterArr.includes("scale")) init.scale = 0.96;

    const final: gsap.TweenVars = {};
    if (enterArr.includes("fade")) final.opacity = 1;
    if (axis) final[axis] = 0;
    if (enterArr.includes("scale")) final.scale = 1;

    // Caso scrollReveal
    if (scrollReveal) {
      gsap.set(ref.current, init);
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !revealed) {
              gsap.to(ref.current, {
                ...final,
                delay,
                duration: hasSpatial
                  ? spatialToken.duration
                  : effectsToken.duration,
                ease: hasSpatial ? spatialToken.ease : effectsToken.ease,
                overwrite: "auto",
              });
              setRevealed(true);
            }
          });
        },
        { threshold }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    } else {
      gsap.fromTo(ref.current, init, {
        ...final,
        delay,
        duration: hasSpatial ? spatialToken.duration : effectsToken.duration,
        ease: hasSpatial ? spatialToken.ease : effectsToken.ease,
        overwrite: "auto",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollReveal, threshold, speed]);

  return (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  );
}
