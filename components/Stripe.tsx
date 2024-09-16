'use client';
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from 'react';

const Stripe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const t = useTranslations();

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const textW = textRef.current.scrollWidth;
      setTextWidth(textW);
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: 'inline-block',
            animation: `scroll ${textWidth / 300}s linear infinite`,
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        >
          <span className="marquee-text">{t("scroll")}</span>
          <span className="marquee-text">{t("scroll")}</span>
          <span className="marquee-text">{t("scroll")}</span>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${textWidth / 3}px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Stripe;
