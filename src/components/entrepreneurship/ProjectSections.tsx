
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ProjectSections = () => {
  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Public Speaking Leadership */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Bathurst Agora Young Speakers</h2>
              <div className="space-y-4 text-gray-600/90">
                <p>Co-founded and served as president of Bathurst Agora Young Speakers, formerly affiliated with Toastmasters International. Led initiatives to develop public speaking and leadership skills among young professionals.</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Established and grew the organization from ground up</li>
                  <li>Designed comprehensive speaking curriculum</li>
                  <li>Mentored members in public speaking development</li>
                  <li>Organized and moderated regular speaking events</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Book Project */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">'Aged like Wine' - Book Project</h2>
              <div className="space-y-4 text-gray-600/90">
                <p>A science-backed guide exploring the impact of lifestyle choices on aging, revealing how up to 90% of visible aging stems from daily habits rather than genetics.</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Research-driven insights into aging factors</li>
                  <li>Practical strategies for maintaining youthful skin</li>
                  <li>Analysis of UV exposure impact on collagen</li>
                  <li>Cost-effective anti-aging solutions</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Art Business */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Art Business Venture</h2>
              <div className="space-y-4 text-gray-600/90">
                <p>Launched a creative business venture in 2023, designing and selling custom phone cases featuring original artwork. Combining artistic expression with practical product design.</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Created original artwork for product designs</li>
                  <li>Developed product line of custom phone cases</li>
                  <li>Established e-commerce presence</li>
                  <li>Managed production and fulfillment processes</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSections;
