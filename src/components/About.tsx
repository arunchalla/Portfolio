"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Users } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Code2, title: "Micro Frontends", desc: "Webpack 5 Module Federation, independently deployable modules at enterprise scale." },
  { icon: Layers, title: "UI Architecture", desc: "Reusable component libraries, design systems, and scalable state management patterns." },
  { icon: Zap, title: "Performance", desc: "Lazy loading, code splitting, bundle optimization, and React Hooks migrations." },
  { icon: Users, title: "Generative AI", desc: "RAG architecture, LangChain, LangGraph, and LLM-powered workflow integration." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crystal-600 to-crystal-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              <div className="w-72 h-72 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-crystal-600 to-crystal-700 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                  <Image
                    src="/profile-clean.png"
                    alt="Arun Challa"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 right-0 sm:-right-4 lg:right-auto lg:-left-4 bg-crystal-600 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                9+ Years Experience
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a <strong className="text-gray-900 dark:text-white">Senior Frontend Engineer</strong> with
              9+ years of experience designing and delivering scalable React and Angular applications for
              enterprise clients across <strong className="text-gray-900 dark:text-white">industrial IoT, telecom,
              insurance, and healthcare</strong> domains.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently at <strong className="text-gray-900 dark:text-white">Honeywell</strong>, I&apos;m building
              an industrial IoT monitoring platform with hands-on integration of Generative AI technologies —
              including RAG architecture, LangChain, LangGraph, and prompt engineering to develop
              LLM-powered workflows and agent-based solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I have deep expertise in Micro Frontend architecture using Webpack 5 Module Federation,
              TypeScript, OAuth 2.0 with PKCE, and a strong history of building reusable UI libraries
              and leading distributed teams.
            </p>

            <div className="flex gap-8 pt-4 flex-wrap">
              {[
                { label: "Enterprise Clients", value: "6+" },
                { label: "Years Experience", value: "9+" },
                { label: "Test Coverage Achieved", value: "90%+" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-crystal-600 to-crystal-700 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 48, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 110, damping: 15, delay: i * 0.1 }}

              className="relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden group cursor-default
                transition-shadow duration-300 hover:shadow-xl hover:shadow-crystal-500/10 dark:hover:shadow-crystal-500/20
                hover:border-crystal-500/60 dark:hover:border-crystal-500/40"
            >
              {/* Glow blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-crystal-500/10 dark:bg-crystal-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shimmer top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crystal-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-3 relative">
                <div className="w-10 h-10 rounded-xl bg-crystal-100 dark:bg-crystal-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-crystal-600 transition-colors duration-300">
                  <Icon size={20} className="text-crystal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 relative">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
