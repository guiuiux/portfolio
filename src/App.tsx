import { BrowserRouter } from "react-router";
import ViewTransitionLayout from "@/router/ViewTransitionLayout";
import LinkScroller from "./router/LinkScroller";

export default function App() {
  return (
    <BrowserRouter>
      <LinkScroller />
      <ViewTransitionLayout />
    </BrowserRouter>
  );
}
