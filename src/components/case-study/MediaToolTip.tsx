import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type MediaTooltipProps = {
  src: string;
  tooltip: string;
  poster?: string; // só usado em vídeo
  width?: number; // só usado em imagem: reserva espaço e evita CLS
  height?: number;
  variant?: "video" | "image";
  className?: string;
  threshold?: number; // porcentagem visível para dar play
};

export function MediaTooltip({
  src,
  tooltip,
  poster,
  width,
  height,
  variant = "video",
  className,
  threshold = 0.25, // default: 50% visível
}: MediaTooltipProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (variant !== "video" || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [variant, threshold]);

  return (
    <div
      onMouseMove={(e) => {
        setPos({ x: e.clientX, y: e.clientY - 36 });
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn("relative inline-block w-full transition-all", className)}
    >
      {variant === "video" ? (
        <video
          ref={videoRef}
          className="w-full h-auto rounded-3xl object-cover"
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          poster={poster}
          aria-label={tooltip}
        >
          <source src={src} type="video/webm" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      ) : (
        <img
          src={src}
          alt={tooltip}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-3xl object-cover"
        />
      )}

      {/* Tooltip sempre visível quando hover */}
      {hovering && (
        <div
          className="pointer-events-none fixed z-50 px-2 py-1 rounded-md bg-secondary-container text-on-secondary-container"
          style={{
            left: pos.x,
            top: pos.y,
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
