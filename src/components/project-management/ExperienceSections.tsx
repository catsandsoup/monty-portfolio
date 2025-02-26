
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

const ExperienceSection = ({ title, items }: ExperienceSectionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-medium mb-8 text-gray-900/90">{title}</h2>
    <div className="space-y-4 text-gray-600/90">
      {items.map((item, index) => (
        <p key={index}>• {item}</p>
      ))}
    </div>
  </motion.div>
);

const ExperienceSections = () => {
  const sections: ExperienceSectionsData = {
    architecturalVisualization: {
      title: "Architectural Visualization Management",
      items: [
        "Managed the complete lifecycle of visualization projects from receiving architect blueprints to delivering final renders",
        "Coordinated timelines and resources for multiple concurrent visualization projects",
        "Established quality control processes for all architectural renderings and visualizations",
        "Scheduled and prioritized projects to meet client deadlines"
      ]
    },
    technology: {
      title: "Technology Implementation",
      items: [
        "Led the implementation of 3DVista panoramic tour technology from research to client deployment",
        "Managed the procurement, assembly, and installation of new workstations and technology infrastructure",
        "Directed the implementation of QNAP network storage solution and database migration",
        "Planned and executed the transition between various visualization software platforms"
      ]
    },
    business: {
      title: "Strategic Business Leadership",
      items: [
        "Conducted regular technology assessments and developed upgrade roadmaps",
        "Performed cost-benefit analysis for technology investments",
        "Researched competitor service offerings, pricing, and market positioning",
        "Developed strategic recommendations for service differentiation",
        "Monitored industry trends and emerging technologies for potential implementation"
      ]
    },
    brandEvolution: {
      title: "Brand Evolution & Digital Transformation",
      items: [
        "Led the strategic rebranding initiative from House of Manuela to HomeVR",
        "Developed comprehensive branding packages combining visualization with digital marketing",
        "Created white-labeled hosting solutions for client virtual tours",
        "Enhanced 3DVista tours with custom features using HTML, CSS, and JavaScript",
        "Established pricing structures for new service offerings"
      ]
    }
  };

  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
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
    </section>
  );
};

export default ExperienceSections;
