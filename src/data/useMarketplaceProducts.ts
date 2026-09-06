import { useCallback, useEffect, useState } from 'react';
import { AsyncState, Product } from '../types/marketplace';
import { fetchProducts } from './marketplaceApi';

/**
 * Owns the loading/success/error state machine for the product list so
 * that MarketplaceScreen itself stays a thin rendering layer. Exposes a
 * `retry` function so the error state's "Try again" CTA has something
 * real to call.
 */
export function useMarketplaceProducts() {
  const [state, setState] = useState<AsyncState<Product[]>>({ status: 'idle' });

  const load = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const products = await fetchProducts();
      setState({ status: 'success', data: products });
    } catch (err) {
      setState({
        status: 'error',
        message:
          err instanceof Error
            ? 'Something went wrong while loading the Marketplace.'
            : 'Unknown error.',
      });
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { state, retry: load };
}
