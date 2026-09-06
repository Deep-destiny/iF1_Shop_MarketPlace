import React from 'react';
import { ShopStack } from './navigation/ShopStack';

/**
 * Self-contained wrapper for the Marketplace feature.
 *
 * This component is kept for backward compatibility — the real entry
 * point is now App.tsx, which renders the full 5-tab navigator with
 * its own NavigationContainer. But if anyone wants to test just the
 * Shop flow in isolation, they can render this inside their own
 * NavigationContainer.
 */
export function MarketplaceFeature() {
  return <ShopStack />;
}
