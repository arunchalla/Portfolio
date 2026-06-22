"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const typingWords = [
  "Senior Frontend Engineer",
  "React & TypeScript Expert",
  "Micro Frontend Architect",
  "Generative AI Integrator",
  "IoT Platform Builder",
];

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "6+", label: "Companies" },
  { value: "15+", label: "Technologies" },
  { value: "90%+", label: "Test Coverage" },
];

function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % typingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="text-crystal-600 dark:text-crystal-300">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-crystal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-crystal-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text content ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crystal-100 dark:bg-crystal-900/30 text-crystal-700 dark:text-crystal-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to work
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-crystal-600 via-crystal-500 to-crystal-700 bg-clip-text text-transparent">
                Arun Challa
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-5 h-8"
            >
              <TypingEffect />
            </motion.div>

            <motion.p
              variants={item}
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed w-full max-w-lg"
            >
              9+ years building scalable React & Angular applications for enterprise clients across
              industrial IoT, telecom, insurance, and healthcare. Currently at{" "}
              <span className="text-crystal-600 dark:text-crystal-300 font-semibold">Honeywell</span>,
              integrating Generative AI into production platforms.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4 flex-wrap mb-10">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-crystal-600 hover:bg-crystal-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-crystal-600/25 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-crystal-500 dark:hover:border-crystal-500 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-crystal-600 to-crystal-700 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: VS Code editor mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-crystal-600/20 to-crystal-700/10 blur-xl" />

              {/* Editor window */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl shadow-crystal-600/10 bg-gray-50 dark:bg-[#1e1e2e]">

                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-[#181825] border-b border-gray-300 dark:border-white/5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-500 dark:text-gray-400 font-mono">Portfolio.tsx</span>
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-[13px] leading-6 overflow-x-auto">
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="select-none text-right text-gray-400 dark:text-gray-600 text-xs leading-6 pt-0.5 space-y-0 shrink-0">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    {/* Code */}
                    <div className="space-y-0 min-w-0">
                      <div><span className="text-purple-600 dark:text-crystal-400">import</span> <span className="text-gray-800 dark:text-white">React</span> <span className="text-purple-600 dark:text-crystal-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;react&apos;</span><span className="text-gray-500 dark:text-gray-400">;</span></div>
                      <div>&nbsp;</div>
                      <div><span className="text-purple-600 dark:text-crystal-400">const</span> <span className="text-blue-600 dark:text-blue-300">engineer</span> <span className="text-gray-500 dark:text-gray-400">=</span> <span className="text-yellow-600 dark:text-yellow-300">&#123;</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">name</span><span className="text-gray-500 dark:text-gray-400">:</span> <span className="text-green-600 dark:text-green-400">&apos;Arun Challa&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">role</span><span className="text-gray-500 dark:text-gray-400">:</span> <span className="text-green-600 dark:text-green-400">&apos;Senior Frontend Engineer&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">experience</span><span className="text-gray-500 dark:text-gray-400">:</span> <span className="text-orange-600 dark:text-orange-400">9</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">stack</span><span className="text-gray-500 dark:text-gray-400">: [</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&apos;React&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span> <span className="text-green-600 dark:text-green-400">&apos;TypeScript&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&apos;Next.js&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span> <span className="text-green-600 dark:text-green-400">&apos;Node.js&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&apos;LangChain&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">],</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">ai</span><span className="text-gray-500 dark:text-gray-400">:</span> <span className="text-orange-600 dark:text-orange-400">true</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div>&nbsp;&nbsp;<span className="text-red-600 dark:text-red-300">location</span><span className="text-gray-500 dark:text-gray-400">:</span> <span className="text-green-600 dark:text-green-400">&apos;Atlanta, GA&apos;</span><span className="text-gray-500 dark:text-gray-400">,</span></div>
                      <div><span className="text-yellow-600 dark:text-yellow-300">&#125;</span><span className="text-gray-500 dark:text-gray-400">;</span></div>
                      <div>&nbsp;</div>
                      <div><span className="text-purple-600 dark:text-crystal-400">export default function</span> <span className="text-blue-600 dark:text-blue-300">Portfolio</span><span className="text-gray-500 dark:text-gray-400">() &#123;</span></div>
                      <div>&nbsp;&nbsp;<span className="text-purple-600 dark:text-crystal-400">return</span> <span className="text-gray-500 dark:text-gray-400">&lt;</span><span className="text-red-600 dark:text-red-300">HireMe</span> <span className="text-blue-600 dark:text-blue-300">data</span><span className="text-gray-500 dark:text-gray-400">=&#123;</span><span className="text-gray-800 dark:text-white">engineer</span><span className="text-gray-500 dark:text-gray-400">&#125; /&gt;;</span></div>
                      <div><span className="text-gray-500 dark:text-gray-400">&#125;</span></div>
                      <div><span className="text-gray-400">&nbsp;</span><span className="bg-crystal-500/30 text-crystal-600 dark:text-crystal-300 px-1 rounded animate-pulse">▋</span></div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-crystal-600 text-white text-xs font-mono">
                  <span>TypeScript React</span>
                  <span>Ln 20, Col 1</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={22} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
