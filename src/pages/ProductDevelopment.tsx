
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import ProductShowcase from "@/components/product-development/ProductShowcase";

const ProductDevelopment = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute left-6 top-6 z-50">
        <BackButton />
      </div>
      
      {/* Header Section */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#00a5ee] shadow-xl mb-8">
              <img
                src="/monty-profile.png"
                alt="Monty Giovenco"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Product Development
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              A collection of innovative applications built with modern technologies, 
              focusing on user experience and technical excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <ProductShowcase />
    </div>
  );
};

export default ProductDevelopment;
