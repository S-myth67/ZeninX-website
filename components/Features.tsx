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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: -15 }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
      className="group relative perspective-1000"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
        animate={{
          opacity: isInView ? [0, 0.3, 0] : 0,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.5,
        }}
      />
      
      <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-800 overflow-hidden h-full">
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="text-6xl mb-6 inline-block"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            {feature.icon}
          </motion.div>
          
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
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(135deg, ${
                i % 2 === 0 ? "rgba(99, 102, 241, 0.3)" : "rgba(168, 85, 247, 0.3)"
              })`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-6 tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            ✨ Why Choose ZeninX ✨
          </motion.span>
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Your Daily Habits
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transform your daily habits into a game. Track, improve, and ascend through our unique ranking system while building the life you want.
          </motion.p>
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
