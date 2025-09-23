import React from "react";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-sky-200 shadow-md w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo / Title */}
         
          {/* Navbar links */}
          <div className="flex space-x-20">
            <button
              onClick={() => setCurrentPage("affirmations")}
              className={`font-semibold ${
                currentPage === "affirmations" 
                  ? "text-cyan-900" 
                  : "text-cyan-800 hover:text-cyan-900"
              }`}
            >
              Affirmations
            </button>
            <button
              onClick={() => setCurrentPage("resources")}
              className={`font-semibold ${
                currentPage === "resources" 
                  ? "text-cyan-900" 
                  : "text-cyan-800 hover:text-cyan-900"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`font-semibold ${
                currentPage === "about" 
                  ? "text-cyan-900" 
                  : "text-cyan-800 hover:text-cyan-900"
              }`}
            >
              About
            </button>
            <a href="https://www.linkedin.com/in/zealshahh"
  target="_blank"
  rel="noopener noreferrer"
>
<img src="/linkedin.png" alt="LinkedIn" className="ml-199 w-18 h-11"   style={{ filter: "invert(23%) sepia(92%) saturate(6459%) hue-rotate(186deg) brightness(89%) contrast(90%)" }}
/>
</a>
          </div>
        </div>
      </div>
    </nav>
  );
}