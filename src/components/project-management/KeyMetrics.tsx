
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

const MetricCard = ({ icon, title, value, description, delay = 0 }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Card className="relative overflow-hidden backdrop-blur-md bg-white/80 border-0 shadow-lg p-8">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-4xl font-bold text-accent mb-4">{value}</p>
      <p className="text-gray-600">{description}</p>
    </Card>
  </motion.div>
);

const KeyMetrics = () => {
  const metrics = [
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: "Digital Transformation",
      value: "200%",
      description: "Growth in online sales through strategic digital initiatives and platform optimization"
    },
    {
      icon: <LineChart className="h-8 w-8 text-accent" />,
      title: "Client Experience",
      value: "40%",
      description: "Reduction in client decision time through implementation of VR visualization platform"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
