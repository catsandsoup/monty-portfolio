
import { motion } from "framer-motion";
import { Users, BookOpen, Palette } from "lucide-react";
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
      <div className="mb-4 opacity-10">
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
      icon: <Users className="h-8 w-8 text-[#00a5ee]" />,
      title: "Leadership Impact",
      value: "2022-2023",
      description: "Co-founded and led Bathurst Agora Young Speakers, fostering public speaking excellence"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#00a5ee]" />,
      title: "Book Project",
      value: "90%",
      description: "Of visible aging comes from lifestyle choices - the core insight driving 'Aged like Wine'"
    },
    {
      icon: <Palette className="h-8 w-8 text-[#00a5ee]" />,
      title: "Art Business",
      value: "2023",
      description: "Launched custom phone case business featuring original artwork designs"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
