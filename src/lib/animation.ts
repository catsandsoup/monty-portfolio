
import { Variants } from "framer-motion";

// Optimized fade animations with reduced motion
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance for better performance
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Reduced from 0.6
      delay,
      ease: [0.25, 0.1, 0.25, 1], // Optimized bezier curve
    },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.98 }, // Reduced scale for better performance
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5, // Reduced from 0.8
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Card animations with minimal motion
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.2, // Reduced from 0.3
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.01, // Reduced from 1.02
    y: -3, // Reduced from -5
    transition: { 
      duration: 0.2, // Reduced from 0.3
      ease: "easeOut" 
    } 
  }
};

// Optimized staggered list animations
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1
      when: "beforeChildren", // Load container before children for better perceived performance
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -5 }, // Reduced distance for better performance
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3, // Reduced from 0.4
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Optimized section animations
export const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 20 }, // Reduced from 30
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Reduced from 0.8
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Simplified icon animations
export const iconAnimation = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, // Reduced from 1.1
    transition: {
      type: "spring", 
      stiffness: 300, // Reduced from 400
      damping: 10 
    }
  }
};

// Performance-focused delayed animation utility
export const createDelayedAnimation = (baseAnimation: Variants, delay: number): Variants => {
  return {
    ...baseAnimation,
    visible: {
      ...baseAnimation.visible,
      transition: {
        ...(typeof baseAnimation.visible === 'object' && baseAnimation.visible.transition),
        delay
      }
    }
  };
};

// Performance configuration for Framer Motion
export const performanceConfig = {
  // Prevents animations while scrolling to reduce jank
  useLayoutEffect: true,
  
  // Default animation configuration
  transition: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  },
  
  // Configuration for viewport-based animations
  viewport: {
    once: true,           // Only animate once
    amount: 0.2,          // Trigger when 20% of element is visible
    margin: "-20px 0px",  // Margin for detection area
  }
};
