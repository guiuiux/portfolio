'use client';
import { useTranslations } from "next-intl";

import React, { useEffect, useRef, useState } from 'react';

const Stripe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  const t = useTranslations();

  // The text you want to scroll (defined only once)

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerW = containerRef.current.offsetWidth;
      const textW = textRef.current.scrollWidth;


      setTextWidth(textW);

      console.log(containerW);
    }
  }, []);

  return (
    <div className="w-full">
    <div
      ref={containerRef}
      className="relative overflow-hidden text-zinc-50"
      style={{ width: '296.66px' }}
    >
      <div
        ref={textRef}
        className="whitespace-nowrap uppercase font-light font-supplymono"
        style={{
          display: 'inline-block',
          animation: `scroll ${textWidth / 300}s linear infinite`,
        }}
      >
        {/* Repeat the text dynamically */}
        <span className="marquee-text">
        {t("scroll")}
        </span>
        <span className="marquee-text">
        {t("scroll")}
        </span>
        <span className="marquee-text">
        {t("scroll")}
        </span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${textWidth / 3}px); /* Adjust to one-third of the total width */
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default Stripe;
