import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectSections = () => {
  return <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        {/* Book Section */}
        <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <Card className="p-8 hover:shadow-lg transition-all">
              <h2 className="text-3xl font-medium mb-6 text-gray-900/90">Aged Like Wine</h2>
              <div className="space-y-6 text-gray-600/90">
                <AspectRatio ratio={3 / 4} className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img src="/lovable-uploads/49eb2a2d-7ee7-42f0-a7e0-ae839e1e26dc.png" alt="Aged Like Wine Book Cover" className="object-cover w-full h-full" />
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

        {/* Art & Design */}
        <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <Card className="p-8 hover:shadow-lg transition-all overflow-hidden">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-4xl font-medium tracking-tight text-gray-900/90">Art & Design</h2>
                  <p className="text-lg text-gray-500">A journey from inspiration to creation</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  My creative journey began in late 2022, born from a desire to find art that truly resonated with my vision. Unable to find pieces that captured my aesthetic in retail stores, I embarked on creating my own digital artworks, leading to a collection that bridges personal expression with modern design.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/9a36a514-92e1-4f6e-9d8e-69d04b73129b.png" 
                        alt="Teal and Gold Marble Phone Case" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                      />
                    </AspectRatio>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/98fcd713-d584-4fcb-a746-ef6831d20fc7.png" 
                        alt="Ocean Blue Marble Phone Case" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                      />
                    </AspectRatio>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/003444f5-f50a-41fc-927a-cc98868d5c36.png" 
                        alt="Black and Gold Marble Phone Case" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                      />
                    </AspectRatio>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/b92c3a34-ef65-421b-9d25-997ee63dab2a.png" 
                        alt="Beige Marble Phone Case" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                      />
                    </AspectRatio>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        alt="Digital Artwork Sample" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                        src="/lovable-uploads/1d9d49fd-e9e6-427f-9b9f-674bf0cf103f.jpg" 
                      />
                    </AspectRatio>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative"
                  >
                    <AspectRatio ratio={1} className="bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        alt="Abstract Art Piece" 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                        src="/lovable-uploads/0c252223-0b9d-41ca-87b2-752554f26788.png" 
                      />
                    </AspectRatio>
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-2xl font-medium mb-6 text-gray-900/90">Creative Portfolio</h3>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    <div className="space-y-1">
                      <p className="text-3xl font-medium text-gray-900">10</p>
                      <p className="text-sm text-gray-500">Original Digital Artworks</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-medium text-gray-900">5</p>
                      <p className="text-sm text-gray-500">Unique Phone Cases</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-medium text-gray-900">5.0</p>
                      <p className="text-sm text-gray-500">Customer Rating</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-medium text-gray-900">Limited</p>
                      <p className="text-sm text-gray-500">Edition Collections</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
      </div>
    </div>
  </section>;
};

export default ProjectSections;
