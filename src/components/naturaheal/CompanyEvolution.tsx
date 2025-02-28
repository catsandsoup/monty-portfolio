
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { glassMorphism } from "@/lib/design-tokens";

const CompanyEvolution = () => {
  const evolutionSteps = [{
    title: "Joined NaturaHeal",
    description: "Began self-led comprehensive analysis of existing business processes to identify of key areas of improvement.",
    date: "2023 Q4"
  }, {
    title: "Social Media Content Development",
    description: "Design and trial of comprehensive social media strategy.",
    date: "2024 Q1"
  }, {
    title: "Scope Discovery Phase",
    description: "Exploration of business development opportunities through manufacturing partnerships and branding strategies.",
    date: "2024 Q2"
  }, {
    title: "Analysis Refinement",
    description: "Creation of modernisation roadmap focusing on inventory management, cloud bookings, staff scheduling systems as part of a broader business modernisation initiative.",
    date: "2024 Q2"
  }, {
    title: "Initial Implementation",
    description: "Rollout of improved inventory management systems and digital tools for administration efficiency.",
    date: "2024 Q3"
  }];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/90">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="mb-6 text-gray-900/90 text-5xl font-semibold">
          Company Evolution
        </h2>
        <p className="text-xl text-gray-600/90 max-w-3xl mx-auto">
          Guided NaturaHeal through a comprehensive business transformation, enhancing operational efficiency and market presence.
        </p>
      </motion.div>

      <div className="container mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {evolutionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${glassMorphism.light.background} ${glassMorphism.light.blur} rounded-2xl p-8 shadow-sm border border-gray-100/30`}
              >
                <div className="text-sm font-medium text-green-600 mb-2">{step.date}</div>
                <h3 className="text-2xl font-medium mb-3 text-gradient-green">{step.title}</h3>
                <p className="text-gray-600/90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyEvolution;
