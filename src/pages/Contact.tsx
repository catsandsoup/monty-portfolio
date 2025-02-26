
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
        <div className="max-w-lg">
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
