"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";

const companyLogos: Record<string, string> = {
  "Honeywell": "https://www.google.com/s2/favicons?domain=honeywell.com&sz=128",
  "Cox Communications": "https://www.google.com/s2/favicons?domain=cox.com&sz=128",
  "Cotiviti": "https://www.google.com/s2/favicons?domain=cotiviti.com&sz=128",
  "State Farm": "https://www.google.com/s2/favicons?domain=statefarm.com&sz=128",
  "AT&T": "https://www.google.com/s2/favicons?domain=att.com&sz=128",
  "Advithri Technologies": "",
};

function CompanyLogo({ company }: { company: string }) {
  const src = companyLogos[company];
  return (
    <div className="relative w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden bg-white border border-gray-200 dark:border-gray-700 flex items-center justify-center">
      <span className="text-gray-500 font-bold text-sm select-none">{company.charAt(0)}</span>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={company}
          className="absolute inset-0 w-full h-full object-contain p-1 bg-white"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
    </div>
  );
}

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Honeywell",
    period: "Aug 2021 – Present",
    location: "Atlanta, GA",
    type: "Contract",
    description:
      "Industrial subscription platform enabling remote monitoring and compliance management for oil, gas, and pharmaceutical clients.",
    achievements: [
      "Developed Micro Frontend applications using React, TypeScript, and Webpack 5 Module Federation with reusable widgets and centralized dependency versioning",
      "Implemented OAuth 2.0 Authorization Code flow with PKCE via Honeywell Forge identity provider; architected dual Axios interceptor pattern for token refresh",
      "Built cross-platform React Native app for iOS/Android with FlatList virtualization, memo, and React Navigation deep linking",
      "Optimized performance through lazy loading, code splitting, and bundle optimization; migrated 15+ class-based components to Hooks, reducing file size by 25%",
      "Built interactive Highcharts dashboards with ARIA labels improving load time for 10,000+ data point views",
      "Integrating Generative AI technologies: RAG architecture, LangChain, LangGraph, and prompt engineering for LLM-powered workflows",
    ],
    tech: ["React", "TypeScript", "Webpack 5 MFE", "MobX", "React Native", "OAuth 2.0", "Highcharts", "LangChain"],
  },
  {
    role: "Senior Web Developer",
    company: "Cox Communications",
    period: "Mar 2020 – Jul 2021",
    location: "Atlanta, GA",
    type: "Contract",
    description:
      "Agent payment-processing application handling secure payment gateway interactions between Cox agents and business customers.",
    achievements: [
      "Developed payment widget suite from scratch using React, Redux, and TypeScript supporting scheduling and recurring payment workflows",
      "Implemented RxJS WebSocket connection for real-time DTMF keyboard event handling in live PCI-compliant agent sessions",
      "Built Global Components library standardizing UI patterns across multiple product teams organization-wide",
      "Established Redux store architecture powering state management across 20+ components",
      "Achieved 90%+ test coverage on core payment components using Jest and Enzyme",
    ],
    tech: ["React", "Redux", "TypeScript", "RxJS", "WebSocket", "Kendo UI", "Jest", "Enzyme"],
  },
  {
    role: "Software Developer",
    company: "Cotiviti",
    period: "Sep 2019 – Feb 2020",
    location: "Atlanta, GA",
    type: "Contract",
    description:
      "Modernized a legacy healthcare analytics platform (Client Policy Workbench) to Angular 8 / TypeScript, enabling insurance associates to project net savings on health claims.",
    achievements: [
      "Developed React/Redux single-page application with virtual DOM rendering and component-based architecture",
      "Implemented React hooks (useState, useEffect, useContext) and React Router for navigation",
      "Integrated Axios services for async data retrieval from RESTful web services",
      "Developed unit tests using Jest/Enzyme and implemented React drag-and-drop with React-Draggable",
    ],
    tech: ["React", "Redux", "Angular 8", "TypeScript", "Axios", "Jest", "Webpack", "Babel"],
  },
  {
    role: "Software Engineer",
    company: "State Farm",
    period: "Apr 2018 – Aug 2019",
    location: "Richardson, TX",
    type: "Contract",
    description:
      "Built a POC using Angular 7 and Material Design that was accepted by the client and became the foundation for the production application.",
    achievements: [
      "Developed reusable custom directives, pipes, and modules in Angular 7 shared across multiple teams",
      "Implemented NgRx store with action/reducer/effect/selector patterns, separating state from UI logic",
      "Created data visualizations using D3 and Highcharts rendered via HTML Canvas and SVG",
      "Designed responsive UI with full cross-browser compatibility (Chrome, Firefox) using Bootstrap",
      "Mentored junior developers on Angular architecture and business domain knowledge",
    ],
    tech: ["Angular 7", "NgRx", "TypeScript", "D3.js", "Highcharts", "Material Design", "Bootstrap"],
  },
  {
    role: "Software / Application Developer",
    company: "AT&T",
    period: "Feb 2017 – Mar 2018",
    location: "Richardson, TX",
    type: "Contract",
    description:
      "Developed responsive, cross-browser compatible web applications in full Agile/Scrum cycles including Sprint Planning, PI Planning, and Production Support.",
    achievements: [
      "Built applications using Angular 5, TypeScript, HTML5, CSS3, Bootstrap, and JavaScript",
      "Implemented Angular Routing, Dependency Injection, RxJS, and HTTP modules for scalable SPAs",
      "Built dynamic forms using Angular Template-Driven and Reactive Forms with client and server validations",
      "Developed and consumed RESTful APIs using Node.js, Express.js, MongoDB, and Mongoose",
    ],
    tech: ["Angular 5", "TypeScript", "RxJS", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
  {
    role: "Web Developer",
    company: "Advithri Technologies",
    period: "Jun 2014 – Jul 2015",
    location: "Hyderabad, India",
    type: "Full-time",
    description:
      "Developed responsive web applications and dynamic dashboards for business clients.",
    achievements: [
      "Built responsive UIs using HTML5, CSS3, Bootstrap, JavaScript, jQuery, and AJAX",
      "Converted PSD wireframes into pixel-perfect, cross-browser UI",
      "Built dynamic dashboards consuming RESTful APIs and XML data",
      "Implemented client-side validations and reusable components using LESS and SASS",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "AJAX", "MySQL", "SVN"],
  },
];

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={`${exp.company}-${exp.period}`}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative pl-10 sm:pl-20"
    >
      {/* Dot */}
      <div className="absolute left-[14px] sm:left-[26px] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-crystal-600 to-crystal-700 border-4 border-white dark:border-[#0d1117] shadow" />

      <div className="rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:border-crystal-600/50 dark:hover:border-crystal-600/40 hover:shadow-md transition-all backdrop-blur-sm overflow-hidden">
        {/* Header — always visible, tappable on mobile */}
        <button
          type="button"
          onClick={() => setExpanded((p) => !p)}
          className="w-full text-left p-4 sm:p-7 cursor-pointer"
        >
          <div className="mb-2">
            <div className="flex items-center gap-3 mb-2">
              <CompanyLogo company={exp.company} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm truncate">{exp.company}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline text-xs px-3 py-1 rounded-full bg-crystal-600 text-white font-semibold shadow-sm shadow-crystal-600/25">
                      {exp.type}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">{exp.role}</h3>
          </div>
        </button>

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 sm:px-7 sm:pb-7 border-t border-gray-100 dark:border-gray-800 pt-3">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-gray-50 dark:bg-[#0d1117] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-crystal-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crystal-600 to-crystal-700 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-crystal-500 to-crystal-700 opacity-20" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
