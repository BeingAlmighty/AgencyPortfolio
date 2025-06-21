import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function VideoShowcase({ title, description, videoUrl, videoThumbnail }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  return (    <motion.section 
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">        <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-[#ff5722] text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-4 sm:mb-6 md:mb-8"
          >
            Product Demo
          </motion.div>          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white break-words px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>        <motion.div 
          className="relative max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl bg-gray-900 w-full">
            <div className="aspect-video relative w-full">
              <iframe
                src={videoUrl}
                title="Project Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-12 md:mt-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-[#ff5722] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 break-words px-4">
            Watch how our solution transforms business operations
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
