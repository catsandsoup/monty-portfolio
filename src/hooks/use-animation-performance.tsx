
import { useEffect, useRef } from 'react';

interface PerformanceOptions {
  // Will-change CSS property helps browser optimize animations
  enableWillChange?: boolean;
  // Force hardware acceleration where appropriate
  forceHardwareAcceleration?: boolean;
  // Debug mode to show information about animations
  debug?: boolean;
}

/**
 * Hook to optimize animation performance on elements
 */
export function useAnimationPerformance<T extends HTMLElement>(
  options: PerformanceOptions = {
    enableWillChange: true,
    forceHardwareAcceleration: true,
    debug: false,
  }
) {
  const ref = useRef<T>(null);
  const { enableWillChange, forceHardwareAcceleration, debug } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (debug) {
      console.log('[Animation Perf] Optimizing element:', element);
    }

    // Save original styles to restore later
    const originalTransform = element.style.transform;
    const originalWillChange = element.style.willChange;

    // Apply performance optimizations
    if (enableWillChange) {
      element.style.willChange = 'transform, opacity';
    }

    if (forceHardwareAcceleration) {
      // Force GPU acceleration with a null transform if no transform exists
      if (!originalTransform) {
        element.style.transform = 'translateZ(0)';
      }
    }

    return () => {
      // Restore original styles when component unmounts
      if (enableWillChange) {
        element.style.willChange = originalWillChange;
      }

      if (forceHardwareAcceleration && !originalTransform) {
        element.style.transform = originalTransform;
      }
    };
  }, [enableWillChange, forceHardwareAcceleration, debug]);

  return ref;
}
