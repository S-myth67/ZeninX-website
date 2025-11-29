"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CreativeImageGallery from "@/components/CreativeImageGallery";
import BetaDownload from "@/components/BetaDownload";

export default function AppPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  const darkImages = [
    "/images/dashbaord_dark.png",
    "/images/logs_dark.png",
    "/images/profile_dark.png",
    "/images/reset_pwd_dark.png",
    "/images/signin_dark.png",
    "/images/signup_dark.png",
    "/images/system_reply_dark.png",
  ];

  const darkHeroImage = "/images/dash_log_profile_dark.png";

  const lightImages = [
    "/images/app-light-1.png",
    "/images/app-light-2.png",
    "/images/app-light-3.png",
    "/images/app-light-4.png",
    "/images/app-light-5.png",
    "/images/app-light-6.png",
    "/images/app-light-7.png",
  ];

  const lightHeroImage = "/images/app-hero-light.png";

  const currentImages = isDarkMode ? darkImages : lightImages;
  const currentHeroImage = isDarkMode ? darkHeroImage : lightHeroImage;

  const features = [
    {
      icon: "🏆",
      title: "Gamified Ranking System",
      description: "Climb from Iron to Radiant as you build better habits. Earn points and unlock new ranks based on your consistency.",
    },
    {
      icon: "📊",
      title: "Comprehensive Habit Tracking",
      description: "Track water intake, sleep patterns, fasting windows, workouts, running distance, and custom habits all in one place.",
    },
    {
      icon: "🧘",
      title: "Monk Mode",
      description: "Enter monk mode to build discipline. Track your commitment and get motivational messages to stay on track.",
    },
    {
      icon: "📈",
      title: "Smart Analytics",
      description: "Get detailed insights into your daily patterns, progress trends, and habit consistency with beautiful analytics.",
    },
    {
      icon: "🌙",
      title: "Dark & Light Themes",
      description: "Beautiful glassmorphism UI with full dark and light mode support for comfortable viewing anytime.",
    },
    {
      icon: "💤",
      title: "Sleep Tracking",
      description: "Monitor your sleep with smart wake-up messages that provide feedback on your sleep quality and duration.",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              🚀 BETA
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            ZeninX - Master Your Habits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The ultimate habit tracking app that gamifies your wellness journey. Track workouts, fasting, sleep, water intake, and more while climbing the ranks from Iron to Radiant.
          </motion.p>
        </motion.div>

        {/* App Details Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Key Features
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start group"
                >
                  <motion.span
                    className="text-3xl mr-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5,
                      delay: index * 0.5,
                    }}
                  >
                    {feature.icon}
                  </motion.span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About ZeninX
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  ZeninX is a revolutionary habit tracking app that transforms your wellness journey into an engaging game. 
                  Built with React Native and featuring a beautiful glassmorphism design, ZeninX helps you build consistency 
                  through gamification.
                </p>
                <p>
                  Whether you&apos;re tracking your water intake, monitoring sleep patterns, maintaining a fasting schedule, 
                  logging workouts, or building discipline through monk mode, ZeninX provides the tools and motivation 
                  you need to ascend the ranks and achieve your goals.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-indigo-600 dark:text-indigo-400">Current Status:</strong> ZeninX is in active beta development. We&apos;re looking for beta testers 
                  to help us refine the app and provide feedback. Join now to get early access!
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <a
                  href="#download"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition shadow-lg text-lg"
                >
                  Join Beta Testing
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <CreativeImageGallery images={currentImages} heroImage={currentHeroImage} />
        </motion.div>

        {/* Beta Download Section */}
        <BetaDownload />
      </div>
    </div>
  );
}
