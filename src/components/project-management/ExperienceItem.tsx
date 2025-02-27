
import { motion } from "framer-motion";

export interface ExperienceItemProps {
  title: string;
  items: string[];
}

const ExperienceItem = ({ title, items }: ExperienceItemProps) => (
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

export default ExperienceItem;
