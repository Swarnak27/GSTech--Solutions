import React, { useState } from "react";
import { motion } from "framer-motion";
import C1 from "./assets/C1.png";
import C2 from "./assets/C2.png";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section data-section="certificates" className="bg-black py-12">
      {/* Glowing Title - Font Size Matched to About Us */}
      <motion.h1
        className="text-center text-4xl sm:text-5xl font-bold text-white mb-8 glow-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Certifications
      </motion.h1>

      {/* Compact Certificate Grid (Only Around Certificates) */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {[C1, C2].map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 128, 0.8)" }}
            transition={{ duration: 0.3 }}
            className="p-2 flex justify-center items-center cursor-pointer border-2 border-green-400 rounded-lg shadow-lg"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-56 sm:h-64 md:h-72 w-auto object-contain rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedCert}
              alt="Enlarged Certificate"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border-2 border-green-400"
            />
            <button
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-700 transition"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      {/* Glow Effect Styling */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 128, 0.8), 0 0 20px rgba(0, 255, 128, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Certificate;
