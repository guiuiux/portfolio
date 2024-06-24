import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface PortalTextProps {
  text: string;
  fontSize?: string;
}

const PortalText: React.FC<PortalTextProps> = ({ text, fontSize = "1em" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [fontSize]);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{ position: "relative", overflow: "hidden", height: `${textHeight}px`, lineHeight: fontSize }}
    >
      <motion.div
        ref={textRef}
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          fontSize: fontSize,
        }}
        initial={{ y: 0, x: 0 }}
        animate={{ y: isHovered ? -textHeight : 0, x: isHovered ? -textHeight * 2 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          fontSize: fontSize,
        }}
        initial={{ y: textHeight, x: textHeight * 2 }}
        animate={{ y: isHovered ? 0 : textHeight, x: isHovered ? 0 : textHeight * 2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default PortalText;
