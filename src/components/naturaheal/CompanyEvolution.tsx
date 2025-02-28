
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
  return <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="font-semibold mb-4 text-5xl text-[#07c51e]">
            Company Evolution
          </h2>
          <p className="text-xl text-gray-600/90 max-w-2xl mx-auto">
            The transformation journey at NaturaHeal, marking key milestones in operational efficiency and digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {evolutionSteps.map((step, index) => <motion.div key={step.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }}>
              <Card className="p-6 backdrop-blur-xl bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="mb-2 text-[#47c600] font-bold">{step.date}</p>
                <h3 className="text-xl font-semibold text-gray-900/90 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600/90 text-sm">
                  {step.description}
                </p>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default CompanyEvolution;
