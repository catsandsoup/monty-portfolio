
import { Variants } from 'framer-motion';

// Common configuration for all animations
const baseTransition = {
  type: 'tween', // Using tween instead of spring for more predictable performance
  ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve for smooth easing
  duration: 0.5, // Slightly shorter duration for better performance
};

// Configuration specifically for list animations
const staggerConfig = {
  staggerChildren: 0.05, // Reduced stagger timing
  delayChildren: 0.1,
};

// Optimized variants
export const optimizedFadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: 10,
    transition: baseTransition,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

export const optimizedFadeInScale: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.98, // Less dramatic scale for better performance
    transition: baseTransition,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
};

// Optimized list container - uses passive transforms for better performance
export const optimizedListContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...baseTransition,
      ...staggerConfig,
    },
  },
};

export const optimizedListItem: Variants = {
  hidden: { 
    opacity: 0,
    x: -5, // Reduced distance for better performance
    transition: baseTransition,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

// Shared optimized component animations
export const optimizedAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-10% 0px" }, // Reduced margin for better performance
  transition: baseTransition,
};

// Efficiently animate card elements with reduced motion
export const optimizedCardHover = {
  rest: { 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.2, // Faster transition
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.01, // Smaller scale change for better performance
    y: -3, // Smaller movement for better performance
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    } 
  }
};

// Helper function to convert framer motion props to CSS equivalents
// Use these for non-interactive animations instead of motion components
export const getCssFromVariants = (variant: any) => {
  // Extract values to use in CSS
  return {
    opacity: variant.opacity || 1,
    transform: `translateY(${variant.y || 0}px) translateX(${variant.x || 0}px) scale(${variant.scale || 1})`,
    transition: `all ${baseTransition.duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
  };
};
