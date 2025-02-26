
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="min-h-screen pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Portfolio content will be added here */}
          <div className="text-gray-600">Coming soon...</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
