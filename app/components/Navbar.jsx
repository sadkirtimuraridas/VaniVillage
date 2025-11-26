"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", sectionId: "home", hash: "/" },

    {
      name: "About",
      dropdown: true,
      children: [
        { name: "Our Mission & Vision", hash: "/about/mission" },
        { name: "About Project", hash: "/#about" },
        { name: "Timeline History", hash: "/about/timeline" },
      ],
    },

    { name: "Vaikuntha Gardens", sectionId: "initiatives", hash: "/#initiatives" },

    // 📌 Updated Gallery Dropdown
    {
      name: "Gallery",
      dropdown: true,
      children: [
        { name: "Photo Gallery", hash: "/gallery/photos" },
        { name: "Video Gallery", hash: "/gallery/videos" },
      ],
    },

    { name: "Contact", sectionId: "contact", hash: "/#contact" },

    {
      name: "Vanipedia Websites",
      dropdown: true,
      children: [
        { name: "Vanipedia", url: "https://vanipedia.org/" },
        { name: "Vaniquotes", url: "https://vaniquotes.org/" },
        { name: "Vanisource", url: "https://vanisource.org/" },
        { name: "Vanimedia", url: "https://vanimedia.org/" },
        { name: "Vaniseva", url: "https://vaniseva.org/" },
      ],
    },

    { name: "Donate", sectionId: "donate", hash: "/donate" },
  ];

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = navItems.filter(i => i.sectionId).map(item => item.sectionId);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto w-[90%] max-w-5xl"
      >
        <nav className="flex items-center justify-between rounded-2xl bg-[#0a1a2f] px-6 py-3 shadow-lg">

          <Link href="/" className="text-xl font-bold text-white">
            Vani Village
          </Link>

          <div className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <button className="rounded-full px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white">
                      {item.name}
                    </button>

                    <div className="hidden group-hover:block absolute left-0 mt-2 bg-black/60 border border-white/10 rounded-xl p-2 shadow-xl backdrop-blur-xl w-52">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.hash || sub.url}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 rounded-lg"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === "/" ?
                activeSection === item.sectionId :
                pathname === item.hash;

              return (
                <Link
                  key={item.name}
                  href={item.hash}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition
                  ${isActive ? "text-black" : "text-neutral-300 hover:text-white"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 bg-white rounded-full"
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-300 hover:bg-white/10"
          >
            <Menu size={24} />
          </button>

        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-0 mt-20 md:hidden z-40 p-4"
          >
            <div className="rounded-2xl bg-black/20 backdrop-blur-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex flex-col gap-4">

                {navItems.map((item) =>
                  item.dropdown
                    ? item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.hash || sub.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-lg text-lg font-semibold text-neutral-200 hover:bg-white/10"
                      >
                        {sub.name}
                      </Link>
                    ))
                    : (
                      <Link
                        key={item.name}
                        href={item.hash}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-lg text-lg font-semibold text-neutral-200 hover:bg-white/10"
                      >
                        {item.name}
                      </Link>
                    )
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
