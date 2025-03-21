
import { useRef, useEffect } from 'react';

interface GPUAnimationOptions {
  enableHardwareAcceleration?: boolean;
  enableWillChange?: boolean;
  reduceMotion?: boolean;
  debug?: boolean;
  optimizePaint?: boolean;
}

/**
 * A hook to apply GPU optimizations for smoother animations
 * 
 * - Forces hardware acceleration with transform3d or perspective
 * - Applies will-change for smoother transitions
 * - Respects reduced motion preferences
 * - Optimizes paint operations
 */
export function useGPUAnimation<T extends HTMLElement>(
  options: GPUAnimationOptions = {
    enableHardwareAcceleration: true,
    enableWillChange: true,
    reduceMotion: false,
    debug: false,
    optimizePaint: true
  }
) {
  const ref = useRef<T>(null);
  const {
    enableHardwareAcceleration,
    enableWillChange,
    reduceMotion,
    debug,
    optimizePaint
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Save original styles to restore later
    const originalTransform = element.style.transform;
    const originalWillChange = element.style.willChange;
    const originalCompositing = element.style.backfaceVisibility;

    if (debug) {
      console.log('[GPU Animation] Optimizing element:', element);
    }

    // Skip heavy optimizations if user prefers reduced motion
    const prefersReducedMotion = 
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || 
      reduceMotion;

    if (prefersReducedMotion && debug) {
      console.log('[GPU Animation] Respecting reduced motion preference');
    }

    // Apply performance optimizations
    if (enableWillChange && !prefersReducedMotion) {
      // Optimized for animations involving transforms and opacity
      element.style.willChange = 'transform, opacity';
    }

    if (enableHardwareAcceleration && !prefersReducedMotion) {
      // Force GPU acceleration with transform3d or perspective
      if (!originalTransform || !originalTransform.includes('3d')) {
        // Only add if not already present
        element.style.transform = originalTransform 
          ? `${originalTransform} translateZ(0)` 
          : 'translateZ(0)';
        
        // Adding perspective can help with certain 3D transformations
        element.style.perspective = '1000px';
      }
    }

    if (optimizePaint) {
      // Optimized compositing layers
      element.style.backfaceVisibility = 'hidden';
    }

    return () => {
      // Restore original styles when component unmounts
      if (enableWillChange) {
        element.style.willChange = originalWillChange;
      }

      if (enableHardwareAcceleration && !originalTransform.includes('3d')) {
        element.style.transform = originalTransform;
        element.style.perspective = '';
      }

      if (optimizePaint) {
        element.style.backfaceVisibility = originalCompositing;
      }
    };
  }, [
    enableHardwareAcceleration, 
    enableWillChange, 
    reduceMotion, 
    debug,
    optimizePaint
  ]);

  return ref;
}
