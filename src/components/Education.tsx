"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const education = [
  {
    abbr: "M.S.",
    degree: "Master of Science in Computer Science",
    school: "Northwestern Polytechnic University",
    period: "Aug 2015 – Dec 2016",
    location: "Fremont, CA",
    logo: "/logos/npu-seal.png",
    initials: "NPU",
  },
  {
    abbr: "B.Tech",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "Malla Reddy Engineering College",
    period: "Oct 2010 – Apr 2014",
    location: "Hyderabad, India",
    logo: "/logos/mrec.jpg",
    initials: "MREC",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crystal-600 to-crystal-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-crystal-500/40 transition-all"
            >
              {/* Logo */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden shadow-sm mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-14 h-14 object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>

              {/* Degree */}
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-1">
                {edu.degree}
              </h3>

              {/* School */}
              <p className="text-crystal-600 dark:text-crystal-400 font-semibold text-sm mb-3">
                {edu.school}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-auto">
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
