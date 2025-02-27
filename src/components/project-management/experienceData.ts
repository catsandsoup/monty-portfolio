
export interface ExperienceSectionData {
  title: string;
  items: string[];
}

export interface ExperienceSectionsData {
  [key: string]: ExperienceSectionData;
}

const experienceData: ExperienceSectionsData = {
  architecturalVisualization: {
    title: "Real Estate Visualisation",
    items: [
      "Pioneered development of real estate visualisation services, creating panoramic and VR tours for off-the-plan properties",
      "Led development of white-label SaaS solutions for real estate agencies & builders, including ready-to-deploy templates",
      "Built adaptive hosting & licensing model to enable easy deployment and scalability",
      "Optimised 3D rendering pipeline with AI-driven texture generation, improving efficiency by 30%",
      "Managed the complete lifecycle of visualisation projects from receiving architect blueprints to delivering final renders"
    ]
  },
  technology: {
    title: "Technology Implementation",
    items: [
      "Managed full technology stack including infrastructure, documentation, and visualisation software",
      "Oversaw workstation and networking equipment procurement, installation, and support",
      "Created comprehensive internal/external documentation in written and video formats",
      "Directed the implementation of QNAP network storage solution and database migration",
      "Planned and executed the transition between various visualisation software platforms"
    ]
  },
  business: {
    title: "Strategic Business Leadership",
    items: [
      "Conducted quarterly competitor analysis, pricing adjustments, and strategic product recommendations",
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
      "Developed comprehensive branding packages combining visualisation with digital marketing",
      "Created white-labelled hosting solutions for client virtual tours",
      "Enhanced 3DVista tours with custom features using HTML, CSS, and JavaScript",
      "Established pricing structures for new service offerings"
    ]
  }
};

export default experienceData;
