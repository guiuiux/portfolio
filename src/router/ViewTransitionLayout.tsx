import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import { flushSync } from "react-dom";

// SUAS PÁGINAS
import Home from "@/pages/Home";
import CaseMackensina from "@/pages/cases/Mackensina";
import CaseLivroDigital from "@/pages/cases/LivroDigital";
import AboutMe from "@/pages/About";

// ADMIN PÁGINAS
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";

export default function ViewTransitionLayout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location === displayLocation) return;
    const doSwap = () => flushSync(() => setDisplayLocation(location));
    if (document.startViewTransition) {
      document.startViewTransition(doSwap);
    } else {
      doSwap();
    }
  }, [location, displayLocation]);

  return (
    <Routes location={displayLocation}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />

      {/* CASE-STUDIES */}
      <Route path="/case/mackensina" element={<CaseMackensina />} />
      <Route path="/case/livro-digital" element={<CaseLivroDigital />} />

      {/* ROTAS DE ADMIN */}
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
