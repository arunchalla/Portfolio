"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Home, User, Layers, Briefcase, GraduationCap, FolderOpen, Mail } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { label: "Home", href: "#", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const scrollToSection = (id: string) => {
    const target = id ? document.getElementById(id) : document.body;
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    history.pushState(null, "", href || "/");
    scrollToSection(id);
  };

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const threshold = window.innerHeight * 0.3;
      const ids = links.map((l) => l.href.replace("#", "")).filter(Boolean);

      if (window.scrollY < 80) {
        setActiveSection("");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const onPopState = () => {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-[#0a1628] backdrop-blur-md border-b border-gray-200 dark:border-crystal-600/20 ${
        scrolled ? "shadow-lg dark:shadow-black/50" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.04 }}
        >
          <LogoMark size={36} />
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === "#" ? activeSection === "" : activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex flex-col items-center gap-0.5 transition-colors pb-1 font-medium ${
                    isActive
                      ? "text-crystal-600 dark:text-crystal-300 border-b-[3px] border-crystal-600 dark:border-crystal-300"
                      : "text-gray-600 dark:text-gray-400 hover:text-crystal-600 dark:hover:text-crystal-300 border-b-[3px] border-transparent"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-xs">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-crystal-600 dark:hover:text-crystal-300 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-crystal-600 dark:hover:text-crystal-300 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#0a1628] border-b border-gray-200 dark:border-gray-700/50"
          >
            <ul className="px-6 py-5 flex flex-col gap-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = link.href === "#" ? activeSection === "" : activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleNavClick(e, link.href);
                      }}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-colors ${
                        isActive
                          ? "font-semibold text-crystal-600 dark:text-crystal-300 bg-crystal-50 dark:bg-crystal-900/20"
                          : "font-medium text-gray-600 dark:text-gray-300 hover:text-crystal-600 dark:hover:text-crystal-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      <Icon size={16} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
