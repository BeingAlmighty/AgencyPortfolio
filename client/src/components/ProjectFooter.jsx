import { motion } from "framer-motion";

export default function ProjectFooter() {
  return (
    <motion.footer 
      className="py-12 md:py-16 lg:py-20 text-center bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Solve</span>
            <span className="text-[#ff5722]">xx</span>
          </div>
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          AI-Powered Digital Innovation Agency
        </div>
      </div>
    </motion.footer>
  );
}
