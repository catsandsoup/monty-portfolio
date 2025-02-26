
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#00a5ee]/5 to-transparent">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#00a5ee] shadow-xl mb-8">
          <img
            src="/monty-profile.png"
            alt="Monty Giovenco"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Entrepreneurial Ventures
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            From co-founding a speakers club to authoring a book on aging science and launching an art business, 
            exploring diverse paths of value creation and personal growth.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
