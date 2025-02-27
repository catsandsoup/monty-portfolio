
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-[#4CAF50]/5 to-white/90 backdrop-blur-xl overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Content Column - 65% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-8"
          >
            <div className="flex flex-col gap-8 max-w-full">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                  Business Leadership
                </h1>
                <p className="text-xl md:text-2xl text-gray-900/80 font-medium leading-relaxed tracking-tight">
                  Business Transformation &amp; Digital Innovation
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600/90 leading-relaxed tracking-normal">
                Led business transformation initiatives at NaturaHeal Bathurst, designed modern inventory management implementations and developed comprehensive business strategies that enhanced operational efficiency and market presence.
              </p>

              <a
                href="https://www.naturaheal.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4CAF50] hover:text-[#8BC34A] transition-colors text-lg font-medium"
              >
                <span className="text-xl">www.naturaheal.com.au</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Logo Column - 35% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-4 flex justify-center md:justify-end"
          >
            <img
              src="/lovable-uploads/8aed83be-6ae8-4fb4-a313-f8d8cc5b1f9b.png"
              alt="NaturaHeal Logo"
              className="w-48 md:w-full max-w-[280px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/10 to-[#8BC34A]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#4CAF50]/10 to-[#8BC34A]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
