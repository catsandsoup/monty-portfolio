
import { motion } from "framer-motion";
import Hero from "@/components/entrepreneurship/Hero";
import KeyMetrics from "@/components/entrepreneurship/KeyMetrics";
import ProjectSections from "@/components/entrepreneurship/ProjectSections";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { sectionAnimation } from "@/lib/animation";
import { colors } from "@/lib/design-tokens";

const Entrepreneurship = () => {
  return (
    <>
      <Helmet>
        <title>Entrepreneurship | Monty Giovenco</title>
        <meta name="description" content="Explore Monty Giovenco's entrepreneurial ventures and achievements. Building and scaling successful ventures through strategic vision and market insights." />
      </Helmet>
      <div className={`relative min-h-screen ${colors.gradients.grayFade} overflow-hidden`}>
        <motion.div
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
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
