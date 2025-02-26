
import { motion } from "framer-motion";
import Hero from "@/components/entrepreneurship/Hero";
import KeyMetrics from "@/components/entrepreneurship/KeyMetrics";
import ProjectSections from "@/components/entrepreneurship/ProjectSections";
import Footer from "@/components/Footer";

const Entrepreneurship = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <KeyMetrics />
        <ProjectSections />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Entrepreneurship;
