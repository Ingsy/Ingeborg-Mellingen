import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={< About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  );
}

export default App;
