
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
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
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Project Manager, Product Developer & Entrepreneur
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/portfolio"
              className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent/10 transition-colors"
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
