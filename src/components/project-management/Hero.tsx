
import { motion } from "framer-motion";
import CompanyEvolutionSection from "./CompanyEvolutionSection";
import RealEstateTourSection from "./RealEstateTourSection";

const IntroSection = () => (
  <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-[#00a5ee]/5 to-white/90 backdrop-blur-xl">
    <div className="container mx-auto max-w-6xl px-6 pt-24">
      <motion.div 
        initial={{
          opacity: 0,
          y: 20
        }} 
        animate={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          duration: 0.8
        }} 
        className="mx-[29px]"
      >
        <h1 className="text-5xl mb-6 tracking-tight font-semibold md:text-6xl text-slate-950">
          Project Management
        </h1>
        <p className="text-xl text-gray-600/90 max-w-3xl leading-relaxed font-normal">
          Led the digital transformation and brand evolution of House of Manuela to HomeVR, 
          orchestrating comprehensive project management and business leadership initiatives
          that resulted in 200% growth in online sales.
        </p>
      </motion.div>
    </div>
    
    <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-[#00a5ee]/10 to-purple-100/10 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00a5ee]/10 to-blue-100/10 rounded-full blur-3xl -z-10" />
  </section>
);

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <IntroSection />
      <CompanyEvolutionSection />
      <RealEstateTourSection />
    </div>
  );
};

export default Hero;
