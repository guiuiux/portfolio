"use client";

import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/lottie/hamburger-close.json'; // Replace with your Lottie animation JSON file

const HamburgerButton = forwardRef(({ isOpen }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationInstanceRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      animationInstanceRef.current.goToAndStop(5, true);
      console.log("Animation loaded at frame:", animationInstanceRef.current.currentFrame);
    }

    return () => {
      animationInstanceRef.current?.destroy();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    playSegments: (segments) => {
      if (animationInstanceRef.current) {
        animationInstanceRef.current.playSegments(segments, true);
      }
    },
    goToAndStop: (frame) => {
      if (animationInstanceRef.current) {
        animationInstanceRef.current.goToAndStop(frame, true);
      }
    },
  }));

  return (
    <div
      ref={containerRef}
      style={{ width: 24, height: 24, cursor: 'pointer' }}
    />
  );
});

export default HamburgerButton;
