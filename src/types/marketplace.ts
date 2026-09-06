/**
 * Domain models for the 1Fi Marketplace product catalog and checkout flows.
 */

export type ProductCategory =
  | 'electronics'
  | 'travel'
  | 'auto'
  | 'home'
  | 'fashion';

/** A single purchasable variant of a product (e.g. storage size, color). */
export interface ProductVariant {
  id: string;
  label: string; // e.g. "256GB · Titanium Black"
  priceInPaise: number; // store money as integer paise/cents — avoids float bugs
  inStock: boolean;
}

/** A no-cost-EMI plan a user can select for a given price point. */
export interface EmiPlan {
  id: string;
  tenureMonths: number;
  monthlyAmountInPaise: number;
  isNoCost: boolean; // 1Fi's whole pitch is 0% interest; keep this explicit
  processingFeeInPaise: number; // 0 for true no-cost plans, per "Zero charges"
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  imageUrl: string;
  shortDescription: string;
  basePriceInPaise: number; // price of the default/first variant, for list display
  variants: ProductVariant[];
  emiPlans: EmiPlan[];
  rating?: number; // optional — not every product needs one
  reviewCount?: number;
  tags?: ('featured' | 'deal' | 'new')[];
  specs?: Record<string, string>;
  images?: string[];
}

/**
 * Discriminated union for async list state. Every screen that fetches
 * Marketplace data renders one of these explicitly — this is what makes
 * loading/error states real rather than an afterthought.
 */
export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: T };
