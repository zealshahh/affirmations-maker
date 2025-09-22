import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sky-200 shadow-md w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo / Title */}
         

          {/* Navbar links */}
          <div className="flex space-x-20">
            <a href="/affirmations" className="text-cyan-900 hover:text-cyan-900 font-semibold">
              Affirmations
            </a>
            <a href="/resources" className="text-cyan-800 hover:text-cyan-900 font-semibold">
              Resources
            </a>
            <a href="/about" className="text-cyan-900 hover:text-cyan-900 font-semibold">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
