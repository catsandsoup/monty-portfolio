
import React from 'react';
import { products } from './data/products';
import ProductCard from './ProductCard';

const ProductShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
