
export interface ExperienceSectionData {
  title: string;
  items: string[];
}

export interface ExperienceSectionsData {
  [key: string]: ExperienceSectionData;
}

const experienceData: ExperienceSectionsData = {
  businessAnalysis: {
    title: "Retail & Operational Leadership",
    items: [
      "Managed daily store operations, including stock control, sales, patient scheduling, and supplier coordination.",
      "Developed inventory management documentation to streamline ordering and reduce stock discrepancies.",
      "Independently handled staff timesheets, rostering, and team motivation during high-pressure periods.",
      "Resolved IT issues by liaising with third-party support and learning software mechanisms to address discrepancies quickly."
    ]
  },
  marketing: {
    title: "Customer Engagement & Health Outcomes",
    items: [
      "Provided tailored product recommendations, leading to measurable improvements in over 10 clients' autoimmune, metabolic, and mental health conditions.",
      "Used nutrition and physiology expertise to guide customers and staff on product usage, ensuring safe and effective supplementation.",
      "Conducted independent research on product pharmacology to identify suitable script refill alternatives while cross-referencing for contraindications."
    ]
  },
  operations: {
    title: "Business Strategy & Growth Planning",
    items: [
      "Identified operational inefficiencies and proposed digital tools such as app-based rostering, electronic shelf labels, and e-commerce integration.",
      "Conducted market research using census data and customer demographics to develop detailed customer personas.",
      "Created a business growth strategy outlining branding, marketing, and operational improvements, including white/private labelling for increased profitability.",
      "Presented strategic recommendations to the owner and business advisor, receiving high praise despite non-implementation."
    ]
  },
  technology: {
    title: "Entrepreneurial & Strategic Thinking",
    items: [
      "Balanced critical business functions while managing university studies, demonstrating resilience and time management under pressure.",
      "Proactively advised on modernising POS and CRM systems to improve operational efficiency and customer engagement.",
      "Led initiatives beyond core sales responsibilities, positioning the business for scalable growth and increased market competitiveness."
    ]
  }
};

export default experienceData;
