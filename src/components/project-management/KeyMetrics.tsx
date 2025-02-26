
import { motion } from "framer-motion";
import { Building2, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const KeyMetrics = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden backdrop-blur-md bg-white/80 border-0 shadow-lg p-8">
              <div className="mb-4">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Digital Transformation
              </h3>
              <p className="text-4xl font-bold text-accent mb-4">200%</p>
              <p className="text-gray-600">
                Growth in online sales through strategic digital initiatives and platform optimization
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden backdrop-blur-md bg-white/80 border-0 shadow-lg p-8">
              <div className="mb-4">
                <LineChart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Client Experience
              </h3>
              <p className="text-4xl font-bold text-accent mb-4">40%</p>
              <p className="text-gray-600">
                Reduction in client decision time through implementation of VR visualization platform
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
