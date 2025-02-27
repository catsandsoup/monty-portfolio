import { motion } from "framer-motion";
import { Code2, Database, Layout, GitBranch, Brain, LineChart, Users, Settings } from "lucide-react";
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
  return;
};
export default SkillsMatrix;