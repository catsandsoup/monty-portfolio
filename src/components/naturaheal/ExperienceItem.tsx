
import { motion } from "framer-motion";
import { glassMorphism } from "@/lib/design-tokens";

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
    className={`${glassMorphism.light.background} ${glassMorphism.light.blur} p-8 rounded-2xl shadow-sm border border-gray-100/30`}
  >
    <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gradient-green">{title}</h2>
    <div className="space-y-4 text-gray-600/90">
      {items.map((item, index) => (
        <p key={index} className="flex items-start">
          <span className="text-green-500 mr-2 text-xl leading-7">•</span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  </motion.div>
);

export default ExperienceItem;
