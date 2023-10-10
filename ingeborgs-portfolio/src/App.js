import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import RouteNotFound from "./components/Layout/RouteNotFound";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<RouteNotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
