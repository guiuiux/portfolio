"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ZoomImage({ src, alt, width, height }: ZoomImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsZoomed(true);
      });
    } else {
      setIsZoomed(true);
    }
  };

  const handleClose = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsZoomed(false);
      });
    } else {
      setIsZoomed(false);
    }
  };

  return (
    <>
      {/* Thumbnail */}
      <div className="relative cursor-pointer" onClick={handleZoom}>
        <Image
          className="rounded-lg transition-transform duration-300"
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
        />
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0) 1px, var(--background) 1px)",
            backgroundSize: "6px 6px",
            backdropFilter: "blur(16px)",
          }}
          onClick={handleClose}
        >
          <div className="flex flex-col items-end px-4 gap-2">
            <button className="text-white text-xl font-bold" onClick={handleClose}>
              ✕
            </button>
            <div className="relative">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg"
                quality={100}
                style={{
                  maxHeight: "70vh",
                  width: "auto",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
