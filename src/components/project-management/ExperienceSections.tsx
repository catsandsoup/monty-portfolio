import { motion } from "framer-motion";
interface ExperienceSectionProps {
  title: string;
  items: string[];
}
interface ExperienceSectionsData {
  [key: string]: {
    title: string;
    items: string[];
  };
}
const ExperienceSection = ({
  title,
  items
}: ExperienceSectionProps) => <motion.div initial={{
  opacity: 0
}} whileInView={{
  opacity: 1
}} viewport={{
  once: true
}} transition={{
  duration: 0.6
}}>
    <h2 className="text-3xl font-medium mb-8 text-gray-900/90">{title}</h2>
    <div className="space-y-4 text-gray-600/90">
      {items.map((item, index) => <p key={index}>• {item}</p>)}
    </div>
  </motion.div>;
const ExperienceSections = () => {
  const sections: ExperienceSectionsData = {
    architecturalVisualization: {
      title: "Real Estate Visualisation",
      items: ["Pioneered development of real estate visualisation services, creating panoramic and VR tours for off-the-plan properties", "Led development of white-label SaaS solutions for real estate agencies & builders, including ready-to-deploy templates", "Built adaptive hosting & licensing model to enable easy deployment and scalability", "Optimised 3D rendering pipeline with AI-driven texture generation, improving efficiency by 30%", "Managed the complete lifecycle of visualisation projects from receiving architect blueprints to delivering final renders"]
    },
    technology: {
      title: "Technology Implementation",
      items: ["Managed full technology stack including infrastructure, documentation, and visualisation software", "Oversaw workstation and networking equipment procurement, installation, and support", "Created comprehensive internal/external documentation in written and video formats", "Directed the implementation of QNAP network storage solution and database migration", "Planned and executed the transition between various visualisation software platforms"]
    },
    business: {
      title: "Strategic Business Leadership",
      items: ["Conducted quarterly competitor analysis, pricing adjustments, and strategic product recommendations", "Performed cost-benefit analysis for technology investments", "Researched competitor service offerings, pricing, and market positioning", "Developed strategic recommendations for service differentiation", "Monitored industry trends and emerging technologies for potential implementation"]
    },
    brandEvolution: {
      title: "Brand Evolution & Digital Transformation",
      items: ["Led the strategic rebranding initiative from House of Manuela to HomeVR", "Developed comprehensive branding packages combining visualisation with digital marketing", "Created white-labelled hosting solutions for client virtual tours", "Enhanced 3DVista tours with custom features using HTML, CSS, and JavaScript", "Established pricing structures for new service offerings"]
    }
  };
  return <section className="px-6 backdrop-blur-xl py-[32px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <div className="space-y-16">
            <ExperienceSection {...sections.architecturalVisualization} />
            <ExperienceSection {...sections.technology} />
          </div>
          <div className="space-y-16">
            <ExperienceSection {...sections.business} />
            <ExperienceSection {...sections.brandEvolution} />
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSections;