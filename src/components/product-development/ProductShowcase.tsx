
import React from 'react';
import { Activity, Code2, Heart } from 'lucide-react';

const products = [
  {
    id: 'pathology-pro',
    name: 'Pathology Pro',
    tagline: 'Modern Health Metrics Tracking, Simplified',
    description: 'A sophisticated web application designed to provide intuitive tracking and visualization of blood test results over time.',
    accentColor: 'text-[#00a5ee]',
    bgColor: 'bg-[#00a5ee]/5',
    borderColor: 'border-[#00a5ee]/20',
    icon: <Activity className="text-[#00a5ee]" />,
    features: [
      'File Upload: Import blood test results from Excel or CSV files',
      'Data Privacy: All processing happens locally in your browser',
      'Interactive Dashboard: View health metrics with beautiful charts'
    ]
  },
  {
    id: 'think-twice',
    name: 'Think Twice',
    tagline: 'Develop Critical Thinking Skills for the Modern World',
    description: 'A comprehensive digital platform designed to strengthen critical thinking capabilities through structured learning paths and engaging challenges.',
    accentColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: <Code2 className="text-purple-600" />,
    features: [
      'Interactive Learning Journeys: Progress through carefully designed learning paths',
      'Diverse Challenge Types: Argument analysis, word selection exercises, and more',
      'Progress Tracking: Monitor advancement with XP rewards and achievement badges'
    ]
  },
  {
    id: 'puchi',
    name: 'Puchi',
    tagline: 'Cultivate Your Love Story in the Digital Age',
    description: 'An elegantly designed iOS application that enables couples to document, celebrate, and preserve their unique relationship journey.',
    accentColor: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    icon: <Heart className="text-rose-500" />,
    features: [
      'Digital Love Journal: Create and save personalized love notes with photos',
      'Personalized Experience: Customizable partner profile with photo',
      'Smart Organization: Chronological history of all love notes'
    ]
  }
];

const ProductShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className={`${product.bgColor} border ${product.borderColor} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-xl`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="mr-2">{product.icon}</span>
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
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
