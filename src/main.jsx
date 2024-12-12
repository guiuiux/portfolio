import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageHandler from "./utils/LanguageHandler";
import { initializeAnalytics } from "./utils/initAnalytics";

initializeAnalytics();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            {/* Redirect root path to the detected language home path */}
            <Route
              path="/"
              element={<Navigate to={`/${i18n.language}/home`} replace />}
            />

            {/* Language-prefixed paths */}
            <Route path="/:lang/*" element={<LanguageHandler />} />
          </Routes>
        </Router>
        <Toaster />
      </I18nextProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
