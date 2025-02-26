import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Upload, Shield, LayoutDashboard } from "lucide-react";

const products = {
  'pathology-pro': {
    name: 'Pathology Pro',
    tagline: 'Modern Health Metrics Tracking, Simplified',
    description: 'A sophisticated web application designed to provide intuitive tracking and visualization of blood test results over time.',
    heroColor: 'bg-gradient-to-br from-[#00a5ee]/5 to-blue-50',
    accentColor: 'text-[#00a5ee]',
    buttonColor: 'bg-[#00a5ee] hover:bg-[#0094d6]',
    icon: <Activity className="text-[#00a5ee]" />,
    features: [
      {
        title: 'File Upload',
        description: 'Easily import blood test results from Excel (.xlsx, .xls) or CSV files',
        icon: <Upload />
      },
      {
        title: 'Data Privacy',
        description: 'All processing happens locally in your browser - no files are stored on servers',
        icon: <Shield />
      },
      {
        title: 'Interactive Dashboard',
        description: 'View your health metrics with beautiful charts and trend indicators',
        icon: <LayoutDashboard />
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'XLSX']
  },
  'think-twice': {
    name: 'Think Twice',
    tagline: 'Develop Critical Thinking Skills for the Modern World',
    description: 'A comprehensive digital platform designed to strengthen critical thinking capabilities through structured learning paths and engaging challenges.',
    heroColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    accentColor: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    icon: <Activity className="text-purple-600" />,
    features: [
      {
        title: 'Interactive Learning Journeys',
        description: 'Progress through carefully designed learning paths that gradually build your critical thinking capabilities',
        icon: <Upload />
      },
      {
        title: 'Diverse Challenge Types',
        description: 'Argument Analysis, Word Selection Exercises, Matching Challenges, and more',
        icon: <Shield />
      },
      {
        title: 'Progress Tracking',
        description: 'Monitor your advancement with XP rewards and achievement badges',
        icon: <LayoutDashboard />
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite']
  },
  'puchi': {
    name: 'Puchi',
    tagline: 'Cultivate Your Love Story in the Digital Age',
    description: 'An elegantly designed iOS application that enables couples to document, celebrate, and preserve their unique relationship journey.',
    heroColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
    accentColor: 'text-rose-500',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: <Activity className="text-rose-500" />,
    features: [
      {
        title: 'Digital Love Journal',
        description: 'Create and save personalized love notes with photos to capture special moments',
        icon: <Upload />
      },
      {
        title: 'Personalized Experience',
        description: 'Customizable partner profile with photo and personal welcome flow',
        icon: <Shield />
      },
      {
        title: 'Smart Organization',
        description: 'Chronological history of all love notes with smooth transitions between sections',
        icon: <LayoutDashboard />
      }
    ],
    techStack: ['SwiftUI', 'MVVM', 'UserDefaults', 'PhotosUI', 'iOS']
  }
};

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState('pathology-pro');
  const activeProductData = products[activeProduct];

  return (
    <div className="min-h-screen">
      {/* Product Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4 md:px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            {activeProductData.icon}
            <span className="text-xl font-medium text-gray-900">{activeProductData.name}</span>
          </motion.div>
          
          <div className="flex space-x-1 md:space-x-4">
            {Object.keys(products).map(key => (
              <button 
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeProduct === key 
                    ? `${products[key].accentColor} bg-gray-50` 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {products[key].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Product Content */}
      <motion.div
        key={activeProduct}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className={`${activeProductData.heroColor} py-16 md:py-24`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center mb-4"
                >
                  <span className="mr-2">{activeProductData.icon}</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{activeProductData.name}</h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xl md:text-2xl font-medium mb-6 ${activeProductData.accentColor}`}
                >
                  {activeProductData.tagline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 text-lg mb-8 max-w-xl"
                >
                  {activeProductData.description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Key Features
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {activeProductData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`p-3 mb-4 rounded-lg inline-block ${activeProductData.heroColor}`}>
                    <span className={activeProductData.accentColor}>
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Built With
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {activeProductData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full ${activeProductData.heroColor} ${activeProductData.accentColor} font-medium`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductShowcase;
