import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import BlogingSection from "./components/BlogingSection"
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}