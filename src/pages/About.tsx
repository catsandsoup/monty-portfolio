
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
