
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const USPCard = ({
  icon,
  title,
  description,
  delay = 0
}: USPCardProps) => (
  <motion.div 
    initial={{
      opacity: 0,
      y: 20
    }} 
    whileInView={{
      opacity: 1,
      y: 0
    }} 
    viewport={{
      once: true
    }} 
    transition={{
      duration: 0.6,
      delay
    }}
  >
    <Card className="p-6 backdrop-blur-xl bg-white/80 border-0 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="mb-4 text-[#00a5ee]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900/90">{title}</h3>
      <p className="text-gray-600/90 text-sm leading-relaxed">{description}</p>
    </Card>
  </motion.div>
);

export default USPCard;
