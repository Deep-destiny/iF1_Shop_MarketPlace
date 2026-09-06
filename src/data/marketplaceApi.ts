import { Product } from '../types/marketplace';
import { MOCK_PRODUCTS } from './mockProducts';

/**
 * API service for the 1Fi Marketplace catalog.
 * Provides endpoints for fetching products, variants, and EMI plans.
 */

const SIMULATED_LATENCY_MS = 700;

/** Set to a value > 0 to rehearse the error state during development. */
const SIMULATED_FAILURE_RATE = 0;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function maybeFail(): void {
  if (Math.random() < SIMULATED_FAILURE_RATE) {
    throw new Error('NETWORK_ERROR');
  }
}

export async function fetchProducts(): Promise<Product[]> {
  await delay(SIMULATED_LATENCY_MS);
  maybeFail();
  return MOCK_PRODUCTS;
}

export async function fetchProductById(productId: string): Promise<Product | null> {
  await delay(SIMULATED_LATENCY_MS);
  maybeFail();
  return MOCK_PRODUCTS.find((p) => p.id === productId) ?? null;
}

export async function fetchProductsByCategory(
  category: Product['category']
): Promise<Product[]> {
  await delay(SIMULATED_LATENCY_MS);
  maybeFail();
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

export async function fetchProductsByTag(tag: 'featured' | 'deal' | 'new'): Promise<Product[]> {
  await delay(SIMULATED_LATENCY_MS);
  maybeFail();
  return MOCK_PRODUCTS.filter((p) => p.tags?.includes(tag));
}

export async function searchProducts(query: string): Promise<Product[]> {
  await delay(SIMULATED_LATENCY_MS);
  maybeFail();
  const lowerQuery = query.toLowerCase();
  return MOCK_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery)
  );
}
