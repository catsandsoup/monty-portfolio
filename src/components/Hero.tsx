
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm Monty Giovenco
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8">
            Product & Business Strategist | Turning Insights into Scalable Digital Solutions
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/portfolio"
              className="bg-[#00a5ee] text-white px-8 py-3 rounded-full hover:bg-[#0094d6] transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#00a5ee] text-[#00a5ee] px-8 py-3 rounded-full hover:bg-[#00a5ee]/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
