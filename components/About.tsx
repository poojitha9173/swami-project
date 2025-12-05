"use client";

import Image from "next/image";
import { Triangle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const swamiImage = "/about_img.png";

  return (
    <section className="py-24 px-6 bg-[#faf9f7] relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-100/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-gray-900 text-5xl font-bold tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          About Swami
        </motion.h2>

        {/* NEW LAYOUT → IMAGE LEFT, TEXT RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src={swamiImage}
                alt="Swami"
                width={330}
                height={430}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* About Text */}
            <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
              <strong className="font-semibold">Sri Avadhutha Rami Reddy Thata </strong> 
              was born to Hanumanth Reddy and Eshwaramma in 1949 on Shravan Bahula Ashtami 
              (Srikrishna Janmashtami) at Anugonda village, Kurnool District. Even from 
              childhood, divine signs surrounded him just like the miracles of Lord Krishna.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
              In the Kurnool region, noble personalities are affectionately called 
              “Nayana” or “Thatha”. Devotees considered Sri Rami Reddy Thata as the head 
              of their families, and he lovingly embraced them. Hence, he is reverently 
              known as “Thatha”.{" "}
              <a
                href="#"
                className="text-[#C94527] underline hover:text-[#a83820] transition-colors"
              >
                Read More
              </a>
            </p>

            {/* Places List */}
            <div>
              <h3
                className="mb-4 text-2xl text-gray-900 font-semibold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Places and Details
              </h3>

              <ul className="space-y-3">
                {[
                  "Samadhi Mandir",
                  "Gurusthan",
                  "Dhuni",
                  "Thata & Sai Mandir",
                  "Anugonda",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3 group"
                  >
                    <Triangle className="w-3 h-3 fill-[#EE6623] text-[#EE6623] rotate-90 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Events List */}
            <div>
              <h3
                className="mb-4 mt-8 text-2xl text-gray-900 font-semibold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Events and Books of Swami
              </h3>

              <ul className="space-y-3">
                {["Thata Jeevitha Charita", "Daily Sevas", "Special Events"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                      className="flex items-center gap-3 group"
                    >
                      <Triangle className="w-3 h-3 fill-[#EE6623] text-[#EE6623] rotate-90 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-20 h-[3px] origin-left bg-gradient-to-r from-transparent via-[#C94527] to-transparent"
        />
      </div>
    </section>
  );
}
