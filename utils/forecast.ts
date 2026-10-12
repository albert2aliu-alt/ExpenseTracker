// Utility for financial projection calculations

export interface ProjectionPoint {
  month: number;
  balance: number;
}

export function calcProjection(
  initial: number,
  monthly: number,
  annualRatePercent: number,
  years: number,
): ProjectionPoint[] {
  const months = years * 12;
  const monthlyRate = annualRatePercent / 100 / 12;
  let balance = initial;
  const data: ProjectionPoint[] = [];
  for (let i = 1; i <= months; i++) {
    balance = balance * (1 + monthlyRate) + monthly;
    data.push({ month: i, balance });
  }
  return data;
}
