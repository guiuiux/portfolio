import { BrowserRouter } from "react-router";
import { MotionConfig } from "framer-motion";
import ViewTransitionLayout from "@/router/ViewTransitionLayout";
import LinkScroller from "./router/LinkScroller";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <LinkScroller />
        <ViewTransitionLayout />
      </BrowserRouter>
    </MotionConfig>
  );
}
