/**
 * Money is stored as integer paise throughout the data layer (see
 * marketplace.ts) to avoid floating-point rounding bugs. These helpers
 * are the only place paise gets converted to a displayed rupee string.
 */

export function formatPaiseToRupees(paise: number): string {
  const rupees = paise / 100;
  return `₹${rupees.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

export function formatEmiLabel(tenureMonths: number): string {
  return `${tenureMonths} month${tenureMonths === 1 ? '' : 's'}`;
}

export function formatDiscount(originalPaise: number, discountedPaise: number): string {
  if (originalPaise <= discountedPaise || originalPaise <= 0) return '0% off';
  const discountPercent = Math.round(((originalPaise - discountedPaise) / originalPaise) * 100);
  return `${discountPercent}% off`;
}

export function formatCompactPrice(paise: number): string {
  const rupees = paise / 100;
  if (rupees >= 100000) {
    return `₹${+(rupees / 100000).toFixed(2)}L`;
  }
  if (rupees >= 1000) {
    return `₹${+(rupees / 1000).toFixed(1)}K`;
  }
  return `₹${rupees}`;
}
