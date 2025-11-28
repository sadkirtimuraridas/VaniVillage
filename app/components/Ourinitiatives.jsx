"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Card Component ---
function InitiativeCard({ initiative, size }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const { title, description, venue, date, price, image, formLink } = initiative;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    if (formLink) window.open(formLink, "_blank");
  };

  const cardSizeClass = {
    large: "md:col-span-2 h-96",
    medium: "md:col-span-2 h-80",
    small: "md:col-span-1 h-80",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className={`relative overflow-hidden rounded-3xl ${
        cardSizeClass[size]
      } ${formLink ? "cursor-pointer" : ""} shadow-lg hover:shadow-2xl`}
    >
      <motion.img
        src={image}
        alt={title}
        style={{ transform: "translateZ(25px)" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div
        style={{ transform: "translateZ(60px)" }}
        className="relative z-10 flex h-full flex-col justify-end p-6 text-white"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
        {formLink && (
          <div className="mt-2 flex items-center text-blue-300">
            Register <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// --- Main Page ---
export default function InitiativesSection() {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setInitiatives(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInitiatives();
  }, []);

  const getCardSize = (i) => {
    if (i % 5 === 0) return "large";
    if (i % 3 === 0) return "medium";
    return "small";
  };

  return (
    <div className="min-h-screen w-full bg-black py-24 text-gray-200">
      <div className="mx-auto max-w-7xl px-6">

        

        {/* SECTION CONTENT */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Vaikuntha Gardens
          </h1>
          <br />
{/* VIDEO */}
        <div className="flex justify-center mb-12">
          <div className="w-[90%] rounded-2xl overflow-hidden shadow-2xl">
            <video
  src="/videos/vaikuntha.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl"
/>

          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {["/images/garden1.jpg", "/images/garden2.jpg"].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Vaikuntha Gardens"
              onClick={() => setActiveImage(img)}
              className="rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-xl"
            />
          ))}
        </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-gray-400 text-left">

            <p>
              Vaikuntha Gardens is based on a combination of permaculture and
              Devotional Meditative Experiences.
            </p>

            <p>
              Permaculture is a creative design process based on whole-systems
              thinking informed by ethics and design principles.
            </p>

            <p>
              Devotional Meditative Experiences purify our consciousness to
              awaken our loving propensities to God and each other.
            </p>

            <ul className="list-disc ml-6">
              <li>140 m² green house</li>
              <li>40 m² garden lounge</li>
              <li>fruit trees</li>
              <li>berries</li>
              <li>vegetables</li>
              <li>flowers</li>
              <li>sitting areas to chant together</li>
            </ul>

            <p>
              Srila Prabhupada explains in 1975 that real success lies in simple
              living and high thinking — solving birth, death, disease and old age by Krishna’s formula.
            </p>

            <p>
              Vaikuntha Gardens supports Vanipedia and Bhaktivedanta Library
              Services in fulfilling Srila Prabhupada’s mission.
            </p>

          </div>
        </motion.div>

      </div>

      {/* IMAGE MODAL */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          <img
            src={activeImage}
            alt="Expanded"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
