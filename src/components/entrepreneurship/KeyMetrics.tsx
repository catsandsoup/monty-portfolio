
import { motion } from "framer-motion";
import { Briefcase, LineChart, Users, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay?: number;
}

const MetricCard = ({ icon, title, value, description, delay = 0 }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Card className="relative overflow-hidden backdrop-blur-xl bg-white/90 border-0 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <div className="mb-4 text-[#00a5ee]">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-3 text-gray-900/90">
        {title}
      </h3>
      <p className="text-4xl font-bold text-[#00a5ee] mb-4">{value}</p>
      <p className="text-gray-600/90">{description}</p>
    </Card>
  </motion.div>
);

const KeyMetrics = () => {
  const metrics = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology Leadership",
      value: "30%",
      description: "Improved service scalability through AI-driven optimization in visualization pipeline"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Project Success",
      value: "$1M+",
      description: "Contributed to achieving sales targets through strategic implementations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Leadership",
      value: "2020-2024",
      description: "Led cross-functional teams in healthcare technology and startup operations"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Product Development",
      value: "2",
      description: "Innovative products launched: PathologyPro and ThinkTwice platforms"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={metric.title}
              {...metric}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
