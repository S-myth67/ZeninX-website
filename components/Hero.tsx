"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (heroRef.current && titleRef.current) {
      
      // Animate floating particles
      const particles = heroRef.current.querySelectorAll(".particle");
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -30 + Math.random() * 60,
          x: Math.random() * 100 - 50,
          opacity: 0.2 + Math.random() * 0.3,
          duration: 4 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // Animate title with stagger
      gsap.from(titleRef.current.querySelectorAll("span"), {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background with Image Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[url('/images/dash_log_profile_dark.png')] bg-cover bg-center mix-blend-overlay" />
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          // Generate stable random values based on index to avoid hydration mismatch
          // Round to 2 decimal places to ensure exact match between server and client
          const seed = i * 0.1;
          const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
          const top = Math.round((Math.cos(seed * 2) * 50 + 50) * 100) / 100;
          const xOffset = Math.round(Math.sin(seed * 3) * 20 * 100) / 100;
          const duration = Math.round((3 + (Math.sin(seed * 4) * 0.5 + 0.5) * 2) * 100) / 100;
          
          return (
            <motion.div
              key={i}
              className="particle absolute w-3 h-3 bg-white/30 rounded-full blur-sm"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, xOffset, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Gradient Orbs with Animation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/40 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold border border-white/30 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀 NOW IN BETA - JOIN THE REVOLUTION
            </motion.span>
          </motion.div>

          <motion.h1
            ref={titleRef}
            className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight"
          >
            <motion.span
              className="inline-block"
              variants={itemVariants}
            >
              Master Your
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-yellow-300"
              variants={itemVariants}
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,235,59,0.5)",
                  "0 0 40px rgba(255,235,59,0.8)",
                  "0 0 20px rgba(255,235,59,0.5)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Habits.
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              variants={itemVariants}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Ascend the Ranks.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            ZeninX - The ultimate habit tracking app that gamifies your wellness journey. 
            Track workouts, fasting, sleep, water intake, and more while climbing the ranks from Iron to Radiant.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/app"
                className="inline-block bg-white text-purple-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition shadow-2xl text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Try Beta Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/app#download"
                className="inline-block bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition backdrop-blur-sm text-lg relative overflow-hidden group shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Become a Beta Tester
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ⭐
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center gap-3 text-white/70">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
