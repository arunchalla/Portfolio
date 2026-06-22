"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Shimmer({ className }: { className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent" />
    </div>
  );
}

function SkeletonHero() {
  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <Shimmer className="h-8 w-32 rounded-full" />
            <Shimmer className="h-12 w-3/4" />
            <Shimmer className="h-7 w-1/2" />
            <div className="space-y-2 pt-1">
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-5/6" />
              <Shimmer className="h-4 w-4/6" />
            </div>
            <div className="flex gap-4 pt-2">
              <Shimmer className="h-12 w-36 rounded-full" />
              <Shimmer className="h-12 w-36 rounded-full" />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-4">
              {[...Array(4)].map((_, i) => (
                <Shimmer key={i} className="h-20 rounded-xl" />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Shimmer className="h-96 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for fonts + first paint
    const id = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] bg-white dark:bg-gray-950 overflow-hidden"
          >
            {/* Navbar skeleton */}
            <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center px-6 justify-between">
              <Shimmer className="h-9 w-9 rounded-full" />
              <div className="hidden md:flex gap-8">
                {[...Array(7)].map((_, i) => <Shimmer key={i} className="h-4 w-14" />)}
              </div>
              <Shimmer className="h-8 w-8 rounded-lg" />
            </div>
            <SkeletonHero />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
