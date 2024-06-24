'use client'

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface AnimatedIconProps {
  animationData: any;
  initialFrame?: number;
  playFrames?: [number, number];
  clickToggle?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeStyles = {
  small: { width: '1.5rem', height: '1.5rem' },
  medium: { width: '1.75rem', height: '1.75rem' },
  large: { width: '2rem', height: '2rem' },
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  animationData,
  initialFrame = 0,
  playFrames,
  clickToggle = false,
  className,
  size = 'medium',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animInstance = useRef<any>(null);
  const isOpen = useRef(false); // Track the current state of the animation

  useEffect(() => {
    if (containerRef.current) {
      animInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });
      animInstance.current.goToAndStop(initialFrame, true);
    }

    return () => {
      animInstance.current?.destroy();
    };
  }, [animationData, initialFrame]);

  const handleClick = () => {
    if (animInstance.current && playFrames) {
      if (isOpen.current) {
        animInstance.current.playSegments([playFrames[1], playFrames[0]], true);
      } else {
        animInstance.current.playSegments(playFrames, true);
      }
      isOpen.current = !isOpen.current;
    }
  };

  return (
    <div
      onClick={clickToggle ? handleClick : undefined}
      className={className}
      ref={containerRef}
      style={{ cursor: 'pointer', ...sizeStyles[size] }}
    ></div>
  );
};

export default AnimatedIcon;
