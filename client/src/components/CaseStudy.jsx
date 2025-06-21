import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function CaseStudy({ stats, quote, author }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  return (
    <motion.section 
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#ff5722]/8 to-purple-500/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/6 to-indigo-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff5722]/5 to-transparent rounded-full blur-3xl opacity-25"></div>
      </div>      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 md:mb-12 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Transforming Business Intelligence for 
            </span>
            <span className="bg-gradient-to-r from-[#ff5722] via-[#ff7043] to-[#ff8a65] bg-clip-text text-transparent">
              {' '}Fortune 500
            </span>
          </h2>          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 my-12 sm:my-16 md:my-20">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#ff5722] via-[#ff7043] to-[#ff8a65] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-12 px-4 max-w-6xl mx-auto">
            "{quote}"
          </blockquote>          
          <div className="text-base sm:text-lg md:text-xl">
            <div className="font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{author.name}</div>
            <div className="text-gray-300">{author.title}</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
