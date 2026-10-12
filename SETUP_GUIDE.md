# High-Performance Expense Tracker - Complete Setup

## 🚀 Quick Start

### Step 1: Install Required Dependencies

```bash
# Core state management and storage
npm install zustand react-native-mmkv

# Charts and analytics
npm install react-native-wagmi-charts

# Camera for receipt scanning
npm install expo-camera

# Biometric authentication
npm install expo-local-authentication
```

### Step 2: Integration Steps

#### 2a. Update `_layout.tsx` to use BiometricGate

```tsx
import BiometricGate from "@/components/BiometricGate";

// Wrap your main content
<BiometricGate>{/* Your existing layout */}</BiometricGate>;
```

#### 2b. Replace Dashboard (`index.tsx`)

Copy the code from `components/SafeToSpendCard.tsx`, `components/SpendingForecast.tsx`, and `components/QuickAddFAB.tsx` into your main dashboard.

#### 2c. Enable MMKV Storage

In your store initialization:

```tsx
import StorageService from "@/services/storage";

// All state will now persist automatically
useAppStore.subscribe(
  (state) => state.transactions,
  (transactions) => StorageService.setItem("transactions", transactions),
);
```

### Step 3: Create Scanner Route

Create `app/scanner/receipt-scanner.tsx`:

```tsx
import { ReceiptScanner } from "@/components/ReceiptScanner";
export default ReceiptScanner;
```

---

## 📊 Safe-to-Spend Algorithm

The core logic that powers the dashboard:

```typescript
interface DashboardMetrics {
  totalIncome: number; // Monthly income
  totalExpenses: number; // Spent this month
  safeToSpend: number; // Daily safe amount
  burnRate: number; // Average spending/day
  daysRemaining: number; // Days left in month
}

// Calculation Logic:
const now = new Date();
const daysInMonth = getDaysInMonth();
const daysRemaining = daysInMonth - now.getDate();

// Fixed recurring expenses
const fixedExpenses = transactions
  .filter((t) => t.recurring)
  .sum((t) => t.amount);

// Total budget allocations
const totalBudgets = Object.values(budgets).sum((b) => b.limit);

// Safe-to-Spend per day
safeToSpend = (totalIncome - fixedExpenses - totalBudgets) / daysRemaining;

// Current burn rate
burnRate = totalExpenses / (now.getDate() || 1);

// Projection
projectedTotal = burnRate * daysInMonth;
```

### Status Colors:

- 🟢 **Green (> $100/day)**: Healthy spending
- 🟡 **Yellow ($50-$100/day)**: Moderate warning
- 🔴 **Red (< $50/day)**: Critical warning

---

## 🏗️ File Structure

```
app/
├── (auth)/
│   ├── login.tsx
│   ├── register.tsx
│   └── biometric-setup.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx (Dashboard with Safe-to-Spend)
│   ├── transactions.tsx
│   ├── analytics.tsx
│   └── settings.tsx
├── scanner/
│   └── receipt-scanner.tsx
├── onboarding.tsx
└── _layout.tsx

components/
├── QuickAddFAB.tsx (Floating Action Button)
├── SpendingForecast.tsx (Chart & projections)
├── ReceiptScanner.tsx (Camera + OCR UI)
├── SafeToSpendCard.tsx (Main metric display)
├── BiometricGate.tsx (Face ID / Fingerprint)
├── TransactionItem.tsx
└── Input.tsx

store/
├── useAppStore.ts (Zustand + persistence)
├── useTransactionStore.ts
├── useBudgetStore.ts
└── types.ts (TypeScript interfaces)

services/
├── storage.ts (MMKV setup)
├── biometric.ts (Authentication logic)
├── camera.ts (Camera utilities)
└── analytics.ts (Event tracking)

utils/
├── calculations.ts
├── formatters.ts
├── validators.ts
└── constants.ts
```

---

## 🔒 Security Features

### 1. Biometric Authentication

```tsx
import BiometricService from "@/services/biometric";

// Check if biometric is available
const available = await BiometricService.isBiometricAvailable();

// Authenticate user
const success = await BiometricService.authenticate();
```

### 2. MMKV Encryption

- Automatically encrypts all data at rest
- 256-bit encryption
- Fast access (10x faster than AsyncStorage)

### 3. Session Management

- Automatic timeout after inactivity
- Re-authentication required
- Secure token storage

---

## 📈 Key Features

### Safe-to-Spend Dashboard

- **Real-time metrics** updated as you spend
- **Burn rate prediction** for remaining days
- **Budget compliance** tracking
- **Daily limits** based on income

### Quick-Add FAB

- 3-quick options: Receipt, Card, Cash
- Expandable animation
- One-tap transaction entry
- Smooth interactions

### Spending Forecast

- Line chart showing daily trend
- Projection based on burn rate
- Visual warnings
- Month-end projections

### Receipt Scanner

- Camera integration
- OCR placeholder (integrate with Tesseract.js or AWS)
- Auto-categorization
- Bulk import

### Biometric Security

- Face ID / Fingerprint unlock
- Encrypted storage
- Session-based access
- Configurable timeout

---

## 🎯 Performance Optimization

### 1. Zustand Store

- Minimal re-renders
- Selective subscriptions
- Memoized selectors
- Persist middleware

### 2. MMKV Storage

```tsx
// 10x faster than AsyncStorage
StorageService.setItem("key", value); // Non-blocking
```

### 3. Component Optimization

```tsx
// Memoized expensive components
const SlideItem = React.memo(({ slide }) => {
  // Heavy computation cached
});
```

### 4. Native Animations

- `useNativeDriver: true` where possible
- Gesture-based interactions
- Smooth 60fps animations

---

## 🚀 Deployment Checklist

- [ ] Zustand store configured
- [ ] MMKV persistence enabled
- [ ] Biometric auth integrated
- [ ] Safe-to-Spend dashboard functional
- [ ] QuickAdd FAB working
- [ ] Spending Forecast rendering
- [ ] Receipt Scanner UI ready
- [ ] Tested on iOS and Android
- [ ] Error handling implemented
- [ ] Analytics integrated

---

## 📚 Additional Resources

### Zustand Documentation

- https://github.com/pmndrs/zustand

### MMKV

- https://github.com/mrousavy/react-native-mmkv

### Expo Camera

- https://docs.expo.dev/camera/overview/

### Expo Local Authentication

- https://docs.expo.dev/local-authentication/overview/

---

## 💡 Tips

1. **Test biometric on device**: Simulator doesn't support face/fingerprint
2. **Use MMKV for sensitive data**: Financial information should be encrypted
3. **Add analytics**: Track user spending patterns
4. **Implement cloud sync**: For multi-device support
5. **Add notifications**: Alert user when approaching budget limits

---

## 🆘 Troubleshooting

### Biometric Not Working

```tsx
// Check if device supports it
const supported = await BiometricService.isBiometricAvailable();
if (!supported) {
  console.warn("Device does not support biometric");
}
```

### MMKV Storage Issues

```tsx
// Clear storage if corrupted
StorageService.clear();
// Re-initialize
StorageService.setItem("init", true);
```

### Chart Not Rendering

- Ensure `react-native-wagmi-charts` is properly installed
- Check data format matches expected interface
- Verify colors are valid hex codes

---

Generated: May 7, 2026
Version: 2.0 (High-Performance Architecture)
