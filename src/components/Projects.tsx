"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "Honeywell IoT Platform",
    description:
      "Industrial subscription platform for remote monitoring and compliance management of oil, gas, and pharmaceutical assets. Micro Frontend architecture with Webpack 5 Module Federation, real-time data streams, and OAuth 2.0 PKCE auth.",
    image: "🏭",
    gradient: "from-crystal-600 to-crystal-500",
    tags: ["React", "TypeScript", "Webpack 5 MFE", "MobX", "OAuth 2.0", "Highcharts"],
    category: "IoT / Enterprise",
    featured: true,
    liveUrl: "https://enabledservices.honeywell.com/login",
    githubUrl: "#",
  },
  {
    title: "React Native Mobile App",
    description:
      "Cross-platform iOS/Android companion app for the Honeywell IoT platform. Features FlatList virtualization for large datasets, push notification deep linking via React Navigation, and offline-first data sync.",
    image: "📱",
    gradient: "from-crystal-600 to-blue-500",
    tags: ["React Native", "TypeScript", "React Navigation", "iOS", "Android"],
    category: "Mobile",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PCI Payment Widget Suite",
    description:
      "Secure payment processing suite for Cox Communications agents. Includes real-time DTMF keyboard capture via RxJS WebSockets, recurring payment scheduling, and a global component library adopted org-wide.",
    image: "💳",
    gradient: "from-pink-600 to-rose-500",
    tags: ["React", "Redux", "TypeScript", "RxJS", "WebSocket", "Kendo UI"],
    category: "FinTech",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GenAI LLM Workflows",
    description:
      "LLM-powered agent workflows integrated into the Honeywell platform using RAG architecture, LangChain, LangGraph, and vector databases for intelligent document retrieval and automated compliance reporting.",
    image: "🤖",
    gradient: "from-emerald-600 to-teal-500",
    tags: ["LangChain", "LangGraph", "RAG", "Vector DB", "Prompt Engineering"],
    category: "Generative AI",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Angular NgRx Analytics Dashboard",
    description:
      "Production-grade Angular 7 SPA with NgRx state management for State Farm. Features D3.js and Highcharts visualizations rendered via HTML Canvas and SVG, with full cross-browser responsive design.",
    image: "📊",
    gradient: "from-orange-500 to-amber-500",
    tags: ["Angular 7", "NgRx", "D3.js", "Highcharts", "Material Design"],
    category: "Analytics",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare Policy Workbench",
    description:
      "Modernized legacy healthcare analytics platform from AngularJS to Angular 8 / TypeScript at Cotiviti. Enables insurance associates to project net savings on health claims with React/Redux SPA components.",
    image: "🏥",
    gradient: "from-cyan-600 to-sky-500",
    tags: ["Angular 8", "React", "Redux", "TypeScript", "Jest", "Enzyme"],
    category: "Healthcare",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "IoT / Enterprise", "Mobile", "FinTech", "Generative AI", "Analytics", "Healthcare"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crystal-600 to-crystal-700 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Enterprise products and platforms I&apos;ve designed and shipped across 9+ years.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-crystal-600 text-white shadow-lg shadow-crystal-600/25"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-crystal-500 hover:text-crystal-600 dark:hover:border-crystal-500 dark:hover:text-crystal-400 dark:hover:bg-crystal-900/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-crystal-600/10 hover:border-crystal-600/40 transition-all duration-300"
            >
              {/* Card header */}
              <div className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative`}>
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                    Featured
                  </span>
                )}
                {project.image}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-crystal-600 dark:group-hover:text-crystal-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="ml-2 flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-crystal-100 dark:bg-crystal-900/30 text-crystal-700 dark:text-crystal-300">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm font-medium text-crystal-600 dark:text-crystal-300 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Case Study
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
