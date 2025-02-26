
import { motion } from "framer-motion";
import { Book, Palette, PhoneCall, Star } from "lucide-react";
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
      icon: <Book className="h-8 w-8" />,
      title: "Book Publication",
      value: "2024",
      description: "Release of 'Aged Like Wine', exploring the science of aging"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Artworks Created",
      value: "50+",
      description: "Original pieces across various mediums and styles"
    },
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Phone Case Designs",
      value: "20+",
      description: "Unique phone case designs in circulation"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Rating",
      value: "4.8",
      description: "Average rating across all creative products"
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
