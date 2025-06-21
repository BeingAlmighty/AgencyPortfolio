import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function ProjectHero({ title, subtitle, description }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  return (
    <motion.section 
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 text-center bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black overflow-hidden min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#ff5722]/10 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-500/8 to-indigo-500/4 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff5722]/5 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full relative z-10">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block bg-[#ff5722] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-6 sm:mb-8 md:mb-12"
        >
          {subtitle}
        </motion.div>        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 sm:mb-8 md:mb-12 leading-tight px-2 break-words w-full">
          <span className="text-white">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
          </span>
          <span className="text-[#ff5722]">
            {title.split(' ').slice(-1)}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto px-4 break-words w-full">
          {description}
        </p>
        
        <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1.5 bg-[#ff5722] rounded-full mx-auto"></div>
      </div>
    </motion.section>
  );
}
