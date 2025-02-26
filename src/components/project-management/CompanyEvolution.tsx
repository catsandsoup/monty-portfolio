import { motion } from "framer-motion";

interface EvolutionStageProps {
  title: string;
  description: string;
  isRight?: boolean;
  delay?: number;
}

const EvolutionStage = ({ title, description, isRight = false, delay = 0 }: EvolutionStageProps) => (
  <motion.div
    initial={{ opacity: 0, x: isRight ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`${isRight ? 'md:pl-12' : 'text-right md:pr-12'}`}
  >
    <h3 className="text-2xl font-medium mb-4 text-gray-900/90">{title}</h3>
    <p className="text-gray-600/90">{description}</p>
  </motion.div>
);

const CompanyEvolution = () => {
  return (
    <>
      <section className="py-12 px-6 bg-gradient-to-b from-gray-50/90 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/d-hsgpV4dLQ"
              title="Project Management Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/90">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium mb-6 text-gray-900/90">
            Company Evolution
          </h2>
          <p className="text-xl text-gray-600/90 max-w-3xl mx-auto">
            Instrumental in transforming a traditional architectural visualization business 
            into a technology-driven real estate solutions provider.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00a5ee]/20 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EvolutionStage
              title="House of Manuela"
              description="Traditional architectural visualization studio focused on static renderings and basic 3D modeling"
            />
            <EvolutionStage
              title="HomeVR"
              description="Innovative digital platform providing immersive VR experiences and comprehensive real estate visualization solutions"
              isRight
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyEvolution;
