
import { motion } from "framer-motion";
import { Code2, Database, Layout, GitBranch, Brain, LineChart, Users, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skills: Skill[] = [{
  category: "Product Strategy",
  icon: <Brain className="w-6 h-6 text-[#00a5ee]" />,
  skills: ["Product Strategy", "Product Research & Roadmapping", "User Experience & Journey Mapping", "Market & Competitive Analysis", "Business Model Optimization", "Product-Market Fit Analysis", "Feature Prioritization", "Customer Experience Strategy", "Product Launch Planning"]
}, {
  category: "Project Leadership",
  icon: <Users className="w-6 h-6 text-[#00a5ee]" />,
  skills: ["Project Leadership", "Agile & Scrum Methodologies", "Cross-functional Team Leadership", "Stakeholder Management", "Risk Assessment & Mitigation", "Resource Planning & Allocation", "Process Optimization", "Documentation & Knowledge Base", "Timeline & Milestone Management"]
}, {
  category: "Business Analysis",
  icon: <LineChart className="w-6 h-6 text-[#00a5ee]" />,
  skills: ["Business Analysis", "Data-Driven Decision Making", "KPI Definition & Tracking", "Market Research & Insights", "Business Requirements Gathering", "Cost-Benefit Analysis", "Performance Metrics", "Revenue Modeling", "Customer Behavior Analysis"]
}, {
  category: "Technical Expertise",
  icon: <Settings className="w-6 h-6 text-[#00a5ee]" />,
  skills: ["Technical Expertise", "Frontend Development (React)", "AI & Automation Integration", "Database Architecture", "Version Control (Git)", "API Implementation", "System Architecture", "Technical Documentation", "Development Pipeline Optimization"]
}];

const SkillsMatrix = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Core Competencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging a diverse skill set to drive product innovation and deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-[#00a5ee]/10 mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.skills.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMatrix;
