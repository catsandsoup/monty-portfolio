
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { phoneCaseGalleryItems } from "./gallery-config";

const ProjectSections = () => {
  return (
    <section className="py-32 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl space-y-24">
        {/* Book Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm">
            <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Aged Like Wine</h2>
            <div className="space-y-6 text-gray-600/90">
              <AspectRatio ratio={3/4} className="bg-gray-100 rounded-lg overflow-hidden mb-6 max-w-md mx-auto">
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

        {/* Phone Cases Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8"
        >
          <Card className="p-8 hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm">
            <h2 className="text-3xl font-medium mb-8 text-gray-900/90">Art & Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phoneCaseGalleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <AspectRatio ratio={3/4}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </AspectRatio>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSections;
