"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const initiatives = [
  {
    title: "Education Programs",
    slug: "education-programs",
    description:
      "Vani Village continues this mission through learning, discussion, and sharing Śrīla Prabhupāda’s wisdom in a living, practical way.",
    image: "/vanivillage_herologo.png",
  },
  {
    title: "Construction & Infrastructure",
    slug: "talent-showcase",
    description:
      "This project will create a shelter for high thinking (Vani Village) and simple living (Vaikuntha Gardens). Each structure is being built to support spiritual culture — spaces for study, service, and reflection in harmony with nature.",
    image: "/talent.jpg",
  },
  {
    title: "Sustainability",
    slug: "social-change",
    description:
      "The programme of the adjacent Vaikuntha Gardens (permaculture, meditation-garden etc.",
    image: "/socialchange.jpeg",
  },
  {
    title: "Community Life",
    slug: "leadership-building",
    description:
      "News posts, progress updates, volunteer life, events under the Vani Village umbrella",
    image: "/leadership.jpeg",
  },
];

const ROTATION_INTERVAL_MS = 5000;

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % initiatives.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          About Our Mission
        </motion.h2>

        {/* Interactive Circles */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12">
          {initiatives.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <Link key={item.title} href={`/mission/${item.slug}`}>
                <motion.div
                  className="relative flex h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 flex-shrink-0 flex-col items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                {/* Background Image */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 overflow-hidden rounded-full"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Outline */}
                <div className="absolute inset-0 rounded-full border border-gray-700/70" />

                {/* Title */}
                <motion.h3
                  className="relative z-10 text-center text-lg font-semibold md:text-xl"
                  animate={{ color: isActive ? "#FFFFFF" : "#9CA3AF" }}
                >
                  {isActive ? (
                    <span className="font-handwriting text-4xl md:text-5xl leading-tight text-white">
                      {item.title.split(" ")[0]}
                    </span>
                  ) : (
                    item.title
                  )}
                </motion.h3>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Description + Link */}
        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div className="max-w-2xl text-center lg:col-span-2 lg:text-left">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
                className="text-lg leading-relaxed text-gray-300 sm:text-xl"
              >
                {initiatives[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              href={`/mission/${initiatives[activeIndex].slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-base font-medium text-gray-300 transition-all hover:border-white hover:bg-white/10 hover:text-white"
            >
              Learn more
              <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
