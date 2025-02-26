
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ProjectSections = () => {
  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Project Management */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Head of Technology</h2>
              <div className="space-y-4 text-gray-600/90">
                <p>Led technology initiatives at House of Manuela & HomeVR, driving innovation in real estate visualization and SaaS solutions.</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Developed white-label SaaS solutions for real estate agencies & builders</li>
                  <li>Optimized 3D rendering pipeline with AI-driven texture generation</li>
                  <li>Managed full technology stack and infrastructure</li>
                  <li>Led end-to-end product development lifecycle</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Product Development */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Product Portfolio</h2>
              <div className="space-y-4 text-gray-600/90">
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">PathologyPro</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Developed interactive dashboard for health data visualization</li>
                    <li>Conducted user research to inform feature roadmap</li>
                    <li>Implemented privacy-first architecture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">ThinkTwice</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Created education platform for critical thinking development</li>
                    <li>Designed evidence-based learning paths</li>
                    <li>Integrated gamification features for engagement</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSections;
