"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- DONATION DATA ---------------- */

const donations = [
  {
    id: 1,
    title: "Vanipedia Medal of Gratitude",
    amount: "€108",
    desc: "Receive a special Vanipedia Medal as a token of gratitude.",
    images: ["/donations/108-1.jpg", "/donations/108-2.jpg"],
  },
  {
    id: 2,
    title: "Srila Prabhupada 125th Anniversary Coin",
    amount: "€250",
    desc: "Receive a Srila Prabhupada 125th Anniversary Coin.",
    images: ["/donations/250-1.jpg", "/donations/250-2.jpg"],
  },
  {
    id: 3,
    title: "Vanipedia Medal & a Srila Prabhupada 125th Anniversary Coin",
    amount: "€500",
    desc: "Receive a Vanipedia Medal and a Srila Prabhupada 125th Anniversary Coin.",
    images: ["/donations/500-1.jpg", "/donations/500-2.jpg"],
  },
  {
    id: 4,
    title: "Garden bench",
    amount: "€1,000",
    desc: "To sponsor one of our 14 garden benches. Donors will receive a Vanipedia Medal, a Srila Prabhupada Coin and a plaque with your name on it.",
    images: ["", "/donations/1000-1.jpg"],
  },
  {
    id: 5,
    title: "Garden Lounge",
    amount: "€10,000",
    desc: "To sponsor our 20 m² garden lounge. Donors will receive a Vanipedia Medal, a Srila Prabhupada Coin and a plaque with your name on it.",
    images: ["/donations/10000-1.jpg", "/donations/10000-2.jpg"],
  },
  {
    id: 6,
    title: "Boundary Walls & Fences",
    amount: "€12,000",
    desc: "To sponsor our boundary walls & fences. Donors will receive a Vanipedia Medal, a Srila Prabhupada Coin and a plaque with your name on it.",
    images: ["/donations/12000-1.jpg", "/donations/12000-2.jpg"],
  },
  {
    id: 7,
    title: "CGreen House",
    amount: "€15,000",
    desc: "To sponsor our 140 m² green house. Donors will receive a Vanipedia Medal, a Srila Prabhupada Coin and a plaque with your name on it.",
    images: ["/donations/15000-1.jpg", "/donations/15000-2.jpg"],
  },
  {
    id: 8,
    title: "Decorative Water Fountain",
    amount: "€20,000",
    desc: "To sponsor our decorative water fountain. Donors will receive a Vanipedia Medal, a Srila Prabhupada Coin and a plaque with your name on it.",
    images: ["/donations/20000-1.jpg", "/donations/20000-2.jpg"],
  },
];

export default function SupportUsPage() {
  const [active, setActive] = useState(donations[0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#061a2f] to-[#0b2a47] py-12 px-4 text-white">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          <br />Support Our Divine Mission
        </h1>
        <p className="text-blue-200 mt-3">
          Your donation sustains spiritual education worldwide.
        </p>
      </div>

      {/* DONATION BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {donations.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-full font-semibold transition-all
              ${
                active.id === item.id
                  ? "bg-yellow-400 text-black scale-105"
                  : "bg-[#0f3558] hover:bg-yellow-500 hover:text-black"
              }`}
          >
            {item.amount}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.section
          key={active.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45 }}
          className="max-w-6xl mx-auto bg-[#0c2440] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center"
        >

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-400">
              {active.title}
            </h2>
            <p className="text-xl font-semibold text-blue-200 my-2">
              Donation: {active.amount}
            </p>
            <p className="text-blue-100 leading-relaxed">
              {active.desc}
            </p>

            <Link
              href="https://www.vanivillage.org/payment-page"
              target="_blank"
              className="inline-block mt-6 bg-yellow-400 text-black font-bold px-7 py-3 rounded-full hover:bg-yellow-500"
            >
              Click Here To Donate
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {active.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt="Donation image"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

        </motion.section>
      </AnimatePresence>
    </main>
  );
}
