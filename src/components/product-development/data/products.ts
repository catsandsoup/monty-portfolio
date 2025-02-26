
import { Activity, Code2, Heart } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  icon: JSX.Element;
  features: string[];
};

export const products: Product[] = [
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
