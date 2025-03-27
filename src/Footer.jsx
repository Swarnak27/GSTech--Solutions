import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gray-900 text-white py-10 px-6 mt-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-green-500 opacity-10 blur-3xl"></div>

      <div className="container mx-auto text-center relative">
        <motion.p whileHover={{ scale: 1.05, color: "#22c55e" }} transition={{ duration: 0.3 }} className="text-xl font-semibold cursor-pointer">
          GS Tech Groups LLC
        </motion.p>
        
        <motion.p
          whileHover={{ scale: 1.05, color: "#22c55e" }}
          transition={{ duration: 0.3 }}
          className="mt-1 cursor-pointer"
          onClick={() => setShowMap(!showMap)}
        >
          14441 Eastbrook Dr, El Paso TX 79938
        </motion.p>

        {showMap && (
          <div className="fixed top-20 right-0 w-80 h-80 bg-gray-800 shadow-lg rounded-lg p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.502085421706!2d-106.18195682358842!3d31.84947177418039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7593dfab1a56d%3A0x735c7e4cfe8960eb!2s14441%20Eastbrook%20Dr%2C%20El%20Paso%2C%20TX%2079938!5e0!3m2!1sen!2sus!4v1712185433103!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}

        <motion.div whileHover={{ scale: 1.05, color: "#16a34a" }} transition={{ duration: 0.3 }} className="mt-2 flex items-center justify-center gap-2 cursor-pointer">
          <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}>
            <FiPhone className="text-green-400 text-2xl" />
          </motion.div>
          <a href="tel:8048924713" className="hover:underline">804-892-4713</a>
        </motion.div>

        <motion.p whileHover={{ scale: 1.05, color: "#22c55e" }} transition={{ duration: 0.3 }} className="mt-2 cursor-pointer">
          ✉️ <a href="mailto:gstechgroups1@gmail.com" className="hover:underline">gstechgroups1@gmail.com</a>
        </motion.p>

        <motion.p whileHover={{ scale: 1.05, color: "#22c55e" }} transition={{ duration: 0.3 }} className="mt-4 text-gray-400">
          &copy; 2025 Federal Government Advisors
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto mt-8 max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <motion.h3 whileHover={{ scale: 1.05, color: "#22c55e" }} className="text-xl font-semibold mb-4">
          Contact Us
        </motion.h3>
        {submitted ? (
          <p className="text-green-400">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-400"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-400"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              name="phone"
              placeholder="Your Mobile Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-400"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full p-2 bg-green-500 rounded text-white font-semibold hover:bg-green-600"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </motion.footer>
  );
};

export default Footer;
