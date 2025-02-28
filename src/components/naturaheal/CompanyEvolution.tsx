
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { glassMorphism } from "@/lib/design-tokens";

const CompanyEvolution = () => {
  const evolutionSteps = [{
    title: "Initial Assessment",
    description: "Comprehensive analysis of existing business processes and identification of key areas for improvement.",
    date: "2023 Q1"
  }, {
    title: "Strategy Development",
    description: "Creation of modernisation roadmap focusing on inventory management and digital transformation.",
    date: "2023 Q2"
  }, {
    title: "Implementation Phase",
    description: "Rollout of new inventory management systems and digital tools for operational efficiency.",
    date: "2023 Q3"
  }, {
    title: "Digital Marketing Launch",
    description: "Implementation of comprehensive social media strategy and customer engagement initiatives.",
    date: "2023 Q4"
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
