import { Variants } from 'framer-motion';

// GPU-friendly animation config
const baseTransition = {
  type: 'tween', // Using tween instead of spring for more predictable performance
  ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve for smooth easing
  duration: 0.5, // Slightly shorter duration for better performance
};

// Performance-optimized configuration for staggered animations
const staggerConfig = {
  staggerChildren: 0.05, // Reduced stagger timing
  delayChildren: 0.1,
};

// Optimized variants with will-change hints
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
    }
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
  viewport: { 
    once: true, 
    margin: "-10% 0px", // Reduced margin for better performance
    amount: 0.1 // Only needs to see 10% of element to start animation
  },
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

// Animation utility to use with inline styles for will-change
export const getWillChangeProps = (properties: string[] = ['transform', 'opacity']) => ({
  style: {
    willChange: properties.join(', '),
    // Force hardware acceleration
    transform: 'translateZ(0)',
  }
});

// Helper function to get better CSS animations for non-interactive elements
export const getCssOptimizedAnimation = (variant: any) => {
  // Extract values to use in CSS
  return {
    opacity: variant.opacity || 1,
    transform: `translateY(${variant.y || 0}px) translateX(${variant.x || 0}px) scale(${variant.scale || 1}) translateZ(0)`,
    transition: `all ${baseTransition.duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
    willChange: 'transform, opacity',
  };
};

// Utility to determine if we should skip animations on low-end devices
export const shouldUseReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  
  // Check for low-end device indicators
  const isLowEndDevice = 
    // Low memory device
    'deviceMemory' in navigator && (navigator as any).deviceMemory < 4 ||
    // Low logical CPU cores
    navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

  return prefersReducedMotion || isLowEndDevice;
};

// React hook-friendly animation preset
export const getReducedAnimations = () => {
  if (shouldUseReducedMotion()) {
    // Provide minimal animations for accessibility/performance
    return {
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      },
      listContainer: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      listItem: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      // Other minimized animations...
    };
  }
  
  // Otherwise return full animations
  return {
    fadeIn: optimizedFadeIn,
    listContainer: optimizedListContainer,
    listItem: optimizedListItem,
    // Other full animations...
  };
};
