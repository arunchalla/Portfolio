"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Database, Wrench, Smartphone, Brain } from "lucide-react";

// Simple Icons CDN slugs — https://simpleicons.org
const skillIcons: Record<string, string> = {
  "React 18":             "https://cdn.simpleicons.org/react",
  "TypeScript":           "https://cdn.simpleicons.org/typescript",
  "JavaScript ES6+":      "https://cdn.simpleicons.org/javascript",
  "Next.js":              "https://cdn.simpleicons.org/nextdotjs",
  "HTML5":                "https://cdn.simpleicons.org/html5",
  "CSS":                  "https://cdn.simpleicons.org/css",
  "Webpack 5 MFE":        "https://cdn.simpleicons.org/webpack",
  "Module Federation":    "https://cdn.simpleicons.org/webpack",
  "Redux":                "https://cdn.simpleicons.org/redux",
  "MobX":                 "https://cdn.simpleicons.org/mobx",
  "RxJS":                 "https://cdn.simpleicons.org/reactivex",
  "React Query":          "https://cdn.simpleicons.org/reactquery",
  "GraphQL":              "https://cdn.simpleicons.org/graphql",
  "WebSocket":            "https://cdn.simpleicons.org/socket.io",
  "React Native":         "https://cdn.simpleicons.org/react",
  "Tailwind CSS":         "https://cdn.simpleicons.org/tailwindcss",
  "Material UI":          "https://cdn.simpleicons.org/mui",
  "Bootstrap":            "https://cdn.simpleicons.org/bootstrap",
  "SASS":                 "https://cdn.simpleicons.org/sass",
  "SCSS":                 "https://cdn.simpleicons.org/sass",
  "Kendo UI React":       "https://www.telerik.com/sfimages/default-source/logos/telerik1200x630.png",
  "Jest":                 "https://cdn.simpleicons.org/jest",
  "Cypress":              "https://cdn.simpleicons.org/cypress",
  "ESLint":               "https://cdn.simpleicons.org/eslint",
  "Git":                  "https://cdn.simpleicons.org/git",
  "Docker":               "https://cdn.simpleicons.org/docker",
  "LangChain":            "https://cdn.simpleicons.org/langchain",
  "JavaScript":           "https://cdn.simpleicons.org/javascript",
  "Angular":              "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif",
  "Node.js":              "https://cdn.simpleicons.org/nodedotjs",
  "Express":              "https://cdn.simpleicons.org/express",
  "PostgreSQL":           "https://cdn.simpleicons.org/postgresql",
  "MongoDB":              "https://cdn.simpleicons.org/mongodb",
  "MySQL":                "https://cdn.simpleicons.org/mysql",
  "OAuth 2.0":            "https://cdn.simpleicons.org/auth0",
  "Highcharts":           "https://www.google.com/s2/favicons?domain=highcharts.com&sz=128",
  "D3.js":                "https://d3js.org/logo.svg",
  "Chart.js":             "https://cdn.simpleicons.org/chartdotjs",
  "RTL":                  "https://testing-library.com/img/octopus-64x64.png",
  "JIRA":                 "https://cdn.simpleicons.org/jira",
};

const simpleIconsBase = "https://cdn.simpleicons.org/";
const darkInvertIcons = new Set([
  "Next.js", "Express", "Cypress", "GitHub", "Module Federation", "Webpack 5 MFE",
  "WebSocket",
]);

function iconClass(url: string, skill: string) {
  const isSimpleIcon = url.startsWith(simpleIconsBase);
  const needsInvert = isSimpleIcon && darkInvertIcons.has(skill);
  return `w-3.5 h-3.5 object-contain flex-shrink-0${needsInvert ? " dark:invert" : ""}`;
}

function SkillBadge({ skill }: { skill: string }) {
  const iconUrl = skillIcons[skill];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-crystal-100 dark:hover:bg-crystal-900/30 hover:text-crystal-700 dark:hover:text-crystal-300 transition-colors cursor-default">
      {iconUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconUrl}
          alt={skill}
          className={iconClass(iconUrl, skill)}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      {skill}
    </span>
  );
}

function SkillBadgeOutline({ item }: { item: string }) {
  const iconUrl = skillIcons[item];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-crystal-500 hover:text-crystal-600 dark:hover:border-crystal-500 dark:hover:text-crystal-300 hover:bg-crystal-50 dark:hover:bg-crystal-900/20 transition-all cursor-default shadow-sm">
      {iconUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconUrl}
          alt={item}
          className={iconClass(iconUrl, item)}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      {item}
    </span>
  );
}

const expertise = [
  {
    icon: Code2,
    title: "Frontend Core",
    color: "bg-crystal-100 dark:bg-crystal-900/30 text-crystal-700 dark:text-crystal-300",
    iconColor: "text-crystal-600",
    skills: ["React 18", "TypeScript", "JavaScript ES6+", "Next.js", "Angular", "HTML5", "CSS"],
  },
  {
    icon: Cpu,
    title: "Architecture",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
    iconColor: "text-crystal-600",
    skills: ["Monolithic", "Modular", "Component-Based", "Micro Frontends", "Flux"],
  },
  {
    icon: Database,
    title: "State & Data",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    iconColor: "text-pink-600",
    skills: ["Redux", "MobX", "RxJS", "React Query", "REST APIs", "WebSocket", "GraphQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Styling",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
    iconColor: "text-emerald-600",
    skills: ["React Native", "Tailwind CSS", "Material UI", "Kendo UI React", "Bootstrap", "SASS", "SCSS"],
  },
  {
    icon: Wrench,
    title: "Tooling & Testing",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    iconColor: "text-orange-600",
    skills: ["Jest", "Enzyme", "RTL", "Cypress", "ESLint", "Git", "CI/CD", "Docker"],
  },
  {
    icon: Brain,
    title: "Generative AI",
    color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
    iconColor: "text-cyan-600",
    skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Vector DBs", "LLM Orchestration"],
  },
];

const highlights = [
  { label: "Languages",      items: ["JavaScript", "TypeScript", "HTML5", "CSS", "SQL"] },
  { label: "Frameworks",     items: ["React 18", "Angular", "Next.js", "Node.js", "Express"] },
  { label: "Databases",      items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle 11g"] },
  { label: "Auth & Security",items: ["OAuth 2.0", "PKCE", "JWT", "Bearer Tokens", "Axios Interceptors"] },
  { label: "Visualization",  items: ["Highcharts", "D3.js", "Chart.js"] },
  { label: "Methodology",    items: ["Agile", "Scrum", "JIRA", "Code Reviews", "PI Planning"] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crystal-600 to-crystal-700 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            9+ years of hands-on expertise across the full frontend spectrum — from pixel-perfect UIs to production AI integrations.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {expertise.map(({ icon: Icon, title, color, iconColor, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 48, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 110, damping: 15, delay: i * 0.1 }}

              className="relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden group cursor-default
                transition-shadow duration-300 hover:shadow-xl hover:shadow-crystal-500/10 dark:hover:shadow-crystal-500/20
                hover:border-crystal-500/60 dark:hover:border-crystal-500/40"
            >
              {/* Glow blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-crystal-500/10 dark:bg-crystal-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shimmer top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crystal-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-5 relative">
                <div className={`p-2.5 rounded-xl ${color} group-hover:bg-crystal-600 transition-colors duration-300`}>
                  <Icon size={18} className={`${iconColor} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-crystal-600/30" />
          <span className="flex items-center gap-2 text-xs font-bold text-crystal-600 dark:text-crystal-400 uppercase tracking-widest whitespace-nowrap px-3 py-1.5 rounded-full bg-crystal-50 dark:bg-crystal-900/20 border border-crystal-200 dark:border-crystal-800">
            <span className="w-1.5 h-1.5 rounded-full bg-crystal-500 animate-pulse" />
            Also proficient in
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-crystal-600/30" />
        </motion.div>

        {/* Grouped tag rows */}
        <div className="space-y-5">
          {highlights.map(({ label, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5"
            >
              <span className="text-xs font-bold text-crystal-700 dark:text-crystal-500 uppercase tracking-widest sm:w-28 shrink-0 sm:pt-1.5">
                {label}
              </span>
              <div className="flex flex-wrap gap-2 flex-1">
                {items.map((item) => (
                  <SkillBadgeOutline key={item} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
