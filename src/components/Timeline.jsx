"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "2018",
    title: "Project Initiation",
    description:
      "Hired as a designer to create digital versions of Mackenzie Education System textbooks.",
    isHighlight: true,
  },
  {
    year: "2019",
    title: "App 1.0 Launch",
    description:
      "First version of the app launched with basic functionality and performance issues.",
  },
  {
    year: "2020",
    title: "Research & Development",
    description:
      "Conducted market research and explored state-of-the-art digital book technologies.",
  },
  {
    year: "2020",
    title: "Accessibility Workshop",
    description:
      "Collaborated with the Educational Technology team to address accessibility challenges.",
  },
  {
    year: "2021",
    title: "Transition to UI/UX",
    description:
      "Shifted focus from editorial design to UI/UX, creating responsive and accessible prototypes.",
    isHighlight: true,
  },
  {
    year: "2021",
    title: "New Production Process",
    description:
      "Implemented a new bifurcated production process for print and digital books.",
  },
  {
    year: "2022",
    title: "App 2.0 Launch",
    description:
      "Released the improved app with optimized file sizes, enhanced readability, and accessibility features.",
    isHighlight: true,
  },
];

export default function MonochromaticTimeline() {
  const timelineRef = useRef < HTMLDivElement > null;
  const eventRefs = useRef([]);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    eventRefs.current.forEach((eventRef) => {
      if (eventRef) {
        gsap.from(eventRef, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eventRef,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  return (
    <div
      ref={timelineRef}
      className="max-w-4xl mx-auto p-8 bg-zinc-900 text-zinc-100 rounded-lg shadow-2xl"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-100">
        Product Lifecycle Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            className={`mb-12 relative pl-20 ${event.isHighlight ? "ml-4" : ""}`}
          >
            <div
              className={`absolute left-0 w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-lg border-4 ${event.isHighlight ? "border-zinc-300" : "border-zinc-700"} shadow-lg`}
            >
              {event.isHighlight ? (
                <Sparkles className="w-8 h-8 text-zinc-300" />
              ) : (
                <span className="text-zinc-300">{event.year}</span>
              )}
            </div>
            <div
              className={`bg-zinc-800 p-6 rounded-lg shadow-md ${event.isHighlight ? "ring-2 ring-zinc-300" : ""}`}
            >
              <h3
                className={`text-2xl font-semibold mb-2 ${event.isHighlight ? "text-zinc-100" : "text-zinc-300"}`}
              >
                {event.title}
                {event.isHighlight && (
                  <span className="ml-2 text-sm font-normal text-zinc-400">
                    {event.year}
                  </span>
                )}
              </h3>
              <p className="text-zinc-400">{event.description}</p>
            </div>
            <div className="absolute left-8 top-8 w-8 h-0.5 bg-zinc-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
