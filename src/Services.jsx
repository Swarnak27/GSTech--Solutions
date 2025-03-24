import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

// Import animations
import cloudAnimation from "./assets/icon-json/Cloud.json";
import aiAnimation from "./assets/icon-json/AI.json";
import consultingAnimation from "./assets/icon-json/Consulting.json";
import securityAnimation from "./assets/icon-json/Security.json";
import systemAnimation from "./assets/icon-json/System.json";
import helpdeskAnimation from "./assets/icon-json/Helpdesk.json";

// Service Data
const serviceData = [
  { animation: cloudAnimation, title: "Cloud Computing & Infrastructure" },
  { animation: aiAnimation, title: "Artificial Intelligence & Data Analytics" },
  { animation: consultingAnimation, title: "IT Consulting" },
  { animation: securityAnimation, title: "Cybersecurity & Risk Management" },
  { animation: systemAnimation, title: "System Integration & Automation" },
  { animation: helpdeskAnimation, title: "Helpdesk & Support" },
];

// Service Card Component
const ServiceCard = ({ animation, title }) => {
  return (
    <motion.div
      className="relative bg-gray-900 rounded-lg shadow-lg p-6 border border-green-400 transition-all duration-500 hover:scale-105 hover:shadow-green-400"
      whileHover={{ scale: 1.08 }}
    >
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse"></div>

      {/* Lottie Animation with Glowing Effect */}
      <div className="flex justify-center mb-4 relative z-10">
        <div className="p-4 rounded-full bg-green-400 bg-opacity-20 shadow-lg shadow-green-400">
          <Lottie animationData={animation} loop autoplay className="h-24 w-24 filter drop-shadow-glow" />
        </div>
      </div>

      {/* Title with Hover Glow */}
      <h3 className="text-lg font-bold text-center text-green-300 relative z-10 transition-all duration-300 hover:text-green-500">
        {title}
      </h3>

      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-green-400 opacity-10 hover:opacity-20 transition-all duration-300"></div>
    </motion.div>
  );
};

// Services Component
const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto text-center space-y-10">
        
        {/* Title Section with Glowing Effect */}
        <motion.h4
          className="text-6xl font-bold uppercase tracking-wide text-green-400 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            textShadow: "0 0 25px rgba(150, 246, 85, 1), 0 0 50px rgba(150, 246, 85, 0.9)",
          }}
        >
          Services
        </motion.h4>

        {/* Highlighted Subtitle Animation */}
        <motion.h2
          className="text-4xl font-bold text-white relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our <span className="text-green-400 neon-text">Service Offerings</span>
        </motion.h2>

        {/* Grid Layout with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {serviceData.map((service, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ServiceCard animation={service.animation} title={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
