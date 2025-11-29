"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { X, Maximize2, Smartphone } from "lucide-react";

interface CreativeImageGalleryProps {
  images: string[];
  heroImage: string;
}

const screenLabels = [
  "Dashboard",
  "Activity Logs",
  "User Profile",
  "Password Reset",
  "Sign In",
  "Sign Up",
  "System Reply"
];

function ScrollImage({ 
  image, 
  index, 
  onImageClick,
  label
}: { 
  image: string; 
  index: number;
  onImageClick: (image: string) => void;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "200px", // Start loading 200px before image enters viewport
    amount: 0.1
  });
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: -8 }}
      className="relative group cursor-pointer"
      onClick={() => onImageClick(image)}
    >
      <div className="relative">
        {/* Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: index * 0.08 + 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
            {label}
          </div>
        </motion.div>

        {/* Phone Frame */}
        <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black border-4 border-gray-700 dark:border-gray-800 p-2">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
          
          {/* Screen Content */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-0" />
            )}
            {isInView && (
              <Image
                src={image}
                alt={label}
                fill
                className={`object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02] ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading={index < 3 ? "eager" : "lazy"}
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => setImageLoaded(true)}
                quality={85}
              />
            )}
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hovered ? 0 : 20,
                  opacity: hovered ? 1 : 0
                }}
                className="text-white text-center"
              >
                <motion.div
                  animate={{ rotate: hovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Maximize2 className="w-12 h-12 mx-auto mb-2" />
                </motion.div>
                <p className="text-base font-semibold">View Full Size</p>
                <p className="text-xs text-white/70 mt-1">Click to expand</p>
              </motion.div>
            </motion.div>

            {/* Expand Icon */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
            >
              <Maximize2 className="w-5 h-5 text-gray-900 dark:text-white" />
            </motion.div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
}

export default function CreativeImageGallery({ images, heroImage }: CreativeImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="space-y-20 relative" ref={containerRef}>
      {/* Hero Image with Parallax */}
      <motion.div
        style={{ y }}
        className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        onClick={() => handleImageClick(heroImage)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        <Image
          src={heroImage}
          alt="App Hero Screenshot"
          fill
          className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
          priority
          sizes="100vw"
          quality={75}
          fetchPriority="high"
        />
        <div className="absolute inset-0 z-20 flex items-end p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h3 className="text-3xl font-bold mb-2">Complete App Experience</h3>
            <p className="text-white/80">Dashboard, Logs, and Profile in one view</p>
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            handleImageClick(heroImage);
          }}
          className="absolute top-4 right-4 z-30 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </motion.button>
      </motion.div>

      {/* Enhanced Screenshots Section */}
      <div className="relative">
        {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6 text-purple-500" />
              <span className="text-sm font-semibold text-purple-500 dark:text-purple-400 uppercase tracking-wider">
                Explore Every Screen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
              All Screenshots
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover every feature and screen of ZeninX. Click on any screenshot to view it in full detail.
            </p>
          </div>

        {/* Enhanced Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {images.map((image, index) => (
            <ScrollImage 
              key={index} 
              image={image} 
              index={index}
              onImageClick={handleImageClick}
              label={screenLabels[index] || `Screen ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* Full Screen Modal - Fixed */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition bg-black/70 backdrop-blur-md rounded-full p-3 shadow-xl"
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Full size screenshot"
                  width={800}
                  height={1600}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
