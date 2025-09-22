import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-200 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="text-xl font-bold text-black">
            Digital Affirmations
          </div>

          {/* Navbar links */}
          <div className="flex space-x-8">
            <Link to="/affirmations" className="text-black hover:text-pink-700 font-semibold">
              Affirmations
            </Link>
            <Link to="/resources" className="text-black hover:text-pink-700 font-semibold">
              Resources
            </Link>
            <Link to="/about" className="text-black hover:text-pink-700 font-semibold">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
