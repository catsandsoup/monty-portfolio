
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,165,238,0.05)_0,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(0,165,238,0.1)_0,transparent_50%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a5ee]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00a5ee]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 mt-8 md:mt-0"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#00a5ee]/20 shadow-[0_0_60px_-15px_rgba(0,165,238,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/monty-profile.png"
                alt="Monty Giovenco"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600"
          >
            Hi, I'm Monty Giovenco
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-16"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed">
              Product & Business Strategist crafting digital experiences that drive impact.<br className="hidden sm:block"/>
              Specializing in transforming visions into scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/experience"
                className="group flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-[#00a5ee] rounded-full hover:bg-[#0094d6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 text-lg font-medium text-[#00a5ee] border-2 border-[#00a5ee] rounded-full hover:bg-[#00a5ee]/5 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
