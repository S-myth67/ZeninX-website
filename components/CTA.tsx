"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-10 h-10 text-yellow-300" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Ready to Transform Your Habits?
          </h2>
          <p className="text-xl sm:text-2xl mb-10 text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Start your journey to better habits today. Explore ZeninX and join thousands who are already transforming their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/app#download"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition shadow-2xl text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Join Beta Testing
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/app"
                className="inline-flex items-center gap-2 bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition backdrop-blur-sm text-lg relative overflow-hidden group shadow-2xl"
              >
                <span className="relative z-10">Explore App</span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  ⭐
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
