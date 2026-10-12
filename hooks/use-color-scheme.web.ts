import { useThemeContext } from '@/context/ThemeContext';

// Web version — same logic, ThemeContext works on web too
export function useColorScheme() {
  return useThemeContext().resolved;
}
