# High-Performance Expense Tracker - Architecture Guide

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install zustand react-native-mmkv react-native-wagmi-charts expo-camera expo-local-authentication
npm install --save-dev @types/react-native-wagmi-charts
```

### 2. Optional UI Framework (Choose One)

#### Option A: Tamagui (Recommended)

```bash
npm install tamagui @tamagui/core @tamagui/config
```

#### Option B: NativeWind (Tailwind CSS)

```bash
npm install nativewind tailwindcss
npx tailwindcss init
```

### 3. Full Dependencies List

```json
{
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/native": "^7.1.8",
    "expo": "~54.0.34",
    "expo-camera": "~15.0.8",
    "expo-local-authentication": "~14.0.8",
    "expo-router": "~6.0.23",
    "expo-sqlite": "~16.0.10",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-mmkv": "^2.10.0",
    "react-native-wagmi-charts": "^1.3.0",
    "zustand": "^4.4.0"
  }
}
```

## 🏗️ Recommended File Structure

```
app/
├── (auth)/
│   ├── login.tsx
│   ├── register.tsx
│   └── biometric-setup.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx (Dashboard - Safe-to-Spend)
│   ├── transactions.tsx
│   ├── analytics.tsx
│   └── settings.tsx
├── scanner/
│   └── receipt-scanner.tsx
├── onboarding.tsx
└── _layout.tsx

components/
├── QuickAddFAB.tsx
├── SpendingForecast.tsx
├── ReceiptScanner.tsx
├── SafeToSpendCard.tsx
├── TransactionItem.tsx
└── BiometricGate.tsx

store/
├── useAppStore.ts (Zustand store)
├── useTransactionStore.ts
├── useBudgetStore.ts
└── types.ts

services/
├── storage.ts (MMKV setup)
├── biometric.ts
├── camera.ts
└── analytics.ts

utils/
├── calculations.ts
├── formatters.ts
├── validators.ts
└── constants.ts
```

## 🔑 Key Concepts

### Safe-to-Spend Logic

```
Safe-to-Spend = (Income - Fixed Expenses - Budget Allocations) / Days Remaining
```

### State Management Flow

```
User Action → Zustand Store → MMKV Persistence → UI Update
```

### Data Encryption

- MMKV encrypts sensitive data by default
- Biometric auth gates transaction viewing

### Performance Optimizations

- React.memo for list items
- useMemo for calculations
- useCallback for handlers
- Native animations (react-native-reanimated)
- MMKV instead of AsyncStorage (10x faster)

## 🔐 Security Implementation

- Biometric authentication (Face ID / Fingerprint)
- MMKV encrypted storage
- Sensitive data never in plain text
- Session-based access control
