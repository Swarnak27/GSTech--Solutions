import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi"; // Importing phone icon from react-icons

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gray-900 text-white py-10 px-6 mt-10 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-green-500 opacity-10 blur-3xl"></div>

      <div className="container mx-auto text-center relative">
        <motion.p
          whileHover={{ scale: 1.05, color: "#22c55e" }}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold cursor-pointer"
        >
          GS Tech Groups LLC
        </motion.p>

        <p className="mt-1">14441 Eastbrook Dr, El Paso TX 79938</p>

        {/* Telephone Section with Animated Icon */}
        <motion.div
          whileHover={{ scale: 1.05, color: "#16a34a" }}
          transition={{ duration: 0.3 }}
          className="mt-2 flex items-center justify-center gap-2 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }} // Ringing effect
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            <FiPhone className="text-green-400 text-2xl" />
          </motion.div>

          <a href="tel:8048924713" className="hover:underline">
            804-892-4713
          </a>
        </motion.div>

        <motion.p
          whileHover={{ scale: 1.05, color: "#22c55e" }}
          transition={{ duration: 0.3 }}
          className="mt-2 cursor-pointer"
        >
          ✉️ <a href="mailto:gstechgroups1@gmail.com" className="hover:underline">gstechgroups1@gmail.com</a>
        </motion.p>

        <motion.p
          whileHover={{ scale: 1.05, color: "#22c55e" }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-gray-400"
        >
          &copy; 2025 Federal Government Advisors
        </motion.p>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          footer a {
            transition: color 0.3s ease-in-out;
          }
          footer a:hover {
            color: #22c55e;
          }
        `}
      </style>
    </motion.footer>
  );
};

export default Footer;
