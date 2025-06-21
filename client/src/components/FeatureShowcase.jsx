import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function FeatureShowcase({
  title,
  description,
  feature,
  imageUrl,
  imageAlt,
  imagePosition,
  isMobile = false
}) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  return (
    <motion.section 
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a0a0a] via-black to-[#1a1a1a] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      {/* Dynamic background elements that change based on image position */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-80 h-80 bg-gradient-to-r from-[#ff5722]/8 to-purple-500/4 rounded-full blur-3xl animate-pulse ${
          imagePosition === 'left' ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'
        }`}></div>
        <div className={`absolute w-64 h-64 bg-gradient-to-l from-blue-500/6 to-indigo-500/3 rounded-full blur-3xl animate-pulse delay-1000 ${
          imagePosition === 'left' ? 'bottom-1/3 left-1/3' : 'top-1/3 right-1/3'
        }`}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff5722]/3 to-transparent rounded-full blur-3xl opacity-20"></div>
      </div>      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center w-full">
          {/* Content Section */}
          <div className={`${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'} w-full`}>
            <motion.div
              initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center lg:text-left w-full"
            >              <div className="inline-block bg-[#ff5722] text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold mb-4 sm:mb-6 md:mb-8">
                {feature}
              </div>              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight break-words text-white">
                {title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10 break-words">
                {description}
              </p>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1.5 bg-gradient-to-r from-[#ff5722] to-[#ff7043] rounded-full shadow-lg shadow-[#ff5722]/30 mx-auto lg:mx-0"></div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className={`${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'} w-full`}>
            <motion.div
              initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full">
                <img 
                  src={imageUrl}
                  alt={imageAlt}
                  className={`w-full h-auto transition-transform duration-700 hover:scale-110 object-cover ${
                    isMobile ? 'max-w-xs sm:max-w-sm md:max-w-md mx-auto' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5722]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Elements - repositioned to stay within bounds */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#ff5722]/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/5 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
