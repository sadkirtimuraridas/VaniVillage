"use client";

import Image from "next/image";

const photos = [
  "/gallery/photos/a (1).jpg",
  "/gallery/photos/a (2).jpg",
  "/gallery/photos/a (3).jpg",
  "/gallery/photos/a (4).jpg",
  "/gallery/photos/a (5).jpg",
  "/gallery/photos/a (6).jpg",
  "/gallery/photos/a (7).jpg",
  "/gallery/photos/a (8).jpg",
  "/gallery/photos/a (9).jpg",
  "/gallery/photos/a (10).jpg",
  "/gallery/photos/a (11).jpg",
  "/gallery/photos/a (12).jpg",
  "/gallery/photos/a (13).jpg",
  "/gallery/photos/a (14).jpg",

  "/gallery/photos/a (15).jpg",
  "/gallery/photos/a (16).jpg",
  "/gallery/photos/a (17).jpg",
  "/gallery/photos/a (18).jpg",
  "/gallery/photos/a (19).jpg",
  "/gallery/photos/a (20).jpg",
  "/gallery/photos/a (21).jpg",
  "/gallery/photos/a (22).jpg",
  "/gallery/photos/a (23).jpg",
  "/gallery/photos/a (24).jpg",
  "/gallery/photos/a (25).jpg",
  "/gallery/photos/a (26).jpg",
  "/gallery/photos/a (27).jpg",
  "/gallery/photos/a (28).jpg",
  "/gallery/photos/a (29).jpg",
  "/gallery/photos/a (30).jpg",
  "/gallery/photos/a (31).jpg",
  "/gallery/photos/a (32).jpg",
  "/gallery/photos/a (33).jpg",
  "/gallery/photos/a (34).jpg",
  "/gallery/photos/a (35).jpg",
  "/gallery/photos/a (36).jpg",
  "/gallery/photos/a (37).jpg",
  "/gallery/photos/a (38).jpg",
  "/gallery/photos/a (39).jpg",
  "/gallery/photos/a (40).jpg",
  "/gallery/photos/a (41).jpg",
  "/gallery/photos/a (42).jpg",
  "/gallery/photos/a (43).jpg",
  "/gallery/photos/a (44).jpg",
  "/gallery/photos/a (45).jpg",
  "/gallery/photos/a (46).jpg",
  "/gallery/photos/a (47).jpg",
  "/gallery/photos/a (48).jpg",
  "/gallery/photos/a (49).jpg",
  "/gallery/photos/a (50).jpg",
  "/gallery/photos/a (51).jpg",
  "/gallery/photos/a (52).jpg",

];

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f3] pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h1 className="inline-block px-6 py-3 rounded-xl bg-[#0a1a2f] text-white text-2xl font-semibold shadow-lg">
            Photo Gallery
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Moments from the Vani Village project
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md bg-gray-200"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
