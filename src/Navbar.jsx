import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/business_logo.jpeg";

const Navbar = ({
  homeRef,
  aboutRef,
  servicesRef,
  whyusRef,
  pastExpRef,
  contactRef,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full py-4 px-6 transition-all duration-300 text-white`}
      style={{
        backgroundColor: isScrolled ? "rgba(34, 34, 34, 0.95)" : "transparent",
        boxShadow: isScrolled ? "0px 4px 8px rgba(0, 255, 128, 0.3)" : "none",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Glow Effect */}
        <a href="#" className="relative flex items-center">
          <motion.img
            src={logo}
            alt="Company Logo"
            className="h-16 w-40 object-contain rounded-lg"
            whileHover={{ scale: 1.1, filter: "drop-shadow(0px 0px 10px rgba(0, 255, 128, 0.7))" }}
          />
        </a>

        {/* Compatibility Statement */}
        <div className="hidden md:block text-green-300 text-sm font-semibold tracking-wider">
          <span className="glow-text">Certified & Compliant | Trusted Business Partner</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {[
            { name: "Home", ref: homeRef },
            { name: "About Us", ref: aboutRef },
            { name: "Services", ref: servicesRef },
            { name: "Why Us", ref: whyusRef },
            { name: "Past Performance", ref: pastExpRef },
            { name: "Contact Us", ref: contactRef },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgba(0, 255, 128, 0.9)",
                color: "rgba(0, 255, 128, 1)",
              }}
              className="cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(item.ref)}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-3 border-2 border-green-400 rounded-lg shadow-lg transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-900 text-white py-4 px-5 absolute w-full left-0 top-16 shadow-lg border-2 border-green-400 rounded-lg"
          >
            <ul className="space-y-4 text-center">
              {[
                { name: "Home", ref: homeRef },
                { name: "About Us", ref: aboutRef },
                { name: "Services", ref: servicesRef },
                { name: "Why Us", ref: whyusRef },
                { name: "Past Performance", ref: pastExpRef },
                { name: "Contact Us", ref: contactRef },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgba(0, 255, 128, 0.9)",
                    color: "rgba(0, 255, 128, 1)",
                  }}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
