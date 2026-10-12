// ─── Currency Utility ─────────────────────────────────────────────────────────
// Uses open.er-api.com — FREE, no API key required, updates every 24h.

const BASE_URL = 'https://open.er-api.com/v6/latest';

export interface ExchangeRates {
  base: string;
  rates: Record<string, number>;
  updatedAt: string;
}

/**
 * Fetches live exchange rates based on the given base currency.
 * Returns a map of currency code -> rate relative to base.
 */
export async function fetchExchangeRates(baseCurrency: string): Promise<ExchangeRates> {
  const response = await fetch(`${BASE_URL}/${baseCurrency}`);
  if (!response.ok) {
    throw new Error(`Exchange rate fetch failed: ${response.status}`);
  }
  const data = await response.json();
  if (data.result !== 'success') {
    throw new Error(`Exchange rate API error: ${data['error-type'] ?? 'unknown'}`);
  }
  return {
    base: data.base_code,
    rates: data.rates,
    updatedAt: data.time_last_update_utc,
  };
}

/**
 * Converts an amount from one currency to another using the provided rate map.
 */
export function convertAmount(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) return amount;
  const toRate = rates[toCurrency];
  const fromRate = rates[fromCurrency];
  if (!toRate || !fromRate) return amount;
  // Convert: amount (in fromCurrency) → base → toCurrency
  return (amount / fromRate) * toRate;
}

/**
 * Formats a number with the given currency symbol.
 */
export function formatWithCurrency(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

export const POPULAR_CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY',
  'INR', 'MXN', 'BRL', 'ALL', 'SEK', 'NOK', 'DKK', 'SGD',
  'HKD', 'NZD', 'ZAR', 'AED',
];
