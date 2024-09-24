'use client';

import { useState, useEffect } from "react";

interface SlideshowProps {
  totalImages: number;  // Number of images (e.g., 12)
  interval?: number;    // Interval in milliseconds
}

export default function Slideshow({ totalImages, interval = 300 }: SlideshowProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Update the current image at the given interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages); // Loop over images
      setImageError(false); // Reset error when transitioning to the next image
    }, interval);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [totalImages, interval]);

  // Dynamically generate the image path
  const imagePath = `/img/home/${String(currentImage).padStart(2, "0")}.webp`;

  // Function to handle image load error
  const handleError = () => {
    setImageError(true); // Set error state if image fails to load
  };

  return (
    <div className="relative w-full">  {/* Adjust height if needed */}
      {imageError ? (
        <div className="text-center text-red-500">
          Image {String(currentImage).padStart(2, "0")}.webp not found
        </div>
      ) : (
        <img
          src={imagePath}               // Dynamically set the image source
          alt={`Slideshow image ${currentImage}`}  // Alt text for accessibility
          width={480}               // Set the width
          height={480}              // Set the height
          onError={handleError}      // Handle image load error
           // Ensure it fills the container
        />
      )}
    </div>
  );
}
