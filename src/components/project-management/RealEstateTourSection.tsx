
import { motion } from "framer-motion";
import VideoEmbed from "./VideoEmbed";
import USPCardList from "./USPCardList";

const RealEstateTourSection = () => {
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
          <h2 className="mb-4 text-gray-900/90 font-semibold text-5xl">Interactive Real Estate Web Tours</h2>
          <p className="text-lg text-gray-600/90 max-w-2xl mx-auto">
            Comprehensive virtual tour solutions designed to enhance property showcase and client engagement
          </p>
        </motion.div>

        {/* Inserted Video in Apple-style frame */}
        <VideoEmbed
          videoId="bJ79Nb8uRWo"
          title="HomeVR Interactive Tours"
          caption="Experience our interactive real estate web tours"
        />

        <USPCardList />
      </div>
    </section>
  );
};

export default RealEstateTourSection;
