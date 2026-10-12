import AsyncStorage from "@react-native-async-storage/async-storage";

// Expo Go cannot load NitroModules-based MMKV. This storage wrapper keeps the
// same app-level API while using AsyncStorage, which works in Expo Go and EAS.
export const StorageService = {
  setItem: async (key: string, value: unknown) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`[Storage] Failed to set ${key}:`, error);
    }
  },

  getItem: async <T>(key: string, defaultValue?: T): Promise<T | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : defaultValue;
    } catch (error) {
      console.error(`[Storage] Failed to get ${key}:`, error);
      return defaultValue;
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`[Storage] Failed to delete ${key}:`, error);
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("[Storage] Failed to clear:", error);
    }
  },

  TRANSACTIONS: "transactions",
  BUDGETS: "budgets",
  INCOME: "income",
  GOALS: "goals",
  USER: "user",
  SESSION: "session",
};

export default StorageService;
