import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectHeader() {  return (
    <motion.header 
      className="relative z-50 py-6 md:py-8 lg:py-10 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">          <Link to="/" className="flex items-center group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Solve</span>              <span className="text-[#ff5722]">xx</span>
            </div>
          </Link>
          <Link 
            to="/"
            className="text-base sm:text-lg md:text-xl text-[#ff5722] hover:text-white transition-colors duration-300 font-bold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
