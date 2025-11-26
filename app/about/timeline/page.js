"use client";

import React from "react";
import VaniVillageTimeline from "./VaniVillageTimeline";
import ConstructionTimeline from "./ConstructionTimeline";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TimelinePage() {
  return (
    <main className="pt-24 bg-[#eef2f7]">
      {/* Hero Section */}
      <section className="bg-[#0a1a2f] text-white text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold"
        >
          Journey of Vani Village
        </motion.h1>
        <p className="mt-5 text-lg text-[#e6d8a8] max-w-3xl mx-auto">
          Our spiritual community develops step-by-step on foundations of
          devotion and the instructions of Śrīla Prabhupāda.
        </p>
      </section>

      {/* Dual Timelines */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Overall Project Timeline */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0a1a2f] mb-4 text-center lg:text-left">
                Overall Project Timeline
              </h2>
              <p className="text-sm text-[#3a4a6a] mb-6 text-center lg:text-left">
                Key milestones from land purchase to the grand opening of Vani
                Village.
              </p>
              <VaniVillageTimeline />
            </div>

            {/* Construction Progress Timeline */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0a1a2f] mb-4 text-center lg:text-left">
                Construction Progress Timeline
              </h2>
              <p className="text-sm text-[#3a4a6a] mb-6 text-center lg:text-left">
                Step-by-step development of the building work, with photos from
                the site.
              </p>
              <ConstructionTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0a1a2f] py-20 text-center">
        <h3 className="text-3xl font-bold text-white">
          Be Part of the Mission 🚩
        </h3>
        <p className="mt-3 text-[#e6d8a8] max-w-2xl mx-auto">
          Contribute through donations or seva and help complete this sacred
          project for the pleasure of Śrīla Prabhupāda.
        </p>
        <a
          href="/donate"
          className="inline-block mt-6 px-10 py-3 rounded-xl bg-[#d4b66c] hover:bg-[#bfa05e] text-[#0a1a2f] font-semibold transition shadow-md"
        >
          Donate Now
        </a>
      </div>
    </main>
  );
}
