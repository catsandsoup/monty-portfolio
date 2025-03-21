
/**
 * Animation Performance Monitor
 * 
 * A specialized utility for monitoring animation performance specifically.
 * This helps identify which animations might be causing performance issues.
 */

interface AnimationPerformanceInfo {
  componentName: string;
  startTime: number;
  duration?: number;
  frameDrops: number;
  isActive: boolean;
}

// Track all active animations
const activeAnimations: Record<string, AnimationPerformanceInfo> = {};

// Performance thresholds
const FRAME_DROP_THRESHOLD = 16.7; // 60fps
const JANK_THRESHOLD = 100; // ms for severe jank

// Enable in development or when explicitly enabled
const isEnabled = () => 
  import.meta.env.DEV || 
  (typeof localStorage !== 'undefined' && localStorage.getItem('enableAnimationPerfMonitor') === 'true');

/**
 * Start tracking a specific animation
 */
export const trackAnimation = (componentName: string, animationId: string = 'default') => {
  if (!isEnabled()) return () => {};
  
  const key = `${componentName}:${animationId}`;
  
  // Already being tracked
  if (activeAnimations[key]) {
    return () => {};
  }
  
  console.log(`[Animation Perf] Starting to track: ${key}`);
  
  const info: AnimationPerformanceInfo = {
    componentName,
    startTime: performance.now(),
    frameDrops: 0,
    isActive: true
  };
  
  activeAnimations[key] = info;
  
  // Last frame time to track dropped frames
  let lastFrameTime = performance.now();
  
  // rAF loop to track performance
  const trackFrame = () => {
    if (!activeAnimations[key] || !activeAnimations[key].isActive) return;
    
    const now = performance.now();
    const frameDuration = now - lastFrameTime;
    
    // Check for dropped frames
    if (frameDuration > FRAME_DROP_THRESHOLD) {
      activeAnimations[key].frameDrops++;
      
      // Log serious performance issues
      if (frameDuration > JANK_THRESHOLD) {
        console.warn(`[Animation Perf] Severe jank in ${key}: ${frameDuration.toFixed(1)}ms`);
      }
    }
    
    lastFrameTime = now;
    requestAnimationFrame(trackFrame);
  };
  
  requestAnimationFrame(trackFrame);
  
  // Return a cleanup function
  return () => {
    if (activeAnimations[key]) {
      activeAnimations[key].isActive = false;
      activeAnimations[key].duration = performance.now() - activeAnimations[key].startTime;
      
      console.log(`[Animation Perf] Animation complete: ${key}`);
      console.log(`  - Duration: ${activeAnimations[key].duration?.toFixed(1)}ms`);
      console.log(`  - Dropped frames: ${activeAnimations[key].frameDrops}`);
      
      if (activeAnimations[key].frameDrops > 5) {
        console.warn(`[Animation Perf] Consider optimizing: ${key} (${activeAnimations[key].frameDrops} dropped frames)`);
      }
      
      delete activeAnimations[key];
    }
  };
};

/**
 * Get a performance report for all tracked animations
 */
export const getAnimationPerformanceReport = () => {
  return Object.entries(activeAnimations).map(([key, info]) => ({
    id: key,
    ...info,
    currentDuration: info.isActive ? performance.now() - info.startTime : info.duration
  }));
};

/**
 * Toggle the animation performance monitor
 */
export const toggleAnimationPerformanceMonitor = (enable = true) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('enableAnimationPerfMonitor', enable ? 'true' : 'false');
    console.log(`[Animation Perf] Monitor ${enable ? 'enabled' : 'disabled'}`);
  }
};

/**
 * Performance-optimized animation variants for Framer Motion
 */
export const optimizedAnimationConfig = {
  // Force hardware acceleration
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0 }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // Optimized curve
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  // Apply for smoother list animations
  staggerContainer: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  },
  staggerItem: {
    hidden: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.1 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }
};

// Helper to add animation performance monitoring to components
export const withAnimationPerformanceTracking = (
  Component: React.ComponentType<any>,
  componentName: string
) => {
  return (props: any) => {
    const trackingId = React.useId();
    
    React.useEffect(() => {
      const cleanup = trackAnimation(componentName, trackingId);
      return cleanup;
    }, [trackingId]);
    
    return <Component {...props} />;
  };
};
