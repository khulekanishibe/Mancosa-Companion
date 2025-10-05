/**
 * Theme configuration for MANCOSA Companion
 * Foundation for Issue #10 Dark Mode implementation
 */

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
}

// Light theme configuration
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: 'hsl(239, 84%, 67%)', // Indigo
    secondary: 'hsl(270, 95%, 75%)', // Purple
    accent: 'hsl(280, 85%, 70%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(222.2, 84%, 4.9%)',
    muted: 'hsl(210, 40%, 96.1%)',
    mutedForeground: 'hsl(215.4, 16.3%, 46.9%)',
    border: 'hsl(214.3, 31.8%, 91.4%)',
    input: 'hsl(214.3, 31.8%, 91.4%)',
    ring: 'hsl(239, 84%, 67%)',
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 84%, 60%)',
    info: 'hsl(199, 89%, 48%)',
  },
};

// Dark theme configuration (to be implemented in Issue #10)
export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: 'hsl(239, 84%, 67%)',
    secondary: 'hsl(270, 95%, 75%)',
    accent: 'hsl(280, 85%, 70%)',
    background: 'hsl(222.2, 84%, 4.9%)',
    foreground: 'hsl(210, 40%, 98%)',
    muted: 'hsl(217.2, 32.6%, 17.5%)',
    mutedForeground: 'hsl(215, 20.2%, 65.1%)',
    border: 'hsl(217.2, 32.6%, 17.5%)',
    input: 'hsl(217.2, 32.6%, 17.5%)',
    ring: 'hsl(239, 84%, 67%)',
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 84%, 60%)',
    info: 'hsl(199, 89%, 48%)',
  },
};

// Classification colors
export const classificationColors = {
  FAIL: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-600',
    icon: 'text-red-600',
  },
  PASS: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    icon: 'text-green-600',
  },
  DISTINCTION: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    icon: 'text-purple-600',
  },
  CONDONED_DISTINCTION: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    icon: 'text-blue-600',
  },
  CONDITION_NOT_MET: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    icon: 'text-orange-600',
  },
};

// Default theme
export const defaultTheme = lightTheme;

// Theme utilities
export function applyTheme(theme: Theme): void {
  // To be implemented in Issue #10 Dark Mode
  // This will apply CSS variables to the document root
  console.log(`Theme ${theme.name} selected`);
}

export function getTheme(themeName: string): Theme {
  return themeName === 'dark' ? darkTheme : lightTheme;
}
