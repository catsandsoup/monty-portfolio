
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import experienceData from "./experienceData";

const ExperienceSections = () => {
  return (
    <section className="px-6 bg-white/90 backdrop-blur-xl py-[50px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
          <div className="space-y-10 md:space-y-12">
            <ExperienceItem {...experienceData.businessAnalysis} />
            <ExperienceItem {...experienceData.marketing} />
          </div>
          <div className="space-y-10 md:space-y-12">
            <ExperienceItem {...experienceData.operations} />
            <ExperienceItem {...experienceData.technology} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSections;
