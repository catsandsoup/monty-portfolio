
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
                <AspectRatio ratio={3/4} className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src="/lovable-uploads/49eb2a2d-7ee7-42f0-a7e0-ae839e1e26dc.png"
                    alt="Aged Like Wine Book Cover"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="flex items-center gap-2 text-sm text-[#00a5ee]">
                  <span className="px-2 py-1 bg-[#00a5ee]/10 rounded-full">Draft Mode</span>
                  <span className="px-2 py-1 bg-[#00a5ee]/10 rounded-full">Started 2025</span>
                </div>
                <p className="text-lg leading-relaxed">
                  An insightful exploration into the science of aging and longevity, examining why some individuals age gracefully while others don't. This book breaks down complex research into accessible insights for readers passionate about understanding and optimizing their aging process.
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
                  <div className="space-y-4">
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src="/lovable-uploads/ec974142-e527-4cba-b7a6-fe7e25e5f6f1.png"
                        alt="Phone Case Design Sample"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#00a5ee]">Phone Cases</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-500">(5.0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src="/lovable-uploads/ec974142-e527-4cba-b7a6-fe7e25e5f6f1.png"
                        alt="Digital Artwork Sample"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#00a5ee]">Digital Art</span>
                      <span className="text-gray-500">10 Pieces</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Creative Portfolio</h3>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>10 original digital artworks</li>
                    <li>5 unique phone case designs</li>
                    <li>5-star customer satisfaction</li>
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
