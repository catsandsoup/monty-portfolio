
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
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
}: MetricCardProps) => (
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
    <Card className="relative overflow-hidden backdrop-blur-xl bg-white/90 border-0 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-3 text-gray-900/90">
        {title}
      </h3>
      <p className="text-4xl font-bold mb-4 text-[#47c600]">{value}</p>
      <p className="text-[17px] leading-relaxed text-gray-600/90">{description}</p>
    </Card>
  </motion.div>
);

const KeyMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#4CAF50]" />,
      title: "Operational Efficiency",
      value: "35%",
      description: "Improvement in inventory turnover through modernized management systems"
    },
    {
      icon: <Users className="h-8 w-8 text-[#4CAF50]" />,
      title: "Customer Engagement",
      value: "50%",
      description: "Increase in social media engagement through targeted marketing campaigns"
    }
  ];

  return (
    <section className="px-6 py-[64px]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.title} {...metric} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
