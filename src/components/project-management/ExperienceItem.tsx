
import { motion } from "framer-motion";

export interface ExperienceItemProps {
  title: string;
  items: string[];
}

const ExperienceItem = ({ title, items }: ExperienceItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-300"
  >
    <h2 className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00a5ee] to-[#0078d4]">{title}</h2>
    <div className="space-y-5 text-gray-700">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#00a5ee]/10 text-[#00a5ee]">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-base leading-relaxed">{item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ExperienceItem;
