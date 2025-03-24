import React, { useState, useEffect } from "react";
import { NAVBAR_LINKS } from "./constants";
import businessLogo from "./assets/business_logo.jpeg"; // Import logo directly

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 py-3 shadow-lg" : "bg-gray-900 py-5"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold flex items-center">
          <img
            src={businessLogo}
            alt="Company Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain mr-3"
          />
          GS Tech Groups LLC
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {NAVBAR_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`hover:text-gray-400 ${
                  link.special ? "bg-green-500 text-white px-4 py-2 rounded-full" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-3 px-5 absolute w-full left-0 top-16 shadow-lg">
          <ul className="space-y-4">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block ${
                    link.special ? "bg-green-500 text-white px-4 py-2 rounded-full text-center" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
