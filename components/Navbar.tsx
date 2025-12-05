"use client"

import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[rgba(238,102,35,0.10)] backdrop-blur-sm shadow-md" 
          : "bg-transparent backdrop-blur-0 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo/Title */}
          <div className="flex items-center">
            <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
              Sri Rami Reddy Thata
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#EE6623] transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-[#EE6623] transition-colors">About</a>
            <a href="#" className="text-white hover:text-[#EE6623] transition-colors">Gallery</a>
            <a href="#" className="text-white hover:text-[#EE6623] transition-colors">Our Videos</a>
            <a href="#" className="text-white hover:text-[#EE6623] transition-colors">Contact</a>

            <button className="bg-[#EE6623] text-white px-6 py-2 rounded hover:bg-[#D85A1C] transition-colors">
              DONATE NOW
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-[#EE6623]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
