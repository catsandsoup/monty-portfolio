
import React from 'react';
import type { Product } from './data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const IconComponent = product.Icon;
  
  return (
    <div 
      className={`${product.bgColor} border ${product.borderColor} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-xl`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <IconComponent className={product.accentColor} />
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        </div>
        <p className={`${product.accentColor} font-medium mb-3`}>{product.tagline}</p>
        <p className="text-gray-600 mb-6 text-sm">{product.description}</p>
        
        <div className="border-t border-gray-200/60 pt-4 mt-4">
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg className={`${product.accentColor} mt-1 mr-2 flex-shrink-0 w-4 h-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`border-t ${product.borderColor} px-6 py-3 flex justify-end`}>
        <button className={`${product.accentColor} border ${product.borderColor} hover:bg-white/80 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-medium transition-colors`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
