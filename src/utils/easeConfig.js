import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("noice-ease", "M0,0 C0.330, -0.600, 0.000, 1.620 1,1");

export const noiceEase = "noice-ease";
