"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AppImageGalleryProps {
  images: string[];
  heroImage: string;
}

export default function AppImageGallery({ images, heroImage }: AppImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Hero Image - Big image with 3 sections */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={heroImage}
              alt="App Hero Screenshot"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      {/* Gallery Grid - 7 Android format images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100 dark:bg-gray-800">
              <Image
                src={image}
                alt={`App Screenshot ${index + 1}`}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
              <span className="text-white text-sm font-medium">Click to enlarge</span>
            </div>
            <motion.div
              className="absolute top-2 right-2 w-8 h-8 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full-size image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Full size screenshot"
                  width={800}
                  height={1400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
