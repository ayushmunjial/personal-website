import React from "react";; import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route }     from "react-router-dom";
import "./index.css"; import App from "./App";

import Home from "./pages/Home";
import Projects    from "./pages/Projects";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Extras from "./pages/Extras";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
          <Route path="extras" element={<Extras />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
