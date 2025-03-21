
import { motion } from "framer-motion";
import VideoEmbed from "./VideoEmbed";

interface EvolutionStageProps {
  title: string;
  description: string;
  isRight?: boolean;
  delay?: number;
}

const EvolutionStage = ({
  title,
  description,
  isRight = false,
  delay = 0
}: EvolutionStageProps) => (
  <motion.div 
    initial={{
      opacity: 0,
      x: isRight ? 20 : -20
    }} 
    whileInView={{
      opacity: 1,
      x: 0
    }} 
    viewport={{
      once: true
    }} 
    transition={{
      duration: 0.6,
      delay
    }} 
    className={`${isRight ? 'md:pl-12' : 'text-right md:pr-12'}`}
  >
    <h3 className="text-2xl mb-4 text-gray-900/90 font-semibold">{title}</h3>
    <p className="text-gray-600/90">{description}</p>
  </motion.div>
);

const CompanyEvolutionSection = () => {
  return (
    <section className="bg-white/80 backdrop-blur-xl py-[34px]">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          transition={{
            duration: 0.8
          }} 
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900/90 font-semibold text-5xl">Company Evolution</h2>
          <p className="text-lg text-gray-600/90 max-w-2xl mx-auto">
            Transformed a traditional architectural visualisation business into a technology-driven real estate solutions provider
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00a5ee]/20 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EvolutionStage 
              title="House of Manuela" 
              description="Traditional architectural visualisation studio focused on static renderings and basic 3D modelling" 
            />
            <EvolutionStage 
              title="HomeVR" 
              description="Innovative digital platform providing immersive VR experiences and comprehensive real estate visualisation solutions" 
              isRight 
              delay={0.3} 
            />
          </div>
        </div>

        {/* HomeVR Brand Launch Video */}
        <VideoEmbed 
          videoId="d-hsgpV4dLQ" 
          title="HomeVR Brand Launch Video" 
          caption="HomeVR Brand Launch Video"
        />
      </div>
    </section>
  );
};

export default CompanyEvolutionSection;
