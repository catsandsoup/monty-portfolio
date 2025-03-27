
/**
 * Animation Performance Monitor
 * 
 * A utility for tracking and diagnosing animation performance issues.
 * Creates a global window.__PERFORMANCE_MONITOR for debugging in the console.
 * 
 * Usage:
 * 
 * 1. Import in component: 
 *    import { trackAnimation } from "@/lib/animation-performance-monitor";
 * 
 * 2. Add to your component:
 *    useEffect(() => {
 *      const cleanup = trackAnimation("ComponentName", "animationName");
 *      return cleanup;
 *    }, []);
 * 
 * 3. Check performance in console:
 *    window.__PERFORMANCE_MONITOR.getMetrics()
 */

interface AnimationMetrics {
  fps: number[];
  avgFps: number;
  minFps: number;
  maxFps: number;
  drops: number;
  severeFps: number; // FPS below threshold
  duration: number;
  startTime: number;
  endTime: number | null;
  status: 'running' | 'completed' | 'error';
  errorCount: number;
  errors: string[];
}

interface AnimationRecord {
  id: string;
  component: string;
  name: string;
  metrics: AnimationMetrics;
}

type MetricsSummary = {
  totalAnimations: number;
  runningAnimations: number;
  completedAnimations: number;
  errorAnimations: number;
  avgFps: number;
  totalFrameDrops: number;
  totalSevereFrameDrops: number;
  worstPerformer: string | null;
  bestPerformer: string | null;
}

interface PerformanceMonitor {
  animations: Record<string, AnimationRecord>;
  isActive: boolean;
  fpsThreshold: number;
  severeThreshold: number;
  maxRecordings: number;
  
  // Methods
  startTracking: (component: string, name: string) => string;
  stopTracking: (id: string) => void;
  getMetrics: () => MetricsSummary;
  getAnimationData: (id: string) => AnimationRecord | null;
  resetAll: () => void;
  setOptions: (options: Partial<{
    fpsThreshold: number;
    severeThreshold: number;
    maxRecordings: number;
  }>) => void;
}

// Default option values
const DEFAULT_FPS_THRESHOLD = 50; // Below this is considered a frame drop
const DEFAULT_SEVERE_THRESHOLD = 30; // Below this is considered a severe frame drop
const DEFAULT_MAX_RECORDINGS = 50; // Maximum number of animations to track

// Initialize the performance monitor
const initPerformanceMonitor = (): PerformanceMonitor => {
  // Animation records store
  const animations: Record<string, AnimationRecord> = {};
  let isActive = true;
  
  // Configuration
  let fpsThreshold = DEFAULT_FPS_THRESHOLD;
  let severeThreshold = DEFAULT_SEVERE_THRESHOLD;
  let maxRecordings = DEFAULT_MAX_RECORDINGS;
  
  // Animation tracking
  const startTracking = (component: string, name: string): string => {
    // Skip if inactive
    if (!isActive) return '';
    
    // Clean up old recordings if we hit the limit
    const recordingCount = Object.keys(animations).length;
    if (recordingCount >= maxRecordings) {
      // Find and remove the oldest completed animation
      const oldestId = Object.keys(animations)
        .filter(id => animations[id].metrics.status === 'completed')
        .sort((a, b) => (animations[a].metrics.endTime || 0) - (animations[b].metrics.endTime || 0))[0];
      
      if (oldestId) {
        delete animations[oldestId];
      }
    }
    
    // Generate a unique ID
    const id = `${component}_${name}_${Date.now()}`;
    
    // Initialize metrics
    animations[id] = {
      id,
      component,
      name,
      metrics: {
        fps: [],
        avgFps: 0,
        minFps: Infinity,
        maxFps: 0,
        drops: 0,
        severeFps: 0,
        duration: 0,
        startTime: performance.now(),
        endTime: null,
        status: 'running',
        errorCount: 0,
        errors: []
      }
    };
    
    // Initial variables for FPS calculation
    let lastTimestamp = performance.now();
    let frames = 0;
    
    // Start the FPS sampling
    const calculateFps = (timestamp: number) => {
      if (!animations[id] || animations[id].metrics.status !== 'running') {
        return;
      }
      
      frames++;
      
      // Calculate FPS every ~1 second
      const elapsed = timestamp - lastTimestamp;
      if (elapsed >= 1000) {
        const currentFps = Math.round((frames * 1000) / elapsed);
        const metrics = animations[id].metrics;
        
        // Store this sample
        metrics.fps.push(currentFps);
        
        // Update min/max
        metrics.minFps = Math.min(metrics.minFps, currentFps);
        metrics.maxFps = Math.max(metrics.maxFps, currentFps);
        
        // Count drops
        if (currentFps < fpsThreshold) {
          metrics.drops++;
        }
        
        // Count severe drops
        if (currentFps < severeThreshold) {
          metrics.severeFps++;
        }
        
        // Calculate running average
        const sum = metrics.fps.reduce((acc, val) => acc + val, 0);
        metrics.avgFps = Math.round(sum / metrics.fps.length);
        
        // Update duration
        metrics.duration = (timestamp - metrics.startTime) / 1000;
        
        // Reset for next sample
        lastTimestamp = timestamp;
        frames = 0;
      }
      
      // Continue sampling
      requestAnimationFrame(calculateFps);
    };
    
    // Start sampling
    requestAnimationFrame(calculateFps);
    
    return id;
  };
  
  // Stop tracking an animation
  const stopTracking = (id: string): void => {
    // Skip if the animation doesn't exist
    if (!animations[id]) return;
    
    // Update status and end time
    animations[id].metrics.status = 'completed';
    animations[id].metrics.endTime = performance.now();
    animations[id].metrics.duration = 
      (animations[id].metrics.endTime - animations[id].metrics.startTime) / 1000;
      
    console.log(
      `%c[Animation Perf] ${animations[id].component}:${animations[id].name} - ` +
      `${animations[id].metrics.avgFps}fps, ${animations[id].metrics.drops} drops, ` +
      `${animations[id].metrics.duration.toFixed(2)}s`,
      animations[id].metrics.avgFps < fpsThreshold 
        ? 'color: #f97316;' 
        : 'color: #22c55e;'
    );
  };
  
  // Generate a summary of all metrics
  const getMetrics = (): MetricsSummary => {
    const allAnimations = Object.values(animations);
    const runningAnimations = allAnimations.filter(a => a.metrics.status === 'running');
    const completedAnimations = allAnimations.filter(a => a.metrics.status === 'completed');
    const errorAnimations = allAnimations.filter(a => a.metrics.status === 'error');
    
    // Calculate overall average FPS
    const totalFps = allAnimations.reduce((sum, anim) => sum + anim.metrics.avgFps, 0);
    const avgFps = allAnimations.length ? Math.round(totalFps / allAnimations.length) : 0;
    
    // Calculate total frame drops
    const totalFrameDrops = allAnimations.reduce((sum, anim) => sum + anim.metrics.drops, 0);
    const totalSevereFrameDrops = allAnimations.reduce((sum, anim) => sum + anim.metrics.severeFps, 0);
    
    // Find worst and best performers
    let worstPerformer: AnimationRecord | null = null;
    let bestPerformer: AnimationRecord | null = null;
    
    allAnimations.forEach(anim => {
      if (!worstPerformer || anim.metrics.avgFps < worstPerformer.metrics.avgFps) {
        worstPerformer = anim;
      }
      if (!bestPerformer || anim.metrics.avgFps > bestPerformer.metrics.avgFps) {
        bestPerformer = anim;
      }
    });
    
    return {
      totalAnimations: allAnimations.length,
      runningAnimations: runningAnimations.length,
      completedAnimations: completedAnimations.length,
      errorAnimations: errorAnimations.length,
      avgFps,
      totalFrameDrops,
      totalSevereFrameDrops,
      worstPerformer: worstPerformer ? `${worstPerformer.component}:${worstPerformer.name} (${worstPerformer.metrics.avgFps}fps)` : null,
      bestPerformer: bestPerformer ? `${bestPerformer.component}:${bestPerformer.name} (${bestPerformer.metrics.avgFps}fps)` : null
    };
  };
  
  // Get data for a specific animation
  const getAnimationData = (id: string): AnimationRecord | null => {
    return animations[id] || null;
  };
  
  // Reset all recorded animations
  const resetAll = (): void => {
    Object.keys(animations).forEach(id => {
      if (animations[id].metrics.status === 'running') {
        animations[id].metrics.status = 'completed';
        animations[id].metrics.endTime = performance.now();
      }
    });
    
    // Clear all animations
    Object.keys(animations).forEach(id => delete animations[id]);
  };
  
  // Update options
  const setOptions = (options: Partial<{
    fpsThreshold: number;
    severeThreshold: number;
    maxRecordings: number;
  }>) => {
    if (options.fpsThreshold !== undefined) fpsThreshold = options.fpsThreshold;
    if (options.severeThreshold !== undefined) severeThreshold = options.severeThreshold;
    if (options.maxRecordings !== undefined) maxRecordings = options.maxRecordings;
  };
  
  // Return the performance monitor interface
  return {
    animations,
    isActive,
    fpsThreshold,
    severeThreshold,
    maxRecordings,
    startTracking,
    stopTracking,
    getMetrics,
    getAnimationData,
    resetAll,
    setOptions
  };
};

// Check if window exists (for SSR compatibility)
const isBrowser = typeof window !== 'undefined';

// Initialize global monitor
if (isBrowser) {
  if (!window.__PERFORMANCE_MONITOR) {
    window.__PERFORMANCE_MONITOR = initPerformanceMonitor();
    
    // Log initialization
    console.log(
      "%c[Animation Performance Monitor] Initialized. Access with window.__PERFORMANCE_MONITOR",
      "color: #3b82f6; font-weight: bold;"
    );
  }
}

/**
 * Track an animation's performance
 * @param component The component name
 * @param name The animation name
 * @returns A cleanup function to stop tracking
 */
export const trackAnimation = (component: string, name: string): () => void => {
  // Skip if not in browser
  if (!isBrowser || !window.__PERFORMANCE_MONITOR) {
    return () => {};
  }
  
  try {
    // Start tracking
    const id = window.__PERFORMANCE_MONITOR.startTracking(component, name);
    
    // Return cleanup function
    return () => {
      if (id && window.__PERFORMANCE_MONITOR) {
        try {
          window.__PERFORMANCE_MONITOR.stopTracking(id);
        } catch (e) {
          console.warn('[Animation Perf] Failed to stop tracking:', e);
        }
      }
    };
  } catch (e) {
    console.warn('[Animation Perf] Failed to start tracking:', e);
    return () => {};
  }
};

// Add TypeScript type definition for the global object
declare global {
  interface Window {
    __PERFORMANCE_MONITOR: PerformanceMonitor;
  }
}
