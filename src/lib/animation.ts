
import { Variants } from "framer-motion";

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

// Card animations
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.3,
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.02, 
    y: -5, 
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    } 
  }
};

// Staggered list item animations
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// Section animations for scroll-triggered animations
export const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// Icon animations
export const iconAnimation = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

// Utility function for delay-based animations
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
