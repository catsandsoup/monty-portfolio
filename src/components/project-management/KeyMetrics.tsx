import { motion } from "framer-motion";
import { Building2, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";
interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay?: number;
}
const MetricCard = ({
  icon,
  title,
  value,
  description,
  delay = 0
}: MetricCardProps) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.6,
  delay
}}>
    <Card className="relative overflow-hidden backdrop-blur-xl bg-white/90 border-0 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <div className="mb-4 opacity-100">
        {icon}
      </div>
      <h3 className="mb-3 text-gray-900/90 text-2xl font-semibold">
        {title}
      </h3>
      <p className="text-4xl font-bold text-[#00a5ee] mb-4">{value}</p>
      <p className="text-gray-600/90">{description}</p>
    </Card>
  </motion.div>;
const KeyMetrics = () => {
  const metrics = [{
    icon: <Building2 className="h-8 w-8 text-[#00a5ee] bg-slate-50" />,
    title: "Digital Transformation",
    value: "200%",
    description: "Improvement in client satisfaction after implementing virtual tour software"
  }, {
    icon: <LineChart className="h-8 w-8 text-[#00a5ee]" />,
    title: "Client Experience",
    value: "50%",
    description: "Reduction in client decision time through implementation of VR visualisation platform"
  }];
  return <section className="py-24 px-6 bg-white/[0.31]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => <MetricCard key={metric.title} {...metric} delay={index * 0.2} />)}
        </div>
      </div>
    </section>;
};
export default KeyMetrics;