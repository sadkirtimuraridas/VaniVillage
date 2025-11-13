"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [
    "/vaikuntha-garden-1.jpg",
    "/vaikuntha-garden-2.jpg",
    "/vaikuntha-garden-3.jpg",
    "/vaikuntha-garden-4.jpg",
    "/vaikuntha-garden-5.jpg",
    "/vaikuntha-garden-6.jpg",
  ];

  return (
    <section id="gallery" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold"><br />Vaikuntha Gardens Gallery</h2>
          <p className="mt-2 text-gray-300">Explore our journey through images</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-lg bg-gray-900"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={src}
                alt={`Vaikuntha Garden ${idx + 1}`}
                className="h-56 w-full object-cover transition-transform duration-200"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}