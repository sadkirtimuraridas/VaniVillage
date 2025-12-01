"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  // Local video
  {
    type: "local",
    src: "/gallery/videos/intro.mp4",
    title: "Vani Village Intro",
    description: "Introduction to the Vani Village project.",
  },

  // YouTube videos
  { type: "youtube", videoId: "NIyClYhBjJ0", title: "A Glimpse - Vani Villagey" },
  { type: "youtube", videoId: "lH6a853Mf4A", title: "Bhumi Puja and the Groundbreaking Ceremony" },
  { type: "youtube", videoId: "2YZP8PvvokU", title: "The First 100 days of Construction" },
  { type: "youtube", videoId: "T9aUMzeav5I", title: "Excavation Work" },
  { type: "youtube", videoId: "2CNUvAfThOU", title: "Installing Srila Prabhupada's Books" },
  { type: "youtube", videoId: "ZtnRYL42f5Q", title: "Installing Ananta Sesa" },
  { type: "youtube", videoId: "5rKkxs7vz5c", title: "Applying Tilaka To Vani Village" },
  { type: "youtube", videoId: "O8UqV-KEhac", title: "The Foundation" },
  { type: "youtube", videoId: "eg5HzhRUby8", title: "Vaikunta Garden Update 7.10.24" },
  { type: "youtube", videoId: "dVqZdV6_2qI", title: "The First Floor" },
  { type: "youtube", videoId: "vsK8SxVf_Eo", title: "Vaikuntha Gardens Update 9.11.24" },
  { type: "youtube", videoId: "svF8zXUguBo", title: "The Top Floor" },
  { type: "youtube", videoId: "CLUnwNufncY", title: "Green House" },
  { type: "youtube", videoId: "rqqIVuXrUZA", title: "The Roof" },
  { type: "youtube", videoId: "frOA5sEwV-E", title: "Walk Tour" },
];

export default function VideosGalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#f9f9f3] pt-32 pb-16">
      <div className="mx-auto w-[90%] max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="inline-block rounded-2xl bg-[#0a1a2f] px-8 py-3 text-2xl font-semibold text-white shadow-lg">
            The Making of Vani Village Video Gallery
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Watch the story and growth of Vani Village.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveVideo(video)}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl focus:outline-none"
              whileHover={{ y: -4 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                {video.type === "local" ? (
                  <video
                    src={video.src}
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition"
                  />
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition"
                  />
                )}

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0a1a2f] shadow-lg">
                    <Play size={18} />
                    Play
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="px-4 py-3 text-left">
                <h2 className="text-sm font-semibold text-[#0a1a2f] truncate">
                  {video.title}
                </h2>
                {video.description && (
                  <p className="mt-1 text-xs text-neutral-600">
                    {video.description}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 rounded-full bg-black/60 p-2 text-white shadow-lg"
              >
                <X size={22} />
              </button>

              {/* Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                {activeVideo.type === "local" ? (
                  <video
                    src={activeVideo.src}
                    autoPlay
                    controls
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&controls=0&rel=0&modestbranding=1`}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
              </div>

              <p className="mt-4 text-center text-sm text-white">
                {activeVideo.title}
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
