"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { src: "/gallery/photos/a (1).jpg", alt: "Vani Village photo 1" },
  { src: "/gallery/photos/a (2).jpg", alt: "Vani Village photo 2" },
  { src: "/gallery/photos/a (3).jpg", alt: "Vani Village photo 3" },
  { src: "/gallery/photos/a (4).jpg", alt: "Vani Village photo 4" },
  { src: "/gallery/photos/a (5).jpg", alt: "Vani Village photo 5" },
  { src: "/gallery/photos/a (6).jpg", alt: "Vani Village photo 6" },
];

export default function PhotosGalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="min-h-screen bg-[#f9f9f3] pt-32 pb-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="inline-block rounded-2xl bg-[#0a1a2f] px-6 py-3 text-2xl font-semibold text-white shadow-lg">
            Photo Gallery
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Glimpses of the unfolding Vani Village project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.src}
              onClick={() => setSelectedPhoto({ ...photo, index })}
              className="group relative overflow-hidden rounded-2xl bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0a1a2f]/60"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="relative aspect-[4/3] w-full">
  <Image
    src={photo.src}
    alt={photo.alt}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>
