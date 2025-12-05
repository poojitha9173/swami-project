"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  // 👉 Add your URL here later (local or hosted)
  const headerBg = "/cover.png"; // you can change this anytime

  return (
    <header className="relative w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-[600px]"
      >
        {/* Background Image */}
        <motion.div
          initial={{ filter: "brightness(0.7)" }}
          animate={{ filter: "brightness(1)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={headerBg}
            alt="Header background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,165,0,0.3) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Pulsing center light */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,200,100,0.4) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </header>
  );
}
