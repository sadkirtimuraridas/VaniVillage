"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    type: "local",
    src: "/gallery/videos/intro.mp4",
    title: "Vani Village Intro",
    description: "Introduction to the Vani Village project.",
  },
  {
    type: "youtube",
    videoId: "NIyClYhBjJ0",
    title: "Vani Village Documentary",
    description: "Journey and vision of Vani Village.",
  },
];

export default function VideosGalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#f9f9f3] pt-32 pb-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="inline-block rounded-2xl bg-[#0a1a2f] px-6 py-3 text-2xl font-semibold text-white shadow-lg">
            Video Gallery
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Watch the story and progress of Vani Village.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveVideo(video)}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a2f]/60"
              whileHover={{ y: -4 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {video.type === "local" ? (
                  <video
                    src={video.src}
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                )}

                {/* Play overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0a1a2f] shadow-lg">
                    <Play size={18} />
                    <span>Play Video</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-[#0a1a2f]">
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
                className="absolute -top-10 right-0 rounded-full border border-white/30 bg-black/40 p-2 text-white shadow-lg backdrop-blur"
              >
                <X size={22} />
              </button>

              {/* Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                {activeVideo.type === "local" ? (
                  <video
                    src={activeVideo.src}
                    autoPlay
                    controls={false}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0`}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
              </div>

              <p className="mt-3 text-center text-sm text-neutral-200">
                {activeVideo.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
