import * as LocalAuthentication from "expo-local-authentication";
import { StorageService } from "./storage";

export const BiometricService = {
  // Check if device has biometric capability
  isBiometricAvailable: async (): Promise<boolean> => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      return compatible;
    } catch (error) {
      console.error("[Biometric] Error checking availability:", error);
      return false;
    }
  },

  // Get available biometric types
  getBiometricTypes: async (): Promise<
    LocalAuthentication.AuthenticationType[]
  > => {
    try {
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      return types;
    } catch (error) {
      console.error("[Biometric] Error getting types:", error);
      return [];
    }
  },

  // Enable biometric authentication
  enableBiometric: async (): Promise<boolean> => {
    try {
      const available = await BiometricService.isBiometricAvailable();
      if (!available) {
        console.warn("[Biometric] Biometric not available");
        return false;
      }

      const authenticated = await LocalAuthentication.authenticateAsync({
        disableDeviceFallback: false,
        promptMessage: "Enable biometric authentication",
        promptDescription: "Use Face ID or fingerprint for quick access.",
      });

      if (authenticated.success) {
        await StorageService.setItem("biometric_enabled", true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("[Biometric] Error enabling:", error);
      return false;
    }
  },

  // Authenticate with biometric
  authenticate: async (): Promise<boolean> => {
    try {
      const enabled = await StorageService.getItem("biometric_enabled", false);
      if (!enabled) {
        console.warn("[Biometric] Biometric not enabled");
        return false;
      }

      const authenticated = await LocalAuthentication.authenticateAsync({
        disableDeviceFallback: false,
        promptMessage: "Unlock Expense Tracker",
        promptDescription: "Authenticate to access your financial data.",
      });

      return authenticated.success;
    } catch (error) {
      console.error("[Biometric] Error authenticating:", error);
      return false;
    }
  },

  // Disable biometric
  disableBiometric: async (): Promise<void> => {
    try {
      await StorageService.removeItem("biometric_enabled");
    } catch (error) {
      console.error("[Biometric] Error disabling:", error);
    }
  },

  // Check if biometric is enabled
  isBiometricEnabled: async (): Promise<boolean> => {
    return (await StorageService.getItem("biometric_enabled", false)) ?? false;
  },
};

export default BiometricService;
