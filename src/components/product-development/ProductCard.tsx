
import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import type { Product } from './data/products';
import { fadeIn, iconAnimation } from '@/lib/animation';
import { colors, glassMorphism, combineClasses } from '@/lib/design-tokens';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const IconComponent = product.Icon;
  
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative"
    >
      <div 
        className={combineClasses(
          product.bgColor,
          `border ${product.borderColor} rounded-2xl overflow-hidden shadow-sm`,
          glassMorphism.light.blur,
          "transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1"
        )}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={iconAnimation}
            >
              <IconComponent className={`w-8 h-8 ${product.accentColor}`} />
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight className={`w-6 h-6 ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.span>
          </div>
          
          <h3 className={`text-2xl font-semibold text-${colors.neutral.gray900} mb-2`}>
            {product.name}
          </h3>
          <p className={`${product.accentColor} font-medium mb-4`}>
            {product.tagline}
          </p>
          <p className={`text-${colors.neutral.gray600} mb-8 text-sm leading-relaxed`}>
            {product.description}
          </p>
          
          <div className="space-y-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg className={`${product.accentColor} mt-1 flex-shrink-0 w-4 h-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className={`text-sm text-${colors.neutral.gray600}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`border-t ${product.borderColor} p-6 flex justify-between items-center`}>
          <div className="flex gap-3">
            {product.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 ${product.accentColor} bg-white/60 ${glassMorphism.medium.blur} rounded-full text-xs font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
          <button 
            className={`${product.accentColor} border ${product.borderColor} hover:bg-white/80 bg-white/60 ${glassMorphism.medium.blur} px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2`}
          >
            View Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
