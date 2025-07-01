import { useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const PATH1 = `M38.875 113.322C38.875 69.5137 74.3887 34 118.197 34H261.803C305.611 34 341.125 69.5137 341.125 113.322C341.125 149.45 316.972 179.937 283.932 189.516C283.717 189.579 283.567 189.776 283.567 190C283.567 190.224 283.717 190.421 283.932 190.484C316.972 200.063 341.125 230.55 341.125 266.678C341.125 310.486 305.611 346 261.803 346H118.197C74.3887 346 38.875 310.486 38.875 266.678C38.875 230.785 62.7138 200.461 95.422 190.674C95.72 190.585 95.9264 190.311 95.9264 190C95.9264 189.689 95.72 189.415 95.422 189.326C62.7138 179.539 38.875 149.214 38.875 113.322Z`;

const PATH2 = `M186.389 6.47298C249.109 -20.7672 312.767 42.8908 285.527 105.611L281.023 115.981C272.707 135.13 272.707 156.87 281.023 176.019L285.527 186.389C312.767 249.109 249.109 312.767 186.389 285.527L176.019 281.023C156.87 272.707 135.13 272.707 115.981 281.023L105.611 285.527C42.8908 312.767 -20.7672 249.109 6.47299 186.389L10.9768 176.019C19.2934 156.87 19.2934 135.13 10.9768 115.981L6.47298 105.611C-20.7672 42.8908 42.8908 -20.7672 105.611 6.47299L115.981 10.9768C135.13 19.2934 156.87 19.2934 176.019 10.9768L186.389 6.47298Z`;

export default function SvgMorpher() {
  const pathRef = useRef();

  // Morph para PATH2 ao hover
  const handleEnter = () => {
    gsap.to(pathRef.current, {
      duration: 0.7, // spring "feeling" = mais rápido e ease natural
      morphSVG: PATH2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  // Morph de volta ao PATH1
  const handleLeave = () => {
    gsap.to(pathRef.current, {
      duration: 0.7,
      morphSVG: PATH1,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <svg
      width={292}
      height={292}
      viewBox="0 0 380 380"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ display: "block", margin: "40px auto", cursor: "pointer" }}
    >
      <path ref={pathRef} d={PATH1} fill="currentColor" />
    </svg>
  );
}
