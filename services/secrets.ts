/**
 * Secrets belong in SecureStore / Keychain — never AsyncStorage or prefs plaintext.
 */
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const VISION_KEY = 'extrack_google_vision_api_key';

async function canUseSecureStore(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  try {
    return await SecureStore.isAvailableAsync();
  } catch {
    return false;
  }
}

export async function getVisionApiKey(): Promise<string> {
  if (!(await canUseSecureStore())) return '';
  try {
    return (await SecureStore.getItemAsync(VISION_KEY)) ?? '';
  } catch {
    return '';
  }
}

export async function setVisionApiKey(value: string): Promise<void> {
  if (!(await canUseSecureStore())) return;
  try {
    if (!value) {
      await SecureStore.deleteItemAsync(VISION_KEY);
      return;
    }
    await SecureStore.setItemAsync(VISION_KEY, value, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  } catch {
    // Swallow — caller can fall back to empty key.
  }
}
