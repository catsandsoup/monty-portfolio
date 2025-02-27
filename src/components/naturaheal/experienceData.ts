
export interface ExperienceSectionData {
  title: string;
  items: string[];
}

export interface ExperienceSectionsData {
  [key: string]: ExperienceSectionData;
}

const experienceData: ExperienceSectionsData = {
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

export default experienceData;
