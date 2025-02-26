
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Project Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Led the digital transformation and brand evolution of House of Manuela to HomeVR, 
            orchestrating comprehensive project management and business leadership initiatives
            that resulted in 200% growth in online sales.
          </p>
        </motion.div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-pink-100/20 to-blue-100/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
