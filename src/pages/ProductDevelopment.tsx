
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import ProductShowcase from "@/components/product-development/ProductShowcase";
import SkillsMatrix from "@/components/product-development/SkillsMatrix";
import Footer from "@/components/Footer";

const ProductDevelopment = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute left-6 top-6 z-50">
        <BackButton />
      </div>
      
      {/* Hero Section */}
      <div className="relative h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#00a5ee]/5 to-transparent">
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
              Product Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Crafting innovative digital experiences that solve real-world problems through 
              user-centered design and cutting-edge technology
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Summary */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">Professional Summary</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a Product Development leader with over a decade of experience, I specialize in 
              translating complex business requirements into elegant technical solutions. My approach 
              combines deep technical expertise with strategic business acumen, ensuring that every 
              product not only meets immediate needs but scales for future growth. From concept to 
              deployment, I pride myself on delivering innovative solutions that drive meaningful 
              impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Project Showcase */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of innovative applications and platforms that showcase my approach 
              to solving complex problems through technology
            </p>
          </motion.div>
          <ProductShowcase />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDevelopment;
