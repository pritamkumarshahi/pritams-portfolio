import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Pritam Kumar Shahi
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Get in touch
          </a>
        </nav>
        <a
          href="/PritamKumarShahi.pdf"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0"
          download="PritamKumarShahi.pdf"
        >
          Download CV
          <DownloadIcon className="w-4 h-5 ml-2" /> {/* Adjusted margin */}
        </a>
      </div>
    </header>
  );
}