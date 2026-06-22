"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

export default function DotNav() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);

      const threshold = window.innerHeight * 0.4;

      if (window.scrollY < 80) { setActive("home"); return; }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        setActive("contact"); return;
      }

      let current = "home";
      for (const { id } of sections) {
        const el = id === "home" ? null : document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed right-3 z-40 flex flex-col gap-2.5 md:hidden" style={{ top: '50%', transform: 'translateY(calc(-50% - 48px))' }}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => goTo(id)}
          className="group relative flex items-center"
        >
          <motion.span
            animate={{ scale: active === id ? 1.4 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`block rounded-full transition-colors duration-300 ${
              active === id
                ? "w-2.5 h-2.5 bg-crystal-500"
                : "w-2 h-2 bg-gray-400 dark:bg-gray-600 group-hover:bg-crystal-400"
            }`}
          />
          {/* Tooltip */}
          <span className="absolute left-5 whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md
            bg-gray-900/80 dark:bg-gray-100/90 text-white dark:text-gray-900
            opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
