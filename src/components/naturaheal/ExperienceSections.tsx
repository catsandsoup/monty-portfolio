
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
    businessAnalysis: {
      title: "Business Analysis & Strategy",
      items: [
        "Conducted comprehensive business analysis to identify operational inefficiencies",
        "Developed modernization strategy focusing on digital transformation",
        "Implemented new inventory management systems to optimize stock control",
        "Created standard operating procedures for inventory management"
      ]
    },
    marketing: {
      title: "Marketing & Customer Engagement",
      items: [
        "Designed and executed social media marketing campaigns across multiple platforms",
        "Created engaging content to boost brand awareness and customer engagement",
        "Developed customer retention strategies through targeted communications",
        "Analyzed marketing metrics to optimize campaign performance"
      ]
    },
    operations: {
      title: "Operational Improvements",
      items: [
        "Streamlined inventory management processes reducing waste and improving efficiency",
        "Implemented digital tools for better stock tracking and management",
        "Established KPIs for measuring operational performance",
        "Trained staff on new systems and procedures"
      ]
    },
    technology: {
      title: "Technology Integration",
      items: [
        "Selected and implemented new inventory management software",
        "Integrated digital tools for improved operational efficiency",
        "Set up automated reporting systems for better business insights",
        "Created documentation for all new technical systems"
      ]
    }
  };

  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <div className="space-y-16">
            <ExperienceSection {...sections.businessAnalysis} />
            <ExperienceSection {...sections.marketing} />
          </div>
          <div className="space-y-16">
            <ExperienceSection {...sections.operations} />
            <ExperienceSection {...sections.technology} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSections;
