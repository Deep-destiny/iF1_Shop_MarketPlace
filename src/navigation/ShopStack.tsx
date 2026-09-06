import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopScreen } from '../screens/ShopScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { colors } from '../theme/tokens';

/**
 * Stack navigator for the Shop tab. Handles navigation between the
 * main Shop page (with the 3-way segment toggle) and the Product
 * Detail screen. This replaces the useState-based local navigation
 * in MarketplaceFeature.tsx with a proper stack, giving us real
 * gesture-based back navigation and animated transitions.
 */

export type ShopStackParamList = {
  ShopMain: undefined;
  ProductDetail: {
    productId: string;
  };
};

const Stack = createNativeStackNavigator<ShopStackParamList>();

export function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="ShopMain" component={ShopScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}
