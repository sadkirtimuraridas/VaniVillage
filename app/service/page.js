"use client";

import { motion } from "framer-motion";

export default function ApplyForServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061425] to-[#0a1c33] text-white pt-36 pb-20 px-6">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">Apply for Service</h1>
        <p className="mt-4 text-neutral-300 text-lg">
          Serve Sri Krishna by contributing your skills in the divine mission of Vani Village
        </p>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-14 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-4">How You Can Serve</h2>

        <ul className="list-disc list-inside space-y-3 text-neutral-200">
          <li>Website Development & Technical Support</li>
          <li>Video Editing & Media Production</li>
          <li>Graphic & Poster Design</li>
          <li>Content Writing & Translation</li>
          <li>Fundraising & Outreach</li>
          <li>Live Stream Support for Temple Programs</li>
          <li>Devotional Services at the Site</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Who Can Apply?</h2>

        <p className="text-neutral-300 leading-relaxed">
          Anyone who desires to serve Krishna sincerely, regardless of experience or background,
          may apply. What matters most is dedication, reliability and a devotional attitude.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Apply Now</h2>

        <p className="text-neutral-300 mb-6">
          Click below to fill out the service application form. Our team will contact you after review.
        </p>

        {/* APPLY BUTTON */}
        <div className="text-center">
          <a
            href=""   // replace with your actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Apply for Service
          </a>
        </div>
      </motion.div>

      {/* FOOTER MESSAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-sm text-neutral-400"
      >
        “Service to Krishna is the highest perfection of life.” — Srila Prabhupada
      </motion.div>

    </div>
  );
}
