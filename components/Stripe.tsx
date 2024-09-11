'use client';

import React, { useEffect, useRef, useState } from 'react';

const Stripe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // The text you want to scroll (defined only once)
  const scrollText = 'Soluções Eficientes • Design Centrado no Usuário • Insights Baseados em Dados • Acessibilidade e Estética • Otimização de Processos • Automação Eficiente • ';


  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerW = containerRef.current.offsetWidth;
      const textW = textRef.current.scrollWidth;

      setContainerWidth(containerW);
      setTextWidth(textW);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-white text-sm text-zinc-900"
      style={{ width: '296.66px' }}
    >
      <div
        ref={textRef}
        className="whitespace-nowrap uppercase"
        style={{
          display: 'inline-block',
          animation: `scroll ${textWidth / 200}s linear infinite`,
        }}
      >
        {/* Repeat the text dynamically */}
        <span className="marquee-text">
          {scrollText}
        </span>
        <span className="marquee-text">
          {scrollText}
        </span>
        <span className="marquee-text">
          {scrollText}
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
  );
};

export default Stripe;
