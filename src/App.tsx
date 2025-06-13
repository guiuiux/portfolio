import { BrowserRouter, Routes, Route } from "react-router-dom";
import I18nTest from "./pages/I18nTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<I18nTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
