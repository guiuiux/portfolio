import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/[lang]/home";
import PropTypes from "prop-types";
import LivroDigital from "./pages/[lang]/case-study/livro-digital";
import Mackensina from "./pages/[lang]/case-study/mackensina";
import CreativeLab from "./pages/[lang]/creative-lab";
import TestPage from "./pages/[lang]/test-page";
import useHotjar from "./utils/useHotjar";

function App({ lang }) {
  useHotjar();

  return (
    <Routes>
      {/* Language-specific routes */}
      <Route path="/home" element={<Home lang={lang} />} />
      <Route
        path="/case-study/livro-digital"
        element={<LivroDigital lang={lang} />}
      />
      <Route
        path="/case-study/mackensina"
        element={<Mackensina lang={lang} />}
      />
      <Route path="/creative-lab" element={<CreativeLab lang={lang} />} />
      <Route path="/test-page" element={<TestPage lang={lang} />} />

      {/* Catch-all for 404 */}
      <Route
        path="*"
        element={
          <div className="flex h-screen w-screen items-center gap-4 justify-center">
            <span className="text-5xl font-whyteinktrap font-bold">404</span>
            <span className="text-zinc-400">Page Not Found</span>
          </div>
        }
      />
    </Routes>
  );
}
App.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default App;
