
// Color System
export const colors = {
  // Primary brand colors
  primary: {
    blue: '#00a5ee', // Main brand blue
    darkBlue: '#0078d4',
    lightBlue: '#61dafb',
  },
  
  // Secondary colors
  secondary: {
    green: '#4CAF50', // Used for NaturaHeal branding
    lightGreen: '#8BC34A',
    teal: '#009688',
  },
  
  // Neutral colors
  neutral: {
    black: '#000000',
    gray900: '#1a1a1a',
    gray800: '#333333',
    gray700: '#4d4d4d',
    gray600: '#666666',
    gray500: '#808080',
    gray400: '#999999',
    gray300: '#cccccc',
    gray200: '#e6e6e6',
    gray100: '#f2f2f2',
    gray50: '#f9f9f9',
    white: '#ffffff',
  },
  
  // Accent colors
  accent: {
    purple: '#9c27b0',
    orange: '#ff9800',
    red: '#f44336',
    yellow: '#ffeb3b',
  },
  
  // Gradient definitions
  gradients: {
    primaryFade: 'from-[#00a5ee]/5 to-white',
    greenFade: 'from-[#4CAF50]/5 to-white',
    grayFade: 'from-gray-50 to-white',
    heroGradient: 'bg-gradient-to-r from-gray-900 to-gray-600',
  },
  
  // UI state colors
  state: {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  },
  
  // Transparency levels
  alpha: {
    5: '0D', // 5% opacity in hex
    10: '1A', // 10% opacity in hex
    20: '33', // 20% opacity in hex
    50: '80', // 50% opacity in hex
    80: 'CC', // 80% opacity in hex
    90: 'E6', // 90% opacity in hex
  },
};

// Typography System
export const typography = {
  // Font families
  fontFamily: {
    display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
    article: '"New York", "Times New Roman", serif',
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Predefined text styles for common elements
  textStyles: {
    heroTitle: {
      fontSize: '4.5rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    sectionTitle: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};

// Spacing System
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Blur effects
export const blur = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
};

// Common border radius values
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Common shadow effects
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

// Common card styles with glassmorphism
export const glassMorphism = {
  light: {
    background: 'bg-white/80',
    border: 'border border-gray-100/30',
    blur: 'backdrop-blur-xl',
  },
  medium: {
    background: 'bg-white/60',
    border: 'border border-gray-100/50',
    blur: 'backdrop-blur-lg',
  },
  dark: {
    background: 'bg-gray-900/80',
    border: 'border border-gray-800/30',
    blur: 'backdrop-blur-xl',
  },
};

// Helper functions to construct complex classes
export const combineClasses = (...classes: string[]) => classes.filter(Boolean).join(' ');
