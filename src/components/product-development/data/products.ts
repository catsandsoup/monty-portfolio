
import { LucideIcon, Activity, Code2, Heart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  accentColor: string;
  bgColor: string;
  borderColor: string;
  Icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: 'pathology-pro',
    name: 'Pathology Pro',
    tagline: 'Modern Health Metrics Tracking, Simplified',
    description: 'An innovative web application that revolutionises how healthcare professionals and patients track and visualise blood test results over time, making health data more accessible and understandable.',
    features: [
      'Interactive visualisation of health metrics over time',
      'Automated report generation and analysis'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'TensorFlow'],
    accentColor: 'text-[#00a5ee]',
    bgColor: 'bg-[#00a5ee]/5',
    borderColor: 'border-[#00a5ee]/20',
    Icon: Activity
  },
  {
    id: 'think-twice',
    name: 'Think Twice',
    tagline: 'Develop Critical Thinking Skills for the Modern World',
    description: 'A comprehensive digital platform designed to strengthen critical thinking capabilities through structured learning paths and engaging challenges, preparing users for real-world decision making.',
    features: [
      'Real-world scenario simulations and case studies',
      'Progress tracking and skill assessment'
    ],
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'AI/ML'],
    accentColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    Icon: Code2
  },
  {
    id: 'puchi',
    name: 'Puchi',
    tagline: 'Cultivate Your Love Story in the Digital Age',
    description: 'An elegantly designed iOS application that enables couples to document, celebrate, and preserve their unique relationship journey through modern digital experiences.',
    features: [
      'Private, secure relationship timeline',
      'Custom relationship milestones and celebrations'
    ],
    technologies: ['Swift', 'Firebase', 'CoreML', 'Cloud Storage'],
    accentColor: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    Icon: Heart
  }
];
