"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Globe,
  HandCoins,
  Ruler,
  PencilRuler,
  Building2,
  PartyPopper,
} from "lucide-react";

const timeline = [
  {
    date: "AUGUST 2018",
    text: "Land Purchased (3,500 sq. meters)",
    icon: <Home />,
  },
  {
    date: "FEBRUARY 2021",
    text: "Fund Raising Begins",
    icon: <HandCoins />,
  },
  {
    date: "JUNE 2021",
    text: "Website Created – vanivillage.org",
    icon: <Globe />,
  },
  {
    date: "FEBRUARY 2022",
    text: "Architect Drawings Finalised",
    icon: <PencilRuler />,
  },
  {
    date: "MAY 2022",
    text: "Planning Permission Granted",
    icon: <Ruler />,
  },
  {
    date: "JUNE 2022",
    text: "Construction Begins",
    icon: <Building2 />,
  },
  {
    date: "OCTOBER 2025",
    text: "Project Completion & Opening",
    icon: <PartyPopper />,
  },
];

export default function VaniVillageTimeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#eef2f7] to-[#dfe3ea]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#0a1a2f] mb-16"
        >
          VaniVillage Timeline
        </motion.h2>

        <div className="relative border-l-4 border-[#d4b66c] ml-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-14 ml-8"
            >
              <div className="absolute -left-12 bg-[#d4b66c] text-[#0a1a2f] rounded-full p-3 shadow-lg">
                {item.icon}
              </div>

              <div className="bg-[#0a1a2f] rounded-2xl shadow-lg p-6 border border-[#d4b66c]">
                <span className="text-sm font-bold text-[#e6d8a8] tracking-wider">
                  {item.date}
                </span>
                <p className="text-white text-lg font-medium mt-1">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
