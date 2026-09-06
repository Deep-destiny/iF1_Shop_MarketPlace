import { useCallback, useEffect, useState } from 'react';
import { AsyncState, Product } from '../types/marketplace';
import { fetchProductById } from './marketplaceApi';

export function useProductDetail(productId: string) {
  const [state, setState] = useState<AsyncState<Product>>({ status: 'idle' });

  const load = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const product = await fetchProductById(productId);
      if (!product) {
        setState({ status: 'error', message: 'Product not found.' });
        return;
      }
      setState({ status: 'success', data: product });
    } catch {
      setState({
        status: 'error',
        message: 'Something went wrong while loading this product.',
      });
    }
  }, [productId]);

  useEffect(() => {
    load();
  }, [load]);

  return { state, retry: load };
}
