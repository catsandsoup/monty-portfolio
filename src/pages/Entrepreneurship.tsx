
import { motion } from "framer-motion";
import Hero from "@/components/entrepreneurship/Hero";
import KeyMetrics from "@/components/entrepreneurship/KeyMetrics";
import ProjectSections from "@/components/entrepreneurship/ProjectSections";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Entrepreneurship = () => {
  return (
    <>
      <Helmet>
        <title>Entrepreneurship | Monty Giovenco</title>
        <meta name="description" content="Explore Monty Giovenco's entrepreneurial ventures and achievements. Building and scaling successful ventures through strategic vision and market insights." />
      </Helmet>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Hero />
          <KeyMetrics />
          <ProjectSections />
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Entrepreneurship;
