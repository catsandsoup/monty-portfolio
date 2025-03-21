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

// Start monitoring performance
export const startPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Only run in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && 
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
  
  // Animation frame callback to measure performance
  const tick = () => {
    const now = performance.now();
    frameCount++;
    
    // Calculate FPS every second
    if (now - lastTime >= 1000) {
      fps = frameCount;
      frameCount = 0;
      lastTime = now;
      
      // Update display
      const fpsColor = fps > 50 ? 'lime' : fps > 30 ? 'yellow' : 'red';
      const longFramesCount = longFrames.length;
      const avgJank = longFrames.length ? 
        (longFrames.reduce((a, b) => a + b, 0) / longFrames.length).toFixed(1) : 
        '0';
      
      monitorEl.innerHTML = `
        FPS: <span style="color:${fpsColor}">${fps}</span> | 
        Jank: ${longFramesCount} (${avgJank}ms)
      `;
      
      // Reset long frames after reporting
      longFrames.length = 0;
    }
    
    // Measure this frame's duration
    const frameDuration = performance.now() - now;
    if (frameDuration > JANK_THRESHOLD) {
      longFrames.push(frameDuration);
      console.warn(`[Performance] Long frame detected: ${frameDuration.toFixed(1)}ms`);
    }
    
    requestAnimationFrame(tick);
  };
  
  requestAnimationFrame(tick);
  
  // Add diagnostic API to window
  if (typeof window !== 'undefined') {
    (window as any).__PERFORMANCE_MONITOR = {
      getLongFrames: () => [...longFrames],
      getCurrentFps: () => fps,
      toggleVisibility: () => {
        monitorEl.style.display = 
          monitorEl.style.display === 'none' ? 'block' : 'none';
      },
      getComponentStats: () => {
        // Collect React component render counts from DevTools
        console.log('[Performance] Getting component stats - open React DevTools profiler for details');
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

// Add monitor to main.tsx
if (typeof window !== 'undefined' && 
    (process.env.NODE_ENV === 'development' || 
     localStorage.getItem('enablePerfMonitoring'))) {
  startPerformanceMonitoring();
}
