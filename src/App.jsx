import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/[lang]/home";
import LivroDigital from "./pages/[lang]/case-study/livro-digital";
import PropTypes from "prop-types";

function App({ lang }) {
  return (
    <Routes>
      {/* Language-specific routes */}
      <Route path="/home" element={<Home lang={lang} />} />
      <Route
        path="/case-study/livro-digital"
        element={<LivroDigital lang={lang} />}
      />

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
