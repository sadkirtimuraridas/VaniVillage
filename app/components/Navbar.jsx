"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  // ✅ NAV DATA
  const navItems = [
    { name: "Home", sectionId: "home", hash: "/" },

    {
      name: "About",
      dropdown: true,
      children: [
        { name: "Our Mission & Vision", hash: "/about/mission" },
        
        { name: "Timeline History", hash: "/about/timeline" },
      ],
    },

    { name: "Vani Village Global", sectionId: "vani-village", hash: "/vani-village" },
    { name: "Vaikuntha Gardens", sectionId: "initiatives", hash: "/#initiatives" },

    {
      name: "Gallery",
      dropdown: true,
      children: [
        { name: "Photo Gallery", hash: "/gallery/photos" },
        { name: "Video Gallery", hash: "/gallery/videos" },
      ],
    },

    { name: "Blog", sectionId: "contact", hash: "/blog" },
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

    {
      name: "Support Us",
      hash: "/support-us",
      dropdown: true,
      children: [
        { name: "Apply for Service", hash: "/service" },
      ],
    },

    {
      name: "Donate",
      external: true,
      url: "https://www.vanivillage.org/payment-page",
    },
  ];

  // ✅ Scroll Spy
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = navItems.filter(i => i.sectionId).map(i => i.sectionId);
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const dropdownHandlers = (name) => ({
    onMouseEnter: () => {
      clearTimeout(closeTimer.current);
      setOpenDropdown(name);
    },
    onMouseLeave: () => {
      closeTimer.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 250);
    }
  });

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl w-[95%]"
      >
        <nav className="bg-[#0a1a2f] shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="text-xl font-bold text-white">
            Vani Village
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1">

            {navItems.map((item) => {

              // ✅ EXTERNAL LINK
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-4 py-1.5 rounded-full text-sm font-bold bg-yellow-400 text-black hover:bg-yellow-300"
                  >
                    {item.name}
                  </a>
                );
              }

              // ✅ DROPDOWN
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative" {...dropdownHandlers(item.name)}>

                    <Link
                      href={item.hash || "#"}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white"
                    >
                      {item.name}
                    </Link>

                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-56 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl"
                        >
                          {item.children.map((sub) =>
                            sub.url ? (
                              <a
                                key={sub.name}
                                href={sub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 rounded-lg"
                              >
                                {sub.name}
                              </a>
                            ) : (
                              <Link
                                key={sub.name}
                                href={sub.hash}
                                className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 rounded-lg"
                              >
                                {sub.name}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              }

              // ✅ NORMAL LINK
              const isActive =
                pathname === "/" ? activeSection === item.sectionId : pathname === item.hash;

              return (
                <Link
                  key={item.name}
                  href={item.hash}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-medium
                  ${isActive ? "text-black" : "text-neutral-300 hover:text-white"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 bg-white rounded-full"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:bg-white/10 rounded-full"
          >
            <Menu size={24} />
          </button>

        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 inset-x-0 z-40 px-4 md:hidden"
          >
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">

              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-lg text-center py-3 text-lg font-bold bg-yellow-400 text-black mb-2"
                  >
                    {item.name}
                  </a>
                ) : item.dropdown ? (
                  <div key={item.name}>
                    <Link
                      href={item.hash || "#"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg text-neutral-200 hover:bg-white/10 rounded-lg"
                    >
                      {item.name}
                    </Link>

                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.hash}
                        onClick={() => setMobileMenuOpen(false)}
                        className="ml-5 block px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 rounded-lg"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.hash}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg text-neutral-200 hover:bg-white/10 rounded-lg"
                  >
                    {item.name}
                  </Link>
                )
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
