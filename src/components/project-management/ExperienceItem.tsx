import { motion } from "framer-motion";
import { fadeIn, listContainer, listItem } from "@/lib/animation";
import { glassMorphism, colors } from "@/lib/design-tokens";
export interface ExperienceItemProps {
  title: string;
  items: string[];
}
const ExperienceItem = ({
  title,
  items
}: ExperienceItemProps) => <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{
  once: true
}} className={`${glassMorphism.light.background} ${glassMorphism.light.blur} rounded-2xl p-8 shadow-sm ${glassMorphism.light.border} hover:shadow-md transition-all duration-300`}>
    <h2 className="font-semibold text-3xl my-[17px] text-sky-500">
      {title}
    </h2>
    
    <motion.div variants={listContainer} initial="hidden" animate="visible" className="space-y-5 text-gray-700">
      {items.map((item, index) => <motion.div key={index} variants={listItem} className="flex items-start gap-3">
          <span className={`inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[${colors.primary.blue}]/10 text-[${colors.primary.blue}]`}>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-base leading-relaxed">{item}</p>
        </motion.div>)}
    </motion.div>
  </motion.div>;
export default ExperienceItem;