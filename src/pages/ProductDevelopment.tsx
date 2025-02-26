
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import ProductShowcase from "@/components/product-development/ProductShowcase";

const ProductDevelopment = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute left-6 top-6 z-50">
        <BackButton />
      </div>
      
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 mb-8 flex justify-end pr-12"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#00a5ee] shadow-xl">
          <img
            src="/monty-profile.png"
            alt="Monty Giovenco"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <ProductShowcase />
    </div>
  );
};

export default ProductDevelopment;
