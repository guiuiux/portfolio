// images
import coxinha from "../assets/creative-lab/coxinha.webp";
import charlie from "../assets/creative-lab/charlie.webp";
import alien from "../assets/creative-lab/alien.webp";
import selfportrait from "../assets/creative-lab/selfportrait.webp";
import fishman from "../assets/creative-lab/fishman.webp";
import hanged from "../assets/creative-lab/hanged.webp";
import pudim from "../assets/creative-lab/pudim.webp";

// videos
import guardachuva from "../assets/creative-lab/guarda-chuva.webm";
import chuvisco from "../assets/creative-lab/chuvisco.webm";
import oldlogo from "../assets/creative-lab/old_logo.webm";
import treeVideo from "../assets/creative-lab/tree.webm";
import fish from "../assets/creative-lab/fish.webm";
import buddy from "../assets/creative-lab/buddy.webm";

const CREATIVE_LAB = [
  {
    id: 1,
    title: "Coxinha",
    media: coxinha, // Relative path to the .webp file
    type: "image", // Media type: "image" or "video"
    category: ["illustration", "character"],
  },
  {
    id: 2,
    title: "Charlie",
    media: charlie,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 3,
    title: "Alien",
    media: alien,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 4,
    title: "Self Portrait",
    media: selfportrait,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 5,
    title: "Fishman",
    media: fishman,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 6,
    title: "Hanged",
    media: hanged,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 7,
    title: "Pudim",
    media: pudim,
    type: "image",
    category: ["illustration", "character"],
  },
  {
    id: 8,
    title: "Guarda Chuva",
    media: guardachuva,
    type: "video",
    category: ["animation", "character"],
  },
  {
    id: 9,
    title: "Chuvisco",
    media: chuvisco,
    type: "video",
    category: ["animation", "character"],
  },
  {
    id: 10,
    title: "Old Logo",
    media: oldlogo,
    type: "video",
    category: "animation",
  },
  {
    id: 11,
    title: "Tree",
    media: treeVideo,
    type: "video",
    category: ["animation", "character"],
  },
  {
    id: 12,
    title: "Fish",
    media: fish,
    type: "video",
    category: ["animation", "character"],
  },
  {
    id: 13,
    title: "Buddy",
    media: buddy,
    type: "video",
    category: ["animation", "character"],
  },
];
export default CREATIVE_LAB;
