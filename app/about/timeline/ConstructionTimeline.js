"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const constructionEvents = [
  {
    date: "Jul 3, 2022",
    title: "Foundation Work Completed",
    image: "/images/construction/Excavation+3-1920w.jpg",
  },
  {
    date: "Jun 26, 2022",
    title: "Excavation Work Completed",
    image: "/images/construction/Foundations+34-1920w.jpg",
  },
  {
    date: "Jul 28, 2022",
    title: "Ground Floor Walls Completed",
    image: "/images/construction/Ground+Floor+94-1920w.jpg",
  },
  {
    date: "Oct 13, 2022",
    title: "First Floor Walls Completed",
    image: "/images/construction/First+Floor+62-1920w.jpg",
  },
  {
    date: "Dec 8, 2022",
    title: "Top Floor Walls Completed",
    image: "/images/construction/Second+Floor+168-1920w.jpg",
  },
  {
    date: "Jan 26, 2023",
    title: "Roof Construction Completed",
    image: "/images/construction/Roof+86-1920w.jpg",
  },
  {
    date: "May 30, 2023",
    title: "Books Delivered",
    image: "/images/construction/may-30-2023-books.jpg",
  },
  {
    date: "Jun 18, 2023",
    title: "Windows & Doors Installed",
    image: "/images/construction/windows+and+doors+1-1920w.jpg",
  },
  {
    date: "Sep 5, 2023",
    title: "Outside Rendering Completed",
    image: "/images/construction/cellar+covered-1920w.jpg",
  },
  {
    date: "Dec 28, 2023",
    title: "Building Landscaping Completed",
    image: "/images/construction/dec-28-2023-landscaping.jpg",
  },
];

// You can change the image paths above to match your real files.

export default function ConstructionTimeline() {
  return (
    <section className="py-10">
      <div className="relative">
        {/* Center line (desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#d4b66c] -translate-x-1/2" />

        <div className="space-y-12">
          {constructionEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={event.title + event.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex flex-col lg:flex-row"
              >
                {/* Dot on center line (desktop) */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#d4b66c] border-2 border-[#0a1a2f]" />
                </div>

                <div
                  className={`lg:w-1/2 ${
                    isLeft ? "lg:pr-10 lg:justify-end" : "lg:pl-10 lg:ml-auto"
                  } flex`}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-[#d4b66c] overflow-hidden w-full">
                    {/* Image */}
                    <div className="relative w-full h-40">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="p-4 text-left">
                      <p className="text-sm font-semibold text-[#4338ca]">
                        {event.date}
                      </p>
                      <p className="mt-1 text-base font-medium text-[#0a1a2f]">
                        {event.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
