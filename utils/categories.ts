export interface Category {
  key: string;
  label: string;
  icon: string;
  color: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { key: 'food',          label: 'Food & Dining',   icon: 'restaurant-outline',         color: '#FF6B6B', emoji: '🍔' },
  { key: 'transport',     label: 'Transport',        icon: 'car-outline',                color: '#4ECDC4', emoji: '🚗' },
  { key: 'bills',         label: 'Bills',            icon: 'receipt-outline',            color: '#45B7D1', emoji: '💡' },
  { key: 'shopping',      label: 'Shopping',         icon: 'bag-outline',                color: '#9B59B6', emoji: '🛍️' },
  { key: 'health',        label: 'Health',           icon: 'heart-outline',              color: '#E74C3C', emoji: '❤️' },
  { key: 'entertainment', label: 'Entertainment',    icon: 'game-controller-outline',    color: '#F39C12', emoji: '🎮' },
  { key: 'education',     label: 'Education',        icon: 'school-outline',             color: '#27AE60', emoji: '📚' },
  { key: 'travel',        label: 'Travel',           icon: 'airplane-outline',           color: '#2980B9', emoji: '✈️' },
  { key: 'fitness',       label: 'Fitness',          icon: 'barbell-outline',            color: '#1ABC9C', emoji: '💪' },
  { key: 'other',         label: 'Other',            icon: 'ellipsis-horizontal-outline', color: '#7F8C8D', emoji: '📦' },
];

export function getCategoryByKey(key: string): Category {
  return CATEGORIES.find(c => c.key === key) ?? CATEGORIES[CATEGORIES.length - 1];
}
