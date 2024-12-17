import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CREATIVE_LAB from "../../data/creativeLab";

export default function AnimatedProjectsGrid() {
  const [selectedTag, setSelectedTag] = useState("all");

  // Extract unique tags from CREATIVE_LAB
  const tags = useMemo(() => {
    const allTags = CREATIVE_LAB.flatMap((project) => project.category || []);
    return ["all", ...new Set(allTags)];
  }, []);

  // Filter projects based on the selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "all") return CREATIVE_LAB;
    return CREATIVE_LAB.filter((project) =>
      project.category?.includes(selectedTag),
    );
  }, [selectedTag]);

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Tags Row */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 ${
              selectedTag === tag
                ? "bg-pink-500 text-zinc-950"
                : " text-zinc-200 border hover:bg-zinc-800"
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated Grid */}
      <motion.div
        layout
        className="mt-16 px-2 w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer aspect-square transform-gpu"
            >
              {project.media ? (
                project.type === "video" ? (
                  <video
                    src={project.media}
                    className="w-full h-auto rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                )
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">No media available</p>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
