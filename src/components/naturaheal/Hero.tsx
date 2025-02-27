
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-[#4CAF50]/5 to-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                NaturaHeal
              </h1>
              <a 
                href="https://www.naturaheal.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4CAF50] hover:text-[#8BC34A] transition-colors"
              >
                <span>www.naturaheal.com.au</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xl text-gray-600/90 max-w-3xl leading-relaxed">
                Led business transformation initiatives at NaturaHeal, implementing modern inventory management systems
                and developing comprehensive business strategies that enhanced operational efficiency and market presence.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img 
              src="/lovable-uploads/8aed83be-6ae8-4fb4-a313-f8d8cc5b1f9b.png"
              alt="NaturaHeal Logo"
              className="w-48 h-48 object-contain"
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
