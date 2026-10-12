export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency,
    minimumFractionDigits: 2, maximumFractionDigits: 2,
  }).format(amount);
}

export function formatShortDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === now.toDateString()) return 'Today';
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function formatMonthLabel(isoKey: string): string {
  const [y, m] = isoKey.split('-');
  const d = new Date(parseInt(y), parseInt(m) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'short' });
}

export function getDaysRemaining(deadline: string): number {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000);
  return Math.max(0, diff);
}

export function getMonthKey(isoString: string): string {
  const d = new Date(isoString);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}
