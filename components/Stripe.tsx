'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Stripe = () => {
  const [textWidth, setTextWidth] = useState(0);
  const [rowWidth, setRowWidth] = useState(0); // Row width for images

  const t = useTranslations("Homepage");

  // Fetch the array of phrases from the translation file
  const phrases: string[] = t.raw('scrollSign');

  // Define the color palette for the background colors
  const colors = [
    'bg-green',
    'bg-lightGreen',
    'bg-yellow',
    'bg-lightPink',
    'bg-pink',
    'bg-purple',
  ];

  // Define an array of images with both .webp and .gif formats
  const images = [
    '/img/home/00.webp',
    '/img/home/00.gif',
    '/img/home/02.webp',
    '/img/home/01.gif',
    '/img/home/04.webp',
    '/img/home/13.webp',
    '/img/home/05.webp',
    '/img/home/02.gif',
    '/img/home/07.webp',
    '/img/home/08.webp',
    '/img/home/04.gif',
    '/img/home/10.webp',
    '/img/home/11.webp',
    '/img/home/05.gif',
    '/img/home/12.webp',
    '/img/home/03.gif',
  ];

  // Duplicate the phrases and images to create a seamless scrolling loop
  const repeatedPhrases = [...phrases, ...phrases, ...phrases]; // Repeated 3 times
  const [imageSet, setImageSet] = useState([...images, ...images]); // Placeholder, we'll update it based on viewport

  useEffect(() => {
    // Measure text width dynamically
    const textWidth = document.getElementById("text-strip")?.scrollWidth || 0;
    setTextWidth(textWidth);

    // Calculate the row width for images dynamically based on the parent width
    const rowWidth = document.getElementById("image-row")?.scrollWidth || 0;
    setRowWidth(rowWidth);

    // Dynamically adjust the number of images to fill 2x row width
    const imagesPerSet = Math.ceil((2 * rowWidth) / 200); // Ensure at least 2x row worth of images
    const newImageSet = Array.from({ length: imagesPerSet }, (_, i) => images[i % images.length]);
    setImageSet([...newImageSet, ...newImageSet, ...newImageSet]); // Duplicate for smooth loop
  }, [phrases]);

  // Randomize the background colors for phrases but make it consistent across page loads
  const randomizeColor = (index: number) => {
    const randomSeed = Math.floor((index + performance.now()) % colors.length); // Ensures a "random" but consistent color across reloads
    return colors[randomSeed];
  };

  // Framer Motion settings for infinite animation (Text and New Image Row)
  const textAnimationSettings = {
    animate: {
      x: [-textWidth * 0.333, -textWidth * 0.666], // Move from 0 to the full width of the text
    },
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: textWidth / 350, // Adjust the speed by changing the divisor
    },
  };

  // Framer Motion settings for infinite animation (Images moving in opposite direction)
  const imageAnimationSettings = {
    animate: {
      x: [-rowWidth * 0.666, -rowWidth * 0.333], // Move from 1.5x row width to 0.5x row width
    },
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: rowWidth / 300, // Adjust to match the text speed
    },
  };

  const imageAnimationTwo = {
    animate: {
      x: [-rowWidth * 0.333, -rowWidth * 0.666], // Move in opposite direction
    },
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: rowWidth / 250, // Adjust to match the text speed
    },
  };

  // Function to render image based on its type
  const renderImage = (img: string) => {
    return (
      <Image
        key={img}
        src={img}
        quality={100}
        alt={img.endsWith('.gif') ? "GIF Image" : "WebP Image"}
        height={100} // Fixed height for all images
        width={720} // Width adjusts automatically based on the container
        className="rounded-xl"
        style={{ width: 'auto', height: '100px', objectFit: 'cover' }} // Use CSS for sizing and aspect ratio
      />
    );
  };

  return (
    <div className="w-full flex flex-col gap-1">
      {/* Image stripe on top, moving in the opposite direction */}
      <motion.div
        id="image-row"
        className="relative"
        style={{ display: "flex", gap: "6px" }} // Fixed height for images
        {...imageAnimationSettings}
      >
        {imageSet.map((img) => renderImage(img))}
      </motion.div>

      {/* Text stripe */}
      <div className="relative text-zinc-50">
        <motion.div
          id="text-strip"
          className="whitespace-nowrap flex items-center lowercase gap-1 font-medium font-whyteinktrap"
          {...textAnimationSettings}
        >
          {repeatedPhrases.map((phrase, index) => {
            const colorClass = randomizeColor(index); // Assign consistent random color

            const textColor = colorClass === 'bg-purple' ? 'text-zinc-50' : 'text-black';

            return (
              <div key={index} className="flex items-center">
                <span
                  className={`rounded-full px-3 py-1 ${colorClass} ${textColor}`}
                >
                  {phrase}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* New Image stripe below the text, moving in the same direction as the text */}
      <motion.div
        className="relative"
        style={{ display: "flex", gap: "6px" }} // Fixed height for images
        {...imageAnimationTwo}
      >
        {imageSet.map((img) => renderImage(img))}
      </motion.div>
    </div>
  );
};

export default Stripe;
