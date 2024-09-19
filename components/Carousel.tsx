// components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PlayIcon from "../icons/play.svg";
import PauseIcon from "../icons/pause.svg";
import ChevRightIcon from "../icons/chevron-right.svg";
import ChevLeftIcon from "../icons/chevron-left.svg";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // State for play/pause
  const [isPaused, setIsPaused] = useState(false); // State for progress bar animation pause

  // useEffect to handle automatic slide change
  useEffect(() => {
    if (!isPlaying) return; // If not playing, do nothing

    // Set up the interval for automatic slide change
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Clear the interval on component unmount or when paused
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, images.length]);

  // Handlers for chevron buttons
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handlers to change play/pause state
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsPaused(!isPaused); // Toggle pause state
  };

  return (
    <div className="relative">
      {/* Display current image */}
      <div className="flex justify-center">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full rounded-lg"
          width={1000}
          height={500}
          quality={100}
        />
      </div>

      {/* Dots and Play/Pause Button */}
      <div className="flex flex-row items-center justify-between mt-3 w-full">
        <div className="flex bg-zinc-900 w-fit p-3 rounded-full space-x-2">
          {/* Play/Pause Button */}
          <button onClick={togglePlayPause} className="flex px-2 items-center">
            {isPlaying ? (
              <PauseIcon style={{ fill: "white", width: 14, height: 14 }} />
            ) : (
              <PlayIcon style={{ fill: "white", width: 14, height: 14 }} />
            )}
          </button>

          {/* Dots */}
          {images.map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <button
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-200 ${
                  index === currentIndex
                    ? "w-10 h-3 rounded-full overflow-hidden bg-zinc-600"
                    : "w-3 h-3 rounded-full bg-zinc-700"
                }`}
              >
                {index === currentIndex && (
                  <div
                    className={`absolute top-0 left-0 h-full bg-zinc-50 transition-all duration-300 ease-linear ${
                      isPaused ? "no-animation" : "animate-fill"
                    }`}
                  ></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Chevron Buttons */}
        <div className="flex flex-row gap-2 items-center">
          <div
            onClick={goToPrevious}
            className="flex items-center justify-center rounded-full p-3 bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
          >
            <ChevLeftIcon style={{ color: "white", width: 16, height: 16 }} />
          </div>
          <div
            onClick={goToNext}
            className="flex items-center justify-center hover:bg-zinc-800 rounded-full p-3 bg-zinc-900 cursor-pointer"
          >
            <ChevRightIcon style={{ color: "white", width: 16, height: 16 }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-animation {
          width: 12px;
          border-radius: 9999px; /* Rounded tip */
        }
        .animate-fill {
          animation: fill 3s linear;
        }

        @keyframes fill {
          from {
            width: 12px;
            border-radius: 9999px; /* Rounded tip */
          }
          to {
            width: 100%;
            border-radius: 9999px; /* Rounded tip */
          }
        }
      `}</style>
    </div>
  );
}
