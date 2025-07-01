import { useRef, useEffect } from "react";
import gsap from "gsap";

const BASE_PATH = "/assets/img/home/hero-animated/";

const upDuration = 0.2; // rápido para o ápice (~220ms)
const downDuration = 0.6; // volta mais devagar e com bounce (~440ms)
const upEase = "expo.out"; // ou "power2.out" para curva mais Material
const downEase = "elastic.out(1,0.35)";
const HOVER_SCALE = 1.09;

interface HeroAnimatedProps {
  speed?: number;
}

export function HeroAnimated({ speed = 8 }: HeroAnimatedProps) {
  const canvasSize = 1150;
  const imageSize = 1078;
  const imageOffset = (canvasSize - imageSize) / 2;
  const maskSize = 750;
  const maskOffset = (canvasSize - maskSize) / 2;

  const maskGroupRef = useRef<SVGGElement | null>(null);
  const shape1Ref = useRef<SVGImageElement | null>(null);
  const shape2Ref = useRef<SVGImageElement | null>(null);

  // Rotação contínua
  useEffect(() => {
    const maskTween = gsap.to(maskGroupRef.current, {
      rotate: 360,
      repeat: -1,
      transformOrigin: "50% 50%",
      ease: "none",
      duration: speed,
    });
    const shapeTween1 = gsap.to(shape1Ref.current, {
      rotate: 360,
      repeat: -1,
      transformOrigin: "50% 50%",
      ease: "none",
      duration: speed,
    });
    const shapeTween2 = gsap.to(shape2Ref.current, {
      rotate: 360,
      repeat: -1,
      transformOrigin: "50% 50%",
      ease: "none",
      duration: speed,
    });
    return () => {
      maskTween.kill();
      shapeTween1.kill();
      shapeTween2.kill();
    };
  }, [speed]);

  function pulse(element: SVGElement | null, delay: number) {
    if (!element) return;
    // Sobe rápido, sem bounce
    gsap.to(element, {
      scale: HOVER_SCALE,
      transformOrigin: "50% 50%",
      duration: upDuration,
      ease: upEase,
      delay,
      onComplete: () => {
        // Volta, com bounce
        gsap.to(element, {
          scale: 1,
          transformOrigin: "50% 50%",
          duration: downDuration,
          ease: downEase,
        });
      },
    });
  }

  function handleHoverIn() {
    pulse(maskGroupRef.current, 0);
    pulse(shape1Ref.current, 0.0333);
    pulse(shape2Ref.current, 0.0666);
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${canvasSize} ${canvasSize}`}
      className="block max-w-[480px]aspect-square mx-auto cursor-pointer"
      style={{ isolation: "isolate", display: "block" }}
      onMouseEnter={handleHoverIn}
      onTouchStart={handleHoverIn}
    >
      <defs>
        <mask id="animated-mask">
          <g ref={maskGroupRef}>
            <image
              href={BASE_PATH + "mask.svg"}
              width={maskSize}
              height={maskSize}
              x={maskOffset}
              y={maskOffset}
              style={{ pointerEvents: "none", userSelect: "none" }}
              crossOrigin="anonymous"
            />
          </g>
        </mask>
      </defs>
      <image
        ref={shape2Ref}
        href={BASE_PATH + "shape-2.png"}
        width={imageSize}
        height={imageSize}
        x={imageOffset}
        y={imageOffset}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      <image
        ref={shape1Ref}
        href={BASE_PATH + "shape-1.png"}
        width={imageSize}
        height={imageSize}
        x={imageOffset}
        y={imageOffset}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      <image
        href={BASE_PATH + "layer-3.png"}
        width={imageSize}
        height={imageSize}
        x={imageOffset}
        y={imageOffset}
        mask="url(#animated-mask)"
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      <image
        href={BASE_PATH + "layer-2.png"}
        width={imageSize}
        height={imageSize}
        x={imageOffset}
        y={imageOffset}
        mask="url(#animated-mask)"
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      <image
        href={BASE_PATH + "layer-1.png"}
        width={imageSize}
        height={imageSize}
        x={imageOffset}
        y={imageOffset}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
    </svg>
  );
}
