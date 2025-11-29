"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function VaniVillagePage() {

  // VIDEOS
  const videos = [
    { videoId: "Pt-Vxxmc49w", title: "Vaikuntha Gardens Update – Sept 19, 2024" },
    { videoId: "ATHNooL_jZA", title: "Vaikuntha Gardens Progress" },
    { videoId: "ittp9VaS-uw", title: "Construction Phase Overview" },
  ];

  // COSTS
  const costItems = [
    { label: "Land purchase", amount: "€91,424.00" },
    { label: "Architect and surveyor", amount: "€30,430.00" },
    { label: "Land excavation & foundation", amount: "€103,394.50" },
    { label: "Structure of three floors", amount: "€258,093.60" },
    { label: "Roof", amount: "€80,425.10" },
    { label: "Windows & outside doors", amount: "€42,381.60" },
    { label: "Interior", amount: "€203,287.60" },
  ];

  // CAROUSEL IMAGES WITH TITLES
  const carouselItems = [
    { src: "/vani-carousel/1.jpg", title: "Foundation Work Begins" },
    { src: "/vani-carousel/2.jpg", title: "Structure Rising" },
    { src: "/vani-carousel/3.jpg", title: "Roof Installation" },
    { src: "/vani-carousel/4.jpg", title: "Interior Work in Progress" },
    { src: "/vani-carousel/5.jpg", title: "Garden Development" },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ AUTOPLAY WITH PAUSE ON HOVER
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(id);
  }, [paused, carouselItems.length]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-emerald-700/20 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Vani Village</h1>

          {/* HERO VIDEO */}
          <div className="flex justify-center my-12">
            <div className="w-[90%] rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/videos/vaikuntha.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 mb-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
              >
                <img
                  src={`/vani-village/image${i + 1}.jpg`}
                  alt={`Vani Village ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A Home for Srila Prabhupada’s Books and Vani
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-left">
            Vani Village is a permanent Bhaktivedanta library and knowledge hub.
            It will serve book distribution, Vanipedia and spiritual study near Radhadesh.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <Link
              href="/support-us"
              className="rounded-full border border-slate-500 px-6 py-3 hover:border-emerald-400 transition"
            >
              View Sponsorship Options
            </Link>

            <a
              href="https://www.vanivillage.org/payment-page"
              target="_blank"
              className="rounded-full border border-slate-500 px-6 py-3 hover:border-emerald-400 transition"
            >
              Donate Now
            </a>
          </div>

        </div>
      </section>

      {/* VIDEOS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">Construction Updates</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
                  title={video.title}
                  allowFullScreen
                />
                <div className="p-3 text-sm text-center">{video.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ IMAGE CAROUSEL */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="flex justify-center py-16">

          <div
            className="relative w-[90%] overflow-hidden rounded-2xl border border-slate-800"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="relative w-full flex-shrink-0">

                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover aspect-[16/9]"
                  />

                  {/* CENTERED TITLE */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="w-[80%] text-center text-xl sm:text-2xl md:text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full ${
                    current === i ? "bg-emerald-400" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* COST */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold">Project Cost Breakdown</h2>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
            {costItems.map(item => (
              <div key={item.label} className="flex justify-between border-b border-slate-800 py-2">
                <span>{item.label}</span>
                <span className="text-emerald-400 font-semibold">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold">Support the Mission</h2>

          <a
            href="https://www.vanivillage.org/payment-page"
            className="inline-block mt-8 rounded-full bg-emerald-500 px-8 py-3 font-semibold text-black"
          >
            Donate Now
          </a>

        </div>
      </section>

    </main>
  );
}