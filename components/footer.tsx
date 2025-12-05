"use client";

import Image from "next/image";
import { motion } from "motion/react";


export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      
      {/* Project By Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-8 border-b border-gray-200"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="text-gray-800 tracking-wide">A PROJECT BY</span>
          <Image 
  src="/shraddha.png"
  alt="Shraddha"
  width={100}
  height={40}
  className="h-8 w-auto"
/>
        </div>
      </motion.div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-gray-800 text-lg font-semibold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Sri Avadutha Rami Reddy Thata Samsthan
            </h3>
            <div className="w-16 h-1 bg-[#EE6623] mt-2 rounded-full"></div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-gray-800 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Management", "Our Videos", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <a className="text-gray-600 hover:text-[#EE6623] transition">
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-gray-800 font-medium">About Us</h4>
            <ul className="space-y-2">
              {[
                "About RamiReddy Thata",
                "Thata Jeevitha Charita (Parayana)",
                "Special Events",
                "Daily Sevas",
                "Anugonda",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <a className="text-gray-600 hover:text-[#EE6623] transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Us ~2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-gray-800 font-medium">About Us ~2</h4>
            <ul className="space-y-2">
              {[
                "Goshala",
                "Amma Samadhi",
                "Darbar & Bhakta Nivas",
                "Dhuni",
                "Gurusthan",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <a className="text-gray-600 hover:text-[#EE6623] transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 py-4 px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">Copyright © 2025 Ramireddythata</p>
          <p className="text-gray-600">
            Developed By <span className="text-[#EE6623] font-semibold">Shraddha</span>
          </p>
        </div>
      </motion.div>

    </footer>
  );
}
