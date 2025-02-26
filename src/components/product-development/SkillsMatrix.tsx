
import { motion } from "framer-motion";
import { Code2, Database, Layout, GitBranch, Brain, LineChart, Users, Settings } from "lucide-react";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skills: Skill[] = [
  {
    category: "Product Strategy",
    icon: <Brain className="w-6 h-6 text-[#00a5ee]" />,
    skills: [
      "Product Strategy",
      "Product Research & Roadmapping",
      "User Experience & Journey Mapping",
      "Market & Competitive Analysis",
      "Business Model Optimization",
      "Product-Market Fit Analysis",
      "Feature Prioritization",
      "Customer Experience Strategy",
      "Product Launch Planning"
    ]
  },
  {
    category: "Project Leadership",
    icon: <Users className="w-6 h-6 text-[#00a5ee]" />,
    skills: [
      "Project Leadership",
      "Agile & Scrum Methodologies",
      "Cross-functional Team Leadership",
      "Stakeholder Management",
      "Risk Assessment & Mitigation",
      "Resource Planning & Allocation",
      "Process Optimization",
      "Documentation & Knowledge Base",
      "Timeline & Milestone Management"
    ]
  },
  {
    category: "Business Analysis",
    icon: <LineChart className="w-6 h-6 text-[#00a5ee]" />,
    skills: [
      "Business Analysis",
      "Data-Driven Decision Making",
      "KPI Definition & Tracking",
      "Market Research & Insights",
      "Business Requirements Gathering",
      "Cost-Benefit Analysis",
      "Performance Metrics",
      "Revenue Modeling",
      "Customer Behavior Analysis"
    ]
  },
  {
    category: "Technical Expertise",
    icon: <Settings className="w-6 h-6 text-[#00a5ee]" />,
    skills: [
      "Technical Expertise",
      "Frontend Development (React)",
      "AI & Automation Integration",
      "Database Architecture",
      "Version Control (Git)",
      "API Implementation",
      "System Architecture",
      "Technical Documentation",
      "Development Pipeline Optimization"
    ]
  }
];

const SkillsMatrix = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and development expertise
            across various domains and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#00a5ee]/5 text-[#00a5ee] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMatrix;
