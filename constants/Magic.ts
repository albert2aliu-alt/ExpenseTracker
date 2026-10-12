/**
 * Magic Numbers and Constants
 * Centralized location for all hardcoded numeric values used throughout the app
 */

// ────────────────────────────────────────────────────────────────────────────
// Time Constants (in milliseconds)
// ────────────────────────────────────────────────────────────────────────────
export const TIME_CONSTANTS = {
  MS_PER_DAY: 24 * 60 * 60 * 1000,
  MS_PER_HOUR: 60 * 60 * 1000,
  MS_PER_MINUTE: 60 * 1000,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Date/Period Constants
// ────────────────────────────────────────────────────────────────────────────
export const DATE_CONSTANTS = {
  DEFAULT_SAVING_MONTHS: 3,
  WEEKS_PER_MONTH: 4.33,
  LOOKBACK_DAYS: 6,
  COMPARISON_DAYS: {
    WEEK: 7,
    TWO_WEEKS: 14,
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Budget Thresholds
// ────────────────────────────────────────────────────────────────────────────
export const BUDGET_THRESHOLDS = {
  WARNING_THRESHOLD: 0.8, // 80% of budget
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Animation/Timing
// ────────────────────────────────────────────────────────────────────────────
export const ANIMATION_TIMING = {
  TAB_SWITCH_DURATION: 60, // ms
  SPRING_DAMPING: 14,
  SPRING_STIFFNESS: 80,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Font Sizes
// ────────────────────────────────────────────────────────────────────────────
export const FONT_SIZES = {
  HEADLINE: 34,
  SUBTITLE: 24,
  TITLE: 20,
  BODY_LARGE: 17,
  BODY: 15,
  CAPTION: 14,
  LABEL: 13,
  SMALL: 12,
  EXTRA_SMALL: 11,
  TINY: 9,
  MICRO: 8,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Border Radius
// ────────────────────────────────────────────────────────────────────────────
export const BORDER_RADIUS = {
  ROUND_LARGE: 18,
  ROUND_MEDIUM: 15,
  ROUND_DEFAULT: 12,
  ROUND_SMALL: 8,
  ROUND_TINY: 6,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Spacing/Padding
// ────────────────────────────────────────────────────────────────────────────
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
  XXXL: 32,
  PAGE_PADDING: 36,
  HUGE: 40,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Dimensions
// ────────────────────────────────────────────────────────────────────────────
export const DIMENSIONS = {
  ICON_SIZE: 24,
  LARGE_ICON: 40,
  MEDIUM_ICON: 32,
  SMALL_ICON: 20,
  CHART_HEIGHT: 220,
  CARD_WIDTH: 140,
  PROGRESS_HEIGHT: 8,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Opacity Values
// ────────────────────────────────────────────────────────────────────────────
export const OPACITY = {
  DISABLED: 0.5,
  LIGHT: 0.12,
  VERY_LIGHT: 0.15,
  LIGHTER: 0.18,
  MILD: 0.2,
  SUBTLE: 0.25,
  MEDIUM_LIGHT: 0.35,
  HALF: 0.5,
  MEDIUM: 0.55,
  STRONG_MEDIUM: 0.65,
  STRONG: 0.7,
  STRONGER: 0.72,
  VERY_STRONG: 0.8,
  INTENSE: 0.85,
  NEAR_OPAQUE: 0.92,
  ALMOST_OPAQUE: 0.97,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Storage Keys
// ────────────────────────────────────────────────────────────────────────────
export const STORAGE_KEYS = {
  EXPENSE_TRACKER_V1: "@extrack_v1",
} as const;
