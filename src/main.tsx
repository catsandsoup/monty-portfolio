
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import performance monitoring in development
if (import.meta.env.DEV) {
  import('./lib/performance-monitor').then(({ startPerformanceMonitoring }) => {
    startPerformanceMonitoring();
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
