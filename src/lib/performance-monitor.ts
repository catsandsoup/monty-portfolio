/**
 * Animation Performance Monitor
 * 
 * This utility can be imported to measure animation performance
 * and help diagnose rendering issues.
 */

// Keep track of frames per second
let fps = 0;
let lastTime = performance.now();
let frameCount = 0;

// Track long frames that might cause jank
const longFrames: number[] = [];
const JANK_THRESHOLD = 16.7; // 60fps = ~16.7ms per frame

// Collected performance metrics
interface PerformanceMetrics {
  fps: number;
  jankCount: number;
  avgJankTime: number;
  lastFrameTime: number;
  memoryUsage?: number;
  domNodes?: number;
  eventListeners?: number;
}

// Performance statistics
let metrics: PerformanceMetrics = {
  fps: 0,
  jankCount: 0,
  avgJankTime: 0,
  lastFrameTime: 0
};

// Start monitoring performance
export const startPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Only run in development or when explicitly enabled
  if (import.meta.env.MODE !== 'development' && 
      !localStorage.getItem('enablePerfMonitoring')) {
    return;
  }
  
  console.log('[Performance] Monitoring started');
  
  // Create monitoring UI
  const monitorEl = document.createElement('div');
  monitorEl.style.position = 'fixed';
  monitorEl.style.bottom = '10px';
  monitorEl.style.right = '10px';
  monitorEl.style.backgroundColor = 'rgba(0,0,0,0.7)';
  monitorEl.style.color = 'white';
  monitorEl.style.padding = '8px 12px';
  monitorEl.style.borderRadius = '4px';
  monitorEl.style.fontFamily = 'monospace';
  monitorEl.style.fontSize = '12px';
  monitorEl.style.zIndex = '9999';
  monitorEl.id = 'performance-monitor';
  document.body.appendChild(monitorEl);
  
  // DOM metrics collection
  const collectDomMetrics = () => {
    metrics.domNodes = document.querySelectorAll('*').length;
    
    // Count event listeners (approximate)
    // Since getEventListeners is only available in Chrome DevTools and not as a standard API,
    // we'll skip this functionality or provide an alternative approach
    try {
      // Check if we're in a development environment with DevTools extensions
      if (typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined') {
        // We can't reliably count listeners without the DevTools API,
        // so we'll just count DOM nodes with event attributes as an approximation
        const elementsWithEvents = document.querySelectorAll('[onclick], [onmouseover], [onmouseout], [onkeydown], [onkeyup]');
        metrics.eventListeners = elementsWithEvents.length;
      }
    } catch (e) {
      // Silently fail if we can't count event listeners
      metrics.eventListeners = undefined;
    }
    
    // Get memory usage if available
    if (performance && (performance as any).memory) {
      metrics.memoryUsage = Math.round(
        ((performance as any).memory.usedJSHeapSize / (performance as any).memory.jsHeapSizeLimit) * 100
      );
    }
  };
  
  // Animation frame callback to measure performance
  const tick = () => {
    const now = performance.now();
    frameCount++;
    
    // Track frame time for jank detection
    const frameDuration = now - (metrics.lastFrameTime || now);
    metrics.lastFrameTime = now;
    
    // Detect dropped frames / jank
    if (frameDuration > JANK_THRESHOLD) {
      longFrames.push(frameDuration);
      metrics.jankCount++;
    }
    
    // Calculate FPS every second
    if (now - lastTime >= 1000) {
      metrics.fps = frameCount;
      frameCount = 0;
      lastTime = now;
      
      // Calculate average jank time
      metrics.avgJankTime = longFrames.length ? 
        (longFrames.reduce((a, b) => a + b, 0) / longFrames.length) : 
        0;
      
      // Collect DOM metrics occasionally 
      if (metrics.fps % 2 === 0) {
        collectDomMetrics();
      }
      
      // Update display
      const fpsColor = metrics.fps > 50 ? 'lime' : metrics.fps > 30 ? 'yellow' : 'red';
      
      monitorEl.innerHTML = `
        FPS: <span style="color:${fpsColor}">${metrics.fps}</span> | 
        Jank: ${metrics.jankCount} (${metrics.avgJankTime.toFixed(1)}ms)
        ${metrics.domNodes ? ` | DOM: ${metrics.domNodes}` : ''}
        ${metrics.memoryUsage ? ` | Mem: ${metrics.memoryUsage}%` : ''}
      `;
      
      // Reset jank tracking after reporting
      metrics.jankCount = 0;
      longFrames.length = 0;
    }
    
    requestAnimationFrame(tick);
  };
  
  requestAnimationFrame(tick);
  
  // Add diagnostic API to window
  if (typeof window !== 'undefined') {
    (window as any).__PERFORMANCE_MONITOR = {
      getLongFrames: () => [...longFrames],
      getCurrentFps: () => metrics.fps,
      getMetrics: () => ({...metrics}),
      toggleVisibility: () => {
        monitorEl.style.display = 
          monitorEl.style.display === 'none' ? 'block' : 'none';
      },
      getComponentStats: () => {
        // Collect React component render counts from DevTools
        console.log('[Performance] Getting component stats - open React DevTools profiler for details');
      },
      findJankySections: () => {
        // Attempt to identify problematic sections
        const jankySections = document.querySelectorAll('.motion-safe, [animate], [data-motion]');
        console.log(`[Performance] Found ${jankySections.length} potentially costly animated sections`);
        console.log(jankySections);
        return Array.from(jankySections);
      }
    };
    
    console.log('[Performance] Monitor API available at window.__PERFORMANCE_MONITOR');
  }
  
  return () => {
    // Cleanup function
    if (monitorEl && monitorEl.parentNode) {
      monitorEl.parentNode.removeChild(monitorEl);
    }
  };
};

// Helper function to enable/disable the monitor
export const togglePerformanceMonitor = (enable = true) => {
  if (typeof localStorage !== 'undefined') {
    if (enable) {
      localStorage.setItem('enablePerfMonitoring', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('enablePerfMonitoring');
      const monitorEl = document.getElementById('performance-monitor');
      if (monitorEl && monitorEl.parentNode) {
        monitorEl.parentNode.removeChild(monitorEl);
      }
    }
  }
};

// Detect if running in development mode
export const isDevelopment = import.meta.env.MODE === 'development';

// Export metrics for external use
export const getPerformanceMetrics = () => ({...metrics});

// Export detection utility for high-performance mode
export const shouldUseHighPerformanceMode = () => {
  // Return true if we should optimize for performance
  if (typeof window === 'undefined') return false;
  
  // Detect slow devices
  const isSlowDevice = 
    // Mobile device
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    // Low memory
    ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) ||
    // Few CPU cores
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
  
  return isSlowDevice;
};
