"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Note: Content is now visible immediately, animations are subtle

export default function About() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          About ZeninX
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn more about our mission to help you master your habits and ascend the ranks
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          ref={missionRef}
          initial={{ opacity: 1, x: 0 }}
          animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            At ZeninX, we believe that building better habits shouldn&apos;t feel like a chore. Our mission
            is to transform the way people approach personal development by making habit tracking engaging,
            motivating, and fun through gamification.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We&apos;re committed to helping you build consistency, track your progress, and achieve your wellness
            goals through our unique ranking system that turns daily habits into an exciting journey from
            Iron to Radiant.
          </p>
        </motion.div>
        <motion.div
          ref={visionRef}
          initial={{ opacity: 1, x: 0 }}
          animate={visionInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To become the most engaging and effective habit tracking platform, helping millions of people
              build better lives through gamified wellness and consistent daily actions. We envision a world
              where personal growth feels rewarding and achievable for everyone.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Gamification</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Making habit building fun and engaging through game mechanics
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Consistency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Helping you build lasting habits through daily tracking
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering personal development and self-improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

