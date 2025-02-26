
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectSections = () => {
  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Book Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 hover:shadow-lg transition-all">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Aged Like Wine</h2>
              <div className="space-y-6 text-gray-600/90">
                <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src="/placeholder.svg"
                    alt="Aged Like Wine Book Cover"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-lg leading-relaxed">
                  A comprehensive exploration of aging science and longevity, breaking down complex research into accessible insights for readers passionate about understanding and optimizing their aging process.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Research-backed strategies for healthy aging</li>
                  <li>Practical lifestyle interventions</li>
                  <li>Latest developments in longevity science</li>
                  <li>Personal insights and experiences</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Art & Phone Cases Business */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 hover:shadow-lg transition-all">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Art & Design</h2>
              <div className="space-y-6 text-gray-600/90">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Artwork Sample 1"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Phone Case Design"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Creative Portfolio</h3>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>Original artwork and illustrations</li>
                    <li>Custom phone case designs</li>
                    <li>Digital and traditional mediums</li>
                    <li>Limited edition collections</li>
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
