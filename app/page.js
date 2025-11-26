"use client";

import React from "react";
import Hero from "./components/Hero";

  import AboutSection from "./components/AboutSection";
import InitiativesSection from "./components/Ourinitiatives";
import GallerySection from "./components/Gallery";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="relative w-full bg-white">
      <section id="home">
  <Hero />

  


  {/* YouTube Video – right below Hero Section 
  <div className="flex justify-center px-4 py-10">
    <div className="w-full max-w-4xl aspect-video">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/NIyClYhBjJ0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  }


  {/* Heading for Timeline section 
  <div className="w-full bg-[#0a1a2f] py-6 text-center">

  <h2 className="text-center text-3xl font-bold mb-6 text-white">
    Vani Village Timeline
  </h2>
  </div>


  {/* Full-width Timeline Images 
  <div className="w-full">
    <img
      src="/Timeline-1920w.webp"
      alt="Timeline Image"
      className="w-full object-cover"
    />
    <img
      src="/Construction-Timeline-Front-083dcc0a-1920w.jpg"
      alt="Construction Timeline"
      className="w-full object-cover mt-6"
    />
  </div>*/}
</section>


     

      <section id="initiatives">
        <InitiativesSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
