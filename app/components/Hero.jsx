// src/components/HeroSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function HeroSection({
  textOpacity,
  textY,
  imageScale,
  imageY,
}) {

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.25 },
    },
  };

  // Individual animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <img
          src="/Vanivillage+Website+-+Banner-1920w.webp"
          alt="Vani Village initiative"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>


      {/* Center Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          className="flex max-w-5xl flex-col items-center gap-y-10 px-6 text-center text-white"
          style={{ opacity: textOpacity, y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Decorative Space */}
          <motion.div variants={itemVariants} className="h-20" />

        </motion.div>
      </div>


      {/* RIGHT SIDE TITLE */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-5 md:right-12 top-[38%] z-20 text-right"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold tracking-wide text-white/95 drop-shadow-lg">
          Vani Village
        </h1>
<br /><br /><br />
        <p className="text-xs md:text-sm mt-1 tracking-widest uppercase text-white/60">
          Preserve • Serve • Share
          <br /><br /><br /><br />
        </p>
      </motion.div>


      {/* RIGHT SIDE FLOATING CTA */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20"
      >
        <Link
          href="/offering"
          className="group inline-flex items-center gap-x-2 rounded-full border-2 border-white 
                     bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md 
                     transition-all hover:bg-white/30 hover:scale-105 active:scale-95 
                     md:px-8 md:py-4 md:text-lg shadow-lg"
        >
          Śrīla Prabhupāda's Disappearance Offering
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>


      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-10 z-20"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={32} className="text-white/80" />
      </motion.div>

    </div>
  );
}
