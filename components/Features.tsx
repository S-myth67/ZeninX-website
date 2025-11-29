"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Gamified Progress",
    description: "Climb the ranks from Iron to Radiant as you build better habits and achieve your goals",
    icon: "🏆",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Comprehensive Tracking",
    description: "Monitor workouts, fasting, sleep, water intake, and custom habits all in one place",
    icon: "📊",
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Monk Mode",
    description: "Enter monk mode to build discipline and track your commitment to personal growth",
    icon: "🧘",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Smart Analytics",
    description: "Get insights into your daily patterns and progress with detailed analytics",
    icon: "📈",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    color: "from-green-400 to-emerald-500",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      
      <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden h-full">
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-6xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          
          <motion.h3
            className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
          >
            {feature.title}
          </motion.h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500`} />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wider uppercase">
            ✨ Why Choose ZeninX ✨
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Transform Your Daily Habits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your daily habits into a game. Track, improve, and ascend through our unique ranking system while building the life you want.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
