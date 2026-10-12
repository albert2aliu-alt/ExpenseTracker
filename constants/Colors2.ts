/**
 * Color Palette
 * Centralized palette for all color values used in charts, visualizations, and themes
 */

export const COLOR_PALETTE = {
  // Primary palette
  PRIMARY_PURPLE: "#6C3FEF",
  PRIMARY_BLUE: "#3C82FF",
  PRIMARY_RED: "#FF6B7A",
  PRIMARY_GREEN: "#34C47C",
  PRIMARY_AMBER: "#FFAD0D",
  PRIMARY_TEAL: "#4ECDC4",

  // Secondary palette
  SECONDARY_PURPLE: "#9B59B6",
  SECONDARY_BLUE: "#2980B9",
  SECONDARY_RED: "#E74C3C",
  SECONDARY_GREEN: "#27AE60",
  SECONDARY_TEAL: "#1ABC9C",

  // Neutral
  LIGHT_GRAY: "#F5F5F7",
  MEDIUM_GRAY: "#E8E6F0",
  DARK_GRAY: "#6B7280",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
} as const;

/**
 * Chart color array - for pie charts and multi-series visualizations
 * Exports a consistent color palette for data visualization
 */
export const CHART_COLORS = [
  COLOR_PALETTE.PRIMARY_PURPLE,
  COLOR_PALETTE.PRIMARY_GREEN,
  COLOR_PALETTE.PRIMARY_RED,
  COLOR_PALETTE.PRIMARY_AMBER,
  COLOR_PALETTE.PRIMARY_TEAL,
  COLOR_PALETTE.SECONDARY_PURPLE,
  COLOR_PALETTE.SECONDARY_BLUE,
  COLOR_PALETTE.SECONDARY_RED,
  COLOR_PALETTE.SECONDARY_GREEN,
  COLOR_PALETTE.SECONDARY_TEAL,
] as const;

/**
 * Category color mapping
 * Associates each expense category with a specific color
 */
export const CATEGORY_COLORS: Record<string, string> = {
  food: COLOR_PALETTE.PRIMARY_RED,
  transport: COLOR_PALETTE.PRIMARY_BLUE,
  entertainment: COLOR_PALETTE.PRIMARY_PURPLE,
  utilities: COLOR_PALETTE.PRIMARY_AMBER,
  health: COLOR_PALETTE.PRIMARY_GREEN,
  shopping: COLOR_PALETTE.PRIMARY_TEAL,
  other: COLOR_PALETTE.MEDIUM_GRAY,
} as const;
